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
  name: "TensionChart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  setup() {
    const option = ref({
      dataset: {
        source: [
          [89.3, "Matcha Latte"],
          [57.1, "Milk Tea"],
          [74.4, "Cheese Cocoa"],
          [50.1, "Cheese Brownie"],
          [89.7, "Matcha Cocoa"],
          [68.1, "Tea"],
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
    const initOptions = {
      renderer: "canvas",
    };

    return { option, initOptions };
  },
});
</script>

<template>
  <div class="tension-chart-wrapper">
    <div class="tension-chart-container">
      <v-chart
        :option="option"
        class="tension-chart"
        :init-options="initOptions"
        autoresize
      />
    </div>
  </div>
</template>

<style scoped>
.tension-chart-container {
  height: 500px;
  width: 600px;
}
</style>