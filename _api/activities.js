
// [
//     'Title',
//     'Description',
//     'status',
//     'image (xxx.yyy)',
//     'category [dev, variety, other]',
//     'URL',
// ]

export function getActivities() {
    let activities = [
        [
            'Tc広報部☆',
            'TRENDcreateの広報部長がTwitterで自由気ままに活動しています。',
            '活動中',
            'tc_kouhoubu.jpg',
            'variety',
            'https://twitter.com/Tc_Kouhoubu',
        ],
        [
            'Tcお嬢様部☆',
            'TRENDcreateのメンバーがお嬢様としてTwitterで活動しています。',
            '活動中',
            'tc_ojousama.jpg',
            'variety',
            'https://twitter.com/Tc_OjosamaBuriB',
        ],
        [
            'RYOKUCHAT',
            'RYOKUCHATは、通常の通信で手軽に楽しめるNomalエディションと、匿名かネットワークを用いて通信するTorエディションがある、新しいチャットサービスです。',
            'リリース前',
            'ryokuchat.svg',
            'dev',
            null,
        ],
        //[
        //    'MATCHAT',
        //    'TRENDcreateのMisskeyインスタンスです。',
        //    '開発中',
        //    'matchat.svg',
        //    'dev',
        //    'https://matchat.trendcreate.net',
        //]
    ];

    return activities;
}

export default getActivities();