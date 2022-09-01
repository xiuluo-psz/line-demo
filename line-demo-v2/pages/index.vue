<template>
  <div>
    {{ fullName }}
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
    const fullName = "dd"; // computed(() => `${props.user.firstName} `);
    const message = "dcsds";
    return {
      fullName,
      message,
    };
  },
});
</script>
