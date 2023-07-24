
<template>
<nav>
  <div class="nav-wrap">
    <div class="logo-nav">
      <a href="index.html">
        <picture>
          <source media="(max-width: 969px)"
                  srcset="https://attach.setn.com/data/gba57/images/logo/57logo.png,
                          https://attach.setn.com/data/gba57/images/logo/57logo@2x.png 2x,
                          https://attach.setn.com/data/gba57/images/logo/57logo@3x.png 3x" >
          <source media="(max-width: 970px)"
                  srcset="https://attach.setn.com/data/gba57/images/logo/57logo-straight.png,
                          https://attach.setn.com/data/gba57/images/logo/57logo-straight@2x.png 2x,
                          https://attach.setn.com/data/gba57/images/logo/57logo-straight@3x.png 3x" >
          <img src="https://attach.setn.com/data/gba57/images/logo/57logo-straight.png" alt="GBA57">
        </picture>
      </a>
    </div>
    <div class="btn-nav-close hoverPointer" @click="$emit('click-nav-bar')">
      <!-- <i class="fa-solid fa-xmark"></i> -->
      <img src="https://attach.setn.com/data/gba57/images/icon/close.png" 
               srcset="https://attach.setn.com/data/gba57/images/icon/close@2x.png 2x, 
                       https://attach.setn.com/data/gba57/images/icon/close@3x.png 3x" 
               alt="icon/close" />
    </div>
    <ul class="nav-list">
      <li class="home"><a href="index.html"><i class="nav-icon home"></i><h3>典禮資訊</h3></a></li>
      <li class="list"><a href="111list.html"><i class="nav-icon list"></i><h3>入圍與得獎</h3></a></li>
      <li class="newslist"><a href="newslist.html"><i class="nav-icon newslist"></i><h3>最新消息</h3></a></li>
      <li class="event"><a href="event.html"><i class="nav-icon event"></i><h3>人氣票選</h3></a></li>
      <li class="clip"><a href="clip.html "><i class="nav-icon clip"></i><h3>典禮直播</h3></a></li>
      <li class="about"><a href="about.html"><i class="nav-icon about"></i><h3>關於金鐘</h3></a></li>
      <li class="event_accupass"><a href="https://www.accupass.com/event/2209270635421057516384" target="_blank"><i class="nav-icon"></i><h3>國際工作坊</h3></a></li>
    </ul>
    <!-- <div class="vote">
      <a href="javascript:;"><img src="https://attach.setn.com/data/gba57/images/nav/vote.gif" alt=""></a>
    </div> -->
  </div>
</nav>
</template>

<script>
module.exports = {
  data: function() {
    return {
    };
  },
  created(){
  },
  mounted(){
    this.navPageActive();
  },
  methods: {
    navPageActive(){
      var str = window.location.href; 
      str = str.substring(str.lastIndexOf("/") + 1); 
      str = str.substring(0, str.lastIndexOf(".")); 

      if (str == 'index' || str == ''){
        $('.nav-list li.home').addClass('active')
      } else if (str == '108list' || str == '109list' || str == '110list' || str == '111list'){
        $('.nav-list li.list').addClass('active')
      } else if (str == 'newslist' || str == 'news'){
        $('.nav-list li.newslist').addClass('active')
      } else if (str == 'event'){
        $('.nav-list li.event').addClass('active')
      } else if (str == 'clip'){
        $('.nav-list li.clip').addClass('active')
      } else if (str == 'about'){
        $('.nav-list li.about').addClass('active')
      }
    }
  }
};
</script>