<template>
    <div>
        <ul class="list-reset">
            <BlogTeaser v-for="(post, i) in posts" :key="i" :post="post"/>    
        </ul>
    </div>
</template>

<script>
import BlogTeaser from "../../components/blog/BlogTeaser";
export default {
  components: {
    BlogTeaser
  },
  head() {
    return {
      title: "Blog | simonswiss.com",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Check out my latest blog posts."
        }
      ]
    };
  },
  data() {
    return {
      posts: [
        {
          date: "Feburary 17",
          title:
            "Full re-write in 10 days with tachyons and functional CSS: A case study",
          slug:
            "full-re-write-in-10-days-with-tachyons-and-functional-css-a-case-study",
          intro:
            "A 4-post series taking you through a website refactoring process using tachyons, a functional CSS toolkit that is guaranteed to trigger very strong opinions [insert Dave Rupert’s hot drama soundboard effect]."
        },
        {
          date: "September 16",
          title: "React-Music: My Talk at the React Sydney Meetup",
          slug: "react-music-my-talk-at-the-react-sydney-meetup",
          intro:
            "Last Monday, I took a leap of faith and made my first public speaking appearance at a Sydney tech meetup. The event in questions was React Sydney, a monthly event where tickets go like hot cakes and waiting lists get notoriously long."
        },
        {
          date: "July 16",
          title: "Easy ReactJS App with Zero Config - Great for Beginners!",
          slug: "easy-reactjs-app-with-zero-config---great-for-beginners",
          intro:
            "Today, Facebook developers have open sourced an awesome `zero config` React App generator tool. Here's my quick video overview on this fantastic new tool that should lower the entry barrier to beginners!"
        },
        {
          date: "May 16",
          title: "DIY Audio Recording Booth - Does it Work?",
          slug: "diy-audio-recording-booth-does-it-work",
          intro:
            "You may have read my Medium post about making a questionable recording booth out of my towel rack. While it was fun and all, I quickly realised it would not be a viable long term solution, especially for doing live coding videos."
        },
        {
          date: "May 16",
          title: "My Very First Screencast: Taking The Leap.",
          slug: "my-very-first-screencast-taking-the-leap",
          intro:
            "I am a self-taught front-end developer. I owe a large portion of what I know to some incredible individuals who took the time to create…"
        },
        {
          date: "May 16",
          title: "Jade/Pug: HTML Templates Beginner Course",
          slug: "jade-pug-html-templates-beginner-course",
          intro:
            "Already know HTML and want to dive into a more robust, powerful templating language? Pug is right up your alley and will transform your day-to-day workflow."
        }
      ]
    };
  }
};
</script>