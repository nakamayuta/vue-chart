<template>
    <div class="chart">
        <h1>This is a Chart page</h1>
        <div class="wrapper-chart container">
            <div class="d-flex m-0 p-0">
                <div class="wrapper-bar">
                    <!-- <ul class="list-group col-1">
                        <li class="list-group-item">月</li>
                        <li class="list-group-item">日</li>
                    </ul> -->
                    <bar-chart
                    :chartData="barDatacollection"
                    ></bar-chart>
                </div>
                <div class="wrapper-pie">
                <pie-chart
                    :chartData="pieDatacollection"
                ></pie-chart>
                <div class="legend">
                    <ul>
                        <li>
                            <div class="box"></div>
                            <p>PHP</p>
                        </li>
                        <li>
                            <div class="box"></div>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <div class="box"></div>
                            <p>Python</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
import moment from 'moment' // 日付操作

export default {
    // name: 'chart',
    components: {
        BarChart,
        PieChart
    },
    data() {
        return {
            barDatacollection: {},
            barOptions: {
            },
            // barHeight: document.querySelector(".wrapper-bar").clientHeight * .8,
            // barWidth: document.querySelector(".wrapper-bar").clientWidth * .7,
            pieDatacollection:{},
            pieOptions:{
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
          this.barDatacollection = {
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
          this.pieDatacollection = {
            labels: ["PHP", "Javascript", "Python"],
            datasets: [{
                backgroundColor: ["#2196F3", "#8BC34A", "#FF9800"],
                data: [60, 30, 10]
            }],
          }
      },
      getDates: function() {
        let dataArr = [];
        for (let i = 0; i < 7; i++) {
          let month = moment().add(i, 'd')['_d'].getMonth()+1;
          let day = moment().add(i, 'd')['_d'].getDate();
          dataArr.push(`${month}/${day}`);
        }
        this.barDatacollection.labels = dataArr;
        // this.barOptions.title.text = `${dataArr[0]} ~ ${dataArr[dataArr.length-1]}`;
      },
    }
}
</script>
<style>
    .chart {
        padding-top: 10px;
    }
    .wrapper-chart {
        height: 300px;
        width: 85%;
        padding: 0;
    }

    .wrapper-bar {
        border: 1px solid #00000029;
        height: 300px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    .wrapper-pie {
        border: 1px solid #00000029;
        height: 300px;
        width: 50%;
        display: flex;
        /* position: relative; */
        /* justify-content: center; */
        align-items: flex-end;
        /* padding-bottom: 15px;
        padding-left: 10px; */
    }
    .legend {
        width: 40%;
        height: 40%;
        /* border: 1px solid #00000029; */
        margin: auto;
        margin-top: 60px;
    }
    .legend .box {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #aaa;
    }
    .legend ul {
        list-style: none;
    }
    .legend li {
        display: flex;
    }
    .legend li p{
        padding-left: 10px;
    }
</style>