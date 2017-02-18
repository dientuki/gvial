export default class Gmap {
  constructor(el) {
    this.el = el;

    window.initMap = () =>{
      let uluru = {lat: -25.363, lng: 131.044};
      let map = new google.maps.Map(document.getElementById(this.el), {
        zoom: 4,
        center: uluru
      });
      let marker = new google.maps.Marker({
        position: uluru,
        map: map
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
      js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRUxm8llw8uuQ2jNjSWlnQKtBIJRG2rMo&callback=initMap";
      document.head.appendChild(js);
    }
  }
}