<template>
  <div class="principal-frame">
    <!-- Popular services -->
    <p class="timebank-title">Servicios populares</p>
    <div class="container" style="margin: 10px auto;">
      <mdb-carousel :interval="8000" showControls showIndicators>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ most_popular_services_ids[0]">
            <img class="d-block w-100" :src=most_popular_services_imgs[0] style="height: 174px;" alt="First slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{most_popular_services[0]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ most_popular_services_ids[1]">
            <img class="d-block w-100" :src=most_popular_services_imgs[1] style="height: 174px;" alt="Second slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{most_popular_services[1]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ most_popular_services_ids[2]">
            <img class="d-block w-100" :src=most_popular_services_imgs[2] style="height: 174px;" alt="Third slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{most_popular_services[2]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ most_popular_services_ids[3]">
            <img class="d-block w-100" :src=most_popular_services_imgs[3] style="height: 174px;" alt="Fourth slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{most_popular_services[3]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ most_popular_services_ids[4]">
            <img class="d-block w-100" :src=most_popular_services_imgs[4] style="height: 174px;" alt="Fifth slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{most_popular_services[4]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
      </mdb-carousel>
    </div>
    <!-- Recomended Categories -->
    <p class="timebank-title">Categorías recomendadas</p>
    <div class="container" style="margin: 10px auto;">
      <mdb-carousel :interval="8000" showControls showIndicators>
        <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide" />
        <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide" />
        <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide" />
      </mdb-carousel>
    </div>
    <!-- Last services -->
    <p class="timebank-title">Últimos servicios agregados</p>
    <div class="container" style="margin: 10px auto;">
      <mdb-carousel :interval="8000" showControls showIndicators>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ last_services_ids[0]">
            <img class="d-block w-100" :src=last_services_imgs[0] style="height: 174px;" alt="First slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{last_services[0]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ last_services_ids[1]">
            <img class="d-block w-100" :src=last_services_imgs[1] style="height: 174px;" alt="Second slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{last_services[1]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ last_services_ids[2]">
            <img class="d-block w-100" :src=last_services_imgs[2] style="height: 174px;" alt="Third slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{last_services[2]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ last_services_ids[3]">
            <img class="d-block w-100" :src=last_services_imgs[3] style="height: 174px;" alt="Fourth slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{last_services[3]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
        <mdb-carousel-item>
          <a v-bind:href="'/service/'+ last_services_ids[4]">
            <img class="d-block w-100" :src=last_services_imgs[4] style="height: 174px;" alt="Fifth slide"/>
            <div class="carousel-caption caption-bottom">
              <h3 class="h3-responsive"></h3>
              <p class="caption">{{last_services[4]}}</p>
            </div>
          </a>
        </mdb-carousel-item>
      </mdb-carousel>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home-page',
  data () {
    return {
      most_popular_services_ids: [],
      most_popular_services_imgs: [],
      most_popular_services: [],
      last_services_ids: [],
      last_services_imgs: [],
      last_services: [],
    }
  },
  async mounted() {
    await axios
      .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/popular-services/getAll' )
      .then( response => {
        const ids = response.data
        console.log(ids);
        ids.forEach(element => {
          this.most_popular_services_ids.push(element.uid)
          this.most_popular_services.push(element.title)
          this.most_popular_services_imgs.push(element.img)
        });
      })
      .catch( e => console.log( e ))

    await axios
      .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/last-services/getAll' )
      .then( response => {
        const ids = response.data
        ids.forEach(element => {
          this.last_services_ids.push(element.uid)
          this.last_services.push(element.title)
          this.last_services_imgs.push(element.img)
        });
      })
      .catch( e => console.log( e ))

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.principal-frame{
  /* box-sizing: border-box; */
  max-width: 425px;
  margin: 0px auto;
  padding: 100px 0px;
  background-color:white;
  height: 100vh;
  min-height: 900px;

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
.timebank-title{
  font-size: 24px;
}
.caption{
  background-color: rgba(0, 0, 0, 0.6);
  max-width: fit-content;
  margin: 0px auto;
  padding-left: 2px;
  padding-right: 2px;
  border-radius: 5px;
}
</style>
