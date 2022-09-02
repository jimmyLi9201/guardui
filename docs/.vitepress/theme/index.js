import DefaultTheme from 'vitepress/theme'
import { inject, nextTick, onMounted, watch } from 'vue';
import mediumZoom from 'medium-zoom';

import './custom.css'
import './index.css';

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
    });
  },

  enhanceApp({ app, router }) {
    const mediumZoomSymbol = Symbol('mediumZoom')
    const zoom = mediumZoom()
    zoom.refresh = () => {
        zoom.detach()
        zoom.attach(':not(a) > img:not(.image-src)')
    }
    app.provide(mediumZoomSymbol, zoom)
    watch(
        () => router.route.path,
        () => nextTick(() => zoom.refresh()),
    )
  }
};