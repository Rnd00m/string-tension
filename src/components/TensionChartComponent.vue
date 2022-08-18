<script lang="ts">
import { useTensionStore } from "@/stores/tension";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, EffectScatterChart, LinesChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
  DatasetComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  VisualMapComponent,
  BarChart,
  EffectScatterChart,
  LinesChart,
  DatasetComponent,
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  setup() {
    const option = ref({
      dataset: {
        source: [
          ["score", "tension", "string"],
          [89.3, 58212, "Matcha Latte"],
          [57.1, 78254, "Milk Tea"],
          [74.4, 41032, "Cheese Cocoa"],
          [50.1, 12755, "Cheese Brownie"],
          [89.7, 20145, "Matcha Cocoa"],
          [68.1, 79146, "Tea"],
        ],
      },
      grid: { containLabel: true },
      xAxis: { name: "Tension" },
      yAxis: { type: "category" },
      visualMap: {
        orient: "horizontal",
        left: "center",
        min: 10,
        max: 100,
        text: ["High Tension", "Low Tension"],
        // Map the score column to color
        dimension: 0,
        inRange: {
          color: ["#65B581", "#FFCE34", "#FD665F"],
        },
      },
      series: [
        {
          type: "bar",
          encode: {
            // Map the "tension" column to X axis.
            x: "tension",
            // Map the "string" column to Y axis
            y: "string",
          },
        },
      ],
    });

    return { option };
  },
});
</script>

<template>
  <div class="tension-chart-wrapper w-96">
    <v-chart :option="option" class="tension-chart" autoresize />
    <!--    <div class="text-center">{{ tensionStore.getTotalTension }} kg</div>-->
  </div>
</template>

<style scoped>
.tension-chart {
  width: 100%;
}
</style>
