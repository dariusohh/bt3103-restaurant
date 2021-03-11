<template>
  <div class="chart">
    <BarChart></BarChart>
    <LineChart></LineChart>
  </div>
</template>

<script>
import BarChart from "./charts/BarChart.vue";
import LineChart from "./charts/LineChart.vue";
export default {
  components: {
    BarChart,
    LineChart
  }
};
</script>

<style>
</style>
