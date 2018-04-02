<template>
    <div class="flex flex-col h-screen justify-between">
        <div>
            <div class="max-w-xxl p-8">
                <nuxt-link class="no-underline hover:underline text-purple" to="/blog">&larr; back to blog</nuxt-link>
            </div>
            <div class="mt-4 sm:mt-16 mb-8 max-w-md mx-auto flex font-sans leading-normal px-4">
                <nuxt/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/footer";

export default {
  components: {
    Footer
  }
};
</script>

