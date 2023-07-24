
<template>
  <div class="popup-wrap epidemic">
    <div class="popup-bg" @click="clickPopupClose()"></div>
    <div class="popup-area">
      <div class="close-btn" @click="clickPopupClose()"><i class="fa-solid fa-xmark"></i></div>
      <div class="popup-box">
        <div class="title">防疫新生活</div>
        <div class="sub-title">配合入場<span>4 步驟</span></div>
        <div class="mark">(如出現發燒、呼吸道症狀，請勿入場)</div>
        <ul class="step-list">
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
        </ul>
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
    sessionStorage.getItem('popupEpidemic') == null  ? $('.popup-wrap.epidemic').show() : $('.popup-wrap.epidemic').hide();
  },
  methods: {
    clickPopupClose(){
      $('.popup-wrap.epidemic').hide();
      sessionStorage.setItem('popupEpidemic', false);
    },
  }
};
</script>