<template>
  <article>
		<h1 class="text-2xl sm:text-4xl leading-tight mb-2 text-grey-darkest font-black">{{ title }}</h1>
		<p class="text-grey mb-6">Posted on {{ postDate }}</p>
    <slot></slot>
	</article>
</template>

<script>
export default {
  props: {
    title: String,
    postDate: String
  }
};
</script>