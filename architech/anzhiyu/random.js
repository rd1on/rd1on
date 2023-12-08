var posts=["p/43fcab53.html","p/4a1ffb66.html","p/b494bf9.html","p/c85e9e49.html","p/9f710a5d.html","p/7490c8dc.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"Akilar","link":"https://akilar.top","avatar":"https://npm.elemecdn.com/akilar-candyassets/image/siteicon/favicon.png","descr":"欢迎光临糖果屋","siteshot":"https://cdn.jsdelivr.net/gh/Akilarlxh/ScreenShot@gh-pages/akilar.top.jpg"},{"name":"虹墨空间站","link":"https://www.imaegoo.com","avatar":"https://cravatar.cn/avatar/05bb2aa29c9da6ef65fabd321135e7b6?s=200","descr":"iMaeGoo’s Blog","siteshot":null},{"name":"小康博客","link":"https://www.antmoe.com/","avatar":"https://cdn.jsdelivr.net/npm/kang-static@latest/avatar.jpg","descr":"一个收藏回忆与分享技术的地方！"},{"name":"Tianli","link":"https://tianli-blog.club","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"惟其不可能，所以才相信。"},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"杜老师说","siteshot":"https://bu.dusays.com/2020/11/13/0eccf1ca0dc4b.jpg"},{"name":"優萌初華","link":"https://shoka.lostyu.me","avatar":"https://cdn.jsdelivr.net/gh/amehime/shoka@latest/images/avatar.jpg","descr":"琉璃的医学 & 编程笔记","siteshot":null},{"name":"Lete乐特","link":"https://www.imlete.cn/","avatar":"https://www.imlete.cn/img/avatar.png","descr":"人生只有一次，大胆的生活！！"},{"name":"陈YFの博客","link":"https://blog.cyfan.top/","avatar":"https://npm.elemecdn.com/chenyfan-oss@3","descr":"一个在互联网角落挣扎的小小博客，很小很小"},{"name":"轻笑Chuckle","link":"https://www.chuckle.top","avatar":"https://www.chuckle.top/img/head.webp","descr":"宁静致远,倾尘轻笑"},{"name":"Gahotx","link":"https://gahotx.cn/","avatar":"https://pub.gahotx.cn/photo/cat.jpg","descr":"Don't repeat yourself"},{"name":"虫不知喔","link":"https://blog.ssycs.com/","avatar":"https://thirdqq.qlogo.cn/g?b=sdk&k=niar8d9DBXYiawwVrKRJJC2w&s=0","descr":"我要的正能量会发光！"},{"name":"葱苓的小窝","link":"https://blog.itciraos.cn","avatar":"https://jsd-doge.42pic.top/gh/ciraos/ciraos-static@main/img/avatar1.webp","descr":"DARE & DO","siteShot":"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/site-shot.webp"},{"name":"Vian","link":"https://vian.top/","avatar":"https://vian.top/avatar.ico","descr":"想要的都拥有，得不到的都释怀..."},{"name":"圣奇宝枣的博客小站","link":"https://shengqibaozao.eu.org","avatar":"https://s2.loli.net/2022/05/22/4s8QIyo6OEiavVD.png","descr":"有朋自远方来，不亦乐乎，愿与你相识，得闲饮茶"},{"name":"咬一口激动的鱼","link":"https://jiyu134.top","avatar":"https://q.qlogo.cn/g?b=qq&nk=2056517872&s=0","descr":"风带来了故事的种子，时间使之发芽"},{"name":"小龙同学","link":"https://www.txk123.top/","avatar":"https://blog.txk123.top/images/rem.jpg","descr":"是小龙同学吖，一枚爱玩编程和网安的小同志","siteshot":"https://www.txk123.top/images/blog_background.png"},{"name":"rencai","link":"https://www.btrencai.top","avatar":"https://ypy.btrencai.top/icon.webp","descr":"今天你学了么","siteshot":"https://ypy.btrencai.top/siteshot.png"},{"name":"Ned","link":"https://wangez.site","avatar":"https://blog.wangez.site/uploads/avatar.jpg","descr":"小小前端成长日记"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };