技术团队前端Javascript框架
===

###框架目录结构

<table>
<tr>
<td>目录</td>
<td>说明</td>
</tr>

<tr>
<td>base</td>
<td>框架的基础目录，主要提供工具类的函数或对象，可以单独使用</td>
</tr>

<tr>
<td>debug</td>
<td>debug对象</td>
</tr>

<tr>
<td>focus</td>
<td>focus对象</td>
</tr>

<tr>
<td>focusUI</td>
<td>focusUI的封装，依赖不明</td>
</tr>

<tr>
<td>player</td>
<td>player对象，提供对最底层播放器的简化和封装</td>
</tr>

<tr>
<td>playerUI</td>
<td>playerUI的封装，依赖不明</td>
</tr>

<tr>
<td>storage</td>
<td>storage对象，对离线存储的封装</td>
</tr>
</table>



###框架开发规范
框架对外暴露的对象只有一个，那就是bjf。

每个子模块都是bjf下面的一个子对象。

子模块可以单独使用，尽量减少对其他子模块的依赖。

子模块的文件名应该为bjf.xxx.js

子模块的所有文件，包括demo，css，以及image，都在其所属的文件夹内，不应放在外层文件夹。

###子模块开发注意事项

不侵入页面js作用域的原则，子模块中不能产生全局变量，建议子模块的所有代码，做如下封装：

    (function (w_) {
	    ...
	})(window);

由于各个子模块可以单独使用，所以一般不知道bjf有没有重复定义。所以在子模块的js文件开头，应该要判断bjf是否有定义。比如player子模块如下所示：

	(function (w_) {
	    if (undefined == w_.bjf) {
	        w_.bjf = {};
	    }
	    else if (undefined != w_.bjf.player) {
	        return;
	    }
	})(window);
    

###代码发布标记注释
每个子模块代码中，会有一对"发布标记"注释，在发布时，用来去除注释以外的冗余代码。

所以此注释不能修改和删除。

注释的格式为：

	(function (w_) {
	    if (undefined == w_.bjf) {
	        w_.bjf = {};
	    }
	    else if (undefined != w_.bjf.player) {
	        return;
	    }
        //以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
        //--------------------BuildTagStart------------------
        ...
        {核心代码}
        ...
        //以下一行是自动打包脚本识别的特殊tag注释，勿改勿删
        //--------------------BuildTagEnd------------------
	})(window);
    