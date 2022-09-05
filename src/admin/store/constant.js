const nameSpace = 'HOME_MANAGEMENT_PAGE';

export const CHANGE_SCHEMA = `${nameSpace}/CHANGE_SCHEMA`
export const CHANGE_BLOG_AREA_LIST = `${nameSpace}/CHANGE_BLOG_AREA_LIST`;
export const ADD_BLOG_AREA_ITEM = `${nameSpace}/ADD_BLOG_AREA_ITEM`
export const CHANGE_BLOG_AREA_ITEM = `${nameSpace}/CHANGE_BLOG_AREA_ITEM`;
export const DELETE_BLOG_AREA_ITEM = `${nameSpace}/DELETE_BLOG_AREA_ITEM`;

export const DEFAULT_SCHEMA = {
  "id": "eb71b5d4-bc43-4f2e-bbb7-f8bfc49bd8b3",
  "name": "Page",
  "attributes": {},
  "children":
      [{
        "id": "048f3360-3e98-44ac-abd7-b4ca025c33e7",
        "name": "Banner",
        "attributes": {
          "title": "私のブログ",
          "desc": "主にフルスタックをやっています( Java / React / Ruby / iOS )",
          "showAvatar": true,
          "avatarUrl": "avatar.jpeg",
          "bgUrl": "bg.jpeg",
          "bgHeight": "530px"
        },
        "children": [],
        "chosen": false,
        "selected": false
      }, {
        "id": "1b2c5b2e-37ab-462c-85ad-d5c9e9205676",
        "name": "BlogList",
        "attributes": {},
        "children": [
          {
            "id": "6297c7d3-cac9-419f-8764-6bd1e965b82a",
            "title": "01. React Blog",
            "desc": "React (リアクト) は、Meta（旧Facebook）とコミュニティによって開発されているユーザインタフェース構築のためのJavaScriptライブラリである。 React.jsまたはReactJSの名称でも知られている。Reactはシングルページアプリケーションやモバイルアプリケーションの開発におけるベースとして使用することができる。複雑なReactアプリケーションでは通常、状態管理（英語版）・ルーティング・APIとの対話のための追加のライブラリが必要となる。",
            "imgUrl": "https://asia-northeast1-zenn-dev-production.cloudfunctions.net/twemoji/💡.svg",
            "link": "https://ja.wikipedia.org/wiki/React"
          },
          {
            "id": "a7642565-a03c-4acd-837d-5aa309d40f27",
            "title": "02. Flutter Blog",
            "desc": "Flutterは、Googleによって開発されたフリーかつオープンソースのUIのSDKである。単一のコードベースから、Android、iOS、Linux、macOS、Windows、Google Fuchsia向けのクロスプラットフォームアプリケーションを開発するために利用される。2018年12月4日、ロンドンで開催されたFlutter Live '18にて、初の正式版となるFlutter 1.0のリリースが発表された。",
            "imgUrl": "https://asia-northeast1-zenn-dev-production.cloudfunctions.net/twemoji/🌃.svg",
            "link": "https://ja.wikipedia.org/wiki/Flutter"
          },
          {
            "id": "30b9f32c-71fc-4dc3-bf9f-aa5dbf237568",
            "title": "03.Vue Blog",
            "desc": "Vue.jsまたはVueは、Webアプリケーションにおけるユーザーインターフェイスを構築するための、オープンソースのJavaScriptフレームワークである。他のJavaScriptライブラリを使用するプロジェクトへの導入において、容易になるように設計されている。一方で高機能なシングルページアプリケーション（SPA）を構築することも可能である。",
            "imgUrl": "https://asia-northeast1-zenn-dev-production.cloudfunctions.net/twemoji/📚.svg",
            "link": "https://ja.wikipedia.org/wiki/Vue.js"
          },
          {
            "id": "117a0dc8-0fe4-4387-874c-d57843abce7d",
            "title": "04. TypeScript Blog",
            "desc": "TypeScriptはマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。C#のリードアーキテクトであり、DelphiとTurbo Pascalの開発者でもあるアンダース・ヘルスバーグがTypeScriptの開発に関わっている。TypeScriptはクライアントサイド、あるいはサーバサイド (Node.js) で実行されるJavaScriptアプリケーションの開発に利用できる。",
            "imgUrl": "https://asia-northeast1-zenn-dev-production.cloudfunctions.net/twemoji/📝.svg",
            "link": "https://ja.wikipedia.org/wiki/TypeScript"
          },
          {
            "id": "d613302c-31de-43b7-a776-d5c85343335b",
            "title": "05. Swift Blog",
            "desc": "Swiftは、AppleのiOSおよびmacOS、Linux、Windowsで利用出来るプログラミング言語である。Worldwide Developers Conference (WWDC) 2014で発表された。Apple製OS上で動作するアプリケーションの開発に従来から用いられていたObjective-CやObjective-C++、C言語と共存できるように、共通のObjective-Cランタイムライブラリが使用されている。",
            "imgUrl": "https://asia-northeast1-zenn-dev-production.cloudfunctions.net/twemoji/📲.svg",
            "link": "https://ja.wikipedia.org/wiki/Swift_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)"
          }
        ],
        "chosen": false,
        "selected": false
      }, {
        "id": "a9cfd034-b1c5-46f8-b267-2e583200cd5d",
        "name": "Footer",
        "attributes": {
          copyright: "local.dev"
        },
        "children": [
          {
            id: "08bc09ad-4c3b-423f-82fc-cc8711653743",
            title: "管理ページへ",
            link: "admin.html"
          },
          {
            id: "8a6e76d4-8d5d-4be9-802c-07f3c6e9a628",
            title: "React",
            link: "https://ja.reactjs.org/"
          },
          {
            id: "4d7daf4d-13d0-4d2b-a5fb-7da9273eb880",
            title: "Qiita",
            link: "https://qiita.com/"
          },
          {
            id: "b402dac4-b480-445a-802c-aff9eb03e1ba",
            title: "Google",
            link: "https://www.google.co.jp/"
          }
        ],
        "chosen": false,
        "selected": false
      }]
}


