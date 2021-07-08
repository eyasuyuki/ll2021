公式ドキュメント
====

# ディレクトリ構成

- event // イベント概要
- sessions // セッション概要
- site // ll.jus.or.jp アーカイブ

# 使用方法

1. スタッフはこのリポジトリをフォークしてください。
1. ドキュメントをコミットしたらPRを送ってください。マージします。
1. イベント概要、セッション概要はそれぞれのディレクトリに```README.md```としてコミットしてもらえばGitHub上でそのまま表示できます。
1. リポジトリ運営方法についての疑問等はIssueとして書いてください。


# 必要な開発環境

- Node.js 12~ // 必須
- yarn // 必須
- Docker // ローカルApacheでテストするためには必要

# ディレクトリ構成

```
staff
├── README.md             //     このファイル
├── develop_apache_conf
│   └── httpd.conf       //     Dockerコンテナで使うhttpd.conf 
├── docker-compose.yml    //     テスト用ApacheのためのDocker定義ファイル
├── event
│   └── README.md        // (1) Markdownソース
├── md2html.js            // (2) 変換用スクリプト
├── package.json
├── site                  //     ll.jus.or.jpドキュメントルート
│   ├── 2021
│   │   ├── css
│   │   │   ├── materialize.css
│   │   │   └── style.css
│   │   ├── index.html  // (3) ターゲット
│   │   └── js
│   │       ├── init.js
│   │       └── materialize.js
│   中略
│   └── .htaccess       //     トップページを/2021/にリダイレクト
└── yarn.lock
```

- ドキュメントルート(```site```)配下に各年ごとのサブディレクトリがある構成です
- ドキュメントルートには```.htaccess```を置き最新年のディレクトリにリダイレクトします
- 新たに```2019```ディレクトリを作り、ドキュメントルートにあった```index.html```、WordPress用ファイル、```history```ディレクトリを移動しました

# HTMLの更新手順

1. 記事本文を修正したい場合はMarkdown形式のソースコード```event/README.md```を編集します。ただしこれは記事本文のみのソースであり、HTML全体のソースは```md2html.js```の中に直に書いてあります。記事本文以外のHTMLを編集したい場合は```md2html.js```をコード修正する必要があります
1. ```yarn run md2html```コマンドで```md2html.js```を実行します
1. ```site/2021/index.html```が生成されます

# ローカルApacheによる表示テスト

1. ```docker-compose up -d```コマンドでApacheコンテナを起動します
1. ```site```配下をドキュメントルートにマウントした```httpd```が起動されます
1. ```http://localhost:8080/``` でローカルApacheにアクセスできます
1. DockerコンテナのApacheの設定を変えたい場合は```develop_apache_conf/httpd.conf```を編集してDockerコンテナを再起動してください