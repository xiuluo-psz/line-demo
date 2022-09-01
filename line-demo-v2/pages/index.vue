<template>
  <div class="container">
    <div>
      <NuxtLogo />
      <h1>{{ msg }}-{{ nuxtmsg }}-{{ setupmsg }}</h1>
      <h1 class="title">Welcome to the Vant + Nuxt.js template</h1>
      <div class="links">
        <van-button type="primary" url="https://nuxtjs.org/">
          Documentation
        </van-button>
        <van-button url="https://github.com/nuxt/nuxt.js"> GitHub </van-button>
        <van-button url="https://vant-contrib.gitee.io/vant">
          Vant UI
        </van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const setupmsg = ref('setup变量')
    return {
      setupmsg,
    }
  },
  asyncData() {
    return {
      nuxtmsg: 'nuxt拓展变量',
    }
  },
  data() {
    return {
      msg: 'vue2普通变量',
    }
  },
  mounted() {
    this.$liffInit
      .then((res: any) => {
        console.warn('success', res)
      })
      .catch((err: any) => {
        console.warn('error', err)
      })
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: Quicksand, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
