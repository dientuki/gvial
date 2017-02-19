import Axios from 'axios';

export default class SendForm {
  constructor(form) {
    this.form = document.querySelector(form);
    if (this.form == null) {
      return false;
    }
    this.data = [];
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      for (let element of this.form.elements){
        this.data[element.name] = element.value;
      }

      this.onSubmit();
    });
  }

  onSubmit() {

    let url = 'https://www.google.com/recaptcha/api/siteverify?secret=6LcA_xUUAAAAAFrAa_54CsV4Pu2d7RK6l8yIS2sD&response=' + document.querySelector('#g-recaptcha-response').value

    Axios({ method: 'get',
            url: url
    }).then(function (response) {
        console.log(this.data, response['success']);

        if (response['success'] == true){
          Axios({ method: 'post',
            url: 'sendform.php',
            data: this.data
          })
        }
      });
  }
}

