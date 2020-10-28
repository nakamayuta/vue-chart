<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'chart',
  props: ['chartData', 'chartOptions'],
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    // 描画
    this.renderChart(this.chartData, this.chartOptions);
  },
  created() {
    console.log(this.chartData, this.height, this.width);
  },
}
</script>