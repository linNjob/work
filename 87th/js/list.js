// const NavComp = httpVueLoader('NavComp.vue')
// Vue.use(httpVueLoader);
var app = {
	el: "#app",
  components: {
    'header-comp': httpVueLoader('component/headerComp.vue'),
    'nav-comp': httpVueLoader('component/navComp.vue'),
    'popup-bulletin-comp': httpVueLoader('component/popupBulletinComp.vue'),
    'popup-list-info-comp': httpVueLoader('component/popupListInfoComp.vue'),
    'popup-vote-comp': httpVueLoader('component/popupVoteComp.vue'),
    'ad-banner': httpVueLoader('component/adBanner.vue'),
  },
	data() {
    return{
      year: "",//112
      apiUrl: {
        tv: "", // 108~110使用//112
        tvProg: "", // 111使用 節目//112
        tvDrama: "", // 111使用 戲劇//112
        broadcast: "", // 廣播//112
        popupImg: "", // popup圖檔路徑//112
      },
      show: {
        navOpen: false,
        TVWrap: true,
        TVProg: true,
        TvDrama: false,
        radioWrap: false,
        popupListInfo: false,
      },
      data: {
        dataAt: "", // 名單所在位置
        popupListInfo: [],
        
        tvList: [],
        tvProg: [],// 節目
        tvDrama: [],// 戲劇
        radioList: [],//廣播
      }
    }
  },
  async created() {
    this.theYear(); // 抓取頁面年份 //112
    this.dataAt = "電視節目"; // 一進頁面的預設
    if(this.data.year == 111){
      this.apiUrl.tvProg = "https://attach.setn.com/data/dynamic/list_prog_" + this.data.year + ".json"; // 節目
      this.apiUrl.tvDrama = "https://attach.setn.com/data/dynamic/list_drama_" + this.data.year + ".json"; // 戲劇
      this.apiUrl.broadcast = "https://attach.setn.com/data/dynamic/list_radio_" + this.data.year + ".json";
      this.apiUrl.popupImg = "https://attach.setn.com/data/gba57/images/list/prog/";

      this.getListData("tvProg", this.apiUrl.tvProg);
      this.getListData("tvDrama", this.apiUrl.tvDrama);
      this.getListData("radio", this.apiUrl.broadcast);
    } else if(this.data.year == 110) {
      this.apiUrl.popupImg = "https://attach.setn.com/data/gba56/images/list/tv/";
    } else if(this.data.year == 109) {
      this.apiUrl.popupImg = "https://attach.setn.com/data/gba55/images/list/tv_109/";
    } else if(this.data.year == 108) {
      this.apiUrl.popupImg = "https://tavis.tw/gba/54th/images/54/tv/";
    }

    if(this.data.year == 110 || this.data.year == 109 || this.data.year == 108){
      this.apiUrl.tv = "https://attach.setn.com/data/dynamic/list_tv_" + this.data.year + ".json";
      this.apiUrl.broadcast = "https://attach.setn.com/data/dynamic/list_radio_"+ this.data.year +".json";

      this.getListData("tv", this.apiUrl.tv);
      this.getListData("radio", this.apiUrl.broadcast);
    }
  },
  mounted(){
    event_track();
    this.goTop();
  },
  methods: {
    // api =========================
    // api 取得名單資料
    async getListData(listName, listData){
      await fetch(listData)
      .then(response => response.json())
      .then(async (finalDatas) => {
        var obj = ["categoryID", "categoryName"];
        let cates = groupBy(finalDatas, obj, function (item) {
            return [item.categoryID];
        });
        var obj2 = ["awardID", "awardName"];
        var awardList = [];
        cates.forEach(function (cate) {
            var temp = groupBy(cate, obj2, function (item) {
              return [item.awardID];
            });
            awardList.push({
                categoryID: cate.categoryID,
                categoryName: cate.categoryName,
                award : temp
            });
        });

        // api 取得資料回儲存
        switch (listName) {
          case "tvProg":
            this.data.tvProg = awardList;
            break;
          case "tvDrama":
            this.data.tvDrama = awardList;
            break;
          case "tv":
            this.data.tvList = awardList;
            break;
          case "radio":
            this.data.radioList = awardList;
            break;
        }
      })
      .catch((error) => {
        console.log(error)
      });
    },
    // function
    theYear(){ // 抓取當頁年份//112
      let str = window.location.href; 
      str = str.substring(str.lastIndexOf("/") + 1); 
      str = str.substring(0, str.lastIndexOf(".")); 
      this.data.year = str.substring(0, 3); 
    },
    clickTVProgListChange(){
      this.dataAt = "電視節目";
      $('.btn-style .btn-tv-prog').addClass('active');
      $('.btn-style .btn-tv-drama').removeClass('active');
      $('.btn-style .btn-radio').removeClass('active');
      this.show.TvDrama = false;
      this.show.TVProg = true;
      this.show.radioWrap = false;
      
      this.apiUrl.popupImg = "https://attach.setn.com/data/gba57/images/list/prog/";
    },
    clickTVDramaListChange(){
      this.dataAt = "電視戲劇";
      $('.btn-style .btn-tv-drama').addClass('active');
      $('.btn-style .btn-tv-prog').removeClass('active');
      $('.btn-style .btn-radio').removeClass('active');
      this.show.TvDrama = true;
      this.show.TVProg = false;
      this.show.radioWrap = false;
      
      this.apiUrl.popupImg = "https://attach.setn.com/data/gba57/images/list/drama/";
    },
    clickTVListChange(){
      this.dataAt = "電視";
      $('.btn-style .btn-tv').addClass('active');
      $('.btn-style .btn-radio').removeClass('active');
      this.show.TVWrap = true;
      this.show.radioWrap = false;
      
      if(this.data.year == 110){
        this.apiUrl.popupImg = "https://attach.setn.com/data/gba56/images/list/tv/";
      } else if(this.data.year == 109){
        this.apiUrl.popupImg = "https://attach.setn.com/data/gba55/images/list/tv_109/";
      } else if(this.data.year == 108){
        this.apiUrl.popupImg = "https://tavis.tw/gba/54th/images/54/tv/";
      }
    },
    clickRadioListChange(){
      this.dataAt = "廣播";
      $('.btn-style .btn-tv-drama').removeClass('active');
      $('.btn-style .btn-tv-prog').removeClass('active');
      $('.btn-style .btn-tv').removeClass('active');
      $('.btn-style .btn-radio').addClass('active');

      this.show.TvDrama = false;
      this.show.TVProg = false;
      this.show.TVWrap = false;
      this.show.radioWrap = true;

      if(this.data.year == 111){
        this.apiUrl.popupImg = "https://attach.setn.com/data/gba57/images/list/radio/";
      } else if(this.data.year == 110){
        this.apiUrl.popupImg = "https://attach.setn.com/data/gba56/images/list/radio/";
      } else if(this.data.year == 109){
        this.apiUrl.popupImg = "https://attach.setn.com/data/gba55/images/list/radio_109/";
      } else if(this.data.year == 108){
        this.apiUrl.popupImg = "https://tavis.tw/gba/54th/images/54/radio/";
      }
    },
    clickPopupShow(){
      this.show.popupListInfo = !this.show.popupListInfo;
      $('html, body').removeClass('oh');
      if(this.show.popupListInfo == false){
        this.data.popupListInfo = '';
      }
    },
    clickPopupListinfo(item){
      this.data.popupListInfo = item;
      this.show.popupListInfo = true;
      $('html, body').addClass('oh');
      // matomo event 
      _paq.push(['trackEvent', this.dataAt + '-' + item.categoryName, item.awardName, item.finalist]);
    },
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

function groupBy(array, obj, f) {
  let groups = {};
  array.forEach(function (o) {
      let group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);


      for (var i = 0; i < obj.length; i++) {
          var _obj = obj[i];
          if (groups[group][_obj] == null || groups[group][_obj] == "undefined" || groups[group][_obj] == "") {
              groups[group][_obj] = o[_obj];
          }
      }
   
  });

  return Object.keys(groups).map(function (group) {
      return groups[group];
  });
}

