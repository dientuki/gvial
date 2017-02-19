export default class Sticky {
  constructor(opts) {
    opts = {
      el: opts.el || '#header',
      class: 'is-sticky'
    };

    this.opts = opts;
    this.init();

    this.onScroll();
  }

  init() {
    this.el = document.querySelector(this.opts.el);

    this.top = this.el.offsetTop;
    this.isSticky = null;

    document.addEventListener("scroll", () => {
      this.onScroll();
    });
  /*
    document.addEventListener("resize", () => {
        console.log('resize');
        this.onScroll();
    });
*/
}

onScroll() {
  if (window.outerWidth < 750){
    return false;
  }

  let offset = window.pageYOffset;

  if (offset == undefined) {
    offset = document.documentElement.scrollTop;
  }

  this.isSticky = offset > this.top ? true : false;

  if (this.isSticky != document.body.classList.contains(this.opts.class)) {
    document.body.classList.toggle(this.opts.class)
  }
}
}