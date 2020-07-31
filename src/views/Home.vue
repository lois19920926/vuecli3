<template>
  <div class="home">
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/order">Order</router-link> |
      <router-link to="/checkdone">Order completed</router-link> |
      <router-link to="/admin/products">Dashboard</router-link>
    </div>
    <HelloWorld msg=""/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
