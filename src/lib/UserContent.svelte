<script lang="ts">
  import sanitize, { type IOptions } from "sanitize-html";

  export let content: string;

  const sanitizeOptions: IOptions = {
    allowedTags: sanitize.defaults.allowedTags.concat(["img"]),
    allowedAttributes: { span: ["class"], div: ["class"], code: ["class"] },
  };
</script>

<div>
  {@html sanitize(content, sanitizeOptions)}
  <!-- {@html content} -->
</div>

<style scoped lang="postcss">
  div :global(img) {
    @apply rounded-md my-5;
  }

  div :global(a) {
    @apply underline underline-offset-4 decoration-dotted dark:text-blue-300 text-blue-900 cursor-pointer;
  }

  div :global(strong) {
    @apply font-semibold;
  }

  div :global(p),
  div :global(blockquote) {
    @apply mb-4;
  }

  div :global(h1),
  div :global(h2),
  div :global(h3) {
    @apply mt-5 mb-1;
  }

  div :global(h1),
  div :global(h2) {
    @apply text-2xl font-semibold;
  }

  div :global(h3) {
    @apply text-lg;
  }

  div :global(blockquote) {
    @apply border-l-2 px-4 py-3 italic;
  }

  div :global(blockquote p) {
    @apply m-auto;
  }

  div :global(ul) {
    @apply list-disc list-inside;
  }

  div :global(ol) {
    @apply list-decimal list-inside;
  }

  div :global(thead) {
    @apply text-left;
  }

  div :global(th) {
    @apply font-semibold;
  }

  div :global(th),
  div :global(td) {
    @apply border px-2 py-0.5;
  }

  /*   div :global(pre) {
    @apply text-xs;
  } */

  div :global(hr) {
    @apply my-6;
  }

  div :global(code) {
    @apply bg-zinc-300 dark:bg-zinc-900 p-0.5 px-1 rounded-md;
    font-family: "Source Code Pro", monospace;
  }

  div :global(pre:has(code)) {
    @apply bg-zinc-300 dark:bg-zinc-900 p-2 rounded-md mb-2 text-xs;
    overflow-x: scroll;
  }

  div :global(pre:has(code)::-webkit-scrollbar) {
    display: none;
  }

  div :global(pre:has(code) code) {
    @apply p-0 mb-2;
  }

  div :global(.hljs-comment),
  div :global(.hljs-quote) {
    @apply text-gray-300;
    font-style: italic;
  }

  div :global(.hljs-doctag),
  div :global(.hljs-keyword),
  div :global(.hljs-formula) {
    @apply text-purple-300;
  }

  div :global(.hljs-section),
  div :global(.hljs-name),
  div :global(.hljs-selector-tag),
  div :global(.hljs-deletion),
  div :global(.hljs-subst) {
    @apply text-red-300;
  }

  div :global(.hljs-literal) {
    @apply text-sky-300;
  }

  div :global(.hljs-string),
  div :global(.hljs-regexp),
  div :global(.hljs-addition),
  div :global(.hljs-attribute),
  div :global(.hljs-meta .hljs-string) {
    @apply dark:text-green-300 text-green-600;
  }

  div :global(.hljs-attr),
  div :global(.hljs-variable),
  div :global(.hljs-template-variable),
  div :global(.hljs-type),
  div :global(.hljs-selector-class),
  div :global(.hljs-selector-attr),
  div :global(.hljs-selector-pseudo),
  div :global(.hljs-number) {
    @apply dark:text-orange-300 text-orange-600;
  }

  div :global(.hljs-symbol),
  div :global(.hljs-bullet),
  div :global(.hljs-link),
  div :global(.hljs-meta),
  div :global(.hljs-selector-id),
  div :global(.hljs-title) {
    @apply dark:text-blue-300 text-blue-600;
  }

  div :global(.hljs-built_in),
  div :global(.hljs-title.class_),
  div :global(.hljs-class .hljs-title) {
    @apply dark:text-orange-300 text-orange-600;
  }

  div :global(.hljs-emphasis) {
    font-style: italic;
  }

  div :global(.hljs-strong) {
    font-weight: bold;
  }

  div :global(.hljs-link) {
    text-decoration: underline;
  }
</style>
