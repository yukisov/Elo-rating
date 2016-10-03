module.exports = {
  calcRating: function(ratingYoursBefore, ratingOtherBefore, result) {
    'use strict';

    const K = 12; // 16
    ratingYoursBefore = parseInt(ratingYoursBefore, 10);
    ratingOtherBefore = parseInt(ratingOtherBefore, 10);

    // 勝率を算出する
    let Ea = 1 / (1 + Math.pow(10, (ratingOtherBefore - ratingYoursBefore)/400));

    // 勝数
    let Sa = (result == 1) ? 1 : 0;

    // 新しいレーティング
    let Rn = ratingYoursBefore + (K * (Sa - Ea));

    console.log('ratingYoursBefore', ratingYoursBefore);
    console.log('ratingOtherBefore', ratingOtherBefore);
    console.log('result', result);
    console.log('Ea', Ea);
    console.log('Sa', Sa);
    console.log('Rn', Rn);

    return Rn;
  },
  round(i) {
    'use strict';

    return Math.round(i*10)/10;
  }
};
