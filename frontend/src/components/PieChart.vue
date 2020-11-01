<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
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
    this.$refs.canvas.height = document.querySelector(".wrapper-pie").clientHeight * .7;
    this.$refs.canvas.width = document.querySelector(".wrapper-pie").clientHeight * .7;
    this.$refs.canvas.style.marginLeft = "10px";
    this.$refs.canvas.style.marginBottom = "15px";
    let labelsColor = Array.from(document.querySelectorAll(".box"));
    let options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            display: false,
            position: 'right',
            labels: {
                boxWidth: 40,
            },
        }
    }
    labelsColor.forEach((el, i) => el.style.backgroundColor = this.chartData.datasets[0].backgroundColor[i]);
    console.log(this.$refs.canvas);
    this.renderChart(this.chartData, options);
  },
  created() {
    // console.log(this.chartData, this.height, this.width);
  },
}
</script>