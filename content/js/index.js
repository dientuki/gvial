/**
 * Created by dientuki on 05/02/17.
 */


import LazyLoad from 'vanilla-lazyload';

let myLazyLoad = new LazyLoad({
  // example of options object -> see options section
  container: document.getElementById('scrollPane'),
  elements_selector: ".lzl",
  data_src: "src",
  data_srcset: "srcset",
});