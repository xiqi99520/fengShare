//feng.分享
var sharetaget = {
    "tqq"       :"http://v.t.qq.com/share/share.php?title={title}&url={url}&appkey=118cd1d635c44eab9a4840b2fbf8b0fb",
    "tsina"     :"http://service.weibo.com/share/share.php?title={title}&url={url}&source=bookmark&appkey=2992571369",
    "qzone"     :"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}",
    "renren"    :"http://share.renren.com/share/buttonshare.do?link={url}&title={title}",
    "baidu"     :"http://cang.baidu.com/do/add?it={title}&iu={url}&fr=ien#nw=1",
    "115"       :"http://sc.115.com/add?url={url}&title={title}",
    "tsohu"     :"http://t.sohu.com/third/post.jsp?url={url}&title={title}&content=utf-8",
    "taobao"    :"http://share.jianghu.taobao.com/share/addShare.htm?url={url}",
    "xiaoyou"   :"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url={url}",
    "hi"        :"http://apps.hi.baidu.com/share/?url={url}&title={title}",
    "fanfou"    :"http://fanfou.com/sharer?u={url}&t={title}",
    "sohubai"   :"http://bai.sohu.com/share/blank/add.do?link={url}",
    "feixin"    :"http://space3.feixin.10086.cn/api/share?title={title}&url={url}",
    "youshi"    :"http://www.ushi.cn/feedShare/feedShare!sharetomicroblog.jhtml?type=button&loginflag=share&title={title}&url={url}",
    "tianya"    :"http://share.tianya.cn/openapp/restpage/activity/appendDiv.jsp?app_id=jiathis&ccTitle={title}&ccUrl={url}&jtss=tianya&ccBody=",
    "msn"       :"http://profile.live.com/P.mvc#!/badge?url={url}&screenshot=",
    "douban"    :"http://shuo.douban.com/!service/share?image=&href={url}&name={title}",
    "twangyi"   :"http://t.163.com/article/user/checkLogin.do?source={title}&info={title}+{url}&images=",
    "mop"       :"http://tk.mop.com/api/post.htm?url={url}&title={title}"
};
var sharetitle = {
    "tqq"       :"腾讯微博",
    "tsina"     :"新浪微博",
    "qzone"     :"QQ空间",
    "renren"    :"人人网",
    "baidu"     :"百度收藏",
    "115"       :"115",
    "tsohu"     :"搜狐微博",
    "taobao"    :"淘江湖",
    "xiaoyou"   :"腾讯朋友",
    "hi"        :"百度空间",
    "fanfou"    :"饭否",
    "sohubai"   :"搜狐白社会",
    "feixin"    :"飞信",
    "tianya"    :"天涯社区",
    "youshi"    :"优士网",
    "msn"       :"MSN",
    "douban"    :"豆瓣",
    "twangyi"   :"网易微博",
    "mop"       :"猫扑推客"
};
var title = document.title;
var url = window.location.href;
function eFunction(str){
    return function(){
        window.open(formatmodel(sharetaget[str],{title:title, url:url}));
    }
}
for(sico in sharetaget){
    $(".feng-share-"+sico).unbind('click').on('click',eFunction(sico)).attr("title","分享到"+sharetitle[sico]);
}

function formatmodel(str,model){
    for(var k in model){
        var re = new RegExp("{"+k+"}","g");
        str = str.replace(re,model[k]);
    }
    return str;
}