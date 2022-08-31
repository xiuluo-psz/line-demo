// This function is executed before instantiating the app
// only in client-side.
// document: https://nuxtjs.org/docs/2.x/directory-structure/plugins 
import { defineNuxtPlugin } from '#app';

// import NPM version LIFF JS SDK
import liff from '@line/liff';

export default defineNuxtPlugin((nuxtApp) => {
    const initResult = liff.init({liffId: '1657366240-Nl6jYvA2' || process.env.LIFF_ID})
    .then(() => {
      console.log('liff.init() done');
    })
    .catch(error => {
      console.log(`liff.init() failed: ${error}`);
      if (!process.env.liffId) {
        console.info('LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.');
      }
      return Promise.reject(error);
    });
  return {
    provide: {
      liff,
      liffInit: initResult
    }
  }
});

// export default (context, inject) => {
//   // You can access liff object as this.$liff by inject()
//   inject('liff', liff);

//   // execute liff.init()
//   const initResult = liff.init({liffId: '1657366240-Nl6jYvA2' || process.env.LIFF_ID})
//     .then(() => {
//       console.log('liff.init() done');
//     })
//     .catch(error => {
//       console.log(`liff.init() failed: ${error}`);
//       if (!process.env.liffId) {
//         console.info('LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.');
//       }
//       return Promise.reject(error);
//     });

//   // You can access liff.init()'s return value (Promise object)
//   // as this.$liffInit() by inject()
//   inject('liffInit', initResult);
// }
