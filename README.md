<!-- ABOUT THE PROJECT -->
## About The Project

![blog-pic](https://user-images.githubusercontent.com/67742985/212326987-2808dea6-bd7c-4bd3-ab87-1d422abcfa5b.png)


初めて構築した自作ブログです。2022年2月から運用しています。

カスタマイズ機能:
* Google Analyticsの追加
* タグ機能
* カテゴリ機能
* シェアリンク機能
* Twitterタイムライン

<p align="right"><a href="#readme-top">back to top</a></p>



### Built With

* [![gatsbyjs][gatsby]][GATSBY-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development environment
* node.js: v14.21.2
* npm: 6.14.17
* gatsby.js: 4.7.0


<!-- GETTING STARTED -->
## Getting Started

### Development environment
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/yk-mt12/kitsune-blog.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Branch strategy
* 機能開発: feature/ブランチ名
* バグ修正: hotfix/ブランチ名, bug/ブランチ名

## Commit message
```shell
feat: 新しい機能
fix: バグの修正
docs: ドキュメントのみの変更
style: 空白、フォーマット、セミコロン追加など
refactor: 仕様に影響がないコード改善(リファクタ)
perf: パフォーマンス向上関連
test: テスト関連
chore: ビルド、補助ツール、ライブラリ関連
```
```shell
feat: 〇〇なため、△△を追加
ex) 記事の分類ができないため、タグ機能を追加
```
## CI/CD
### Release info
※ masterブランチにマージされた場合, release noteを自動追加
* ブランチ名 feature/~ の場合はenhancementラベル
* fix/~ or hotfix/~ の場合はbugラベル
* バージョン管理: {YYYY.MM.DD}-{当日リリース回数}