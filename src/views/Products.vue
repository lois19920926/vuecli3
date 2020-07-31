<template>
  <div>
    <h1>產品列表</h1>
    <div>
      <b-container>
      <b-card-group columns>
        <div v-for="item in products" :key="item.id">
        <b-card
          :img-src = "item.imageUrl[0]"
          img-alt="Image"
          img-top
        >
          <b-card-title>
            {{item.title}}
          </b-card-title>
          <b-card-text>
            售價 {{item.price}} 元
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">
              <router-link :to="`/product/${item.id}`">查看更多</router-link>
            </small>
          </template>
        </b-card>
      </div>
      </b-card-group>
    </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
      });
  },
};
</script>
