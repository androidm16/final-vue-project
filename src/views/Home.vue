<template>
  <div class="home">
    <Landing/>
  </div>
</template>

<script>
import Landing from '../components/landing.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Landing
  }
}
</script>

<style>
/* Home page */
.home{ 
  background-image: url('../assets/Images/Landing/Office.jpg');
  background-size: cover;
  height: 100vh;

}
.Home .slide{
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
}
/* Typewriter animation inspired by CSS Tricks*/
.headings h1 {
    overflow: hidden; 
    border-right: .15em solid #F5A281;
    white-space: nowrap;
    margin: 0 auto; 
    letter-spacing: .15em; 
    animation: 
      typing 3.5s steps(40, end),
      blink-caret .75s step-end infinite;
      animation-iteration-count: 1;
  }
  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 60% }
  }
  /* The headings cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: black; }
}
/* My social widgets */
.social-widget-header{
    position: absolute;
    margin: 20px 30px 0;
    padding: 15px 0;
    justify-content: center;
}
</style>
