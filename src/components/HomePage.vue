<template>
  <div class="HomePage">
    <div class="PrincipalFrame">

      <h5>Servicios populares</h5>

      <div class="container" style="margin: 10px auto;">
        <mdb-carousel :interval="8000" showControls showIndicators>
            <mdb-carousel-item>
              <a href="Service">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide"/>
              </a>
            </mdb-carousel-item>
            <mdb-carousel-item>
              <a href="https://youtube.com">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide"/>
              </a>
            </mdb-carousel-item>
            <mdb-carousel-item>
              <a href="https://twitch.tv">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide"/>
              </a>
            </mdb-carousel-item>
        </mdb-carousel>
      </div>

      <h5>Categorías recomendadas</h5>

      <div class="container" style="margin: 10px auto;">
        <mdb-carousel :interval="8000" showControls showIndicators>
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide" />
        </mdb-carousel>
      </div>

      <h5>Últimos servicios agregados</h5>

      <div class="container" style="margin: 10px auto;">
        <mdb-carousel :interval="8000" showControls showIndicators>
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide" />
        </mdb-carousel>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-page'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.HomePage{
  height: auto;
}
.PrincipalFrame{
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  padding: 31px 0px;
  background-color:white;
  height: -webkit-fill-available;
}
.bg-light{
  background-color:#74015E!important;
}
.btn{
  padding: 0rem;
}
.btn-primary{
  background-color: #74015E!important;
}
.btn-outline-primary{
  width: -webkit-fill-available;
  background-color: white!important;;
  color: black!important;
  border-color: black!important;
}
</style>
