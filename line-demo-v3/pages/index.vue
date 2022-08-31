<template>
  <div>
    <van-cell :title="name" :value="state.id"/>
    <van-field v-model="state.id"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  setup() {
    const { $liff } = useNuxtApp();
    const text = ref('测试');
    const user=reactive({
      name: '张三',
      age:20
    });
    const state = reactive({
      id: 1,
      attributes: {
        name: ''
      }
    });
    console.log($liff)
    return {
      text,
      ...toRefs(user),
      state
    }
  },
  data() {
    // console.log(this.$liff)
    return {}
  }
});
</script>
