#!/usr/bin/env python
# coding=utf-8
import sys
import os
import time

#文件生成路径
target_path = sys.argv[1]
#当前服务器路径
dir_path = sys.path[0] + '/../bjf'
#bjf版本号
version = ''
with open(sys.path[0] + '/../version', 'r') as f:
    version = f.read().strip()[4:]
print('version=' + version)

regularModule = ['base', 'debug', 'storage', 'remoter', 'focus', 'focusUI', 'player']
extraModule = ['playerUI']

bjf_str = "(function (w_){\n"
try:
    #基础版本代码合并
    for module in regularModule:
        path  = dir_path + '/' + module + '/' + module + '.js'
        jsFile = open(path, mode='r')
        print('正在合并' + module + '模块代码')
        jsLine = jsFile.readline()
        startFlag = 0
        endFlag = 0
        while jsLine:
            ##print(jsLine)
            if '//--------------------BuildTagEnd------------------' == jsLine.strip():
                endFlag = 1
                break
            elif '//--------------------BuildTagStart------------------' == jsLine.strip():
                startFlag = 1
            elif 1 == startFlag:
                bjf_str += jsLine
            jsLine = jsFile.readline()
        if 1 != startFlag:
            raise Exception('模块' + module + '没有找到开始标记')
        if 1 != endFlag:
            raise Exception('模块' + module + '没有找到结束标记')
    #基础版本代码打包
    bjf_base_str = bjf_str + ';bjf.version="' + version + '";}(window));'
    bjf_base_dir = target_path + '/bjf.' + version
    bjf_base_file = open(bjf_base_dir + '.js','w+')
    print('正在生成基础版本文件')
    bjf_base_file.write(bjf_base_str)
    print('正在压缩基础版本文件')
    #os.system('java -jar ' + sys.path[0] + '/yuicompressor-2.4.8.jar ' + bjf_base_dir + '.js' + ' -o ' + bjf_base_dir + '.min.js')
    output0 = os.popen('java -jar ' + sys.path[0] + '/yuicompressor-2.4.8.jar ' + bjf_base_dir + '.js' + ' -o ' + bjf_base_dir + '.min.js')
    bjf_base_file.close()
    #全量版本代码合并
    for module in extraModule:
        path  = dir_path + '/' + module + '/' + module + '.js'
        jsFile = open(path, mode='r')
        print('正在合并' + module + '模块代码')
        jsLine = jsFile.readline()
        startFlag = 0
        endFlag = 0
        while jsLine:
            if '//--------------------BuildTagEnd------------------' == jsLine.strip():
                endFlag = 1
                break
            elif '//--------------------BuildTagStart------------------' == jsLine.strip():
                startFlag = 1
            elif 1 == startFlag:
                bjf_str += jsLine
            jsLine = jsFile.readline()
        if 1 != startFlag:
            raise Exception('模块' + module + '没有找到开始标记')
        if 1 != endFlag:
            raise Exception('模块' + module + '没有找到结束标记')
    #全量版本代码打包
    bjf_full_str = bjf_str + ';bjf.version="' + version + '";}(window));'
    bjf_full_dir = target_path + '/bjf.' + version
    bjf_full_file = open(bjf_full_dir + '.full.js','w+')
    print('正在生成全量版本文件')
    bjf_full_file.write(bjf_full_str)
    print('正在压缩全量版本文件')
    #os.system('java -jar ' + sys.path[0] + '/yuicompressor-2.4.8.jar ' + bjf_full_dir + '.full.js' + ' -o ' + bjf_full_dir + '.full.min.js')
    output1 = os.popen('java -jar ' + sys.path[0] + '/yuicompressor-2.4.8.jar ' + bjf_full_dir + '.full.js' + ' -o ' + bjf_full_dir + '.full.min.js')
    bjf_full_file.close()

    #开始复制播控皮肤
    os.system('cp -R ' + dir_path + '/playerUI/images ' + target_path + '/images')
    #打包全量js文件和播控图片 
    os.chdir(target_path)

    time.sleep(1)
    os.system('zip -r -y bjf.' + version + '.full.zip bjf.' + version + '.full.min.js images')
    #output2 = os.popen('zip -r bjf.' + version + '.full.zip bjf.' + version + '.full.min.js images')
    #删除播控皮肤图片包
    os.system('rm -rf images')
except IOError:
    print('没有找到文件或读取文件失败')