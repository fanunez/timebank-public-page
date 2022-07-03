<template>
    <div class="main">
        <!-- User manual -->
        <div class="row justify-content-center">
            <vue-pdf-app
                :config="config"
                :pdf="good_practices" 
                @open="openHandler"
                class="pdf-container"
            ></vue-pdf-app>
        </div>
    </div>
</template>

<script>
// VuePdfApp component is registered in src/main.js
const getToolbarViewerMiddle = () => ({
  zoomOut: true,
  zoomIn: true,
  scaleSelectContainer: true,
});
const getToolbar = () => ({
  toolbarViewerLeft: false,
  toolbarViewerRight: false,
  toolbarViewerMiddle: getToolbarViewerMiddle(),
});

export default {
  name: "DocumentComponent",
  data() {
    return {
      config: {
        sidebar: false,
        secondaryToolbar: false,
        toolbar: getToolbar(),
        errorWrapper: false,
      },
      good_practices: 'static/buenas_practicas.pdf',
    };
  },
  methods: {
    openHandler(pdfApp) {
      window._pdfApp = pdfApp;
    },
  },
};
</script>

<style>
  .main{
    min-height: -webkit-fill-available;
    box-sizing: border-box;
    max-width: 425px;
    margin: 0 auto;
    background-color:white;
    padding-top: 100px;
  }
  .pdf-container {
      height: 300px;
      width: 360px;
  }
  .pdf-app .dropdownToolbarButton {
      width: 100px;
  }
</style>