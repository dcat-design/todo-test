<template lang="pug">
.TasksForm
  .TasksForm__line
    label.TasksForm__label Название
    input.TasksForm__text(v-model="task.title")
  .TasksForm__line
    label.TasksForm__label Описани
    textarea.TasksForm__textarea(v-model="task.description")
  .TasksForm__line
    label.TasksForm__label Статус
    select.TasksForm__select(v-model="task.status")
      option(v-for="status in statuses" :value="status.id" :key="status.id") {{ status.title }}
  .TasksForm__controls
    button.TasksForm__button.TasksForm__button_save(@click="$emit('save')") {{createOrSaveText}}

</template>

<script>
import statuses from '@/lib/statuses';

export default {
  name: 'TasksForm',
  data: () => ({
    statuses,
  }),
  props: {
    task: Object,
  },
  computed: {
    createOrSaveText() {
      return this.task.id !== 0 ? 'Сохранить' : 'Создать';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.TasksForm
  &__line
    display: flex
    margin: 20px 0

  &__label
    flex-shrink: 0
    width: 140px

  &__text,
  &__textarea
    width: 400px
    max-widht: 400px
    font-size: 14px
    line-height: 20px
    border: solid 1px rgba(0,0,0,.3)

  &__textarea
    height: 100px

</style>
