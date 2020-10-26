<template>
    <div class="chart">
        <h1>This is a Chart page</h1>
        <div class="wrapper">
        <bar-chart></bar-chart>
        <!-- <Pie></Pie> -->
        </div>
    </div>
</template>

<script>
// import Bar from '../components/Bar.vue';
import BarChart from '../components/BarChart'
// import Pie from '../components/Pie'

export default {
    // name: 'chart',
    components: {
        BarChart,
        // Pie
    }
}
</script>
<style>
    .chart {
        padding-top: 10px;
    }
    .wrapper {
        display: flex;
        justify-content: space-around;
        padding: 20px 10px 0 10px;
    }
</style>