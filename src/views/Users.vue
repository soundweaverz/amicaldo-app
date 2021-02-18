<template>
  <div class="home">
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Ingame-ID</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th>
            <img
              src="https://spielerfreunde.de/assets/images/pubgm/crews/189/keepPLO.jpg"
              alt="Picture"
            />
          </th>
          <th>{{ user.name }}</th>
          <th>{{ user.ingameID ? user.ingameID : "No ID present." }}</th>
          <th>{{ user.active ? "&check;" : "&#x274C;" }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useUsers from "@/composables/useUsers";

export default defineComponent({
  name: "Users",
  setup() {
    const { users, getUsers } = useUsers();

    return {
      users,
      getUsers,
    };
  },
});
</script>
