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
        videoId: "",
        videoYT: 
          {
            mode: 0,
            default: [],
            content: {
              radio: [
                {
                  title: "",
                  videoId: ""
                }
              ],
              tvProgramme: [
                {
                  title: "",
                  videoId: ""
                }
              ],
              tvDrama: [
                {
                  title: "",
                  videoId: ""
                }
              ]
            },
            schedule: {
              radio: [],
              tvProgramme: [],
              tvDrama: []
            }
          }
        
      }
    }
  },
  created() {
    this.getVideoYT();
    // console.log(this.data.videoYT)
    // if(this.data.videoYT != ''){
    // }
  },
  mounted(){
    // <iframe :src="'https://www.youtube.com/embed/' + this.data.videoId + '?rel=0&amp;autoplay=1&mute=1'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    setTimeout(() => {
      $("#my-video").html('<iframe src="https://www.youtube.com/embed/' + this.data.videoId + '?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      
      let gaName;
      if(this.data.videoYT.mode == 1){
        gaName = "廣播金鐘直播"
      } else if(this.data.videoYT.mode == 2){
        gaName = "電視金鐘節目類直播"
      } else if(this.data.videoYT.mode == 3){
        gaName = "電視金鐘戲劇類直播"
      } else {
        gaName = "廣播金鐘直播"
      }
      // ga
      // ga('send', 'event', "典禮直播", gaName);
      // matomo event 
      _paq.push(['trackEvent', "典禮直播", gaName]);
      console.log(gaName);
    }, 1000)


    event_track();
    this.goTop();

    
    // console.log(this.data.videoYT.default.radio[0].videoId)
    // console.log(this.data.videoYT.default)
    // if(this.data.videoYT.default )
    // $("#my-video").html('<iframe src="https://www.youtube.com/embed/' + this.data.videoYT.default.radio[0].videoId + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');


    // $('.video-table li').click((e) => {
    //   console.log("<><><><><><")
    //   console.log(e)
    // })
  },
  updated: function () {
  },
  methods: {
    // api =========================
    async getVideoYT(){
      await fetch("json/clips.json")
      .then(response => response.json())
      .then(async (finalDatas) => {
        // console.log(finalDatas);
          // this.data.videoYT = finalDatas;
          // 影片預設 iframe
          this.data.videoYT = finalDatas;
          if(this.data.videoYT.mode == 1){
            this.data.videoId = this.data.videoYT.default.radio[0].videoId
          } else if(this.data.videoYT.mode == 2){
            this.data.videoId = this.data.videoYT.default.tvDrama[0].videoId
          } else if(this.data.videoYT.mode == 3){
            this.data.videoId = this.data.videoYT.default.tvProgramme[0].videoId
          }
          // console.log(finalDatas)
          clipVideoTime();
        })
        .catch((error) => {
          console.log(error)
        });
    },
    // function
    // 切換分類
    clickVideoTable(e){
      // console.log(e)
      // console.log(e.target.parentElement.classList)
      // table
      $('.video-table li').removeClass('active');
      // e.target.className = 'active';
      e.target.classList.add('active');


      // info
      var typev = e.target.dataset.typev;
      $('#video-info > div').removeClass('active');
      $('#video-info .' + typev).addClass('active');

      // console.log(typev )
      if(typev == 'radio'){
        this.clickVideoChange(this.data.videoYT.default.radio[0].videoId)
      } else if(typev == 'tv-programme'){
        this.clickVideoChange(this.data.videoYT.default.tvProgramme[0].videoId)
      } else if(typev == 'tv-drama'){
        this.clickVideoChange(this.data.videoYT.default.tvDrama[0].videoId)
      } 
      // $('#video-info > div').removeClass('active')
      // if(e.target.classList.contains('radio')){
      //   // console.log('>>>>>>> radio')
      //   $('#video-info .radio').addClass('active');
      //   // this.clickVideoChange(this.data.videoYT.default.radio[0].videoId)
      // } else if(e.target.classList.contains('tv-programme')){
      //   // console.log('>>>>>>> tv-programme')
      //   // console.log($('#video-info .tv-programme'))
      //   $('#video-info .tv-programme').addClass('active');
      //   // this.clickVideoChange(this.data.videoYT.default.tvProgramme[0].videoId);
      // } else if(e.target.classList.contains('tv-drama')){
      //   // console.log('>>>>>>> tv-drama')
      //   $('#video-info .tv-drama').addClass('active');
      //   // this.clickVideoChange(this.data.videoYT.default.tvDrama[0].videoId);
      // } 



      // e.target.parentElement.classList.contains('radio') ? $('#video-info .radio').addClass('active') : '';
      // e.target.parentElement.classList.contains('tv-programme') ? $('#video-info .tv-programme').addClass('active') : '';
      // e.target.parentElement.classList.contains('tv-drama') ? $('#video-info .tv-drama').addClass('active') : '';
    },
    // 切換影片
    clickVideoChange(videoId){
      // console.log(videoId)
      this.data.videoId = videoId;
      $('#my-video').empty();
      $("#my-video").html('<iframe src="https://www.youtube.com/embed/' + videoId + '?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

      jQuery("html,body").animate({
        scrollTop: 0
      }, 1000);
      // $('#my-video').empty();
      // // youtube play
      // $("#my-video").html('<div id="Video1"></div>');
      // // this.onYouTubeIframeAPIReady(videoId);
    },
    onYouTubeIframeAPIReady(EmbedId) {
      player = new YT.Player('Video1', {
        height: 'auto',
        width: 'auto',
        videoId: EmbedId,
        playerVars: {
          autoplay: 0,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
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

// 判別個類別直播時間 切換 table、info
function clipVideoTime() {
  let now = new Date;
  let radioStart = vm.data.videoYT.schedule.radio[0].start;
  let radioEnd = vm.data.videoYT.schedule.radio[0].end;
  let tvProgStart = vm.data.videoYT.schedule.tvProgramme[0].start;
  let tvProgEnd = vm.data.videoYT.schedule.tvProgramme[0].end;
  let tvDramaStart = vm.data.videoYT.schedule.tvDrama[0].start;
  let tvDramaEnd = vm.data.videoYT.schedule.tvDrama[0].end;

  if(new Date(radioStart) <= now && new Date(radioEnd) > now){
    $(".video-table li[data-typev='radio']").click();
  } else if(new Date(tvProgStart) <= now && new Date(tvProgEnd) > now){
    $(".video-table li[data-typev='tv-programme']").click();
  } else if(new Date(tvDramaStart) <= now && new Date(tvDramaEnd) > now){
    $(".video-table li[data-typev='tv-drama']").click();
  } else if(vm.data.videoYT.mode == 1){
    $(".video-table li[data-typev='radio']").click();
  } else if(vm.data.videoYT.mode == 2){
    $(".video-table li[data-typev='tv-programme']").click();
  } else if(vm.data.videoYT.mode == 3){
    $(".video-table li[data-typev='tv-drama']").click();
  }
}

var isStart = false;
var defaultUpdateSec = 10;//10秒
var countdownnumber = defaultUpdateSec;
var timer = window.setInterval(countdownfunc, 1000);

function countdownfunc() {
    if (countdownnumber == 0) {
        countdownnumber = defaultUpdateSec;
        fetch("json/clips.json", { cache: "reload" })
            .then(response => response.json())
            .then((finalDatas) => {
              // var now = new Date;
              // var radioStart = vm.data.videoYT.schedule.radio[0].start;
              // var radioEnd = vm.data.videoYT.schedule.radio[0].end;
              // var tvProgStart = vm.data.videoYT.schedule.tvProgramme[0].start;
              // var tvProgEnd = vm.data.videoYT.schedule.tvProgramme[0].end;
              // var tvDramaStart = vm.data.videoYT.schedule.tvDrama[0].start;
              // var tvDramaEnd = vm.data.videoYT.schedule.tvDrama[0].end;

              // 設０則會停止重複計時功能
              if(vm.data.videoYT.mode == 0){
                clearInterval(timer)
              }
              // new Date(radioStart) <= now && new Date(radioEnd) > now
              // console.log(radioStart)
              // console.log(finalDatas.schedule.radio[0].start);
              // 當個別主video有更換時，會重新載入影片
              if(vm.data.videoYT.default.radio[0].videoId != finalDatas.default.radio[0].videoId ||
                 vm.data.videoYT.default.tvProgramme[0].videoId != finalDatas.default.tvProgramme[0].videoId ||
                 vm.data.videoYT.default.tvDrama[0].videoId != finalDatas.default.tvDrama[0].videoId){
                  vm.data.videoYT = finalDatas; // 重新載入 json
                  clipVideoTime(); // 針對新 json 重新判別畫面內容
              } 
              // else if((radioStart != finalDatas.schedule.radio[0].start && new Date(finalDatas.schedule.radio[0].start) <= now && new Date(finalDatas.schedule.radio[0].end) > now)  ||
              //   (tvProgStart != finalDatas.schedule.tvProgramme[0].start && new Date(finalDatas.schedule.tvProgramme[0].start) <= now && new Date(finalDatas.schedule.tvProgramme[0].end) > now) ||
              //   (tvDramaStart != finalDatas.schedule.tvDrama[0].start && new Date(finalDatas.schedule.tvDrama[0].start) <= now && new Date(finalDatas.schedule.tvDrama[0].end) > now)){
              //     console.log('>>>>>>')
              //     vm.data.videoYT = finalDatas; // 重新載入 json
              //     clipVideoTime(); // 針對新 json 重新判別畫面內容
              //     // if(new Date(finalDatas.schedule.radio[0].start) <= now && new Date(finalDatas.schedule.radio[0].end) > now ||
              //     // new Date(finalDatas.schedule.tvProgramme[0].start) <= now && new Date(finalDatas.schedule.tvProgramme[0].end) > now ||
              //     // new Date(finalDatas.schedule.tvDrama[0].start) <= now && new Date(finalDatas.schedule.tvDrama[0].end) > now){
              //     // }
              // }
              


              //  else if(vm.data.videoYT.mode == 1){
              //   vm.data.videoYT = finalDatas;
              //   $(".video-table li[data-typev='radio']").click();
              // } else if(vm.data.videoYT.mode == 2){
              //   vm.data.videoYT = finalDatas;
              //   $(".video-table li[data-typev='tv-programme']").click();
              // } else if(vm.data.videoYT.mode == 3){
              //   vm.data.videoYT = finalDatas;
              //   $(".video-table li[data-typev='tv-drama']").click();
              // }


              
              // var $_videoTypes = document.getElementById("videoTypes");
              // var activeType = $_videoTypes.querySelector('.active');
              // var actionSchedule = finalDatas.schedule[activeType.dataset.typev];
              
              // var now = new Date;
              // // console.log(actionSchedule)
              // var chkSchedule = actionSchedule.filter(function (item, index, array) {
              //   return new Date(item.start) <= now && new Date(item.end) > now;
              // });
              // // console.log(chkSchedule)
              // // console.log(chkSchedule.length)
              // if (chkSchedule.length > 0) {
              //     // vm.data.videoYT = finalDatas;
              //   }
            })
            .catch((error) => {
                console.log(error)
            });

        if (isStart == true) {
        }
    }
    $("#countdown").html(countdownnumber);
    countdownnumber--;
}