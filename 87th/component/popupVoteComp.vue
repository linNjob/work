
<template>
  <div id="popup-vote" class="popup-wrap popup-list-info-wrap">
    <div class="popup-bg" @click="clickPopupClose()"></div>
    <div class="popup-area">
      <div class="close-btn" @click="clickPopupClose()">
        <img src="https://attach.setn.com/data/gba57/images/popup/close.png" 
               srcset="https://attach.setn.com/data/gba57/images/popup/close@2x.png 2x, 
                       https://attach.setn.com/data/gba57/images/popup/close@3x.png 3x" 
               alt="close" />
      </div>
      <div class="popup-box">
        <!-- <div class="title">人氣票選</div>
        <div class="sub-title">配合入場<span>4 步驟</span></div>
        <div class="mark">(如出現發燒、呼吸道症狀，請勿入場)</div> -->

        <div class="title">選你所愛敲金鐘<br>金鐘57人氣獎　由你決定！</div>
        <div class="info">
          參加<a class="gt" data-ec="人氣票選" data-ea="popup 活動細節說明" href="https://event.setn.com/fun/GBA57POPULARITY?openExternalBrowser=1" target="_blank">金鐘57最具人氣票選活動</a><br>
          選出心目中最愛的綜藝節目獎、戲劇節目獎<br>
          投票支持、拉票應援，就有機會獲得iPhone14！
        </div>
        <!-- <ul class="step-list">
          <li>
            <img  class="" alt="step01" 
                  src="https://attach.setn.com/data/gba57/images/popup/step01.png" 
                  srcset="https://attach.setn.com/data/gba57/images/popup/step01@2x.png 2x,
                          https://attach.setn.com/data/gba57/images/popup/step01@3x.png 3x" />
            <div class="mark">全程佩戴口罩</div>
          </li>
          <li>
            <img  class="" alt="step02" 
                  src="https://attach.setn.com/data/gba57/images/popup/step02.png" 
                  srcset="https://attach.setn.com/data/gba57/images/popup/step02@2x.png 2x,
                          https://attach.setn.com/data/gba57/images/popup/step02@3x.png 3x" />
            <div class="mark">量額溫</div>
          </li>
          <li>
            <img  class="" alt="step03" 
                  src="https://attach.setn.com/data/gba57/images/popup/step03.png" 
                  srcset="https://attach.setn.com/data/gba57/images/popup/step03@2x.png 2x,
                          https://attach.setn.com/data/gba57/images/popup/step03@3x.png 3x" />
            <div class="mark">勤洗手、酒精消毒</div>
          </li>
          <li>
            <img  class="" alt="step04" 
                  src="https://attach.setn.com/data/gba57/images/popup/step04.png" 
                  srcset="https://attach.setn.com/data/gba57/images/popup/step04@2x.png 2x,
                          https://attach.setn.com/data/gba57/images/popup/step04@3x.png 3x" />
            <div class="mark">場內禁止飲食</div>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
    };
  },
  created() {
  },
  mounted(){
    sessionStorage.getItem('popupVote') == null  ? $('#popup-vote.popup-wrap').show() : $('#popup-vote.popup-wrap').hide();
  },
  methods: {
    clickPopupClose(){
      $('#popup-vote.popup-wrap').hide();
      sessionStorage.setItem('popupVote', false);
    },
  }
};
</script>