<script setup lang="ts">
  import { ref } from "vue";
  import { authService } from "@/firebase";
  import { useNavigate } from "@/hooks/use-navigate";
  import BaseButton from "@/components/BaseButton.vue";
  import GithubIcon from "@/components/svg/GithubIcon.vue";
  import GoogleIcon from "@/components/svg/GoogleIcon.vue";

  const progress = ref(false);
  const navigate = useNavigate();

  const handleGithubSignIn = async () => {
    progress.value = true;
    const credential = await authService.githubSignIn().finally(() => {
      progress.value = false;
    });

    if (credential) {
      navigate.toDashboard();
    }
  };

  const handleGoogleSignIn = async () => {
    progress.value = true;
    const credential = await authService.googleSignIn().finally(() => {
      progress.value = false;
    });

    if (credential) {
      navigate.toDashboard();
    }
  };
</script>

<template>
  <div class="login-page">
    <div class="mission">
      <h1 class="mission-message">インターネットの自由を再び取り戻す</h1>
      <hr />
      <div class="mission-caption">Project Next Generation Interner</div>
    </div>
    <div class="login-form">
      <BaseButton @click.stop="handleGithubSignIn">
        <GithubIcon class="service-icon" />
        <span>Githubでログイン</span>
      </BaseButton>
      <BaseButton @click.stop="handleGoogleSignIn">
        <GoogleIcon class="service-icon" />
        <span>Googleでログイン</span>
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .login-page {
    width: 100vw;
    height: 100vh;
    background: $bg-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(40);
  }

  .mission {
    line-height: 1.5;

    &-message {
      font-size: $font-size-large;
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: rem(24);
  }

  .service-icon {
    width: rem(24);
    height: rem(24);
    fill: $font-color;
  }
</style>
