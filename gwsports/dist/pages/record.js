"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),wxCharts=require("./../libs/wxcharts/wxcharts.js"),Record=function(e){function t(){var e,a,r,n;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return a=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={navigationBarTitleText:"我的统计",backgroundColor:"#F1F1F1"},r.components={},r.mixins=[],r.data={userInfo:{},step:"-",navIndex:0,weekStepChartData:{title:"步数统计",data:[0,1.2,1.6,.8,.9,1,1.2,.9],categories:["（周）","日","一","二","三","四","五","六"]},weekTimeChartData:{title:"时间统计",data:[0,20,50,30,60,70,40,50],categories:["（周）","日","一","二","三","四","五","六"]}},r.computed={},r.methods={handleNavItemClick:function(e){this.navIndex=e},handleSwiperChange:function(e){this.navIndex=e.detail.current}},r.events={},n=a,_possibleConstructorReturn(r,n)}return _inherits(t,e),_createClass(t,[{key:"getSteps",value:function(){var e=this;e.step=e.$parent.globalData.step,e.$apply()}},{key:"onLoad",value:function(){var e=this;e.$parent.getUserInfo(function(t){e.userInfo=t,e.$apply()}),e.getSteps();var t=320;try{t=wx.getSystemInfoSync().windowWidth}catch(e){}new wxCharts({canvasId:"weekStepCanvas",type:"column",animation:!0,categories:e.weekStepChartData.categories,series:[{name:"步数",data:e.weekStepChartData.data,format:function(e,t){return e<=0?"":e.toFixed(1)+"k"}}],yAxis:{disabled:!0},xAxis:{disableGrid:!0,type:"calibration"},extra:{column:{width:15}},legend:!1,width:t,height:160}),new wxCharts({canvasId:"weekTimeCanvas",type:"column",animation:!0,categories:e.weekTimeChartData.categories,series:[{name:"时间",data:e.weekTimeChartData.data,format:function(e,t){return e<=0?"":e+"分"}}],yAxis:{disabled:!0},xAxis:{disableGrid:!0,type:"calibration"},extra:{column:{width:15}},legend:!1,width:t,height:160}),new wxCharts({canvasId:"yearStepCanvas",type:"column",animation:!0,categories:e.weekStepChartData.categories,series:[{name:"步数",data:e.weekStepChartData.data,format:function(e,t){return e<=0?"":e.toFixed(1)+"k"}}],yAxis:{disabled:!0},xAxis:{disableGrid:!0,type:"calibration"},extra:{column:{width:15}},legend:!1,width:t,height:160}),new wxCharts({canvasId:"yearTimeCanvas",type:"column",animation:!0,categories:e.weekTimeChartData.categories,series:[{name:"时间",data:e.weekTimeChartData.data,format:function(e,t){return e<=0?"":e+"分"}}],yAxis:{disabled:!0},xAxis:{disableGrid:!0,type:"calibration"},extra:{column:{width:15}},legend:!1,width:t,height:160})}}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Record,"pages/record"));