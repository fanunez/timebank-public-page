<template>
  <div class="home">
    <div v-if="userLogged">
      <TopNavbar2/>
      <DocumentPDF />
      <BottomNavbar/>
    </div>
    <div v-else>
      <TopNavbar1/>
      <DocumentPDF />
      <BottomNavbar/>
    </div>
  </div>
</template>

<script>
import BottomNavbar from '../components/shared/BottomNavbar.vue'
import HomePage from '../components/HomePage.vue'
import TopNavbar1 from '../components/shared/TopNavbar1.vue'
import TopNavbar2 from '../components/shared/TopNavbar2.vue'
import auth from "@/logic/auth";
import DocumentPDF from '../components/help/Documents.vue'

// VuePdfApp component is registered in src/main.js
export default {
  name: "DocumentView",
  components: {
    BottomNavbar,
    HomePage,
    TopNavbar1,
    TopNavbar2,
    DocumentPDF
  },
  methods: {
    openHandler(pdfApp) {
      window._pdfApp = pdfApp;
    },
  },
  computed: {
    userLogged() {
      return auth.getUserLogged()
    },
    userBono(){
      const respon = auth.getUserLogged()
      const CookieUser = auth.getUserBono(respon)
      return CookieUser
    }
  }
};
</script>

<style>
    .pdf-container {
        height: 300px;
        width: 500px;
    }
</style>