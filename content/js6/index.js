import LazyLoad from 'vanilla-lazyload';
import Navigation from "./modules/Navigation";

new Navigation();

let myLazyLoad = new LazyLoad({
  // example of options object -> see options section
  elements_selector: ".lzl",
  data_src: "original",
  data_srcset: "original-set",
});