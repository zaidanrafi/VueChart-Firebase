<template>
  <section class="px-7 md:px-20">
    <line-chart :data="state.productData"></line-chart>
  </section>
  <section class="w-full flex justify-center">
    <div @click="refresh" class="border-2 px-3 py-1 mt-6 cursor-pointer">refresh</div>
  </section>
</template>

<script>
import { reactive } from '@vue/runtime-core'
import 'chartkick/chart.js'
import { productCollection } from '../utl/firebase'

export default {
  methods:{
    refresh(){
      window.location.reload();
    },
  },

  setup(){
    const state = reactive({
      productData: {},
    });

    setInterval(async()=>{
      let productDataSet = await productCollection.once("value");
      state.productData = productDataSet.val();
    }, 500)

    return { state };
  }
}
</script>
