<template>
    <div class="chart">
        <h1>This is a Chart page</h1>
        <div class="wrapper">
        <bar-chart
        :chartData="datacollection"
        :chartOptions="options"
        ></bar-chart>
        </div>
    </div>
</template>

<script>
import BarChart from '../components/BarChart'
import moment from 'moment' // 日付操作

export default {
    // name: 'chart',
    components: {
        BarChart,
    },
    data() {
        return {
            datacollection: {},
            // height: window.innerHeight * .5,
            // width: window.innerWidth * 1,
            options: {
                title: {
                    display: true,
                    text: ""
                },
                legend: {
                    display: false, // datasets.labelの表示非表示
                },
                maintainAspectRatio: false,
                responsive: true,
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                tooltips:{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    callbacks: {
                        label: function(tooltipItems, data){
                            let dataPosition = data.datasets[tooltipItems.datasetIndex].data.length;
                            let dataLabel = data.datasets[tooltipItems.datasetIndex].label;
                            /******/
                            let els = {}
                            let sum = 0;
                            for (let i = 0; i < data.datasets.length; i++) {
                                if (data.datasets[i].data.length == dataPosition) {
                                    els[data.datasets[i].label] = data.datasets[i].data[dataPosition - 1];
                                    sum += data.datasets[i].data[dataPosition - 1];
                                }
                            }
                            console.log(`date: ${tooltipItems.label}`); // 日付
                            console.log(`sum-time: ${sum}`); // 1日の勉強時間
                            for (const key in els) {
                                console.log(`${key}: ${els[key]}`); // 各勉強時間
                            }
                            console.log(dataLabel);
                            console.log('-----');
                            /******/
                            return `${dataLabel} ${tooltipItems.value}時間`
                        }
                    }
                },
                scales: {
                // x軸
                xAxes: [{
                    stacked: true,
                    barPercentage: .7, // バーの幅
                }],
                // y軸
                yAxes: [{
                    // y軸の表示の詳細
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 2, // 表示の間隔
                        callback: (value) => {
                            return value + '時間'
                        }
                    }
                }]
                }
            }
        }
    },
    mounted() {
        
    },
    created() {
        this.fillData();
        this.getDates();
    },
    methods: {
      fillData(){
          this.datacollection = {
              labels: [],
              datasets: [
                {
                    label: "Python",
                    data: [2.5],
                    backgroundColor: "#F6AD3C",
                },
                {
                    label: "javascript",
                    data: [1.5],
                    backgroundColor: "#AACF52",
                },
                {
                    label: "PHP",
                    data: [1.5],
                    backgroundColor: "#3498db"
                },
                {
                    label: "PHP",
                    data: [null, 2.5],
                    backgroundColor: "#3498db"
                },
                {
                    label: "Python",
                    data: [null, 1],
                    backgroundColor: "#F6AD3C"
                },
                {
                    label: "javascript",
                    data: [null, null, 2],
                    backgroundColor: "#AACF52",
                },
                {
                    label: "PHP",
                    data: [null, null, null, 2.5],
                    backgroundColor: "#3498db"
                },
                {
                    label: "javascript",
                    data: [null, null, null, 1.5],
                    backgroundColor: "#AACF52",
                },
                {
                    label: "javascript",
                    data: [null, null, null, null, 1],
                    backgroundColor: "#AACF52",
                },
                {
                    label: "Python",
                    data: [null, null, null, null, 1],
                    backgroundColor: "#F6AD3C",
                },
                {
                    label: "PHP",
                    data: [null, null, null,  null, null, 7],
                    backgroundColor: "#3498db"
                },
                {
                    label: "javascript",
                    data: [null, null, null, null,  null, null, 5],
                    backgroundColor: "#AACF52",
                },
              ]
          };
      },
      getDates: function() {
        let dataArr = [];
        for (let i = 0; i < 7; i++) {
          let month = moment().add(i, 'd')['_d'].getMonth()+1;
          let day = moment().add(i, 'd')['_d'].getDate();
          dataArr.push(`${month}/${day}`);
        }
        this.datacollection.labels = dataArr;
        this.options.title.text = `${dataArr[0]} ~ ${dataArr[dataArr.length-1]}`;
      },
    }
}
</script>
<style>
    .chart {
        padding-top: 10px;
    }
    .wrapper {
        position: relative;
        margin: auto;
        width: 100vw;
        /* width: 90%; */
    }
    #bar-chart {
        padding: 10px;
    }
</style>