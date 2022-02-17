<script setup lang="ts">
  import { authService } from "@/firebase";
  import { useUiStore } from "@/stores/ui";
  import { useNavigate } from "@/hooks/use-navigate";
  import BaseButton from "@/components/BaseButton.vue";
  import GithubIcon from "@/components/svg/GithubIcon.vue";
  import GoogleIcon from "@/components/svg/GoogleIcon.vue";

  const navigate = useNavigate();
  const uiStore = useUiStore();

  const handleGithubSignIn = async () => {
    uiStore.showProgress();
    const credential = await authService.githubSignIn().finally(() => {
      uiStore.hideProgress();
    });
    if (credential) {
      navigate.toDashboard();
    }
  };

  const handleGoogleSignIn = async () => {
    uiStore.showProgress();
    const credential = await authService.googleSignIn().finally(() => {
      uiStore.hideProgress();
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
