
<template>
  <div class="popup-wrap popup-list-info-wrap" v-show="dataPopupShow">
    <div class="popup-bg" @click="$emit('click-popup-show'); clickClosePopup()"></div>
    <div class="popup-area">
      <div class="close-btn hoverPointer" @click="$emit('click-popup-show'); clickClosePopup()">
        <!-- <i class="fa-solid fa-xmark"></i> -->
        <img src="https://attach.setn.com/data/gba57/images/popup/close.png" 
               srcset="https://attach.setn.com/data/gba57/images/popup/close@2x.png 2x, 
                       https://attach.setn.com/data/gba57/images/popup/close@3x.png 3x" 
               alt="close" />
      </div>
      <div class="popup-box">
        <!-- <div style="color: #fff">
          {{ dataImgArr }}
        </div> -->
        <div id="slide" >
          <img v-for="item in dataImgArr" :key="item" :src="item" :v-if="item != ''" alt="" />
        </div>

        <!-- <img :src="dataPopupImgUrl + dataPopupItem.imageSrc" alt="" v-if="dataPopupItem.imageSrc"> -->
        <div class="title">{{ dataPopupItem.finalist }}</div>
        <div class="desc">{{ dataPopupItem.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  var refreshIntervalId;
  module.exports = {
    props: {
      "dataPopupShow": {},
      "dataPopupItem": {}, 
      "dataPopupImgUrl": {},
      "dataImgArr" :{
        type: Array
      }
    },
    watch: {
      dataPopupItem(val) {
          // console.log(val);
          // console.log(val.imageSrc == '');
          if(this.dataPopupShow == true){
            let newVal = val.imageSrc.split('#');
            this.dataImgArr = newVal.map((item, i) => {
              return this.dataPopupImgUrl + item.trim()
            })
            
            // $('#slide img').hide()
            if(this.dataImgArr.length > 1 ){
              setTimeout(() => {
                let arrLen = this.dataImgArr.length;
                let num = 0;
                refreshIntervalId = setInterval(() => {
                  num < arrLen - 1 ? num++ : num = 0; 
                  $('#slide img').css('opacity', '0');
                  $('#slide img').eq(num).css('opacity', '1');
                }, 3000)
              }, 1000)
            } 
          }
      }
    },
    created() {     
    },
    methods: {
      clickClosePopup(){
        clearInterval(refreshIntervalId);
      },
    }
  };




</script>
