export default class Navigation {
    constructor(opts) {
        opts = {
            open: '#main-icon .burger-icon',
            close: '#main-icon .close-icon',
            css: 'is-menu-opened'
        };

        this.opts = opts;
        this.init();
    }

    init() {

        this.el = {
            open: document.querySelector(this.opts.open),
            close: document.querySelector(this.opts.close),
        };

        setTimeout(() => {
            this.el.open.addEventListener('click', () => {
                this.onClick();
            });
            this.el.close.addEventListener('click', () => {
                this.onClick();
            });
            document.getElementById('primary-navigation').addEventListener('click', (e) => {
                if (document.body.classList.contains('is-menu-opened') == false) {
                    return false;
                }
                if (e.target.id == "primary-navigation"){
                    this.onClick();
                }
            });
        }, 100);
    }

    onClick() {
        document.body.classList.toggle(this.opts.css);
    }
}

