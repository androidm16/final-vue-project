<template>
  <div class="container1">
<div class="Skills" id="Skills" style="text-align: center; background-color: rgb(70, 66, 66);">
  <div data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000">  

  <div class="text-uppercase font-weight-bolder" style="padding: auto; color: white; margin-top: 60px">
    <h1 class="h1" style="box-shadow: inset 0 -6px 0 #F5A281; margin-bottom: 30px; color:white; font-weight: bold;"><b>Skills</b></h1>
  

  <div style="width:85%; margin: auto; color: white; padding-top: 40px;">
    <p>HTML</p>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75%" aria-valuemin="75" aria-valuemax="100" style="width: 75%">75%</div>
    </div><br>

    <p style="color: white;">CSS</p>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60%" aria-valuemin="60" aria-valuemax="100" style="width: 60%">60%</div>
    </div><br>

    
    <p style="color: white;">JAVASCRIPT</p>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="45%" aria-valuemin="45" aria-valuemax="100" style="width: 45%">45%</div>
    </div><br>

    <p style="color: white;">Git</p>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90%" aria-valuemin="90" aria-valuemax="100" style="width: 90%">90%</div>
    </div><br>

    <p style="color: white;">Netlify</p>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90%" aria-valuemin="90" aria-valuemax="100" style="width: 90%">90%</div>
    </div><br>

    <p style="color: white;">SQL Database</p>
    <div class="progress" style="height: 30px;">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60%" aria-valuemin="60" aria-valuemax="100" style="width: 60%">60%</div>
    </div>

  </div>
  </div>
</div>
</div>
</div>

</template>

<script>
export default {

}
</script>

<style>
.h1{
  width: 85.4%;
  text-align: center;
  margin: auto;
}
.Skills{
    height: 100vh;
    width: 100%;
    padding: 60px 0 40px;
    z-index: 7607603737409743096770347437606;
}


/*Horizontal Timeline*/

body{margin-top:20px;}
.timeline-steps {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.timeline-steps .timeline-step {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 3rem;
}

@media all and (max-width:1000px) {
    .timeline-steps .timeline-step:not(:last-child):after {
        content: "";
        display: block;
        border-top: .25rem dotted #3b82f6;
        width: 3.46rem;
        position: absolute;
        left: 7.5rem;
        top: .3125rem;
    }
    .timeline-steps .timeline-step:not(:first-child):before {
        content: "";
        display: block;
        border-top: .25rem dotted #3b82f6;
        width: 3.8125rem;
        position: absolute;
        right: 7.5rem;
        top: .3125rem;
    }
}

.timeline-steps .timeline-content {
    width: 10rem;
    text-align: center;
}

.timeline-steps .timeline-content .inner-circle {
    border-radius: 1.5rem;
    height: 3rem;
    width: 3rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #3b82f6;
}

.timeline-steps .timeline-content .inner-circle:before {
    content: "";
    background-color: #3b82f6;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    min-width: 1rem;
    border-radius: 6.25rem;
    opacity: .5;
}

 .body{
    overflow-x: hidden;
}
.body{
    width: 100%;
    overflow-x: hidden;
    justify-content: center;
}
</style>