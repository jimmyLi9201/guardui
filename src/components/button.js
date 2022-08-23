import GView from "./view.js";

export default class Button extends GView {
    constructor() {
        super();

        var button = document.createElement('button');

        button.style.width = this.container.style.width;
        button.style.height = this.container.style.height;

        const type = this.getAttribute('type') || 'default';

        var backgroundColor = '#FFF';
        var textColor = '#606266';
        if (type === 'primary') {
            backgroundColor = '#396AFF';
            textColor = '#FFF';
        }
        button.style.backgroundColor = this.container.style.backgroundColor || backgroundColor;

        button.style.paddingTop = this.getAttribute('paddingTop') || '12px';
        button.style.paddingRight = this.getAttribute('paddingRight') || '20px';
        button.style.paddingBottom = this.getAttribute('paddingBottom') || '12px';
        button.style.paddingLeft = this.getAttribute('paddingLeft') || '20px';
        button.style.fontSize = this.getAttribute('fontSize') || '14px';
        button.style.borderRadius = this.getAttribute('borderRadius') || '4px';
        button.style.border = this.getAttribute('border') || '1px solid #dcdfe6';
        button.style.color = this.getAttribute('color') || textColor;

        button.innerText = this.innerHTML;
        button.style.cursor = 'pointer';

        this.container.append(button);
    }
}

window.customElements.define('g-button', Button);