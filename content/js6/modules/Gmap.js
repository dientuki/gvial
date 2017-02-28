export default class Gmap {
  constructor(el) {

    this.el = document.getElementById(el);
    if (this.el == null) {
      return false;
    }
    this.init();
  }

  init() {

    window.initMap = () =>{
      let uluru = {lat: -25.363, lng: 131.044};
      let map = new google.maps.Map(this.el, {
        zoom: 4,
        center: uluru,
        scrollwheel: false
      });
      let marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }

    let js = document.createElement('script');
    js.type = 'text/javascript';
    js.async = true;
    js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRUxm8llw8uuQ2jNjSWlnQKtBIJRG2rMo&callback=initMap";
    document.head.appendChild(js);
  }
}