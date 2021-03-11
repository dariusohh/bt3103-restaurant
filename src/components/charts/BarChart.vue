<template>
  <div class="chart">
    <h1>Bar Chart</h1>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style scoped>

h1 {
    font-size: 50px;
    color:white;
    background-color:rgb(121, 224, 224);
    text-align:center;
    padding:20px;
    margin:0px 0px 30px 0px;
}

</style>