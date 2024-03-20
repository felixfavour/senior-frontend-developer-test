<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
.html-content {
  /*light*/
  color-scheme: light;
  --color-prettylights-syntax-comment: #57606a;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
  --color-fg-default: #1f2328;
  --color-fg-muted: #656d76;
  --color-fg-subtle: #333333;
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f5f5f5;
  --color-border-default: #d0d7de;
  --color-border-muted: hsla(210, 18%, 87%, 1);
  --color-neutral-muted: rgba(175, 184, 193, 0.2);
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

.html-content h1 {
  margin: 0.67em 0;
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: 0.3em;
  font-size: 2em;
}

.html-content img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: var(--color-canvas-default);
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.html-content code,
.html-content kbd,
.html-content pre,
.html-content samp {
  font-family: monospace;
  font-size: 1em;
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
  line-height: 1.7rem;
}

.html-content p > * {
  margin-top: 0;
  margin-bottom: 10px;
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
  margin-bottom: 1.5rem;
  padding-left: 2em;
  line-height: 1.7rem;
}

.html-content ul {
  list-style-type: disc;
}

.html-content ol {
  list-style-type: numeric;
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

.html-content pre {
  margin-bottom: 1rem;
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
</style>
