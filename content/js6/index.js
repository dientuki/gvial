import Sticky from './modules/Sticky';
import Gmap from './modules/Gmap';
import reCaptcha from './modules/reCaptcha';
import SendForm from './modules/SendForm';
import LazyLoad from 'vanilla-lazyload';
import Navigation from "./modules/Navigation";
import Wallop from 'wallop';

new Navigation();
new SendForm('#contact-form');
new reCaptcha('recaptcha');
new Gmap('map');
new Sticky({el:'#primary-navigation'});

let myLazyLoad = new LazyLoad({
  // example of options object -> see options section
  elements_selector: ".lzl",
  data_src: "original",
  data_srcset: "original-set"
});

let slider = document.querySelector('.Wallop');

if (slider.length !== null){
  let wap = new Wallop(slider);

  setInterval(
      function(){
        wap.next();
      },
      3000)
}