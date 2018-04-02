<template>
    <section>
        <BlogPost :title="title" :postDate="postDate">
          <p>Already know HTML and want to dive into a more robust, powerful templating language? </p>
          <p>Pug is right up your alley and will transform your day-to-day workflow.</p>
          <p>The video series is <a href="https://www.youtube.com/playlist?list=PLHrxuCR-0CcSWiMuLf58iuIsNlP549-Sk">available on Youtube</a>, and here’s the teaser:</p>            
          <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
          <div class="embed-container my-4"><iframe src='https://www.youtube.com/embed/JqCs1pdmf9o?list=PLHrxuCR-0CcSWiMuLf58iuIsNlP549-Sk' frameborder='0' allowfullscreen></iframe></div>

        </BlogPost>
    </section>
</template>

<script>
import BlogPost from "../../components/blog/BlogPost";
export default {
  layout: "blog",
  data() {
    return {
      title: "Jade/Pug: HTML Templates Beginner Course",
      postDate: "May 5, 2016"
    };
  },
  components: {
    BlogPost
  }
};
</script>