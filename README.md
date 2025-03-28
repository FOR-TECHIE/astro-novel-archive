# ソフトウェア開発者のための小説サイトテンプレート

このテンプレートは、ソフトウェア開発者をはじめとするプログラミングに知見のあるヒトのための小説サイトテンプレートです。

## コンセプト

- mdファイル（Markdownファイル）を放りこむだけで、静的サイトが生成される
- 導入は手間だが、一度立ち上げれば更新（小説作品掲載）は簡単
- カスタマイズ性は最低限
- ソースコードはすべてGitで管理できる
- mdファイルをGitへ登録することで自動デプロイも可能
- 小説本文をメインとしたシンプルな見た目のサイトデザイン

以上が核となるコンセプトです。

あくまで「ソフトウェア開発者をはじめとするプログラミングに知見のあるヒト」のための「小説サイト」テンプレートです。

## 注意事項
このテンプレートは、プログラミングに抵抗感のあるヒトには向いていないですし、イラストや漫画を掲載するサイトには適していませんので、ご承知おきください。

また、カスタマイズ性が最低限であるため（柔軟なつくりをしていないため）、サイトデザインを変更したい場合は、Astro、JS/TS、HTML/CSSについての知識が必要となります。

## 前提環境

- Node.js
- pnpm（おそらくnpmでも大丈夫です）

## 導入方法

0. お手元にNode.js開発環境を準備する
0. このテンプレートを取得する（GitHubで公開しているので、直接ダウンロードするか、Gitでクローンしてください）
0. 必要なパッケージをインストールする
```
pnpm install
```
0. 開発サーバーを立ち上げる
```
pnpm dev
```
0. 立ち上げた開発サーバーにアクセスし、ベースとなるサイトが動いていることを確認する


## ディレクトリ構成

### src/config.ts

サイトの基本情報を記載するファイルです。

### src/contents

サイトに掲載するコンテンツを格納したディレクトリです。

### src/contents/topContents

トップページに表示されるコンテンツファイルを格納します。
トップページに表示するコンテンツは、`src/config.ts`の`topContents`から設定します。

サイトについての説明（About）やお知らせ、更新履歴（Topics）などを掲載することを想定しています。

### src/contents/works

サイトのメインコンテンツである小説本文を掲載したmdファイルを格納します。

このディレクトリの下にサブディレクトリを設けると、ディレクトリに分けて小説作品が一覧化されます（カテゴリごとに表示される）。

カテゴリの設定は、`src/work.config.ts`の`categories`から設定します。













## 運用方法






# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
