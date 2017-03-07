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
      let col = {lat: 4.746502, lng: -74.041654};
      let map = new google.maps.Map(this.el, {
        zoom: 18,
        center: col,
        scrollwheel: false
      });
      let marker = new google.maps.Marker({
        position: col,
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