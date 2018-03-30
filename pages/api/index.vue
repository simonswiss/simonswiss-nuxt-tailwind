<template>
    <div>
        <h1 class="mb-6 leading-tight">The content below comes from an external API, fetched with axios via the `asnycData` method.</h1>
        <hr class="w-8 h-1 bg-grey ml-0 mb-8">
        <ul class="list-reset">
            <li class="mb-8" :key="i" v-for="(post, i) in posts">
                <h2 class="text-md leading-tight mb-2">{{ post.title }}</h2>
                <p class="text-grey-dark">{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData() {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return {
          posts: response.data
        };
      })
      .catch(error => console.log("error", error));
  }
};
</script>