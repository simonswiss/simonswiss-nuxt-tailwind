<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="my-16 max-w-xl mx-auto px-6 md:flex font-sans leading-normal">
      <aside class="md:w-1/2 lg:w-1/3">
        <SideBar/>
      </aside>
      <main class="md:w-1/2 lg:w-2/3 md:pl-16 max-w-md">
        <nuxt/>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import SideBar from "../components/sidebar";
import Footer from "../components/footer";

export default {
  components: {
    SideBar,
    Footer
  }
};
</script>