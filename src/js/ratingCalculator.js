export function calcRating(ratingYoursBefore, ratingOtherBefore, result) {

    const K = 12; // 16
    ratingYoursBefore = parseInt(ratingYoursBefore, 10);
    ratingOtherBefore = parseInt(ratingOtherBefore, 10);

    // 勝率を算出する
    let Ea = 1 / (1 + Math.pow(10, (ratingOtherBefore - ratingYoursBefore)/400));

    // 勝数
    let Sa = (result == 1) ? 1 : 0;

    // 新しいレーティング
    let Rn = ratingYoursBefore + (K * (Sa - Ea));

    console.log('ratingYoursBefore', ratingYoursBefore,
        'ratingOtherBefore', ratingOtherBefore,
        'result', result,
        'Ea', Ea,
        'Sa', Sa,
        'Rn', Rn
    );

    return Rn;
}

export function round(i) {

    return Math.round(i*10)/10;

}
