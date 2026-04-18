<template>
  <v-app>
    <div class="video-wrap">
      <video
        class="video-bg"
        autoplay
        muted
        playsinline
        loop
        preload="auto"
        :class="{ loaded: isVideoReady }"
        @canplaythrough="handleVideoReady"
      >
        <source src="https://assets.zomka.dev/background.mp4" type="video/mp4" />
      </video>
    </div>

    <v-main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>

    <button
      class="audio-toggle"
      type="button"
      :aria-pressed="isPlaying"
      @click="toggleAudio"
    >
      {{ isPlaying ? "Pause music" : "Play music" }}
    </button>

    <audio ref="audioRef" :src="audioSrc" loop preload="auto"></audio>
  </v-app>
</template>

<script setup>
import { onMounted, ref } from "vue";

const audioRef = ref(null);
const isPlaying = ref(false);
const audioSrc = new URL("/bgm.opus", import.meta.url).href;

const isVideoReady = ref(false);

const handleVideoReady = () => {
  isVideoReady.value = true;
};

const toggleAudio = async () => {
  if (!audioRef.value) return;
  if (isPlaying.value) {
    audioRef.value.pause();
    isPlaying.value = false;
    return;
  }
  try {
    await audioRef.value.play();
    isPlaying.value = true;
  } catch (error) {
    isPlaying.value = false;
    console.warn("Autoplay blocked or audio missing.", error);
  }
};

onMounted(() => {
  toggleAudio();
});
</script>

<style>
.video-wrap {
  position: fixed;
  inset: 0;
  z-index: 0;
}

.video-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 900ms ease;
  pointer-events: none;
}

.video-bg.loaded {
  opacity: 1;
}

.v-main {
  position: relative;
  z-index: 2;
}

.v-application {
  background: transparent;
}

.audio-toggle {
  position: fixed;
  right: clamp(16px, 4vw, 32px);
  bottom: clamp(16px, 4vw, 32px);
  background: rgba(15, 23, 42, 0.85);
  color: #e2e8f0;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  z-index: 5;
}

.audio-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(20, 20, 20, 0.18);
}
</style>
