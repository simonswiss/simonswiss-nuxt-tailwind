<template>
    <section>
        <BlogPost :title="title" :postDate="postDate">
            <p>A 4-post series taking you through a website refactoring process using tachyons, a functional CSS toolkit that is guaranteed to trigger very strong opinions [insert Dave Rupert’s hot drama soundboard effect].<br></p>
            <p class="mb-3">The series is available on medium, and here are links to the four chapters.</p>
            <ol>
                <li><a href="https://hackernoon.com/full-re-write-with-tachyons-and-functional-css-a-case-study-part-1-635ccb5fb00b">Why re-write in the first place?</a></li><li><a href="https://medium.com/@simonswiss/full-re-write-in-10-days-with-tachyons-and-functional-css-a-case-study-part-2-dd60256b35b2#.blmmln1rz">What even is functional CSS?</a></li><li><a href="https://medium.com/@simonswiss/full-re-write-in-10-days-with-tachyons-and-functional-css-a-case-study-part-2-426c4dda13c2#.d0goawrpx">The refactoring process, step by step</a></li><li><a href="https://medium.com/@simonswiss/full-re-write-in-10-days-with-tachyons-and-functional-css-a-case-study-part-4-b565745ca1e5#.qpsjkhrvc">The aftermaths: key learnings and recommendations</a></li>
            </ol>
            <p>Happy reading!</p>
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
            "A 4-post series taking you through a website refactoring process using tachyons, a functional CSS toolkit that is guaranteed to trigger very strong opinions [insert Dave Rupert’s hot drama soundboard effect]."
        }
      ]
    };
  },
  data() {
    return {
      title:
        "Full re-write in 10 days with tachyons and functional CSS: A case study",
      postDate: "February 28, 2017"
    };
  },
  components: {
    BlogPost
  }
};
</script>