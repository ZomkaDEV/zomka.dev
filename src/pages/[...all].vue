<template>
  <section class="not-found">
    <div class="card">
      <img :src="avatarUrl" alt="Avatar" class="avatar" />
      <h1>uh oh. page not found...</h1>
      <router-link class="home-link" to="/">back home</router-link>
    </div>
  </section>
</template>

<script setup>
const avatarUrl = new URL("/avatar guff.png", import.meta.url).href;
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  color: #fbe3ee;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  padding: 32px 40px;
  background: rgba(78, 36, 58, 0.45);
  border-radius: 24px;
  box-shadow: 0 24px 70px rgba(26, 6, 16, 0.6);
  animation: rise 700ms ease-out both;
}

.avatar {
  width: clamp(160px, 40vw, 260px);
  height: auto;
  object-fit: contain;
  display: block;
  animation: fadeUp 520ms ease-out both;
}

h1 {
  margin: 0;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 600;
  animation: fadeUp 520ms ease-out both;
  animation-delay: 120ms;
}

.home-link {
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
  animation: fadeUp 520ms ease-out both;
  animation-delay: 220ms;
}

.home-link:hover {
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
