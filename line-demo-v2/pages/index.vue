<template>
  <div>
    {{ fullName }}
    <van-field v-model="message" :label="fullName"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

interface User {
  firstName: string;
  lastName: string;
}

export default defineComponent({
  props: {
    user: {
      type: Object as () => User,
      required: false,
    },
  },

  setup(props, context) {
    const fullName = "dd";
    const message = "dcsds";
    return {
      fullName,
      message,
    };
  },
});
</script>
