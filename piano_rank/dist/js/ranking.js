function RankingItem(n,e,a,i,t){this.ranking=n,this.media=1==n?"icon-gold":2==n?"icon-silver":3==n?"icon-copper":"icon-medal",this.avatar=e||"imgs/avatar.png",this.name=a||"-",this.sex=2==i?"icon-female":1==i?"icon-male":"",this.score=t||0}RankingItem.prototype.makeHTML=function(){var n=document.createElement("div");return n.className="item",n.innerHTML='        <div class="left">            <span class="medal icon '+this.media+'">'+(this.ranking>3?this.ranking:"")+'</span>            <img class="avatar" src="'+this.avatar+'" alt="avatar">            <span class="name">'+this.name+'</span>            <span class="sex icon '+this.sex+'"></span>        </div>        <div class="right">'+this.score+"</div>",n},$(document).ready(function(){window.localStorage.sessionId&&(API.getUserInfo(window.localStorage.sessionId,function(n){if("SUCCESS"==n.code&&n.result){$("#avatar").attr("src",n.result.avater||"imgs/avatar.png"),$("#avatar").show(),$("#name").html(n.result.nickname),$("#sex").addClass(1==n.result.gender?"icon-male":2==n.result.gender?"icon-female":""),$("#practiceTime").html(n.result.record),$("#duration").html(n.result.insistDay);var e=n.result;API.getSign(function(n){if("SUCCESS"!=!n.code&&n.result){var a=n.result;wx.config({debug:!1,appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline"]}),wx.onMenuShareTimeline({title:"晓雯音乐广州市桥分校百日练琴第三季活动",desc:e.nickname+"小朋友在晓雯音乐百日练琴计划中坚持了"+e.insistDay+"天，累计练习了"+e.record+"分钟",link:"http://www.ppfix.cn/activity/piano_rank/share.html?n="+e.nickname+"&a="+e.avater+"&s="+e.gender+"&ar="+e.record+"&i="+e.insistDay,imgUrl:e.avater,success:function(n){},cancel:function(n){}}),wx.onMenuShareAppMessage({title:"晓雯音乐广州市桥分校百日练琴第三季活动",desc:e.nickname+"小朋友在晓雯音乐百日练琴计划中坚持了"+e.insistDay+"天，累计练习了"+e.record+"分钟",link:"http://www.ppfix.cn/activity/piano_rank/share.html?n="+e.nickname+"&a="+e.avater+"&s="+e.gender+"&ar="+e.record+"&i="+e.insistDay,imgUrl:e.avater,success:function(n){},cancel:function(n){}})}},function(n){console.log(n)},function(n){})}},function(n){},function(n){}),API.getAllRecordsRank(function(n){"SUCCESS"==n.code&&n.result&&n.result.list&&n.result.list.forEach(function(n,e){var a=new RankingItem(e+1,n.avater,n.nickname,n.gender,n.record);$("#timeRanking .tips").before(a.makeHTML())})},function(n){},function(n){}),API.getAllDaysRank(function(n){"SUCCESS"==n.code&&n.result&&n.result.list&&n.result.list.forEach(function(n,e){var a=new RankingItem(e+1,n.avater,n.nickname,n.gender,n.insistDay);$("#dayRanking .tips").before(a.makeHTML())})},function(n){},function(n){}))}),$(document).ready(function(){$("#showTimeRanking").click(function(){$(this).addClass("active"),$("#showDayRanking").removeClass("active"),$("#timeRanking").removeClass("hide"),$("#dayRanking").addClass("hide")}),$("#showDayRanking").click(function(){$(this).addClass("active"),$("#showTimeRanking").removeClass("active"),$("#dayRanking").removeClass("hide"),$("#timeRanking").addClass("hide")})});
//# sourceMappingURL=ranking.js.map
