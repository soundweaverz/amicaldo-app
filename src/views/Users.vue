<template>
  <div class="home">
    <p v-for="user in users" :key="user.ingameID">
      {{ user.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useUsers from "@/composables/useUsers";

export default defineComponent({
  name: "Users",
  setup(props) {
    const { users, getUsers } = useUsers();

    return {
      users,
      getUsers,
    };
  },
});
</script>
