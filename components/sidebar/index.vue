<template>
  <div class="pr-12 max-w-sm md:border-r border-grey-lighter mb-8">      
    <Logo />
    <Nav />
    <SocialIcons />
  </div>
</template>

<script>
import Logo from "../../components/sidebar/Logo";
import Nav from "../../components/sidebar/Nav";
import SocialIcons from "../../components/sidebar/SocialIcons";

export default {
  components: {
    Logo,
    Nav,
    SocialIcons
  }
};
</script>

<style scoped>
.nuxt-link-exact-active {
  text-decoration: underline;
  font-weight: 700;
}
</style>