> ## 2019/10/17

**题目：** 12、IFC与BFC

**解析：** 

#### FC（Formatting Context）

它是W3C CSS2.1规范中的一个概念，定义的是页面中的一块渲染区域，并且有一套渲染规则，它**决定了其子元素将如何定位**，以及**和其他元素的关系和相互作用**。

常见的`Formatting Context` 有：`Block Formatting Context`（BFC | 块级格式化上下文） 和 `Inline Formatting Context`（IFC |行内格式化上下文）。

下面就来介绍IFC和BFC的布局规则。



### IFC布局规则

> 在行内格式化上下文中，框(boxes)一个接一个地水平排列，起点是包含块的顶部。水平方向上的 `margin`，`border` 和 `padding`在框之间得到保留。框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐。包含那些框的长方形区域，会形成一行，叫做行框。



### BFC布局规则

> 1. 内部的Box会在垂直方向，一个接一个地放置。
> 2. Box垂直方向的距离由`margin`决定。属于同一个BFC的两个相邻Box的`margin`会发生重叠
> 3. 每个元素的左外边缘（`margin-left`)， 与包含块的左边（`contain box left`）相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。除非这个元素自己形成了一个新的BFC。
> 4. BFC的区域不会与`float box`重叠。
> 5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
> 6. 计算BFC的高度时，浮动元素也参与计算