<template lang="pug">
.TasksForm
  .TasksForm__line
    label.TasksForm__label Название
    input.TasksForm__text(
      v-model="task.title",
      placeholder="Заголовок (не менее трех символов)"
    )

  .TasksForm__line
    label.TasksForm__label Описани
    textarea.TasksForm__textarea(
      v-model="task.description",
      placeholder="Описание задачи (более трех символов)"
    )

  .TasksForm__line
    label.TasksForm__label Статус
    select.TasksForm__select(v-model="task.status")
      option(v-for="status in statuses", :value="status.id", :key="status.id") {{ status.title }}

  .TasksForm__line(v-if="isEdit")
    label.TasksForm__label Дата создания
    div {{ task.created_date }}

  .TasksForm__controls
    button.TasksForm__button.TasksForm__button_save(
      @click="handleSave",
      :disabled="!isCanSave"
    ) {{ createOrSaveText }}
    button.TasksForm__button.TasksForm__button_delete(
      v-if="isEdit",
      @click="$emit('delete', task.id)"
    ) Удалить
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
    isCanSave() {
      const isTitleOK = this.task.title.replace(/\s/g, '').length >= 3;
      const isDescriptionOK = this.task.description.replace(/\s/g, '').length >= 3;

      return isTitleOK && isDescriptionOK;
    },
    isEdit() {
      return this.task.id !== 0;
    },
    createOrSaveText() {
      return this.isEdit ? 'Сохранить' : 'Создать';
    },
  },
  methods: {
    handleSave() {
      if (this.isCanSave) {
        this.$emit('save');
      }
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
    width: 100%
    padding-left: 10px
    padding-right: 10px
    max-widht: 400px
    font-size: 14px
    line-height: 20px
    border: solid 1px rgba(0,0,0,.2)
    box-sizing: border-box

  &__textarea
    height: 100px

  &__controls
    display: flex

  &__button
    padding: 8px 16px
    background: #93c548
    border: none
    border-radius: 6px
    box-shadow: 0 3px 3px rgba(0,0,0,.1)
    color: rgba(0,0,0,.9)
    font-size: 14px
    text-shadow: 0 0 2px rgba(255,255,255,.7)
    cursor: pointer

    &:disabled
      opacity: .4

    &:hover
      box-shadow: 0 5px 10px rgba(0,0,0,.2)

    &:focus
      outline: none

    &_delete
      margin-left: auto
      background-color: #f7adb4
</style>
