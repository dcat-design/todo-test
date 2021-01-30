<template lang="pug">
.TasksList
  .TasksList__item(
    v-for="task in tasks",
    :key="task.id",
    :style="getStyle(task.status)"
    @dblclick="$emit('edit', task.id)"
  )
    div.TasksList__itemTitle {{ task.title }}
    div.TasksList__itemDescription {{ task.description }}
</template>

<script>
import getStatusByCode from '@/helpers/statusHelper';

export default {
  name: 'TasksList',
  props: {
    tasks: Array,
  },
  methods: {
    getStyle(status) {
      const currentStatusColor = getStatusByCode(status).color || '#EEE';

      return { 'background-color': currentStatusColor };
    },
  },
};
</script>

<style lang="sass">
.TasksList
  display: block
  text-align: left

  &__item
    padding: 16px
    background-color: #42b983
    color: rgba(0,0,0,.8)
    margin-bottom: 3px
    border-radius: 4px

  &__itemTitle
    font-size: 18px
    font-weight: 600
    margin-bottom: 6px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

  &__itemDescription
    display: -webkit-box
    $lh: 20px
    line-height: $lh
    height: ($lh * 2)
    font-size: 14px
    overflow: hidden
    text-overflow: ellipsis
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
</style>
