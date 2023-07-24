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
        newsListPage: 0,
        newsList: "https://webapi.setn.com/api/Project/GetProjectNewSList/9811/",
        newsPage: "https://webapi.setn.com/api/Event/ProjectNewsCount/9811"
      },
      show: {
        navOpen: false,
      },
      data: {
        topicNewsList: [
          {
            newsList: [],
          }
        ],
        newsList: [
          {
            newsList: [],
          }
        ],
        newsTotalPage: '',
        newsPageArray: [],
      }
    }
  },
  created() {
    this.getTopicNewsData();
    this.getNewsData(0);
    this.getNewsPage();
      setTimeout(() => {
        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 0,
          nav: false,
          dots: false,
          items: 1,
      })
    }, 2000);
  },
  mounted(){
    this.goTop();
  },
  methods: {
    // api =========================
    async getTopicNewsData(){
      await fetch(this.api.newsList + 0)
        .then(response => response.json())
        .then(async (finalData) => {
          // console.log(finalData)
          this.data.topicNewsList = finalData;
        })
        .catch((error) => {
          console.log(error)
        });
    },
    async getNewsData(page){
      page == undefined ? page = 0 : page;
      // console.log(page)
      await fetch(this.api.newsList + page)
        .then(response => response.json())
        .then(async (finalData) => {
          // console.log(finalData)
          this.data.newsList = finalData;
        })
        .catch((error) => {
          console.log(error)
        });
    },
    async getNewsPage(){

      await fetch(this.api.newsPage)
        .then(response => response.json())
        .then(async (finalData) => {
          // console.log(finalData)
          this.data.newsTotalPage = finalData;
          this.data.newsPageArray = Array.from(Array(finalData).keys())
          _this = this;
          let pageNum;
          if(sessionStorage.getItem('newListPage') != '' && sessionStorage.getItem('newListPage') != null){
            pageNum = Number(sessionStorage.getItem('newListPage'));
          } else {
            pageNum = 1;
          }
          // console.log(pageNum)
          $('#pagination-demo').twbsPagination({
            initiateStartPageClick: true,
            totalPages: Math.ceil(_this.data.newsTotalPage / 20),
            startPage: pageNum,
            visiblePages: 5,
            first: '<i class="fa-solid fa-angles-left"></i>',
            prev: '<i class="fa-solid fa-angle-left"></i>',
            next: '<i class="fa-solid fa-angle-right"></i>',
            last: '<i class="fa-solid fa-angles-right"></i>',
            onPageClick: function (event, page) {
              let pageTop = 0;
              $( window ).width() >= 1024 ? 
                pageTop = $('.kv-wrap')[0].clientHeight : 
                pageTop = $('.logo')[0].clientHeight + $('.kv-wrap')[0].clientHeight + 20;

              jQuery("html,body").animate({
                scrollTop: pageTop
              }, 0);
              _this.getNewsData(page - 1);
              sessionStorage.setItem('newListPage', page);

            }
          });
         
        })
        .catch((error) => {
          console.log(error)
        });
    },
   
    // function
    clickNewListItem(){
      sessionStorage.setItem('newListScrollTop', $('html').scrollTop());
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