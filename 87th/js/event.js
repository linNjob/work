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
      show: {
        navOpen: false,
      },
      data: {
        
      }
    }
  },
  created() {
    // this.getADData();
  },
  mounted(){
    event_track();
    // this.eventLink();
    this.goTop();
  },
  updated: function () {
   
  },
  methods: {
    // api =========================
    // function
    // eventLink(){
    //   let mydate = new Date();
    //   //  new Date("2022/9/7")
    //   // console.log(mydate.getTime() > 1662480000000)

    //   // $('.event-info .event-link').attr('href','event.html')
    //   if(mydate.getTime() > 1662480000000){
    //     $('.event-link').attr('href','event.html')
    //   }
    // },
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
