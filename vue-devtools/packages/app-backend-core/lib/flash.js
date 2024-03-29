"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flashComponent = void 0;
async function flashComponent(instance, backend) {
    const bounds = await backend.api.getComponentBounds(instance);
    if (bounds) {
        let overlay = instance.__VUE_DEVTOOLS_FLASH;
        if (!overlay) {
            overlay = document.createElement('div');
            instance.__VUE_DEVTOOLS_FLASH = overlay;
            overlay.style.border = '2px rgba(65, 184, 131, 0.7) solid';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '99999999999998';
            overlay.style.pointerEvents = 'none';
            overlay.style.borderRadius = '3px';
            overlay.style.boxSizing = 'border-box';
            document.body.appendChild(overlay);
        }
        overlay.style.opacity = '1';
        overlay.style.transition = null;
        overlay.style.width = Math.round(bounds.width) + 'px';
        overlay.style.height = Math.round(bounds.height) + 'px';
        overlay.style.left = Math.round(bounds.left) + 'px';
        overlay.style.top = Math.round(bounds.top) + 'px';
        requestAnimationFrame(() => {
            overlay.style.transition = 'opacity 1s';
            overlay.style.opacity = '0';
        });
        clearTimeout(overlay._timer);
        overlay._timer = setTimeout(() => {
            document.body.removeChild(overlay);
            instance.__VUE_DEVTOOLS_FLASH = null;
        }, 1000);
    }
}
exports.flashComponent = flashComponent;
//# sourceMappingURL=flash.js.map