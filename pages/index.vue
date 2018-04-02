<template>  
  <div>
    <h1 class="mb-4 font-black leading-tight text-3xl lg:text-4xl">Nice to meet you!</h1>
    <div class="cms">
      <p class="mb-4">I enjoy writing clean frontend code and building good, human relationships. I love my work and am always on the lookout for interesting new projects.</p>
      <p class="mb-12">I also teach front-end development on <a href="https://egghead.io/instructors/simon-vrachliotis">Egghead.io</a> and my <a href="https://youtube.com/simonswissdev">Youtube channel</a>, so go check these out! :)</p>

      <h3 class="mb-4">My current skillset and weapons of choice:</h3>
      <ul class="pl-6">
        <li>😇 Empathy, enthusiasm, passion! 🎉🌈</li>
        <li>💻 HTML / CSS / JS</li>
        <li>💡 Pug / Twig / Sass / ES6</li>
        <li>❤️ Craft CMS</li>
        <li>🙉 Utility-first CSS</li>
        <li>⚛️ React / Preact / VueJS</li>
        <li>🛠 Gulp / npm / webpack</li>
        <li>⚡️ <a href="https://developers.google.com/speed/pagespeed/insights/?url=simonswiss.com">Page Speed</a> &amp; Performance</li>
        <li>🐍 <strike>Snake-oil</strike> SEO</li>
        <li>🤓 GIT / command line </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "simonswiss | Swiss front-end developer based in Sydney",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Swiss front-end designer and developer based on Sydney's Northern Beaches. Proud father of two. Surf, basketball, ukulele. Love learning, love teaching."
        }
      ]
    };
  }
};
</script>