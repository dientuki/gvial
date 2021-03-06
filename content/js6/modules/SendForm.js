import Axios from 'axios';

export default class SendForm {
  constructor(form) {
    this.form = document.querySelector(form);
    if (this.form == null) {
      return false;
    }
    this.data = new URLSearchParams();
    this.action = this.form.getAttribute('action');
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      for (let element of this.form.elements){
        if (element.value != ""){
          this.data.append(element.name, element.value)
        }
      }

      this.onSubmit();
    });
  }

  onSubmit() {

    Axios({
      method: 'post',
      url: this.action,
      data: this.data
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

    let url = 'https://www.google.com/recaptcha/api/siteverify?secret=6LcA_xUUAAAAAFrAa_54CsV4Pu2d7RK6l8yIS2sD&response=' + document.querySelector('#g-recaptcha-response').value

    Axios({ method: 'get',
            url: url
    }).then(function (response) {
        console.log(this.data, response['success']);

        if (response['success'] == true){
          Axios({ method: 'post',
            url: 'sendform.php',
            data: this.data
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
        }
      });
  }
}

