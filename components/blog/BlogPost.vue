<template>
    <article class="mw7 mt4 mt5-ns ph5-l center cms">
		<h1 class="leading-tight mb-2 text-grey-darkest font-black">{{ title }}</h1>
		<p class="text-grey mb-6">Posted on {{ postDate }}</p>
        
        <slot></slot>
        
        <disqus-comments/>

	</article>
</template>

<script>
import DisqusComments from "./DisqusComments";

export default {
  props: {
    title: String,
    postDate: String
  },
  components: {
    DisqusComments
  }
};
</script>