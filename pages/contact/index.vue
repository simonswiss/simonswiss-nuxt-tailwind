<template>
    <div>    
        <h1 class="mb-4 font-black leading-tight text-3xl lg:text-4xl">Let's have a chat!</h1>
        <p>I am friendly. 👋 And Swiss. 🇨🇭 Which means I am both nice and reliable!</p>
        <p>Say hello in the live chat or <a href="mailto:hello@simonswiss.com">send me an e-mail</a>, don’t be shy!</p>
    </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Get in touch | simonswiss.com",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "I am friendly. 👋 And Swiss. 🇨🇭 Which means I am both nice and reliable! Say hello in the live chat or send me an e-mail, don’t be shy!"
        }
      ]
    };
  }
};
</script>