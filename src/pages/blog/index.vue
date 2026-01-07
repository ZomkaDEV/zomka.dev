<template>
  <section class="blog">
    <div class="panel">
      <h1>my blog!</h1>
      <p class="subtitle">
        i don't make many blog posts but when i do, they end up here.
      </p>

      <div v-if="posts.length" class="post-list">
        <article
          v-for="(post, index) in posts"
          :key="post.slug"
          class="post-card"
          :style="{ '--delay': `${index * 120}ms` }"
        >
          <router-link :to="`/blog/${post.slug}`" class="post-title">
            {{ post.title }}
          </router-link>
          <p v-if="post.summary" class="post-summary">{{ post.summary }}</p>
          <p v-if="post.displayDate" class="post-date">
            Posted on {{ post.displayDate }}
          </p>
        </article>
      </div>
      <p v-else class="empty">no posts yet.</p>

      <div class="links">
        <router-link to="/">back home</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { posts } from "@/utils/blog";
</script>

<style scoped>
.blog {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  color: #fbe3ee;
  font-family: "Roboto";
}

.panel {
  width: min(760px, 100%);
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

h1 {
  margin: 0;
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 600;
  text-transform: lowercase;
  animation: fadeUp 520ms ease-out both;
}

.subtitle {
  margin: 0;
  opacity: 0.8;
  animation: fadeUp 520ms ease-out both;
  animation-delay: 120ms;
}

.post-list {
  display: grid;
  gap: 16px;
  animation: fadeUp 520ms ease-out both;
  animation-delay: 220ms;
}

.post-card {
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(86, 42, 68, 0.3);
  animation: fadeUp 520ms ease-out both;
  animation-delay: var(--delay, 0ms);
}

.post-title {
  display: inline-block;
  font-weight: 600;
  color: #f9d7e6;
  text-decoration: none;
}

.post-title:hover {
  text-decoration: underline;
}

.post-summary {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.5;
}

.post-date {
  margin: 6px 0 0;
  font-size: 12px;
  opacity: 0.7;
}

.empty {
  margin: 0;
  opacity: 0.8;
  animation: fadeUp 520ms ease-out both;
  animation-delay: 220ms;
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
