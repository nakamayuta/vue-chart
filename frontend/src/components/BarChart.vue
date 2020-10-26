<script>
import { Bar } from 'vue-chartjs'
import moment from 'moment' // 日付操作

export default {
  extends: Bar,
  name: 'chart',
  data () {
    return {
    data: {
        // 横軸のラベル
        labels: [],
        // データの詳細
        datasets: [
          {
            // データの説明
            // label: "",
            // データ
            data: [7, 5, 2, 4, 2, 7, 5],
            // データの色
            backgroundColor: '#9AECFB',
            // backgroundColor: [
            //   'rgba(255, 99, 132, 0.2)',
            //   'rgba(54, 162, 235, 0.2)',
            //   'rgba(255, 206, 86, 0.2)',
            //   'rgba(75, 192, 192, 0.2)',
            //   'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)',
            // ],
            // データの枠線の色
            // borderColor: [
            //   'rgba(255, 99, 132, 1)',
            //   'rgba(54, 162, 235, 1)',
            //   'rgba(255, 206, 86, 1)',
            //   'rgba(75, 192, 192, 1)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)'
            // ],
            // 枠線の太さ
            // borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "10/26 ~ 11/1"
        },
        legend: {
          display: false, // datasets.labelの表示非表示
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        tooltips:{
          backgroundColor: "#3498db",
          callbacks: {
            label: function(tooltipItems){
              // console.log(tooltipItems); // ツールチップの詳細
              return tooltipItems.value + "時間"
            }
          }
        },
        scales: {
          // x軸
          xAxes: [{
            // x軸の説明の詳細
            // scaleLabel: {
            //   display: true,
            //   labelString: 'Month'
            // }
          }],
          // y軸
          yAxes: [{
            // y軸の表示の詳細
            // scaleLabel: "<%=value%> kg",
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
  methods: {
    getDates: function() {
        let dataArr = [];
        for (let i = 0; i < 7; i++) {
          let month = moment().add(i, 'd')['_d'].getMonth()+1;
          let day = moment().add(i, 'd')['_d'].getDate();
          dataArr.push(`${month}/${day}`);
        }
        this.data.labels = dataArr;
    }
  },
  mounted () {
    // 描画
    this.getDates();
    this.renderChart(this.data, this.options);
  }
}
</script>