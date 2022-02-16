<template>
<section>
  <body>
    <header class="fixed-top">
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
      <nav class="fixed-top"> 
        <ul>
          <li id="title"><a href="#"><strong><span style="color: Blue; font-size: 30px">S</span>iyabonga <span style="color: Blue; font-size: 30px">M</span>khosana</strong></a></li>
          <li><router-link to="/"><i class="bi bi-house-heart-fill"></i>Home</router-link></li>
          <li><router-link to="/about"><i class="bi bi-person-square"></i>About</router-link></li>
          <li><router-link to="/resume"><i class="bi bi-clipboard2-check-fill"></i>Resume</router-link></li>
          <li><router-link to="/skills"><i class="bi bi-bar-chart-line-fill"></i>Skills</router-link></li>
          <li><router-link to="/project"><i class="bi bi-kanban-fill"></i>Project</router-link></li>
          <li><router-link to="/Testimonial"><i class="bi bi-people-fill"></i>Testimonials</router-link></li>
          <li><router-link to="/SignupForm"><i class="bi bi-telephone-inbound-fill"></i>Contact</router-link></li>
        </ul>
      </nav>
    </header> 
  </body>
</section>
</template>
<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
       <li><router-link to="/">Home</router-link></li> |
       <li><router-link to="/about">About</router-link></li> |
       <li><router-link to="/resume">Resume</router-link></li> |
       <li><router-link to="/skills">Skills</router-link></li> |
       <li><router-link to="/project">Project</router-link></li> |
       <li><router-link to="/Testimonial">Testimonial</router-link></li> |
       <li><router-link to="/SignupForm">SignupForm</router-link></li>
      </ul>
    </div>
  </div> 
</nav>-->
<script>

</script>

<style>
 body {
  margin: 0px;
}

header {
  background-color: #F5A281;
  width: 100%;
  height: 70px;
}

ul {
  display: flex;
  list-style-type: none;
  font-size: 20px;
  justify-content: flex-end; 
  margin: 0px; 
}


li {
  margin: 20px;
  font-family: Arial;
}

#title {
  margin-right: auto;
}


li a {
 color: black;
 text-decoration: none; 
}

li a:hover {
  text-decoration: underline;
  color: blue;
}

@media (max-width: 450px) {
  ul {
    flex-wrap: wrap;
    justify-content: center;
    background-color: #F5A281;
    padding: 0;
  }
  
  #title {
    flex-basis: 100%;
    text-align: center;
    margin-left: 0;
  }
}

</style>
/* {margin: 0; padding: 0; 
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
    
} */