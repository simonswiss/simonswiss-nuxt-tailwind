<template>
    <section>
        <BlogPost :title="title" :postDate="postDate">
          <p>Today, Facebook developers have open sourced an awesome <code>zero config</code> React App generator tool, <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>.</p>
          <p>One of the hardest hurdle to pass when learning React is the whole tooling ecosystem around it. <code>Create React App</code> hides away all of this and lets you focus just on React.</p>
          <p>Here’s my quick video overview on this fantastic new tool that should lower the entry barrier to beginners!</p>	
					<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
          <div class="embed-container my-4"><iframe src='https://www.youtube.com/embed/3TX90RSfeQk' frameborder='0' allowfullscreen></iframe></div>	
					<p>You might want to also check <a href="https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html">Facebook’s official React blog post</a>.</p>
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
            "Today, Facebook developers have open sourced an awesome zero config React App generator tool, Create React App."
        }
      ]
    };
  },
  data() {
    return {
      title: "Easy ReactJS App with Zero Config - Great for Beginners!",
      postDate: "July 23, 2016"
    };
  },
  components: {
    BlogPost
  }
};
</script>