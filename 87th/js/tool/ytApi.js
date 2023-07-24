{/* <div id="my-video"></div> */}


{/* <script src="https://www.youtube.com/iframe_api"></script>  */}
{/* <script> */}
  var player;
  // $("#my-video").html('<div id="Video1"></div>');
  // onYouTubeIframeAPIReady();
  
  function onYouTubeIframeAPIReady(EmbedId) {
    player = new YT.Player('Video1', {
      height: 'auto',
      width: 'auto',
      videoId: EmbedId,
      playerVars: {
        autoplay: 1,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }


  function onPlayerStateChange(event) {
    // getPlayerState() 號碼代表意思
    // -1：unstarted 未啟動，初次載入
    // 0：ended 結束
    // 1：playing 播放中
    // 2：paused 暫停
    // 3：buffering 緩衝中
    // 5：video cued 準備好可以播放了

    // 影片結束前往下一題
    // if(vm.data.listNum < 4){
    //   event.target.getPlayerState() == 0 ? $('.nextQA').click() : '' ;
    // }
    event.target.getPlayerState() == 0 ? $('.keyFrames').addClass('keyFlicker') : '' ;
  }

  function pauseVideo(state) {
    player.pauseVideo();
  }

  function onPlayerReady(event) {
    // 從 0 秒開始播放
    player.seekTo(0);
    // if (!isMobile()) {
    //   // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue]);
    //   // ga('send', 'event', ['8月鬼月活動'], ['影音播放'], ['影片名稱'], [eventValue]);
    //   ga('send', 'event', ['8月鬼月活動'], ['影音播放'], [vm.data.list[vm.data.listNum].name]);
    //   event.target.mute();
    //   var promise = event.target.playVideo();
    // }
  }

  function isMobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }
// </script>

