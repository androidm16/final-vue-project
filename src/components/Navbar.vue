<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <router-link to="/">Home</router-link> |
       <router-link to="/about">About</router-link> |
       <router-link to="/resume">Resume</router-link> |
       <router-link to="/skills">Skills</router-link> |
       <router-link to="/project">Project</router-link> |
       <router-link to="/Testimonial">Testimonial</router-link> |
       <router-link to="/SignupForm">SignupForm</router-link>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>

</script>

<style>
* {margin: 0; padding: 0; 
   box-sizing: border-box;
   overflow-x: hidden;
    
}
.spacer {width: 100%; height: 100px;}

body {font-family: "Open Sans", sans-serif;}

nav {
	width: 100%; 
	background-color: rgb(73, 69, 69); 
	display: flex;
	justify-content: space-between;
    position: fixed;
    
}
.logo {
	padding: 20px; 
	text-decoration: none;
	color: #fff;
	text-transform: uppercase;
}
nav .nav-bar {
	padding: 20px; 
	display: flex; 
    
}
nav .nav-bar .nav-bar_item {
	list-style-type: none;
	padding: 0px 20px;
    
}
nav .nav-bar .dropdown {
	position: relative;
}
nav .nav-bar .nav-bar_item a {
	position: relative;
	display: block; 
	padding-bottom: 5px;
	text-decoration: none;
	color: #fff;
	text-transform: uppercase;
    
}
nav .nav-bar .nav-bar_item a:after {
	content: "";
	position: absolute;
	width: 0%;
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #fff;
	transition: 0.1s ease-in-out;
    
}
nav .nav-bar .nav-bar_item a:hover:after {
	width: 100%;
    
}
.navbar {
  color: aqua;
  background: black;
  
}
.navbar-toggler {
    background: black;
    
}
.navbar-nav {
    background: #eee;
    border-radius: 20px;
    justify-content: space-between;
    display: flex;
    
}
</style>