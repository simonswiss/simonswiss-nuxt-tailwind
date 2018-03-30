<template>
    <div class="my-8 pt-8 border-t border-grey-lighter bt b--near-white pt2" id="disqus_thread">
        <iframe id="dsq-app3172" name="dsq-app3172" allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" title="Disqus" width="100%" src="https://disqus.com/embed/comments/?base=default&amp;f=simonswiss-1&amp;t_i=64&amp;t_u=https%3A%2F%2Fsimonswiss.com%2Fblog%2Ffull-re-write-in-10-days-with-tachyons-and-functional-css-a-case-study&amp;t_d=Full%20re-write%20in%2010%20days%20with%20tachyons%20and%20functional%20CSS%3A%20A%20case%20study&amp;t_t=Full%20re-write%20in%2010%20days%20with%20tachyons%20and%20functional%20CSS%3A%20A%20case%20study&amp;s_o=default#version=341c6ac006cf1e349b79ef1033b8b11a" style="width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important; height: 403px !important;" horizontalscrolling="no" verticalscrolling="no"></iframe>
	    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
</template>

<script>
export default {
  mounted() {
    const disqus_config = function() {
      this.page.url = "";
      this.page.identifier = 0;
    };

    (function() {
      const d = document,
        s = d.createElement("script");
      s.src = "https://simonswiss-1.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
};
</script>