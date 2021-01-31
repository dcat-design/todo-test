<template lang="pug">
  .ErrorMessage
    | {{message}}
</template>

<script>
export default {
  props: {
    message: String || null,
  },
};
</script>

<style lang="sass">
.ErrorMessage
  display: block
  padding: 20px
  background-color: #f5d9d9
  color: #610000

</style>
