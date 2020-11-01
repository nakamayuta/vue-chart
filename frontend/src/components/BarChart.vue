<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'chart',
  props: ['chartData'],
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    // 描画
    this.$refs.canvas.height = document.querySelector('.wrapper-bar').clientHeight * .9;
    this.$refs.canvas.width = document.querySelector('.wrapper-bar').clientWidth * .9;
    let options = {
        title: {
            display: false,
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
    console.log(this.$refs.canvas);
    this.renderChart(this.chartData, options);
  },
  created() {
    // console.log(this.chartData, this.height, this.width);
  },
}
</script>