<template lang="pug">
#home
  ErrorMessage(v-if="errorMessage" :message="errorMessage")
  TasksList.Home__tasksList(
    @update="handleUpdate",
    @edit="handleEdit",
    :tasks="tasks"
  )
  button.ButtonAdd(@click="handleCreate") Добавить задание
</template>

<script>
import TasksList from '@/components/TasksList.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import { fetchTasks } from '@/api/api';
import SERVER_STATUSES from '@/lib/serverStatuses';

export default {
  name: 'Home',
  data() {
    return {
      tasks: [],
      errorMessage: null,
    };
  },
  components: {
    TasksList,
    ErrorMessage,
  },
  async mounted() {
    this.handleUpdate();
  },
  methods: {
    handleCreate() {
      this.$router.push('/tasks/new');
    },
    async handleUpdate() {
      this.errorMessage = null;
      const response = await fetchTasks();
      const {
        result,
        status,
        message,
      } = response;

      if (status === SERVER_STATUSES.OK) {
        this.tasks = result;
      } else {
        this.errorMessage = message;
      }
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
