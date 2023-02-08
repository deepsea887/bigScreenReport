import reInfoLayout from './InfoLayout.vue';
import reToolLayout from './ToolLayout.vue';
import reCanvasLayout from './CanvasLayout.vue';
import reScale from './Scale.vue';

const ReInfoLayout = Object.assign(reInfoLayout, {
  install() {
    app.component(reInfoLayout.name, reInfoLayout);
  }
});
const ReToolLayout = Object.assign(reToolLayout, {
  install() {
    app.component(reToolLayout.name, reToolLayout);
  }
});
const ReCanvasLayout = Object.assign(reCanvasLayout, {
  install() {
    app.component(reCanvasLayout.name, reCanvasLayout);
  }
});
const ReScale = Object.assign(reScale, {
  install() {
    app.component(reScale.name, reScale);
  }
});

export { ReInfoLayout, ReToolLayout, ReCanvasLayout, ReScale };