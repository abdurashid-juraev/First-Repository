<template>
  <header>
    <div>
      <h1>Logo for header</h1>
      <div></div>
    </div>
    <div>
      <span
        ><router-link to="/" active-class="active"  exact
          >Home</router-link
        ></span
      >
      <span
        ><router-link to="/user" active-class="active" exact
          >Users</router-link
        ></span
      >
      <span
        ><router-link to="/about" active-class="active" exact
          >About us</router-link
        ></span
      >
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 35px;
  background: red;
  text-align: center;
}
a {
  text-decoration: none;
  margin-left: 50px;
  font-size: 30px;
}
a:hover {
  color: yellowgreen;
}
.active{
  color: green;
}
</style>