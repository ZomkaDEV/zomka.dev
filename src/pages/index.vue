<template>
  <section class="landing">
    <div class="panel">
      <div class="hero">
        <div class="avatar-block">
          <div class="avatar-shell">
            <img alt="Avatar" class="avatar" src="/avatar guff.png" />
          </div>
          <div class="social-icons">
            <a
              href="https://bsky.app/profile/did:plc:s76u5qm2xks7cz3jkly5xbpe"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Bluesky"
            >
              <svg
                viewBox="0 0 600 530"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://github.com/ZomkaDEV"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="mdi mdi-github"></i>
            </a>
            <a
              href="https://wetdry.world/@zomka"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Mastodon"
            >
              <i class="mdi mdi-mastodon"></i>
            </a>
            <a href="mailto:zomka@fard.ing" aria-label="Email">
              <i class="mdi mdi-email-outline"></i>
            </a>
          </div>
        </div>

        <div class="copy">
          <h1 class="greeting">hi! ^^</h1>
          <p class="description">
            i'm alisa! (<a
              href="https://pronouns.cc/@Zomka"
              rel="noopener noreferrer"
              target="_blank"
              >she/they</a
            >)<br /><br />
            i'm a jackbox and minecraft obsessed nerd, linux user, developer,
            computer tinkerer, animation/tv show "connoisseur"<br /><br />
            i speak english, russian, lithuanian and german
          </p>

          <div class="links">
            <router-link to="/blog">blog</router-link>
            <router-link to="/projects">projects</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.landing {
  position: relative;
  min-height: 100vh;
  padding: clamp(24px, 4vw, 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fbe3ee;
  font-family: "Roboto";
  overflow-x: hidden;
  overflow-y: auto;
}

.panel {
  width: min(900px, 100%);
  padding: clamp(24px, 5vw, 48px);
  border-radius: 28px;
  background: rgba(78, 36, 58, 0.45);
  box-shadow: 0 24px 70px rgba(26, 6, 16, 0.6);
  backdrop-filter: blur(12px);
  animation: rise 700ms ease-out both;
  position: relative;
  z-index: 2;
}

.hero {
  display: flex;
  align-items: center;
  gap: clamp(24px, 5vw, 48px);
}

.avatar-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.avatar-shell {
  width: clamp(160px, 28vw, 240px);
  height: auto;
  border-radius: 0;
  padding: 0;
  background: none;
  box-shadow: none;
  animation: 8s ease-in-out infinite;
}

.social-icons {
  display: inline-flex;
  gap: 10px;
  align-items: center;
}

.social-icons a {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffe3ef;
  background: rgba(110, 56, 84, 0.55);
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.social-icons a:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 18px rgba(90, 36, 66, 0.35);
}

.social-icons i {
  font-size: 16px;
}

.social-icons svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
  display: block;
}

.avatar {
  width: 100%;
  height: auto;
  border-radius: 0;
  object-fit: contain;
  display: block;
  background: transparent;
}

.copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.greeting {
  margin: 0;
  text-shadow: 0 4px 3px rgba(0, 0, 0, 0.8);
  letter-spacing: -0.02em;
  animation: fadeUp 700ms ease-out both;
  animation-delay: 120ms;
}

.description {
  margin: 0;
  line-height: 1.6;
  width: 100%;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.8);
  animation: fadeUp 700ms ease-out both;
  animation-delay: 220ms;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  animation: fadeUp 700ms ease-out both;
  animation-delay: 320ms;
}

.links a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
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
    border-radius: 22px;
  }

  .hero {
    flex-direction: column;
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }

  .description {
    max-width: 100%;
  }

  .links {
    justify-content: center;
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

/* implement floating maaaaybe

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}*/
</style>
