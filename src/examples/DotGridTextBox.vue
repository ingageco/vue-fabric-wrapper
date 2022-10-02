<template>
  <div id="working-wrapper">
    <fabric-canvas
      :id="'gridtesting2'"
      :height="640"
      :width="360"
      :backgroundColor="'eeeeee'"
      :preserveObjectStacking="true"
    >
      <fabric-rectangle :id="'gradientrect'" :zIndex="5" :height="200" :width="360" :top="400">
        <fabric-gradient
          :x1="0"
          :x2="0"
          :y1="0"
          :y2="1"
          :gradientUnits="'percentage'"
          :colorStops="{ 0: 'red', 1: 'purple' }"
          :zIndex="5"
        ></fabric-gradient>
      </fabric-rectangle>

      <fabric-rectangle :id="'gradientrect2'" :zIndex="5" :height="200" :width="360" :top="0">
        <fabric-gradient
          :x1="0"
          :x2="0"
          :y1="0"
          :y2="1"
          :gradientUnits="'percentage'"
          :colorStops="{ 0: 'red', 1: 'purple' }"
          :zIndex="5"
        ></fabric-gradient>
      </fabric-rectangle>

      <fabric-text-box
        :id="'gridTextBox'"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        :fontFamily="'Helvetica'"
        :fontWeight="'bold'"
        :fontSize="24"
        :fill="'white'"
        textBackgroundColor="black"
        :width="300"
        :left="30"
        :zIndex="10"
      ></fabric-text-box>
    </fabric-canvas>
  </div>
</template>

<script>
import vueFabricWrapper from "../components/";

export default {
  name: "Grid",
  components: {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricRectangle: vueFabricWrapper.FabricRectangle,
    FabricGradient: vueFabricWrapper.FabricGradient,
    FabricTextBox: vueFabricWrapper.FabricTextBox
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
#working-wrapper {
  margin: 50px 0 0;
  display: flex;
  justify-content: center;
}
</style>
