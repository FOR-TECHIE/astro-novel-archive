export const siteConfig = {

    // サイト名
    title: "MY SITE TITLE",

    // サイトのサブタイトル
    subtitle: "blah blah",

    // サイトの管理者名
    author: "alice ada",

    // サイト開設日
    since: "2025",

    // サイトの説明文
    description: "This is a description of my site",

    // ナビゲーションメニュー
    navbar: {
        autoGenerate: false, // topContentsへのページ内リンクのナビゲーションメニューを自動生成
        addedMenus: [ // 自動生成したナビゲーションの後部へ追加される項目
            { label: "X", url: "https://google.com" },
            { label: "pixiv", url: "https://google.com" },
            { label: "サンプル", jump: "#samples" },
        ],
        manualMenus: [ // 自動生成しない場合は手動で設定
            // 設定フォーマット -> { label: "ナビゲーションラベル", url: "https://任意のURL" }
            // 設定フォーマット -> { label: "ナビゲーションラベル", jump: "ページ内ジャンプ先（先頭に#をつけること）" }
            { label: "Works", url: "/works" },
            { label: "About", jump: "#about" },
            { label: "Samples", jump: "#samples" },
        ],
    },

    // トップページに表示されるコンテンツリスト
    // 読込ファイルは `src/contents/topContents`ディレクトリ内に配置します
    // 読込可能なファイル形式は`.html`または`.md`です
    topContents: [
        // 設定フォーマット -> { title: "タイトル", filename: "読込ファイル" },
        // 小説作品一覧を表示したい場合 -> { title: "任意の文字列", filename: "Works.astro" }
        { title: "Topics", filename: "topics.md", id: "topics" },
        //{ title: "Works", filename: "Works.astro", id: "works" },
        { title: "About", filename: "about.html", id: "about" },
        { title: "Samples", filename: "samples.html", id: "samples" },
    ],

    customDir: "custom/"
};
