<script setup lang="ts">
  import BaseButton from "@/components/BaseButton.vue";
  import GithubIcon from "@/components/svg/GithubIcon.vue";
  import GoogleIcon from "@/components/svg/GoogleIcon.vue";
</script>

<template>
  <div class="login-page">
    <div class="mission">
      <h1 class="mission-message">インターネットの自由を再び取り戻す</h1>
      <hr />
      <div class="mission-caption">Project Next Generation Interner</div>
    </div>
    <div class="login-form">
      <BaseButton>
        <GithubIcon class="service-icon" />
        <span>Githubでログイン</span>
      </BaseButton>
      <BaseButton>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: rem(40);
    background: $bg-color;
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
