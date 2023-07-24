
<template>
  <header class="header-wrap">
    <div class="nav-bar" @click="$emit('click-nav-bar')">
      <!-- <i class="fa-solid fa-bars"></i> -->
      <img src="https://attach.setn.com/data/gba57/images/icon/nav-bar.png" 
               srcset="https://attach.setn.com/data/gba57/images/icon/nav-bar@2x.png 2x, 
                       https://attach.setn.com/data/gba57/images/icon/nav-bar@3x.png 3x" 
               alt="icon/nav-bar" />
    </div>
    <!-- <div class="vote">
      <a class="gt" data-ec="人氣票選 gif" data-ea="人氣票選 gif" 
         href="https://event.setn.com/fun/GBA57POPULARITY?openExternalBrowser=1" target="_blank">
        <img src="https://attach.setn.com/data/gba57/images/nav/vote.gif" alt="人氣票選">
      </a>
    </div> -->
    <ul class="icon-wrap">
      <!-- <li>
        <a href="javascript:;">
          <img src="https://attach.setn.com/data/gba57/images/icon/home.png" 
               srcset="https://attach.setn.com/data/gba57/images/icon/home@2x.png 2x, 
                       https://attach.setn.com/data/gba57/images/icon/home@3x.png 3x" 
               alt="GBA57-facebook" />
        </a>
      </li> -->
      <li>
        <a href="https://www.facebook.com/bamid.goldenbell" target="_blank"
           class="gt"
           data-ec="GBA57" data-ea="facebook">
          <img src="https://attach.setn.com/data/gba57/images/icon/facebook.png" 
               srcset="https://attach.setn.com/data/gba57/images/icon/facebook@2x.png 2x, 
                       https://attach.setn.com/data/gba57/images/icon/facebook@3x.png 3x" 
               alt="GBA57-facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCxnbaqzW_YO3sXD7GvH5vXw" target="_blank"
           class="gt"
           data-ec="GBA57" data-ea="youtube">
          <img src="https://attach.setn.com/data/gba57/images/icon/youtube.png" 
               srcset="https://attach.setn.com/data/gba57/images/icon/youtube@2x.png 2x, 
                       https://attach.setn.com/data/gba57/images/icon/youtube@3x.png 3x" 
               alt="GBA57-youtube" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/goldenbellawards/" target="_blank"
           class="gt"
           data-ec="GBA57" data-ea="instagram">
          <img src="https://attach.setn.com/data/gba57/images/icon/instagram.png" 
               srcset="https://attach.setn.com/data/gba57/images/icon/instagram@2x.png 2x, 
                       https://attach.setn.com/data/gba57/images/icon/instagram@3x.png 3x" 
               alt="GBA57-instagram" />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
module.exports = {
  data: function() {
    return {
    };
  },
};
</script>