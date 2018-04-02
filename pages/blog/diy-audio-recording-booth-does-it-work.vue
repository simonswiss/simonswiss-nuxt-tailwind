<template>
    <section>
        <BlogPost :title="title" :postDate="postDate">
          <p>You may have read <a href="https://medium.com/@simonswiss/i-finally-started-recording-screencasts-5fe2fdd057bb#.gnzzwqh4h">my Medium post about making a questionable recording booth out of my towel rack</a>. While it was fun and all, I quickly realised it would not be a viable long term solution, especially for doing live coding videos.</p>
          <p>I decided to create my own DIY recording booth, after watching a couple of convincing Youtube videos.</p>
          <p>If you want to see how it turned out - I invite you to <a href="https://medium.com/@simonswiss/low-budget-dyi-audio-recording-booth-does-it-work-e861a6d99a4d#.u3id3t3gu">read this Medium post</a>!</p>
        </BlogPost>
    </section>
</template>

<script>
import BlogPost from "../../components/blog/BlogPost";
export default {
  layout: "blog",
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "I decided to create my own DIY recording booth, after watching a couple of convincing Youtube videos."
        }
      ]
    };
  },
  data() {
    return {
      title: "DIY Audio Recording Booth - Does it Work?",
      postDate: "May 13, 2016"
    };
  },
  components: {
    BlogPost
  }
};
</script>