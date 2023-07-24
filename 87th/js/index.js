// const NavComp = httpVueLoader('NavComp.vue')
// Vue.use(httpVueLoader);
var app = {
	el: "#app",
  components: {
    'header-comp': httpVueLoader('component/headerComp.vue'),
    'nav-comp': httpVueLoader('component/navComp.vue'),
    'popup-bulletin-comp': httpVueLoader('component/popupBulletinComp.vue'),
    'popup-vote-comp': httpVueLoader('component/popupVoteComp.vue'),
    'ad-banner': httpVueLoader('component/adBanner.vue'),
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
  async created() {
  },
  mounted(){
    event_track();
    this.goTop();
  },
  updated(){
  },
  methods: {
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
