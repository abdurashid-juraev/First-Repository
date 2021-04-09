<template>
  <div>
    <h1 class="title">Users</h1>
    <div>{{ useId }}</div>
    <hr />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga. Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Totam odio at esse, sunt est fugit
      harum, iure dignissimos dicta fuga vel, doloremque ipsum fugiat dolores
      neque atque modi architecto ducimus. Lorem ipsum dolor sit, amet
      consectetur adipisicing elit. Eum voluptates totam sit magni? Vero,
      dolores. Quasi, suscipit ex ipsum cum est tempora corrupti deserunt, quo
      rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <div>
      <div class="link" @click="goToHome">Go to Home</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useId: this.$route.params.id,
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
.link {
  color: red;
}
</style>
