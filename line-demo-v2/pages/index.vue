<template>
  <div>
    <van-button loading type="info" loading-text="加载中..." />
    <van-button icon="plus" type="primary" />
    <van-cell title="单元格" v-model="version" label="描述信息" />
    <van-field v-model="version" label="ddd" />
    <van-cell-group inset>
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  asyncData() {
    return {
      version: '1.2.3'
    }
  },
  data() {
    const t:String = 'dd'
    const tmp = t + 'hh'
    return {
      sms: tmp
    }
  }
})
</script>

