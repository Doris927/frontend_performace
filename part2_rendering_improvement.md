# 渲染过程
- HTML
  - 构建dom对象
  - HTML->DOM
- CSS
  - 构建CSSOM对象
  - CSS->CSSSOM
- DOM + CSSOM -> 构造出渲染树
- 关键渲染路径
  - JS: 触发页面视觉变化
  - style: 重新计算样式
  - layout：布局
  - paint：绘制
  - composite：合成

# 布局和绘制
## 布局和渲染
- 渲染树只包含网页所需的节点
- 布局计算每个节点精确的位置和大小（盒模型）
- 绘制是像素化每个节点的过程

## 影响回流（布局）的操作
- 添加/删除元素
- 操作styles
- display：none
- 移动元素位置
- offsetLeft，srcollTop，clientWidth
- 修改浏览器大小，字体大小

## 避免layout thrashing
- 避免回流
- 读写分离

# Fastdom防止布局抖动
- 读写分离

# 复合(composite)和图层
- 将页面拆分图层进行绘制再进行复合
- 利用Dev Tools了解网页的图层拆分情况
  - 浏览器决定的（元素和元素之前的影响）
  - 主动提取成一个涂层
- 哪些样式仅影响复合
  - Position
  - Scale
  - Rotation
  - Opacity

# 减少重绘（paint）
- willChange: 'transform'
  - 主动提取成一个涂层

# 高频事件处理函数 防抖
- 一帧里要处理多次
- RequestAnimationFrame（rAF）：布局和绘制之前的
- debounce

# React时间调度实现
- requestIdleCallBack
- 通过rAF模拟rIC


