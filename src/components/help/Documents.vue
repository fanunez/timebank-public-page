<template>
    <div>
        <!-- User manual -->
        <div class="row justify-content-center">
            <vue-pdf-app 
                pdf="pdf/manual_usuario.pdf" 
                @open="openHandler"
                class="pdf-container"
            ></vue-pdf-app>
        </div>

        <!-- Practices -->
        <div class="row justify-content-center">
            <vue-pdf-app 
                pdf="pdf/buenas_practicas.pdf" 
                @open="openHandler"
                class="pdf-container"
            ></vue-pdf-app>
        </div>
    </div>
</template>

<script>
// VuePdfApp component is registered in src/main.js
export default {
  name: "DocumentComponent",
  methods: {
    openHandler(pdfApp) {
      window._pdfApp = pdfApp;
    },
  },
};
</script>

<style>
    .pdf-container {
        height: 300px;
        width: 500px;
    }
</style>