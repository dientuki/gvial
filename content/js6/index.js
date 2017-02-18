import SendForm from './modules/SendForm';
import LazyLoad from 'vanilla-lazyload';
import Navigation from "./modules/Navigation";

new Navigation();
new SendForm('#contact-form');

let myLazyLoad = new LazyLoad({
  // example of options object -> see options section
  elements_selector: ".lzl",
  data_src: "original",
  data_srcset: "original-set"
});