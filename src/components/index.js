import Vue from "vue";

import FabricAnimation from "./FabricAnimation.vue";
import FabricBackgroundImage from "./FabricBackgroundImage.vue";
import FabricCanvas from "./FabricCanvas.vue";
import FabricCircle from "./FabricCircle.vue";
import FabricDotGrid from "./FabricDotGrid.vue";
import FabricEllipse from "./FabricEllipse.vue";
import FabricGradient from "./FabricGradient.vue";
import FabricLineGrid from "./FabricLineGrid.vue";
import FabricGroup from "./FabricGroup.vue";
import FabricImageFromURL from "./FabricImageFromURL.vue";
import FabricLine from "./FabricLine.vue";
import FabricOverlayImage from "./FabricOverlayImage.vue";
import FabricPath from "./FabricPath.vue";
import FabricPolygon from "./FabricPolygon.vue";
import FabricPolyline from "./FabricLine.vue";
import FabricRectangle from "./FabricRectangle.vue";
import FabricShadow from "./FabricShadow.vue";
import FabricSVGFromURL from "./FabricSVGFromURL";
import FabricText from "./FabricText.vue";
import FabricTextBox from "./FabricTextBox.vue";

import FabricTriangle from "./FabricTriangle.vue";

const VueFabricWrapper = {
  FabricAnimation,
  FabricBackgroundImage,
  FabricCanvas,
  FabricCircle,
  FabricDotGrid,
  FabricEllipse,
  FabricGradient,
  FabricLineGrid,
  FabricGroup,
  FabricImageFromURL,
  FabricLine,
  FabricOverlayImage,
  FabricPath,
  FabricPolygon,
  FabricPolyline,
  FabricRectangle,
  FabricShadow,
  FabricSVGFromURL,
  FabricText,
  FabricTextBox,
  FabricTriangle
};

Object.keys(VueFabricWrapper).forEach(name => {
  Vue.component(name, VueFabricWrapper[name]);
});

export default VueFabricWrapper;
export {
  FabricAnimation,
  FabricBackgroundImage,
  FabricCanvas,
  FabricCircle,
  FabricDotGrid,
  FabricEllipse,
  FabricGradient,
  FabricLineGrid,
  FabricGroup,
  FabricImageFromURL,
  FabricLine,
  FabricOverlayImage,
  FabricPath,
  FabricPolygon,
  FabricPolyline,
  FabricRectangle,
  FabricShadow,
  FabricSVGFromURL,
  FabricText,
  FabricTextBox,
  FabricTriangle
};
