// const NavComp = httpVueLoader('NavComp.vue')
// Vue.use(httpVueLoader);
var app = {
	el: "#app",
  components: {
    'header-comp': httpVueLoader('component/headerComp.vue'),
    'nav-comp': httpVueLoader('component/navComp.vue'),
    'popup-bulletin-comp': httpVueLoader('component/popupBulletinComp.vue'),
    'popup-vote-comp': httpVueLoader('component/popupVoteComp.vue'),
  },
	data() {
    return{
      api: {
        news: "https://webapi.setn.com/api/Event/GetNewsContent/",
      },
      show: {
        navOpen: false,
      },
      data: {
        newsId: "",
        newsData: "",
        newsInfo: "",
      }
    }
  },
  async created() {
    this.data.newsId = await this.getUrlParam('id');
    this.getNewsData();
    // this.getTopicNewsData();
    // var getUrlString = location.href;
    // this.data.newsId = getUrlString.searchParams.get(id)
    // console.log(getUrlString)
    // window.history.pushState("", "", "/profile/");

      

    
  },
  mounted(){
    this.goTop();
  },
  methods: {
    // api =========================
    async getNewsData(){
      await fetch(this.api.news + this.data.newsId)
        .then(response => response.json())
        .then(async (finalData) => {
          // console.log(finalData)
          this.data.newsData = finalData;
          this.data.newsInfo = this.htmlDecode(finalData.contentPages[0]);
          // this.data.newsInfo =  finalData.contentPages[0].text().html()
        })
        .catch((error) => {
          console.log(error)
        });
    },
    // 抓取參數
    getUrlParam(name) {
      const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      const r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]); return null; //返回参数值
    },
    htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    },
   
    // function
    // go top
    goTop(){
      $("#gotop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
      });
      $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
              $('#gotop').fadeIn("fast");
          } else {
              $('#gotop').stop().fadeOut("fast");
          }
      });
    },
    // nav bar 開關
    clickMobileNavBar(){
      $('nav').toggleClass('open');
    }
  }
}

vm = new Vue(app);