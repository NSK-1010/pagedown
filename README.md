# Pagedown
Markdownでの記述に特化したCMS

## What this?
上に書いたようにMarkdownでの記述に特化したCMSです。

カスタムも簡単です。

## How to use
### 使い始める
まず、このリポジトリをクローンし、`README.md`と`LICENSE`を削除してください。

次に、`settings/setting.js`を改変し、自分の思い通りに設定して下さい。

### ページを作成する
Markdown形式のファイル(拡張子:`.md`)を作成して下さい。

続いて、先程作ったMarkdown形式のファイルを改変していきます。

下記の文字列を最初に追加して下さい。(中にあるTは誤字じゃないです)
```markdown
---
title: "タイトル"
date: 日付(年(二桁)-月(二桁)-日(二桁)T時(二桁):分(二桁):分(二桁)タイムゾーン(日本だったら+09:00))
---
```

追加したら、Markdownで書き進めて下さい(HTMLタグを使うことも可)。

固定ページの場合はこれで完了です。

メニューに追加することもできます。

投稿ページの場合は、`docs/blog/js/list.js`に、コメントアウトに従って書き加えれば完了です。

## For people who create non-Japanese pages
Change the `lang` attribute of the `<html>` tag in `index.html` to the language you want to create.

## Credits
#### Marked.js
[ホームページ](https://marked.js.org/)

#### JS-YAML
[GitHub](https://github.com/nodeca/js-yaml)

#### Pagedown
&copy;2021 Piano Nekomiya
