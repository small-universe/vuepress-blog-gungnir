<template>
    <iframe class="video-iframe" width="100%" frameborder="no" scrolling="no" seamless="" allowfullscreen="allowfullscreen" :src="src"></iframe>
</template>

<script>
  export default {
      props: {
          src: {
              type: String
          }
      },
      mounted(){
            function changeVideoIframe(){
                const video = document.getElementsByClassName('video-iframe');
                const width = document.getElementsByClassName('video-iframe')[0].scrollWidth;
                for(let i = 0;i<video.length;i++){
                    video[i].style.height = width*0.75+'px'
                }
            }
            changeVideoIframe()
            window.onresize = function(){changeVideoIframe()}
      }
  }
</script>
