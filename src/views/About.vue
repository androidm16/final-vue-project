<template>
  <div class="about">
  </div>
  
  <section id="About" style="background-color: gray;">



  
  <div class="row" style="display: flex; justify-content: space-evenly;">
    <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl">
      <div data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
     <img src="@/assets/Images/About/Bonga1-removebg-preview.png" alt="image of Siyabonga" class="img1"> 
    </div>
    </div>
    
    <!--  -->

    <div class="col-sm-auto col-md-auto col-lg- col-xl- col-xxl" id="aboutpara" style="padding-top: 50px; font-size: x-large; text-align: start; padding-right: 100px; display: inline-end; color: white;">
      <div data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">

      <h1 class="text-uppercase font-weight-bolder" style="text-align: center; padding-top: 150px; box-shadow: inset 0 -6px 0 #F5A281; color:white;">About Me</h1><br><br>
      <h5><strong style="font-size: larger; background-color: blue; border-radius: 10px">Hello</strong> <b>world, my name is</b> <strong style="font-size: larger; background-color: blue; border-radius: 10px">Siyabonga Mkhosana</strong></h5>
      <p style="font-size: medium;">A family oriented and committed young man, who is driven to impact the world in a positive way a day at a time. I maintain a desire to learn more and an open personality, meaning I do not shy away from meeting new people or doing presentations. I am inspired by websites and educational games to stimulate mental productivity for young learners with difficulties, and design games to help them with studies. Thanks to the Life Choices Coding Academy I have learned Html, CSS, Bootstrap and Javascript. For this time i've done all types of projects.</p><br>
      <h5><strong>When did my passion for coding start:</strong></h5>
      <p style="font-size: medium;">My passion for the Tech Industry comes from the need to empower young minds with Web Development Technology and create technological convenience for all. If you're interested in working with me, don't hesitate to hire me.</p><br>
      <div class="content-list" style="text-align: start; border-top-style: solid; border-color: #F5A281; border-width: 2px;">
      <ul class="list-inline">
        <li class="list-inline-item single-info">
          <span><b>Name:</b></span>
          <p style="font-size: medium;">-Siyabonga Mkhosana</p>
        </li>
        <li class="list-inline-item single-info">
          <span><b>Date of birth:</b></span>
          <p style="font-size: medium;">-30/11/1994</p>
        </li>
        <li class="list-inline-item single-info">
          <span><b>Email:</b></span>
          <p style="font-size: medium;">-mkhosanasiyabonga@gmail.com</p>
        </li>
        <li class="list-inline-item single-info">
          <span><b>Location:</b></span>
          <p style="font-size: medium;">-Cape Town, South Africa.</p>
        </li>
      </ul>
      </div>
    </div>
  </div>
</div>

</section>

</template>

<script>
export default {
    name: 'About',
  components: {
  }
}
</script>

<style>
.about-me-section-align-left{
    height: 200vh;
    width: cover;
    padding: 100px 0 40px;
    padding-left: 50px;
}
#About{
    justify-content: space-evenly;
    overflow-x: auto;
    height: 100vh;
}
.text-black{
    color: white;
    background-color: white;
}
.img1 {
    margin: auto;
    margin-top: 130px;
    padding-bottom: 50px;
    height: 800px;
    position: relative;
    top: 0px;
    color: #ffffff;
    width: 90%;
    border-radius: 300px;
    /* -webkit-filter: grayscale(100%); */
    /* filter: grayscale(100%); */
      }

.list-inline{
    display: block;
    
} 
   /* Media Queries */
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 670px) { 
   #aboutpara{padding-left: 90px;}
  .img1{display: none;}
}

@media (max-width: 1400px) { 
    #aboutpara{padding-left: 90px;}
   .img1{display: none;}
 }
</style>