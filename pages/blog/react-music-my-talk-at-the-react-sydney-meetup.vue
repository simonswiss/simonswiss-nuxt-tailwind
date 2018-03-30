<template>
    <section>
        <BlogPost :title="title" :postDate="postDate">

            <p>Last Monday, I took a leap of faith and made my first public speaking appearance at a Sydney tech meetup. The event in questions was&nbsp;<a href="https://www.meetup.com/React-Sydney/">React Sydney</a>, a monthly event where tickets go like hot cakes and waiting lists get notoriously long.</p>
            <p>The topic I came to talk about was&nbsp;<code>React-Music</code>, an awesome open-source project that lets you create beats with ReactJS. React-Music is a creation by&nbsp;<a href="https://twitter.com/ken_wheeler">Ken Wheeler</a>, director of open-source at&nbsp;<a href="https://formidable.com/">FormidableLabs</a>.</p>
            <p>The talk went really well, considering it was heavily relying on live demos, which could have gone horribly wrong… :)</p>
            <p>Here are links to the&nbsp;<a href="https://slides.com/simonswiss/react-music">slides of the talk</a>, as well as to the&nbsp;<a href="https://github.com/simonswiss/react-music">github repo</a>&nbsp;with the live demos presented during the talk.</p>
						
			<Tweet class="flex justify-center my-4" v-for="(tweet, i) in tweets" :key="i" :id="tweet" />
            
        </BlogPost>
    </section>
</template>

<script>
import BlogPost from "../../components/blog/BlogPost";
import { Tweet } from "vue-tweet-embed";

export default {
  layout: "blog",
  data() {
    return {
      title: "React-Music: My Talk at the React Sydney Meetup",
      postDate: "September 15, 2017",
      tweets: ["775261154373283842", "775251270890233856"]
    };
  },
  components: {
    BlogPost,
    Tweet
  }
};
</script>