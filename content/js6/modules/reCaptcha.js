export default class reCaptcha {
  constructor(el) {
    this.el = el;

    window.onloadCallback = () =>{
      grecaptcha.render(this.el, {
        'sitekey' : '6LcA_xUUAAAAALWAW6h71X2iQiOtwcfJGo--y5ge'
      });
    }

    this.init();
  }

  init() {

    let element = document.getElementById(this.el);

    if (element != null){
      let js = document.createElement('script');
      js.type = 'text/javascript';
      js.async = true;
      js.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit";
      document.head.appendChild(js);
    }
  }
}