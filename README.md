# Vue3.0 Boilerplate

## Overview

Vue3.0 + Typescript で作る SPA のボイラープレートです

## Requirement

- node.js (version : lts)
- visual studio code
- browser (chrome or chronium or chronium edge)

## Quick start

### Clone the git repository

```sh
git clone git@github.com:DH-CTO-Office/vue-boilerplate.git
cd ./vue-boilerplate
```

### Install node modules

```sh
yarn
```

package manager は yarn の使用を想定しています

npm や pnpm を使用する場合は下記ファイルを修正してください

- ~/package.json

- ~/.github/workflows/ci.yaml

### Start the develop server

```sh
yarn dev
-> Access to http://localhost:3000/
```

## Core Description

### Framework / Module / Library

- `Vue3`
- `Vue Router`
- `Typescript`
- `eslint`
- `prettier`
- `sass`
- `vite`
- `jest`
- `axios`
- `storybook`

### NPM scripts

#### `dev`

```sh
yarn dev
```

開発者モードで Web サーバーを起動

#### `build`

```sh
yarn build [--mode dev | stg | prod]
```

アプリケーションのビルド。ビルド成果物は `dist` ディレクトリに作成されます

#### `serve`

```sh
yarn served [--port <any port>]
```

アプリケーションのプレビュー。`dist`ディレクトリのファイルを <http://localhost:5000> で配信されます

プロダクションビルドで正常に動作するかどうかの確認用コマンドなので本番環境で使用しないでください

#### `test`

```sh
yarn test
```

UnitTest for jest

引数として [Jest CLI オプション](https://jestjs.io/ja/docs/cli) を渡すことができます

TDD/BDD で開発する際は下記コマンドで常にテストを動作させた状態で開発できます

```sh
yarn test --coverage --watchAll
```

#### `lint`

```sh
yarn lint
```

`eslint` + `prettier` を実行

基本的に `vscode` の `format on save` 機能を有効にして、常にコードを整形することを推奨しています

#### `compile`

```sh
yarn compile
```

Typescipt compile を実行

#### `ci`

```sh
yarn ci
```

`yarn test`, `yarn lint`, `yarn compile`を実行

## Build per enviroment

デフォルトで、開発環境(development)・本番環境(production)の環境設定を用意しています

環境変数は `~/vite-env.d.ts` で型を定義し、それぞれの環境設定ファイルで値を設定する

- env.development
- env.production
- env.[your enviroment]

`yarn build` コマンドの `--mode` 引数で環境ごとに成果物をビルドできる

Typescript からは、`import.meta.env.VITE_[variable name]`で変数にアクセス

より詳しい情報が必要な場合、[Vite 公式ドキュメント](https://ja.vitejs.dev/guide/env-and-mode.html)を参照してください

## Build docker image

コンテナベース(nginx)で Web アプリを公開するために Docker のビルド構成ファイルを用意しています

`image build command`

```sh
docker build --build-arg mode=[dev | stg | prd]
```

`nginx`の設定ファイルは `~/nginx`ディレクトリに配置されたものを使用

## Directory structure

```sh
.
├─ .github/
│  └─ workflows/
│     └─ <github workflows (ci/cd etc...)>
│
├─ .storybook/
│  ├─ main.js
│  └─ preview.js
│
├─ .vscode/
│  └─ <visual studio code files>
│
├─ nginx/
│  └─ <nginx config files>
│
├─ public/
│  └─ <product assets>
│
└─ src/
   ├─ apis/
   │  └─ <api modules>
   │
   ├─ components/
   │  ├─ pages/
   │  │  └─ <page component>.vue
   │  └─ <common component>.vue
   │
   ├─ hooks/
   │  └─ <hooks>.ts
   │
   ├─ models/
   │  └─ <typescript interfaces>.ts
   │
   ├─ styles/
   │  └─ <common scss styles>.scss
   │
   └─ tests/
      └─ <test dir>/**/<your tests>.ts

```
