<template>
  <div>
    <compHeader />
    <div class="container">
      <router-view /> 
    </div>
    <compFooter />
  </div>
</template>

<script>
import compHeader from "./components/header_footer/header";
import compFooter from "./components/header_footer/footer";
export default {
  components: {
    compHeader,
    compFooter,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: bold;
}
h1 {
  margin: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  height: 70vh;
  background: yellow;
}
</style>
