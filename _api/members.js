// データ形式(からの場合はnull)
// [
//     'name[活動名]',
//     'category[属性、通常ならnomal、それ以外はカテゴリー名(develops, etc.)]',
//     [role[役職]],
//     '説明',
//     'TwitterのID、@は抜け',
//     egg option[description_edit, ]
// ]

export function getMembers() {
    const members = [
        {
            name: 'akurakuu',
            mail: 'akurakuu@trendcreate.top',
            category: 'nomal',
            role: ['最高責任者', '総務部長'],
            description: 'HTML, CSS, javascriptが好き。RYOKUCHATのUI設計担当。',
            twitter: 'akurakuu',
            egg: ['commandline_flag'],
        },
        {
            name: '下北 杏',
            mail: 'simokita@trendcreate.top',
            category: 'nomal',
            role: ['広報部長'],
            description: 'introductionを入力...',
            twitter: 'Simokita_Anzu',
            egg: ['description_edit'],
        },
        {
            name: '窓辺企鵝',
            mail: 'madobe@trendcreate.top',
            category: 'develops',
            role: ['develops責任者'],
            description: 'RYOKUCHATのシステム部分の担当。',
            twitter: 'yayoidoki_dd23',
        },
        {
            name: 'ひでまる',
            mail: 'puyopuyoslime@trendcreate.top',
            category: 'develops',
            role: ['お嬢様'],
            description: 'GoやRustが好きなVimmer',
            twitter: 'Hidemaru_OwO',
        },
        {
            name: 'すらーぷの妖精',
            category: 'nomal',
            role: ['広報部'],
            twitter: 'surapunoyousei',
        },
        {
            name: 'ときのえき',
            category: 'nomal',
            role: ['総務部'],
            twitter: 'jikantoki',
        },
        {
            name: 'レタスくん',
            category: 'nomal',
            twitter: 'retasu_0141',
        },
        {
            name: 'りすりす/TwoSquirrels',
            category: 'develops',
            description: 'プログラミング依存症の男子高校生りすりすです。',
            twitter: 'TwoSquirrels',
        },
        {
            name: '未知',
            category: 'nomal',
            role: ['総務部'],
            description: 'uxデザイナーしてる高校生',
            twitter: 'michiworld_top',
        },
        {
            name: 'はるさめ',
            category: 'nomal',
            role: ['総務部'],
            twitter: 'HarusameTech',
        },
        {
            name: 'スーパーレインボー',
            category: 'develops',
            twitter: 'x_superrainbow',
        },
        //{
        //    name: 'LAKUさん',
        //    category: 'develops',
        //    description: '適当に「LAKU」とかって言ってもらっても構いません\n年齢 13(中1)\nできること・動画編集\n・Linuxを過去に少しだけ作った\n勉強中のこと・\nweb(HTML,CSS,JS,JA)\n・プログラミング(Python)\n・サーバー運営\n・Blender\n所属グループはVCBornとVARIUS TECHとumiiroとTefaire GroupとCerasus Projectです。',
        //    twitter: 'sakura_05032',
        //},
        {
            name: 'なの',
            category: 'nomal',
            role: ['広報部'],
            twitter: 'nanoberrypi',
        },
        {
            name: '青天目氷空(なばためそら)',
            category: 'nomal',
            role: ['広報部'],
            twitter: 'setup_zip_exe',
        },
        {
            name: '蒼凰',
            category: 'nomal',
            role: ['広報部'],
            description: '蒼凰【あお】って言います。18歳浪人生です。動画編集,3DCG,サーバサイドエンジニアメインに勉強してます',
            twitter: 'Ao_skyblue_pika',
        },
        {
            name: 'そら！',
            mail: 'sora@trendcreate.top',
            category: 'nomal',
            role: ['広報部'],
            twitter: 'pc_sorajp',
        },
        {
            name: 'シレテックス電機情報通信',
            mail: 'xilletex@trendcreate.top',
            category: 'develops',
            role: ['広報部'],
            description: '弱いことに関しては俺が最強',
            twitter: 'xilletex',
        },
        {
            name: 'GrapeApple',
            mail: 'furla@trendcreate.top',
            category: 'develops',
            twitter: 'GrapeApple0',
        },
    ];
    return members;
}

export default getMembers();
