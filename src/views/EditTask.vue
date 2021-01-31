<template lang="pug">
.EditTask
  ErrorMessage(v-if="errorMessage", :message="errorMessage")
  TasksForm(
    v-if="isFound",
    :task="task",
    @save="handleSave",
    @delete="handleDelete"
  )
</template>

<script>
import TasksForm from '@/components/TasksForm.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import SERVER_STATUSES from '@/lib/serverStatuses';

import {
  fetchTaskById,
  createTask,
  saveTask,
  deleteTask,
} from '@/api/api';

export default {
  name: 'EditTask',
  components: {
    TasksForm,
    ErrorMessage,
  },
  data: () => ({
    isFound: false,
    errorMessage: null,
    task: {
      id: 0,
      title: '',
      description: '',
      status: 1,
      created_date: '',
    },
  }),
  watch: {
    async $route({ params: { id } }) {
      await this.updateTask(id);
    },
  },
  async mounted() {
    const { id } = this.$route.params;
    if (id !== 'new') {
      await this.updateTask(id);
    } else {
      this.isFound = true;
    }
  },
  methods: {
    async handleSave() {
      this.errorMessage = null;
      let response = '';
      if (this.task.id === 0) {
        response = await createTask(this.task);
      } else {
        response = await saveTask(this.task);
      }
      const { result, status, message } = response;

      if (status === SERVER_STATUSES.OK && this.task.id === 0) {
        this.$router.push(`/tasks/${result}`);
      }
      if (status !== SERVER_STATUSES.OK) {
        this.errorMessage = message;
      }
    },
    async updateTask(id) {
      this.errorMessage = null;
      this.isFound = false;
      const response = await fetchTaskById(id);
      const {
        result,
        status,
        message,
        code,
      } = response;
      if (status === SERVER_STATUSES.OK) {
        this.task = result;
        this.isFound = true;
      } else {
        this.errorMessage = message;
        if (code === 404) {
          this.isFound = false;
        }
      }
    },
    async handleDelete(id) {
      this.errorMessage = null;
      const { status, message } = await deleteTask(id);

      if (status === SERVER_STATUSES.OK) {
        this.$router.push('/');
      } else {
        this.errorMessage = message;
      }
    },
  },
};
</script>
