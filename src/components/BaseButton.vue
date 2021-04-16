<template>
  <div class="">
    <button><slot>Submit</slot></button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  background: cornflowerblue;
}
</style>
