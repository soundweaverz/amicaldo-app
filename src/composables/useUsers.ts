import { User } from "@/models/User";

import { ref, onMounted } from "vue";

export default function useUsers() {
  const users = ref([] as User[]);
  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/users/");
    users.value = (await res.json()) as User[];
  };

  onMounted(getUsers);

  return {
    users,
    getUsers,
  };
}
