
// async function getADData(){
//   const originGBData = [];
//   fetch("https://webapi.setn.com/api/Common/GetParam/GBA58")
//         .then(response => response.json())
//         .then( async (finalDatas) => {
//           await finalDatas.AD.map((item) => {
//             fetch(item.ad)
//             .then(response => response.json())
//             .then(async (finalData) => {
//                 originGBData.push(finalData[0]);
//               })
//               .catch((error) => {
//                 console.log(error)
//               });
//           });
//         })
//     .catch((error) => {
//       console.log(error)
//     });
//   return originGBData
// }

// 58th api
// 首頁
// https://webapi.setn.com/api/Common/GetParam/GBA58
// 廣告
// https://webapi.setn.com/api/Common/GetParam/GBA58

// 新聞頁
// https://webapi.setn.com/api/Event/GetNewsContent/

// 新聞列表
// https://webapi.setn.com/api/Project/GetProjectNewSList/9811/
// 新聞列表筆數
// https://webapi.setn.com/api/Event/ProjectNewsCount/9811