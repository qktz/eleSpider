console.log('main')
main_urls = [
    "http://m.90mh.com/manhua/buzizhongqianyongzheqiangdayouqingsongdeNEWGAME/",
    "http://m.90mh.com/manhua/DrSTONEshijiyuan/",
    "http://m.90mh.com/manhua/gelaipunier/",
    "http://m.90mh.com/manhua/guanyuwozhuanshenghouchengweishilaimudenajianshi/",
    "http://m.90mh.com/manhua/zaiyishijiemigongkaihougong/",
    "http://m.90mh.com/manhua/zhongmodehougong/",
    "http://m.90mh.com/manhua/wodexianshishilianaiyouxi/",
]

let first = main_urls.shift();

rpc.setGlobalData('comic_urls', main_urls).then(()=>{
    return rpc.loadWithUrl(first);
});