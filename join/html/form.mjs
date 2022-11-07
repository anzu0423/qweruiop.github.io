export function formData() {
    let formData = {
        default: {
            title: '基本情報の入力',
            description: 'TRENDcreateへの参加に必要な情報を入力してください。',
            questions: [
                {
                    title: '活動名',
                    name: 'name',
                    type: 'text',
                    placeholder: '(もちろん偽名可)',
                    info: '活動名は、TRENDcreateの活動ページに表示されます。',
                }

            ]
        }
    }

    return formData;
}



// 定義
const formDataTmp = {
    default: { // セクション名 defaultは最初に読み込まれるセクションのため必須である
        title: '基本情報の入力', // セクションのタイトル
        description: 'TRENDcreateへの参加に必要な情報を入力してください。', // セクションの説明
        questions: [ // セクションに含まれる質問
            {
                title: '活動名', // 質問のタイトル
                name: 'name', // 質問の名前(jsで参照するときに使う)
                type: 'text', // 質問のタイプ htmlのinputタグのtype属性と同じ(オリジナルも作れる)
                placeholder: '(もちろん偽名可)', // 質問のプレースホルダー
                info: '活動名は、TRENDcreateの活動ページに表示されます。', // 質問の説明 htmlのinputの横に⒤のマークで表示される 内容はホバーで表示される
            }
        ]
    }
}