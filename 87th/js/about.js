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
        adList: []
      }
    }
  },
  created() {

  },
  mounted(){
    event_track();
    this.goTop();
  },
  methods: {
    // api =========================


    // function ====================
    aboutHistory(){
      $('.about-btn-list li, .about-info-wrap li').removeClass('active');
      $('.about-btn-list .about-history, .about-info-wrap .about-history').addClass('active');
    },
    aboutTV(){
      $('.about-btn-list li, .about-info-wrap li').removeClass('active');
      $('.about-btn-list .about-tv, .about-info-wrap .about-tv').addClass('active');
    },
    aboutRadio(){
      $('.about-btn-list li, .about-info-wrap li').removeClass('active');
      $('.about-btn-list .about-radio, .about-info-wrap .about-radio').addClass('active');
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