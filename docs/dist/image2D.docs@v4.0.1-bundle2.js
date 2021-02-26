(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{29:function(a,d,t){"use strict";var i=t(4),r=t.n(i);d.a=function(a,d){r()("."+a).attr("active","no"),r()("."+a+"."+d).attr("active","yes")}},30:function(a,d,t){"use strict";var i=t(4),r=t.n(i);d.a=function(a,d){d=d||0,a=a||document.documentElement;var t=function(){var a=window.location.href.split("?")[1]||"";if(""==a)return{};var d=a.split("&"),t={};return d.forEach((function(a){var d=a.split("=");t[d[0]]=d[1]})),t}().fixed;if(t){var i=r()("#fixed-"+t);if(i.length>0){var c=i[0].offsetTop-d,s=a.scrollTop||0;r.a.animation((function(d){a.scrollTop=(c-s)*d+s}),500,(function(){a.scrollTop=c}))}}else a.scrollTop=0}},45:function(a,d,t){var i=t(46);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,t(2).default)("data-icrush-fd16868a",i,!0)},46:function(a,d,t){d=a.exports=t(1)(!1);var i=t(6)(t(47));d.push([a.i,".layout-tree_design{background-image:url("+i+");height:3.2rem;background-repeat:no-repeat;background-position:left center;background-size:auto 100%}\n",""])},47:function(a,d,t){a.exports=t.p+"dist/layout-tree_design.png"},77:function(a,d,t){"use strict";t.r(d);var i=t(29),r=t(30),c={created:function(){Object(i.a)("menu-2","calculate")},mounted:function(){prettyPrint(),Object(r.a)()}};t(45);c.render=function(a){return a("div",{class:"api-view","data-icrush-fd16868a":""},[a("p",{"data-icrush-fd16868a":""},["绘图的时候难免要进行一些比较复杂的计算，这里根据使用场景不同，提供了几种常见的辅助计算。"]),a("h2",{id:"fixed-dot","data-icrush-fd16868a":""},["二维坐标变换"]),a("p",{"data-icrush-fd16868a":""},["简单坐标变换分为二类：独立的变换和变换对象dot。"]),a("h4",{"data-icrush-fd16868a":""},["独立的变换"]),a("p",{"data-icrush-fd16868a":""},["点（x,y）围绕中心（cx,cy）旋转deg度："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["$$.rotate(cx, cy, deg, x, y);"])]),a("p",{"data-icrush-fd16868a":""},["点（x,y）沿着向量（ax,ay）方向移动距离d："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["$$.move(ax, ay, d, x, y);"])]),a("p",{"data-icrush-fd16868a":""},["点（x,y）围绕中心（cx,cy）缩放times倍："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["$$.scale(cx, cy, times, x, y);"])]),a("h4",{"data-icrush-fd16868a":""},["变换对象"]),a("p",{"data-icrush-fd16868a":""},["dot表示一个会移动的二维点，内部维护着「前进方向向量」、「当前位置」和「中心坐标」。首先，我们来看看如何获取一个dot实例："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var dot=$$.dot({↵    // 前进方向、中心坐标和当前位置（都可选，下列是缺省值）↵    d: [1, 1],c: [0, 0],p: [0, 0]↵});"])]),a("p",{"data-icrush-fd16868a":""},["下列是一些变换方法，通过这些方法可以控制点dot的坐标改变或获取当前坐标。"]),a("p",{"data-icrush-fd16868a":""},["前进方向以当前位置为中心，旋转deg度（注意，改变的是前进方向，不是当前坐标）："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["dot.rotate(deg);"])]),a("p",{"data-icrush-fd16868a":""},["沿着当前前进方向前进d："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["dot.move(d);"])]),a("p",{"data-icrush-fd16868a":""},["围绕中心坐标缩放："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["dot.scale(times);"])]),a("p",{"data-icrush-fd16868a":""},["返回当前位置："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var p=dot.value();"])]),a("h2",{id:"fixed-matrix4","data-icrush-fd16868a":""},["矩阵坐标变换"]),a("p",{"data-icrush-fd16868a":""},["Matrix4是一个列主序存储的4x4矩阵，使用该矩阵对象的第一步是像下面这样获取该对象，参数initMatrix4可选，你可以传递一个初始化矩阵或默认采用单位矩阵E初始化。"]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var matrix4=$$.Matrix4(initMatrix4);"])]),a("p",{"data-icrush-fd16868a":""},["和前面的二维坐标变换不同的是，变换不是直接作用在具体的点上，而是先求解出一系列变换的变换矩阵，最后应用在具体点上。"]),a("h4",{"data-icrush-fd16868a":""},["基本运算"]),a("p",{"data-icrush-fd16868a":""},["返回matrix4当前记录的内部矩阵："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var val=matrix4.value();"])]),a("p",{"data-icrush-fd16868a":""},["比如采用默认值初始化的矩阵对象，打印结果如下："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["(16) [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]"])]),a("p",{"data-icrush-fd16868a":""},["二个矩阵相乘："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["matrix4.multiply(newMatrix4[, flag]);"])]),a("p",{"data-icrush-fd16868a":""},["第一个参数应该是一个和value打印出来一样格式的一维数组，列主序存储。flag默认false，可不传，表示左乘，即newMatrix4 × matrix4，如果设置flag为true，表示右乘。"]),a("p",{"data-icrush-fd16868a":""},["把变换矩阵作用在具体的点上："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var position=matrix4.use(x, y, z, w);"])]),a("p",{"data-icrush-fd16868a":""},["矩阵的目的是对坐标进行变换，use方法返回齐次坐标(x, y, z, w)经过matrix4矩阵变换后的坐标值。其中z和w可以不传递，默认0和1，返回的坐标值是一个齐次坐标。"]),a("h4",{"data-icrush-fd16868a":""},["坐标变换"]),a("p",{"data-icrush-fd16868a":""},["沿着向量(a, b, c)方向移动距离dis（其中c可以不传，默认0）："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["matrix4.move(dis, a, b, c);"])]),a("p",{"data-icrush-fd16868a":""},["以点(cx, cy, cz)为中心，分别在x、y和z方向上缩放xTimes、yTimes和zTimes倍（其中cx、cy和cz都可以不传递，默认0）："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["matrix4.scale(xTimes, yTimes, zTimes, cx, cy, cz);"])]),a("p",{"data-icrush-fd16868a":""},["围绕射线(a1, b1, c1) -> (a2, b2, c2)旋转deg度（方向由右手法则确定）："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["matrix4.rotate(deg, a1, b1, c1, a2, b2, c2);"])]),a("p",{"data-icrush-fd16868a":""},["a1、b1、c1、a2、b2和c2这6个值在设置的时候，不是一定需要全部设置，还有以下可选："]),a("ul",{"data-icrush-fd16868a":""},[a("li",{"data-icrush-fd16868a":""},["只设置了a1和b1，表示在xoy平面围绕（a1, b1）旋转。"]),a("li",{"data-icrush-fd16868a":""},["只设置三个点(设置不足六个点都认为只设置了三个点)，表示围绕从原点出发的射线旋转。"])]),a("h2",{id:"fixed-interpolation","data-icrush-fd16868a":""},["曲线插值"]),a("p",{"data-icrush-fd16868a":""},["给定若干个不连续的点，在这些点之间插入足够的点，来使得这些点连接起来是一个平滑的曲线。求解在何处插入新的点就是这里需要解决的问题。"]),a("h4",{"data-icrush-fd16868a":""},["Cardinal"]),a("p",{"data-icrush-fd16868a":""},["用一个N次多项式函数求解出若干个点的插值函数是一个可行的方法，不过在一次插值中，当插值点数量增加的时候，N越来越大，很容易带来收敛困难，也就是Runge现象。"]),a("p",{"data-icrush-fd16868a":""},["因此在这里，我们内部选择三次插值Hermite法（N=3）。在需要插值的点的个数比较多的时候，选择分段求解，也就是Cardinal插值法。"]),a("p",{"data-icrush-fd16868a":""},["首先，我们需要获取插值对象实例："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var cardinal=$$.cardinal();"])]),a("p",{"data-icrush-fd16868a":""},["设置张弛系数(应该在点的位置设置前设置)："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["cardinal.setT(t);"])]),a("p",{"data-icrush-fd16868a":""},["该参数用于调整曲线走势，默认数值t=0，分水岭t=-1，|t-(-1)|的值越大，曲线走势调整的越严重。"]),a("p",{"data-icrush-fd16868a":""},["设置点的位置："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["cardinal.setP([[x,y],[x,y],...]);"])]),a("p",{"data-icrush-fd16868a":""},["经过上面的设置，插值对象就可以求值了。比如x=a，其中a在需要插值的点之间（边界也可以），你可以这样求解出y值："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var y=cardinal(a);"])]),a("h2",{id:"fixed-layout","data-icrush-fd16868a":""},["布局"]),a("p",{"data-icrush-fd16868a":""},["在绘制一些常见图形的时候，比如关系图，单个结点或连线并不难，麻烦的是位置的计算等，和图形模块不同，布局就是专门计算一些特殊图形位置的模块，用一句通俗的话说就是：决定什么元素绘制在哪里。因此，布局应该和具体的绘图方法无关，她只关心位置的计算。"]),a("h4",{id:"fixed-treeLayout","data-icrush-fd16868a":""},["树布局"]),a("p",{"data-icrush-fd16868a":""},["调用treeLayout方法，传递配置config（后续也可以提供config方法来修改配置）就可以获取树布局实例："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var treeLayout=$$.treeLayout(config);"])]),a("p",{"data-icrush-fd16868a":""},["config是一个键值对格式的配置json，由于原始数据格式不一定，你需要传递数据格式的配置（必须的，可选部分在后面说明）："]),a("ul",{"data-icrush-fd16868a":""},[a("li",{"data-icrush-fd16868a":""},['"root":function(initTree){ /*返回根结点*/ }']),a("li",{"data-icrush-fd16868a":""},['"id":function(treedata){ /*返回id*/ }']),a("li",{"data-icrush-fd16868a":""},['"child":function(parentTree, initTree){ /*返回孩子结点*/ }'])]),a("p",{"data-icrush-fd16868a":""},["你还可以配置绘图方法（非必输），因为布局并不知道如何绘制："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["treeLayout.drawer(function(data){ /*绘制*/ });"])]),a("p",{"data-icrush-fd16868a":""},["data是计算后带有结点坐标的数据，格式如下："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},['{node: {↵    "XXX":{↵        children: []↵        data: any↵        id: string||number↵        left: number↵        pid: any↵        deep: number↵        top: number↵    },↵    ...↵}, root: string||number, size: number, deep: number}'])]),a("p",{"data-icrush-fd16868a":""},["node记录的是每个结点的信息，每个结点中的left和top就是该结点应该绘制的位置，data是结点的原始数据，deep表示结点层次（从0开始）。"]),a("p",{"data-icrush-fd16868a":""},["上面说明的都配置好以后，就可以启动布局计算并绘图了："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["// 如果通过drawer方法配置了绘图方法这里就返回布局对象并启动绘图↵// 否则返回计算后的数据↵// (所有布局都一样)↵treeLayout(data);"])]),a("h6",{id:"fixed-treeLayout-basic","data-icrush-fd16868a":""},["基本模型"]),a("div",{class:"layout-tree_design","data-icrush-fd16868a":""},[]),a("p",{"data-icrush-fd16868a":""},["可能你已经发现了，树图分为很多种（圆形树，倒树等），上面并没有配置这些信息（有接口提供配置，稍后说明）。是的，没有配置的时候，默认选择的是基本模型，那什么是基本模型？"]),a("p",{"data-icrush-fd16868a":""},["右图是某个具体例子的基本模型，其中每个红色矩形都是一个1x1的正方形，坐标原心位于左上角绿色顶点。"]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},['"油画":{↵    children: [];↵    data: (2) ["油画", "手绘"];↵    id: "油画";↵    left: 1.5;↵    deep: 1;↵    pid: "手绘";↵    show: true;↵    top: 1.5↵}'])]),a("p",{"data-icrush-fd16868a":""},["主要看看top和left，和右边的图对应，是不是很清晰了。tree布局的核心位置计算就是把每个结点看成一个1x1的正方形，别的具体树图都是从此出发计算得出的，这就是基本模型。"]),a("h6",{id:"fixed-treeLayout-config","data-icrush-fd16868a":""},["配置模型"]),a("p",{"data-icrush-fd16868a":""},["虽然从基本模型出发计算具体的树图已经很容易了，不过为了方便，依旧对常见的树图提供了下列配置选项："]),a("ul",{"data-icrush-fd16868a":""},[a("li",{"data-icrush-fd16868a":""},["type:LR|RL|BT|TB|circle，配置树图的类型（默认原始模型，会忽略下列全部设置）。"]),a("li",{"data-icrush-fd16868a":""},["width,height:number，设置树图的宽和高（如果类型是LR|RL|BT|TB需要设置）。"]),a("li",{"data-icrush-fd16868a":""},["cx,cy:number，设置圆心（如果类型是circle需要设置）。"]),a("li",{"data-icrush-fd16868a":""},["radius:number，设置树图半径（如果类型是circle需要设置）。"]),a("li",{"data-icrush-fd16868a":""},["begin-deg,deg:number，开始和跨越弧度（可选，如果类型是circle设置该参数有效）。"])]),a("h4",{id:"fixed-pieLayout","data-icrush-fd16868a":""},["饼布局"]),a("p",{"data-icrush-fd16868a":""},["调用pieLayout方法，传递配置config（后续也可以提供config方法来修改配置）就可以获取饼布局实例："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var pieLayout=$$.pieLayout(config);"])]),a("p",{"data-icrush-fd16868a":""},["config是一个键值对格式的配置json，由于原始数据格式不一定，你需要传递数据格式的配置："]),a("ul",{"data-icrush-fd16868a":""},[a("li",{"data-icrush-fd16868a":""},['"value":function(data, key, index){ /*返回结点的价值，必须是一个数字*/ }']),a("li",{"data-icrush-fd16868a":""},['"begin-deg":整个饼图的起点弧度']),a("li",{"data-icrush-fd16868a":""},['"deg":饼图的跨越弧度'])]),a("p",{class:"warn","data-icrush-fd16868a":""},["value是必须的，begin-deg和deg都是可选的，有默认值，分别为：-Math.PI / 2和Math.PI * 2。"]),a("p",{"data-icrush-fd16868a":""},["你还可以配置绘图方法（非必输），因为布局并不知道如何绘制："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["pieLayout.drawer(function(data){ /*绘制*/ });"])]),a("p",{"data-icrush-fd16868a":""},["data是计算后带有结点坐标的数据，格式如下："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["[{↵    beginDeg:number↵    data:any↵    deg:number↵    dots:Array↵    index:number↵    key:string↵    percent:number↵    value:number↵},{...},...]"])]),a("p",{"data-icrush-fd16868a":""},["可以看出来数据是一个数组，我们列出其中一项（一个饼图是由一个个弧组成的，这就是其中一个弧）说明具体有哪些。先来说明几个基本的，特殊的需要配合额外配置才有意义。"]),a("p",{"data-icrush-fd16868a":""},["beginDeg和deg分别表示这个弧的起点弧度和跨越弧度，data是原始数据，index、key、value分别表示该项的序号、键和计算后的价值，percent表示该项占比（单位%）。"]),a("h6",{"data-icrush-fd16868a":""},["补充计算"]),a("p",{"data-icrush-fd16868a":""},["我们看到上面没有对dots进行解释，为了使用这项，我们需要额外配置三项："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},['pieLayout.config({↵    // 饼图中一个瓣的中心参考半径，可以有多个[可选]↵    "radius": [number, ...],↵    // 饼图中心坐标↵    "cx": number,↵    "cy": number↵});'])]),a("p",{"data-icrush-fd16868a":""},["饼图绘制的时候，除了绘制各个弧以外，有时候我们希望添加提示文字，用折线和弧对应起来，radius是一个数组，每个项代表一个半径，我们会计算每个半径对应的小弧中心坐标，最终保存的位置就是dots。"]),a("h2",{id:"fixed-map","data-icrush-fd16868a":""},["地图坐标映射"]),a("p",{"data-icrush-fd16868a":""},["比如绘制一个区域，我们拿到的区域信息大部分情况下都是一堆经纬度的值，绘制的时候需要转成xOy坐标，让我们先来获取一个映射对象："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["var map = $$.map(config);"])]),a("p",{"data-icrush-fd16868a":""},["可以看到，建立地图对象的时候需要传递配置config（后续也可以提供config方法来修改配置）来确定采用何种映射算法，不同的映射算法需要配置的参数不一样，这个我们在介绍具体的映射算法的时候再说。"]),a("p",{"data-icrush-fd16868a":""},["到这里，映射对象就有了，然后你就可以直接调用映射对象获取一个经纬度对应的坐标："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["// 特别需要注意，计算出来的位置是偏离中心点的距离↵var d_xyz=map(longitude, latitude);"])]),a("p",{"data-icrush-fd16868a":""},["怎么样，是不是很简单。无论哪种投影，都是把地球看成一个半径为100px的圆球，然后在此基础上计算出经纬度分别为longitude和latitude的点对应的（dx, dy, dz)坐标值。"]),a("p",{"data-icrush-fd16868a":""},["config配置项中有几项是所有投影共有的："]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["map.config({↵↵    // 设置缩放比例，默认1↵    scale:number,↵↵    // 设置旋转中心，你可以把你绘制的部分的中心的经纬度设置为中心，默认[107, 36]↵    center:[longitude, latitude]↵↵});"])]),a("p",{"data-icrush-fd16868a":""},["接下来，我们来看看具体的投影算法："]),a("h4",{id:"fixed-map-eoap","data-icrush-fd16868a":""},["等角斜方位投影"]),a("p",{"data-icrush-fd16868a":""},["这种投影会保持角度正确，也就是没有角度变形，但面积变形较大。"]),a("div",{"ui-copy":"","data-icrush-fd16868a":""},[a("pre",{class:"prettyprint","data-icrush-fd16868a":""},["map.config({↵↵    // 表示使用「等角斜方位投影」↵    type:'eoap'↵↵});"])])])};d.default=c}}]);