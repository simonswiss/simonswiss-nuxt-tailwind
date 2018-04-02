<template>
    <li class="mb-8">       
        <ul class="list-reset pa0 mb-2">
            <li class="mr-3 uppercase tracking-wide text-sm text-grey">{{ post.date }}</li>
        </ul>
        <h2 class="leading-tight mb-3 font-black">
            <nuxt-link class="no-underline text-grey-darkest hover:underline" :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
        </h2>
        <p class="mt0 mb-4 text-grey-dark">{{ post.intro }}</p>
        <nuxt-link class="text-purple no-underline hover:underline" :to="`/blog/${post.slug}`">Read more</nuxt-link>
    </li>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>