<template>
    <div class="chart">
        <h1>This is a Chart page</h1>
        <div class="wrapper">
        <Bar></Bar>
        <Pie></Pie>
        </div>
    </div>
</template>

<script>
// import Bar from '../components/Bar.vue';
import Bar from '../components/Bar'
import Pie from '../components/Pie'

export default {
    // name: 'chart',
    components: {
        Bar,
        Pie
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