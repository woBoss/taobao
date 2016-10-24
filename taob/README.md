# mobile
my first mobile repository

## 在远程git服务器上创建一个代码仓库

1. 点击repositories选项卡
2. 点击右侧的new按钮
3. 输入该代码仓库的基本信息
4. 完成创建

## 将此代码仓库克隆至本地

在git shell命令行中使用`git clone "代码仓库的地址"(即代码仓库的url.git)`克隆至本地，默认是克隆至命令行当前所在的文件夹中

## 作为npm项目初始化

cd进入当前项目，然后在cmd命令行中使用`npm init`，根据提示步骤一步一步完成package.json的创建，其中git repository选项的值就应该为当前项目的git仓库地址

## 创建node_modules文件夹

后续通过npm install的依赖将会自动安装到这个文件夹中

## 配置产品环境以及开发环境的文件架构

## 创建并编辑.gitignore文件

忽略一些不必要提交到代码仓库中的开发环境代码等，比如*node_modules*文件夹以及开发环境文件夹*develop*是不需要提交至代码仓库中，则可以将这两个文件夹名称分行添加至.gitignore中

## 安装并使用构建工具gulp

1. `npm install gulp --save-dev`通过npm安装gulp构建工具，并且添加为开发环境的依赖
2. 创建gulpfile.js文件至项目根目录，仿照gulp所在的github仓库提供的REAME.md进行编辑图片压缩，js压缩以及stylus编译并压缩和监听文件变化的任务
3. `npm install 开发模块名称 --save-dev`安装gulpfile.js中所需要的开发模块的依赖
4. \*`npm install gulp -g`如果本机已经全局安装过gulp作为软件，则不需再次全局安装gulp使之成为一个可被cmd命令行执行的软件
5. cmd命令行执行gulp

## 将本地初始化好的整个项目通过git推送至远程代码仓库

1. 打开git shell命令行
2. `git add *`将项目中的所有未被.gitignore的文件添加至即将上传至本地仓库的缓冲区
3. `git status`查看缓冲区的即将被上传的文件
4. \*`git reset`如果发现`git add`操作添加有误，可以使用此命令回退
5. `git commit -m "this is my first mobile project"`提交代码至本地并且必须书写注释
6. \*`git pull`如果远程代码仓库进行了修改，才需要将远程代码仓库中修改的内容同步拉取至本地代码仓库
7. `git push`提交代码至远程代码仓库