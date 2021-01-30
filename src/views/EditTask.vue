<template lang="pug">
  .EditTask
    TasksForm(:task="task" @save="handleSave")
</template>

<script>
import TasksForm from '@/components/TasksForm.vue';
import { fetchTaskById, createTask, saveTask } from '@/api/api';

export default {
  name: 'EditTask',
  components: {
    TasksForm,
  },
  data: () => ({
    isCreate: false,
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
    }
  },
  methods: {
    async handleSave() {
      let result = '';
      if (this.task.id === 0) {
        result = await createTask(this.task);
      } else {
        result = await saveTask(this.task);
      }
      if (result) {
        this.$router.push(`/tasks/${result}`);
      }
    },
    async updateTask(id) {
      this.task = await fetchTaskById(id);
    },
  },
};
</script>
