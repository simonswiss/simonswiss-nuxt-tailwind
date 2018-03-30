<template>
  <div class="mt-16 max-w-xl mx-auto flex font-sans leading-normal">
    <aside class="w-1/3">
      <side-bar></side-bar>
    </aside>
    <main class="w-2/3 pl-16">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import SideBar from "../components/sidebar";

export default {
  components: {
    SideBar
  }
};
</script>