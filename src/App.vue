<template lang="pug">
  #app
    nav#nav
      router-link(to="/") home
    router-view

</template>

<style lang="sass">
#app
  max-width: 640px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-size: 14px
  color: #2c3e50

#nav
  padding: 30px 0

  a
    font-weight: bold
    color: rgba(0,0,0,.7)

</style>
