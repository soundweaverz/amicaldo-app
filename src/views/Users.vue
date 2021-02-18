<template>
  <div class="users">
    <table v-if="users.length !== 0" class="user-table">
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
          <td>
            <img
              src="https://spielerfreunde.de/assets/images/pubgm/crews/189/keepPLO.jpg"
              alt="Crew picture"
            />
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.ingameID ? user.ingameID : "No ID present." }}</td>
          <td>{{ user.active ? "&check;" : "&#x274C;" }}</td>
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

<style lang="scss" scoped>
.users {
  display: flex;
  justify-content: center;
}
.user-table {
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid black;
  border-radius: 10px;

  th,
  td {
    padding: 10px 20px;
    border: 1px solid black;
  }

  th {
    border-top: none;
    border-left: none;
    border-bottom: none;

    &:last-of-type {
      border-right: none;
    }
  }

  td {
    border-left: none;
    border-bottom: none;

    &:last-of-type {
      border-right: none;
    }
  }

  img {
    height: 50px;
    width: 50px;
    display: block;
  }
}
</style>
