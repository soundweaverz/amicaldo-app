<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p v-for="user in users" :key="user.ingameID">
      {{ user.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import useUsers from "@/composables/useUsers";

export default defineComponent({
  name: "Users",
  components: {
    HelloWorld,
  },
  setup(props) {
    const { users, getUsers } = useUsers();

    return {
      users,
      getUsers,
    };
  },
});
</script>
