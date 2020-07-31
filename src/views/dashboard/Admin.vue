<template>
  <div class="home">
      <div id="nav">
    <h1>後台管理系統</h1>
    <router-link to="/">back to home</router-link> |
    <router-link to="/admin/products">products</router-link> |
    <router-link to="/admin/order">order</router-link> |
    <router-link to="/admin/coupons">coupons</router-link> |
    <router-link to="/admin/photos">photos</router-link> |
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
