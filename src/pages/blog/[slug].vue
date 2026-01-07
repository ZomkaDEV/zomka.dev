<template>
  <section class="post">
    <div v-if="post" class="panel">
      <div class="header">
        <h1>{{ post.title }}</h1>
        <p v-if="post.displayDate" class="date-line">
          <span class="date">Posted on {{ post.displayDate }}</span>
          <span v-if="post.displayRevised" class="date revised">
            (Revised on {{ post.displayRevised }})
          </span>
        </p>
      </div>
      <hr />
      <div class="markdown" v-html="rendered"></div>
      <div class="links">
        <router-link to="/blog">back to blog</router-link>
        <router-link to="/">back home</router-link>
      </div>
    </div>

    <div v-else class="panel">
      <h1>post not found! :(</h1>
      <p>the post you're looking for does not exist.</p>
      <div class="links">
        <router-link to="/blog">back to blog</router-link>
        <router-link to="/">back home</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import { posts } from "@/utils/blog";

const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));
const post = computed(() => posts.find((item) => item.slug === slug.value));

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const defaultLinkRender =
  md.renderer.rules.link_open ||
  ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const hrefIndex = tokens[idx].attrIndex("href");
  const href = hrefIndex >= 0 ? tokens[idx].attrs[hrefIndex][1] : "";
  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    tokens[idx].attrSet("target", "_blank");
    tokens[idx].attrSet("rel", "noopener noreferrer");
  }

  return defaultLinkRender(tokens, idx, options, env, self);
};

const rendered = computed(() =>
  post.value ? md.render(post.value.content) : "",
);
</script>

<style scoped>
.post {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: transparent;
  color: #fbe3ee;
  font-family: "Roboto";
}

.panel {
  width: min(980px, 100%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  padding: 32px 40px;
  background: rgba(32, 16, 24, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  box-shadow: 0 24px 70px rgba(26, 6, 16, 0.6);
  animation: rise 700ms ease-out both;
}

.header h1 {
  margin: 0;
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 600;
  text-transform: lowercase;
  animation: fadeUp 520ms ease-out both;
}

.date-line {
  margin: 6px 0 0;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;
  opacity: 0.7;
  animation: fadeUp 520ms ease-out both;
  animation-delay: 120ms;
}

.date {
  margin: 0;
  display: inline-block;
  font-variant-numeric: tabular-nums;
}

.date.revised {
  opacity: 0.6;
}

.markdown {
  animation: fadeUp 520ms ease-out both;
  animation-delay: 220ms;
}

.markdown :deep(p) {
  margin: 0 0 12px;
  line-height: 1.7;
}

.markdown :deep(h2),
.markdown :deep(h3),
.markdown :deep(h4) {
  margin: 18px 0 8px;
  font-weight: 600;
}

.markdown :deep(ul),
.markdown :deep(ol) {
  margin: 0 0 14px;
  padding-left: 22px;
}

.markdown :deep(li) {
  margin: 6px 0;
  line-height: 1.6;
}

.markdown :deep(li > ul),
.markdown :deep(li > ol) {
  margin: 8px 0 0;
}

.markdown :deep(a) {
  color: #f9d7e6;
}

.markdown :deep(code) {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.9em;
  background: rgba(86, 42, 68, 0.35);
  padding: 2px 6px;
  border-radius: 6px;
}

.markdown :deep(pre) {
  padding: 14px 16px;
  background: rgba(86, 42, 68, 0.35);
  border-radius: 12px;
  overflow-x: auto;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  animation: fadeUp 520ms ease-out both;
  animation-delay: 320ms;
}

.links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  color: #3a1326;
  background: #f9d7e6;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.links a:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(90, 36, 66, 0.35);
}

@media (max-width: 720px) {
  .panel {
    width: 100%;
    padding: 18px 16px;
    border-radius: 20px;
  }

  .post {
    padding: 8px;
  }

  .markdown :deep(p) {
    font-size: 14px;
    line-height: 1.6;
  }

  .markdown :deep(h2),
  .markdown :deep(h3),
  .markdown :deep(h4) {
    margin: 14px 0 6px;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
