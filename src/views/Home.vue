<template lang="pug">
#home
  TasksList.Home__tasksList(
    @update="handleUpdate",
    @edit="handleEdit",
    :tasks="tasks"
  )
  button.ButtonAdd(@click="handleCreate") Добавить задание
</template>

<script>
import TasksList from '@/components/TasksList.vue';
import { fetchTasks } from '@/api/api';

export default {
  name: 'Home',
  data() {
    return {
      tasks: [],
    };
  },
  components: {
    TasksList,
  },
  async mounted() {
    this.tasks = await fetchTasks();
  },
  methods: {
    handleCreate() {
      this.$router.push('/tasks/new');
    },
    async handleUpdate() {
      this.tasks = await fetchTasks();
    },
    handleEdit(id) {
      this.$router.push(`/tasks/${id}`);
    },
  },
};
</script>

<style lang="sass">
.ButtonAdd
  padding: 8px 16px
  background: #93c548
  border: none
  border-radius: 6px
  box-shadow: 0 5px 5px rgba(0,0,0,.1)
  cursor: pointer

  &:hover
    box-shadow: 0 5px 10px rgba(0,0,0,.3)

.Home__tasksList
  margin-bottom: 30px
</style>
