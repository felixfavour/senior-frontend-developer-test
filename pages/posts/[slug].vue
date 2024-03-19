<template>
  <div class="h-screen max-w-[600px] mx-auto py-12">
    <div class="author flex items-center gap-3">
      <NuxtImg
        :src="post?.user.avatar"
        alt="Avatar of blog author"
        class="avatar rounded-full w-[50px] min-w-[50px] h-[50px] bg-gray-200 object-cover"
      ></NuxtImg>
      <div class="texts">
        <p class="font-semibold">
          {{ post?.user.firstName }} {{ post?.user.lastName }}
        </p>
        <div class="text-sm text-gray-500">
          {{ useFormattedTime(post?.publishedAt, "NORMAL") }}
        </div>
      </div>
    </div>

    <h1 class="text-3xl font-bold my-6">{{ post?.title }}</h1>

    <NuxtImg :src="post?.image" class="rounded-2xl mb-6"> </NuxtImg>

    <div class="html-content pb-12" v-html="post?.content"></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData("one-post", () =>
  $fetch(`/api/posts/${route.params.slug}`, {
    query: {
      include: "user",
      select: "id,title,content,publishedAt,image",
    },
  })
)
</script>

<style>
@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&family=Inter:wght@400;500;600;700&display=swap";

.html-content {
  /*light*/
  color-scheme: light;
  --color-prettylights-syntax-comment: #57606a;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-entity: #6639ba;
  --color-prettylights-syntax-storage-modifier-import: #24292f;
  --color-prettylights-syntax-entity-tag: #116329;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #24292f;
  --color-prettylights-syntax-markup-bold: #24292f;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #eaeef2;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
  --color-fg-default: #1f2328;
  --color-fg-muted: #656d76;
  --color-fg-subtle: #6e7781;
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-border-muted: hsla(210, 18%, 87%, 1);
  --color-neutral-muted: rgba(175, 184, 193, 0.2);
  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-success-fg: #1a7f37;
  --color-success-emphasis: #1f883d;
  --color-attention-fg: #9a6700;
  --color-attention-emphasis: #9a6700;
  --color-attention-subtle: #fff8c5;
  --color-danger-fg: #d1242f;
  --color-danger-emphasis: #cf222e;
  --color-done-fg: #8250df;
  --color-done-emphasis: #8250df;
}

.html-content .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.html-content h1:hover .anchor .octicon-link:before,
.html-content h2:hover .anchor .octicon-link:before,
.html-content h3:hover .anchor .octicon-link:before,
.html-content h4:hover .anchor .octicon-link:before,
.html-content h5:hover .anchor .octicon-link:before,
.html-content h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: " ";
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.html-content details,
.html-content figcaption,
.html-content figure {
  display: block;
}

.html-content summary {
  display: list-item;
}

.html-content [hidden] {
  display: none !important;
}

.html-content a {
  background-color: transparent;
  color: var(--color-accent-fg);
  text-decoration: none;
}

.html-content b,
.html-content strong {
  font-weight: var(--base-text-weight-semibold, 600);
}

.html-content dfn {
  font-style: italic;
}

.html-content h1 {
  margin: 0.67em 0;
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: 0.3em;
  font-size: 2em;
}

.html-content mark {
  background-color: var(--color-attention-subtle);
  color: var(--color-fg-default);
}

.html-content small {
  font-size: 90%;
}

.html-content sub,
.html-content sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.html-content sub {
  bottom: -0.25em;
}

.html-content sup {
  top: -0.5em;
}

.html-content img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: var(--color-canvas-default);
}

.html-content code,
.html-content kbd,
.html-content pre,
.html-content samp {
  font-family: monospace;
  font-size: 1em;
}

.html-content figure {
  margin: 1em 40px;
}

.html-content hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: var(--color-border-default);
  border: 0;
}

.html-content input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.html-content [type="button"],
.html-content [type="reset"],
.html-content [type="submit"] {
  -webkit-appearance: button;
  appearance: button;
}

.html-content [type="checkbox"],
.html-content [type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

.html-content [type="number"]::-webkit-inner-spin-button,
.html-content [type="number"]::-webkit-outer-spin-button {
  height: auto;
}

.html-content [type="search"]::-webkit-search-cancel-button,
.html-content [type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.html-content ::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

.html-content ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.html-content a:hover {
  text-decoration: underline;
}

.html-content ::placeholder {
  color: var(--color-fg-subtle);
  opacity: 1;
}

.html-content hr::before {
  display: table;
  content: "";
}

.html-content hr::after {
  display: table;
  clear: both;
  content: "";
}

.html-content table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.html-content td,
.html-content th {
  padding: 0;
}

.html-content details summary {
  cursor: pointer;
}

.html-content details:not([open]) > *:not(summary) {
  display: none !important;
}

.html-content a:focus,
.html-content [role="button"]:focus,
.html-content input[type="radio"]:focus,
.html-content input[type="checkbox"]:focus {
  outline: 2px solid var(--color-accent-fg);
  outline-offset: -2px;
  box-shadow: none;
}

.html-content a:focus:not(:focus-visible),
.html-content [role="button"]:focus:not(:focus-visible),
.html-content input[type="radio"]:focus:not(:focus-visible),
.html-content input[type="checkbox"]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.html-content a:focus-visible,
.html-content [role="button"]:focus-visible,
.html-content input[type="radio"]:focus-visible,
.html-content input[type="checkbox"]:focus-visible {
  outline: 2px solid var(--color-accent-fg);
  outline-offset: -2px;
  box-shadow: none;
}

.html-content a:not([class]):focus,
.html-content a:not([class]):focus-visible,
.html-content input[type="radio"]:focus,
.html-content input[type="radio"]:focus-visible,
.html-content input[type="checkbox"]:focus,
.html-content input[type="checkbox"]:focus-visible {
  outline-offset: 0;
}

.html-content kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  line-height: 10px;
  color: var(--color-fg-default);
  vertical-align: middle;
  background-color: var(--color-canvas-subtle);
  border: solid 1px var(--color-neutral-muted);
  border-bottom-color: var(--color-neutral-muted);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
}

.html-content h1,
.html-content h2,
.html-content h3,
.html-content h4,
.html-content h5,
.html-content h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: var(--base-text-weight-semibold, 600);
  line-height: 1.25;
}

.html-content h2 {
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: 0.3em;
  font-size: 1.5em;
}

.html-content h3 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1.25em;
}

.html-content h4 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1em;
}

.html-content h5 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 0.875em;
}

.html-content h6 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 0.85em;
  color: var(--color-fg-muted);
}

.html-content p {
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "IBM Plex Serif", serif;
  line-height: 1.7rem;
}

.html-content p > * {
  margin-top: 0;
  margin-bottom: 10px;
  font-family: "IBM Plex Serif", serif;
}

.html-content blockquote {
  margin: 0;
  padding: 0 1em;
  color: var(--color-fg-muted);
  border-left: 0.25em solid var(--color-border-default);
}

.html-content ul,
.html-content ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
  font-family: "IBM Plex Serif", serif;
  line-height: 1.7rem;
}

.html-content ul {
  list-style-type: disc;
}

.html-content ol {
  list-style-type: numeric;
}

.html-content ol ol,
.html-content ul ol {
  list-style-type: lower-roman;
}

.html-content ul ul ol,
.html-content ul ol ol,
.html-content ol ul ol,
.html-content ol ol ol {
  list-style-type: lower-alpha;
}

.html-content dd {
  margin-left: 0;
}

.html-content tt,
.html-content code,
.html-content samp {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  font-size: 12px;
}

.html-content pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
  font-size: 12px;
  word-wrap: normal;
}

.html-content .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.html-content input::-webkit-outer-spin-button,
.html-content input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.html-content .mr-2 {
  margin-right: var(--base-size-8, 8px) !important;
}

.html-content::before {
  display: table;
  content: "";
}

.html-content::after {
  display: table;
  clear: both;
  content: "";
}

.html-content > *:first-child {
  margin-top: 0 !important;
}

.html-content > *:last-child {
  margin-bottom: 0 !important;
}

.html-content a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.html-content .absent {
  color: var(--color-danger-fg);
}

.html-content .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}

.html-content .anchor:focus {
  outline: none;
}

.html-content p,
.html-content blockquote,
.html-content ul,
.html-content ol,
.html-content dl,
.html-content table,
.html-content pre,
.html-content details {
  margin-top: 0;
  margin-bottom: 16px;
}

.html-content blockquote > :first-child {
  margin-top: 0;
}

.html-content blockquote > :last-child {
  margin-bottom: 0;
}

.html-content h1 .octicon-link,
.html-content h2 .octicon-link,
.html-content h3 .octicon-link,
.html-content h4 .octicon-link,
.html-content h5 .octicon-link,
.html-content h6 .octicon-link {
  color: var(--color-fg-default);
  vertical-align: middle;
  visibility: hidden;
}

.html-content h1:hover .anchor,
.html-content h2:hover .anchor,
.html-content h3:hover .anchor,
.html-content h4:hover .anchor,
.html-content h5:hover .anchor,
.html-content h6:hover .anchor {
  text-decoration: none;
}

.html-content h1:hover .anchor .octicon-link,
.html-content h2:hover .anchor .octicon-link,
.html-content h3:hover .anchor .octicon-link,
.html-content h4:hover .anchor .octicon-link,
.html-content h5:hover .anchor .octicon-link,
.html-content h6:hover .anchor .octicon-link {
  visibility: visible;
}

.html-content h1 tt,
.html-content h1 code,
.html-content h2 tt,
.html-content h2 code,
.html-content h3 tt,
.html-content h3 code,
.html-content h4 tt,
.html-content h4 code,
.html-content h5 tt,
.html-content h5 code,
.html-content h6 tt,
.html-content h6 code {
  padding: 0 0.2em;
  font-size: inherit;
}

.html-content summary h1,
.html-content summary h2,
.html-content summary h3,
.html-content summary h4,
.html-content summary h5,
.html-content summary h6 {
  display: inline-block;
}

.html-content summary h1 .anchor,
.html-content summary h2 .anchor,
.html-content summary h3 .anchor,
.html-content summary h4 .anchor,
.html-content summary h5 .anchor,
.html-content summary h6 .anchor {
  margin-left: -40px;
}

.html-content summary h1,
.html-content summary h2 {
  padding-bottom: 0;
}

.html-content ul.no-list,
.html-content ol.no-list {
  padding: 0;
  list-style-type: none;
}

.html-content ol[type="a s"] {
  list-style-type: lower-alpha;
}

.html-content ol[type="A s"] {
  list-style-type: upper-alpha;
}

.html-content ol[type="i s"] {
  list-style-type: lower-roman;
}

.html-content ol[type="I s"] {
  list-style-type: upper-roman;
}

.html-content ol[type="1"] {
  list-style-type: decimal;
}

.html-content div > ol:not([type]) {
  list-style-type: decimal;
}

.html-content ul ul,
.html-content ul ol,
.html-content ol ol,
.html-content ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.html-content li > p {
  margin-top: 16px;
}

.html-content li + li {
  margin-top: 0.25em;
}

.html-content dl {
  padding: 0;
}

.html-content dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: var(--base-text-weight-semibold, 600);
}

.html-content dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.html-content table th {
  font-weight: var(--base-text-weight-semibold, 600);
}

.html-content table th,
.html-content table td {
  padding: 6px 13px;
  border: 1px solid var(--color-border-default);
}

.html-content table td > :last-child {
  margin-bottom: 0;
}

.html-content table tr {
  background-color: var(--color-canvas-default);
  border-top: 1px solid var(--color-border-muted);
}

.html-content table tr:nth-child(2n) {
  background-color: var(--color-canvas-subtle);
}

.html-content table img {
  background-color: transparent;
}

.html-content img[align="right"] {
  padding-left: 20px;
}

.html-content img[align="left"] {
  padding-right: 20px;
}

.html-content .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.html-content span.frame {
  display: block;
  overflow: hidden;
}

.html-content span.frame > span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid var(--color-border-default);
}

.html-content span.frame span img {
  display: block;
  float: left;
}

.html-content span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: var(--color-fg-default);
}

.html-content span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.html-content span.align-center > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.html-content span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.html-content span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.html-content span.align-right > span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.html-content span.align-right span img {
  margin: 0;
  text-align: right;
}

.html-content span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.html-content span.float-left span {
  margin: 13px 0 0;
}

.html-content span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.html-content span.float-right > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.html-content code,
.html-content tt {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: var(--color-neutral-muted);
  border-radius: 6px;
}

.html-content code br,
.html-content tt br {
  display: none;
}

.html-content del code {
  text-decoration: inherit;
}

.html-content samp {
  font-size: 85%;
}

.html-content pre code {
  font-size: 100%;
}

.html-content pre > code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.html-content .highlight {
  margin-bottom: 16px;
}

.html-content .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.html-content .highlight pre,
.html-content pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-subtle);
  border-radius: 6px;
}

.html-content pre code,
.html-content pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.html-content .csv-data td,
.html-content .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.html-content .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: var(--color-canvas-default);
  border: 0;
}

.html-content .csv-data tr {
  border-top: 0;
}

.html-content .csv-data th {
  font-weight: var(--base-text-weight-semibold, 600);
  background: var(--color-canvas-subtle);
  border-top: 0;
}

.html-content [data-footnote-ref]::before {
  content: "[";
}

.html-content [data-footnote-ref]::after {
  content: "]";
}

.html-content .footnotes {
  font-size: 12px;
  color: var(--color-fg-muted);
  border-top: 1px solid var(--color-border-default);
}

.html-content .footnotes ol {
  padding-left: 16px;
}

.html-content .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}

.html-content .footnotes li {
  position: relative;
}

.html-content .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid var(--color-accent-emphasis);
  border-radius: 6px;
}

.html-content .footnotes li:target {
  color: var(--color-fg-default);
}

.html-content .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.html-content .pl-c {
  color: var(--color-prettylights-syntax-comment);
}

.html-content .pl-c1,
.html-content .pl-s .pl-v {
  color: var(--color-prettylights-syntax-constant);
}

.html-content .pl-e,
.html-content .pl-en {
  color: var(--color-prettylights-syntax-entity);
}

.html-content .pl-smi,
.html-content .pl-s .pl-s1 {
  color: var(--color-prettylights-syntax-storage-modifier-import);
}

.html-content .pl-ent {
  color: var(--color-prettylights-syntax-entity-tag);
}

.html-content .pl-k {
  color: var(--color-prettylights-syntax-keyword);
}

.html-content .pl-s,
.html-content .pl-pds,
.html-content .pl-s .pl-pse .pl-s1,
.html-content .pl-sr,
.html-content .pl-sr .pl-cce,
.html-content .pl-sr .pl-sre,
.html-content .pl-sr .pl-sra {
  color: var(--color-prettylights-syntax-string);
}

.html-content .pl-v,
.html-content .pl-smw {
  color: var(--color-prettylights-syntax-variable);
}

.html-content .pl-bu {
  color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
}

.html-content .pl-ii {
  color: var(--color-prettylights-syntax-invalid-illegal-text);
  background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
}

.html-content .pl-c2 {
  color: var(--color-prettylights-syntax-carriage-return-text);
  background-color: var(--color-prettylights-syntax-carriage-return-bg);
}

.html-content .pl-sr .pl-cce {
  font-weight: bold;
  color: var(--color-prettylights-syntax-string-regexp);
}

.html-content .pl-ml {
  color: var(--color-prettylights-syntax-markup-list);
}

.html-content .pl-mh,
.html-content .pl-mh .pl-en,
.html-content .pl-ms {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-heading);
}

.html-content .pl-mi {
  font-style: italic;
  color: var(--color-prettylights-syntax-markup-italic);
}

.html-content .pl-mb {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-bold);
}

.html-content .pl-md {
  color: var(--color-prettylights-syntax-markup-deleted-text);
  background-color: var(--color-prettylights-syntax-markup-deleted-bg);
}

.html-content .pl-mi1 {
  color: var(--color-prettylights-syntax-markup-inserted-text);
  background-color: var(--color-prettylights-syntax-markup-inserted-bg);
}

.html-content .pl-mc {
  color: var(--color-prettylights-syntax-markup-changed-text);
  background-color: var(--color-prettylights-syntax-markup-changed-bg);
}

.html-content .pl-mi2 {
  color: var(--color-prettylights-syntax-markup-ignored-text);
  background-color: var(--color-prettylights-syntax-markup-ignored-bg);
}

.html-content .pl-mdr {
  font-weight: bold;
  color: var(--color-prettylights-syntax-meta-diff-range);
}

.html-content .pl-ba {
  color: var(--color-prettylights-syntax-brackethighlighter-angle);
}

.html-content .pl-sg {
  color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
}

.html-content .pl-corl {
  text-decoration: underline;
  color: var(--color-prettylights-syntax-constant-other-reference-link);
}

.html-content g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: var(--base-text-weight-normal, 400);
  line-height: 1;
  vertical-align: -0.075em;
}

.html-content g-emoji img {
  width: 1em;
  height: 1em;
}

.html-content .task-list-item {
  list-style-type: none;
}

.html-content .task-list-item label {
  font-weight: var(--base-text-weight-normal, 400);
}

.html-content .task-list-item.enabled label {
  cursor: pointer;
}

.html-content .task-list-item + .task-list-item {
  margin-top: 4px;
}

.html-content .task-list-item .handle {
  display: none;
}

.html-content .task-list-item-checkbox {
  margin: 0 0.2em 0.25em -1.4em;
  vertical-align: middle;
}

.html-content .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em 0.25em 0.2em;
}

.html-content .contains-task-list {
  position: relative;
}

.html-content .contains-task-list:hover .task-list-item-convert-container,
.html-content
  .contains-task-list:focus-within
  .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.html-content ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.html-content .markdown-alert {
  padding: var(--base-size-8) var(--base-size-16);
  margin-bottom: 16px;
  color: inherit;
  border-left: 0.25em solid var(--color-border-default);
}

.html-content .markdown-alert > :first-child {
  margin-top: 0;
}

.html-content .markdown-alert > :last-child {
  margin-bottom: 0;
}

.html-content .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: var(--base-text-weight-medium, 500);
  align-items: center;
  line-height: 1;
}

.html-content .markdown-alert.markdown-alert-note {
  border-left-color: var(--color-accent-emphasis);
}

.html-content .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: var(--color-accent-fg);
}

.html-content .markdown-alert.markdown-alert-important {
  border-left-color: var(--color-done-emphasis);
}

.html-content .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: var(--color-done-fg);
}

.html-content .markdown-alert.markdown-alert-warning {
  border-left-color: var(--color-attention-emphasis);
}

.html-content .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: var(--color-attention-fg);
}

.html-content .markdown-alert.markdown-alert-tip {
  border-left-color: var(--color-success-emphasis);
}

.html-content .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: var(--color-success-fg);
}

.html-content .markdown-alert.markdown-alert-caution {
  border-left-color: var(--color-danger-emphasis);
}

.html-content .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: var(--color-danger-fg);
}
</style>
