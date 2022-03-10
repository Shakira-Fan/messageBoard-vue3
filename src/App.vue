<template class="bg-black d-flex">
  <div class="justify-center messageWidth bg-black p-5 m-5">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.messageWidth {
  justify-content: center;
}
</style>
