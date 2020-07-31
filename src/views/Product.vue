<template>
    <div>
        <h2>單一產品頁面</h2>
        <b-container>
        <h2>{{this.product.title}}</h2>
        <img :src = "this.product.imageUrl[0]" alt="" style="width: 100%;">
        <b-button pill variant="outline-primary">加入購物車</b-button>
        </b-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  created() {
    // 解構的話一定要解構
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
      });
  },
};
</script>
