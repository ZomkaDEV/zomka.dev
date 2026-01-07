<template>
  <section class="projects">
    <div class="panel">
      <h1>my projects!</h1>
      <p class="subtitle">
        this page is still in progress, but here's a few highlights!
      </p>
      <div class="post-list">
        <article class="post-card">
          <a
            href="https://github.com/ZomkaDEV/zomka.dev"
            class="post-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            this website!
          </a>
          <p class="post-summary">
            Yep, I made this website myself! You can view the source code for it
            <a href="https://github.com/ZomkaDEV/zomka.dev">here</a
            >!<br /><br />
            The music used is Arabesque by Incontinent Cell.<br />
            The drawing of my fursona was done by my
            <a href="https://bsky.app/profile/did:plc:6lzzeldgzmefsbi553r45lcp"
              >partner</a
            >!<br />
            The background video is taken from Steven Universe Future.
          </p>
        </article>
        <article class="post-card">
          <a
            href="https://github.com/ZomkaDEV/MultiJack"
            class="post-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            MultiJack
          </a>
          <p class="post-summary">
            MultiJack is a tool I wrote to run mods for Jackbox with ease.<br />
            It was written in Python using the PyQt6 library for the UI.
          </p>
        </article>
        <article class="post-card">
          <a
            href="https://github.com/ZomkaDEV/Topaz"
            class="post-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Topaz
          </a>
          <p class="post-summary">
            A simple Anti-VPN plugin for Minecraft servers running Velocity
            using the ProxyCheck.io API.<br /><br />
            I was sick of all of the very scummy Anti-VPN plugins out there, so
            I made my own. It's simple, lightweight, and easy to setup.
          </p>
        </article>
      </div>
      <div class="links">
        <router-link to="/">back home</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
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
  align-items: flex-start;
  gap: 12px;
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
  animation: fadeUp 520ms ease-out both;
}

.subtitle {
  margin: 0;
  line-height: 1.6;
  animation: fadeUp 520ms ease-out both;
}

.post-list {
  display: grid;
  gap: 16px;
  width: 100%;
  animation: fadeUp 520ms ease-out both;
}

.post-card {
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(86, 42, 68, 0.35);
  animation: fadeUp 520ms ease-out both;
}

.post-card:nth-child(1) {
  animation-delay: 120ms;
}

.post-card:nth-child(2) {
  animation-delay: 220ms;
}

.post-card:nth-child(3) {
  animation-delay: 320ms;
}

.post-title {
  display: inline-block;
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 600;
  color: #f9d7e6;
  text-decoration: none;
}

.post-title:hover {
  text-decoration: underline;
}

.post-summary {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  animation: fadeUp 520ms ease-out both;
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

.links {
  align-self: center;
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
