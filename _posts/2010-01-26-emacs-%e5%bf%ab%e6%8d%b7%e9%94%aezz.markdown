---
layout: post
status: publish
published: true
title: Emacs 快捷键zz
author:
  display_name: 北漂IT民工
  login: admin
  email: calidion@gmail.com
  url: ''
author_login: admin
author_email: calidion@gmail.com
wordpress_id: 170
wordpress_url: http://www.3gcnbeta.com/wordpress/?p=170
date: !binary |-
  MjAxMC0wMS0yNiAxNjozNjo0NiArMDgwMA==
date_gmt: !binary |-
  MjAxMC0wMS0yNiAwODozNjo0NiArMDgwMA==
categories:
- 编程技术
tags:
- Emacs
comments: []
---
<p>[符号]<br />
--------------------------------------<br />
C-                    意思是按住 Ctrol 键<br />
M-                    意指 Meta 键 (键盘上若无Meta 键，则可以ALT 或 ESC 键来取而代之)<br />
DEL                   意指退格键 (不是 删除(Delete) key)<br />
RET                   意指回车键<br />
SPC                   意指空格键<br />
ESC                   意指Escape键<br />
TAB                   意指Tab键</p>
<p>像 "C-M-" (or "M-C") 这样连在一起的意味着同时按住 Control 和 Meta 键不放.</p>
<p>[进入Emacs]<br />
----------------------------------------<br />
emacs                 要进入GNU Emacs，只需键入它的名字<br />
C-z                   挂起Emacs：<br />
C-x C-c               永久离开Emacs                      </p>
<p>[用方向键]<br />
---------------------------------------</p>
<p>        上一行 C-p (Prev line)<br />
                .<br />
                .<br />
                .<br />
向左移 C-b .... 。.... 向右移 C-f (Forward character)<br />
(Backward )   .<br />
                .<br />
                .<br />
        下一行 C-n (Next line)</p>
<p>[文件]<br />
----------------------------------------<br />
C-x C-f                读取文件到Emacs<br />
C-x r                  只读的方式打开一个文件<br />
C-x C-q                清除一个窗口的只读属性<br />
C-x C-s                保存文件到磁盘<br />
C-x s                  保存所有文件<br />
C-x i                  插入其它文件的内容到当前缓冲<br />
C-x C-v                用将要读取的文件替换当前文件<br />
C-x C-w                将当前缓冲写入指定的文件<br />
C-x C-q                Version control checkin&#47;checkout              </p>
<p>[错误恢复]<br />
---------------------------------------<br />
C-g                    取消当前要执行的命令<br />
M-x recover-file       恢复系统崩溃后丢失的文件<br />
C-x u或C-_             撤销更新<br />
M-x revert-buffer      使缓冲回复到初始内容<br />
C-l                    Redraw garbaged screen                </p>
<p>[增量查找]<br />
---------------------------------------<br />
C-s                    向前查找<br />
C-r                    向后查找<br />
C-M-s                  规则表达式查找<br />
C-M-r                  反向规则表达式查找<br />
M-p                    选择前一个查找字符串<br />
M-n                    选择下一个查找字符串<br />
RET                    退出增量查找<br />
DEL(Backspace)         取消上一个字符的作用<br />
C-g                    退出当前查找模式<br />
                       可重复使用C-s和C-r来改变查找方向</p>
<p>[替换]<br />
---------------------------------------<br />
M-%                    交互式地替换一个文本串<br />
M-x replace-regexp     交互式地替换一个规则表达式<br />
SPE                    替换当前的并移动到下一处<br />
,                      替换当前的但不移动到下一处<br />
L(Backspace)           不替换当前的并移动到下一处<br />
!                      替换所有剩下的符合条件的文本<br />
RET                    退出替换模式<br />
C-r                    进入递归的编辑模式<br />
C-M-c                  退出递归的编辑模式                    </p>
<p>[光标移动]<br />
---------------------------------------<br />
C-f                    向前一个字符<br />
C-b                    向后一个字符<br />
M-f                    向前一个字<br />
M-b                    向后一个字<br />
C-p                    向上一行<br />
C-n                    向下一行<br />
C-a                    到行首<br />
C-e                    到行尾<br />
M-a                    到句首<br />
M-e                    到句尾<br />
M-{                    到段首<br />
M-}                    到段尾<br />
C-x [                  到页首<br />
C-x ]                  到页尾<br />
C-M-f                  到表达式首部<br />
C-M-b                  到表达式尾部<br />
M-<                    到缓冲首部<br />
M->                    到缓冲尾部<br />
C-v                    滚动到下一屏<br />
M-v                    滚动到上一屏<br />
C-x <                  滚动到右边一屏（内容向左移动）<br />
C-x >                  滚动到左边一屏（内容向右移动）<br />
C-u C-l                滚动当前行到屏幕中央</p>
<p>C-M-n                  移到结尾的)、}或]<br />
C-M-p                  移到开始的)、}或]<br />
C-M-u                  向上移到父结构开始<br />
C-M-d                  向下移到父结构开始</p>
<p>[复制、粘贴、剪切、删除]<br />
-----------------------------<br />
C-d                    向前delete字符<br />
DEL(Backspace)         向后delete字符<br />
M-d                    向前delete到字首<br />
M-DEL(Backspace)       向后delete到字尾<br />
M-0 C-k                向前delete到行首<br />
C-k                    向后delete到行尾<br />
C-x DEL(Backspace)     向前delete到句首<br />
M-k                    向后delete到句尾<br />
M-- C-M-k              向前delete到表达式首部<br />
C-M-k                  向后delete到表达式尾部<br />
C-w                    Kill区域<br />
M-w                    拷贝区域到Kill Ring<br />
M-z <char>             Kill到下一个给定字符出现的位置<br />
C-y                    拉回（yank）上次kill的内容<br />
M-y                    用更早kill的内容取代拉回的上次kill的内容    </p>
<p>[标记Marking]<br />
-----------------------------<br />
C-SPC或C-@             标记当前位置<br />
C-x C-x                以字符为单位使用移动命令动态标记区域<br />
M-@                    以字为单位使用移动命令动态标记区域<br />
M-h                    标记一段<br />
C-x C-p                标记一页<br />
C-M-@                  标记一个表达式<br />
C-M-h                  标记一个函数<br />
C-x h                  标记整个缓冲区                      </p>
<p>[寄存器]<br />
-----------------------------<br />
C-x r s                存储区域到寄存器<br />
C-x r i                插入矩形内容到缓冲<br />
C-x r SPC <num>        存储光标位置到寄存器<br />
C-x r j <num>         跳跃到寄存器中存储的光标位置           </p>
<p>[矩形]<br />
-----------------------------<br />
C-x r r                拷贝一个矩形到寄存器<br />
C-x r k                Kill矩形<br />
C-x r y                拉回矩形<br />
C-x r o                打开一个矩形, 将文本移动至右边<br />
C-x r c                清空矩形<br />
C-x r t                为矩形中每一行加上一个字符串前缀<br />
C-x r i r              从r缓冲区内插入一个矩形          </p>
<p>[标记Tags]<br />
-----------------------------<br />
M-.                    查找标记<br />
C-u M-.                查找标记下一次出现的位置<br />
M-x visit-tags-table   指定一个新的标记文件<br />
M-x tags-search        Regexp search on all files in tabs table<br />
M-x tags-query-replace 在所有文件中执行查询-替换<br />
M-,                    继续进行上一次标记查找或查询-替换          </p>
<p>[窗口与缓冲]<br />
-----------------------------<br />
C-x 1                  删除所有其它窗口</p>
<p>C-x 5 2<br />
C-x 2                  上下分割当前窗口</p>
<p>C-x 3                  左右分割当前窗口</p>
<p>C-x 5 0<br />
C-x 0                  删除当前窗口 </p>
<p>C-M-v                  滚动其它窗口<br />
C-x o                  切换光标到另一个窗口<br />
C-x 4 b C-x 5 b        选择另一个窗口中的缓冲</p>
<p>C-x 5 C-o<br />
C-x 4 C-o              显示另一个窗口中的缓冲</p>
<p>C-x 5 f<br />
C-x 4 f                在另一窗口中查找并打开文件              </p>
<p>C-x 5 r<br />
C-x 4 r                在另一窗口中以只读方式打开文件            </p>
<p>C-x 5 d<br />
C-x 4 d                在另一窗口中运行dired命令 </p>
<p>C-x 5 .<br />
C-x 4 .                在另一窗口中查找tag</p>
<p>C-x ^                  增加窗口高度<br />
C-x {                  减小窗口宽度<br />
C-x }                  增加窗口宽度                        </p>
<p>C-x b                  选择另一个缓冲<br />
C-x C-b                列出所有的缓冲<br />
C-x k                  Kill一个缓冲                        </p>
<p>[分栏编辑]<br />
C-x 6                 2C-command<br />
C-x 6 s                  2C-split<br />
C-x 6 b    2             C-associate-buffer<br />
C-x 6 2    2             C-two-columns</p>
<p>[格式]<br />
-----------------------------<br />
TAB                    缩进当前行（与模式相关）<br />
C-M-                  缩进区域（与模式相关）<br />
C-M-q                  缩进表达式（与模式相关）<br />
C-x TAB                Indent region rigidly arg. Columns<br />
C-o                    在光标后插入一个新的行<br />
C-M-o                  静态地将一行下移<br />
C-x C-o                删除光标附近的空行（留下一行）<br />
M-^                    与上一行合并成一行<br />
M-                     删除光标附近的所有空格<br />
M-SPC                  删除光标附近的空格（留下一格）<br />
M-q                    Fill paragraph<br />
C-x f                  Set fill column<br />
C-x .                  设置每一行开始的前缀<br />
M-g                    设置字体   </p>
