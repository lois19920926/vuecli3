<template>
  <div>
    <h2>產品列表(先暫時用前台api取得商品資訊)，待實作登入功能</h2>
    <div>
      <b-container>
        <table role="table" aria-busy="false" aria-colcount="3"
        class="table b-table table-striped table-hover" id="__BVID__781">
          <thead role="rowgroup" class="">
            <tr role="row" class="">
              <th role="columnheader" scope="col" aria-colindex="1" class="">
                <div>分類</div>
              </th>
              <th role="columnheader" scope="col" aria-colindex="1" class="">
                <div>產品名</div>
              </th>
              <th role="columnheader" scope="col" aria-colindex="1" class="">
                <div>價錢</div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row" class="" v-for="item in products" :key="item.id">
              <td aria-colindex="1" role="cell" class="">{{item.category}}</td>
              <td aria-colindex="2" role="cell" class="">{{item.title}}</td>
              <td aria-colindex="3" role="cell" class="">{{item.price}}</td>
            </tr>
          </tbody>
        </table>
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
    // 產品列表(先暫時用前台api取得商品資訊)，待實作登入功能
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data;
      });
  },
};
</script>
