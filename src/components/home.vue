<template>
  <div>
    <h1 class="title">Home</h1>
    <hr />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam odio at
      esse, sunt est fugit harum, iure dignissimos dicta fuga vel, doloremque
      ipsum fugiat dolores neque atque modi architecto ducimus. Lorem ipsum
      dolor sit, amet consectetur adipisicing elit. Eum voluptates totam sit
      magni? Vero, dolores. Quasi, suscipit ex ipsum cum est tempora corrupti
      deserunt, quo rem excepturi minima obcaecati fuga.
    </div>
    <br /><br />
    <!-- <router-link :to="`/user/${userId}`">Go to user profile</router-link> -->
    <router-link :to="{ name: 'userProfile', params: { id: userId } }"
      >Go to user profile</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  mounted() {
    this.userId = 123456;
  },
};
</script>