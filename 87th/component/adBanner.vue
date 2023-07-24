<template>
    <!-- v-if="data.adList.length > 1" -->
    <div class="owl-carousel owl-theme">
        <div class="item" v-for="(item, idx) in data.adList" key="idx">
        <a :href="item.Url" target="_blank"
            class="gt"
            data-ec="典禮資訊" data-ea="Banner"
        >
            <img :src="item.ImgUrl" :alt="item.Text">
        </a>
        </div>
    </div>
    <!-- <div v-else>
    <a :href="item.Url" target="_blank">
        <img :src="data.adList[0].ImgUrl" alt="">
    </a>
    </div> -->
  </template>
  
  <script>
  module.exports = {
    data: function() {
      return {
        data: {
            adList: [
                {
                    ImgUrl: ""
                }
            ]
        }
      };
    },
    updated() {
        this.ADbanner();
    },
    async created() {
        this.data.adList = await this.getADData();
    },
    methods: {
        async getADData() {
            const originGBData = [];
            fetch("https://webapi.setn.com/api/Common/GetParam/GBA58")
                    .then(response => response.json())
                    .then( async (finalDatas) => {
                    await finalDatas.AD.map((item) => {
                        fetch(item.ad)
                        .then(response => response.json())
                        .then(async (finalData) => {
                            originGBData.push(finalData[0]);
                        })
                        .catch((error) => {
                            console.log(error)
                        });
                    });
                })
            .catch((error) => {
                console.log(error)
            });
            return originGBData
        },
        ADbanner() {
            $('.owl-carousel').owlCarousel('destroy');
            var $owlCarousel = $('.owl-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                margin: 0,
                nav: false,
                dots: false,
                items: 1,
            })
        },
    }
  };
  </script>