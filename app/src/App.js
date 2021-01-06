import React from 'react';
import axios from 'axios';
import './App.css';
import Layout from './components/layout/Layout';

import { RateContext } from './context/RateContext';

import CHF from './image/CHF.png';
import CNY from './image/CNY.png';
import EUR from './image/EUR.png';
import GBP from './image/GBP.png';
import JPY from './image/JPY.png';
import RUB from './image/RUB.png';
import USD from './image/USD.png';
import { Dark } from './components/dark/Dark';
import { Modal } from './components/modal/Modal';
import { Input } from './components/input/Input';
import { Header } from './components/header/Header';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      auth: false,
      error: '',

      formControls: {
        email: { 
          value: '',
          type: 'email',
          label: 'Email',
          errorMessage: 'Введите корректный Email',
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: '',
          type: 'password',
          label: 'Пароль',
          errorMessage: 'Введите корректный пароль',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minlength: 6
          }
        }
      },

      base: 'USD',
      rate: '',
      date: '',
      currency: { USD: {name:'Доллар США', flag: USD, course: ''},
                  CNY: {name:'Китайский Юань', flag: CNY, course: ''},
                  EUR: {name:'Евро', flag: EUR, course: ''},
                  GBP: {name:'Фунт Стерлингов', flag: GBP, course: ''},
                  JPY: {name:'Японская Йена', flag: JPY, course: ''},
                  RUB: {name:'Российский Рубль', flag: RUB, course: ''},
                  CHF: {name:'Швейцарский Франк', flag: CHF, course: ''}
      }, 

      // Calculator
      inputValue: 100,
      currencyValue: 'USD',
      resault: null,

      // sample state для работы компонента sample

      sample: {
        base: 'USD', 
        base2: 'RUB', 
        date: '',
        course: ''
      },
      sampleList: '',

      // show/hide modal register/login

      showModal: false,
      isFormValid: false
    };
  }

  /* Login/Register Handler method */
  loginHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    };
    
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAiL_7xA5qsK42syQoVBubeTbx1I_Smxr0',authData)
      
      if(response.data.idToken){

        const formControls = {...this.state.formControls}
        formControls.email.value = ''
        formControls.password.value = ''

        this.setState({auth: true,
                       showModal: false,
                       error: '',
                       formControls: formControls
        });
      } 
    } catch(e) {
      console.log(e);
      this.setState({error: 'Ошибка'});
    }
  }

  registerHandler = async () => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    };
    
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAiL_7xA5qsK42syQoVBubeTbx1I_Smxr0',authData)

      if(response.data.idToken){

        const formControls = {...this.state.formControls}
        formControls.email.value = ''
        formControls.password.value = ''

        this.setState({auth: true,
                       showModal: false,
                       error: '',
                       formControls: formControls
        });
      }
    } catch(e) {
      console.log(e);
      this.setState({error: 'Ошибка'});
    }
  };

  /* Login/Register Handler method */

  /* Show/Hide Modal Function */

  modalShowHandler = () => {
    this.setState({showModal: true})
  }

  modalHideHandler = () => {
    this.setState({showModal: false})
  }

  /* Show/Hide Modal Function */

  /* Render Inputs onChange validateControll */

  validateControl(value, validation) {
    if(!validation) {
      return true;
    }

    let isValid = true;

    if(validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if(validation.email) {
      isValid = validateEmail(value) && isValid;
    }

    if(validation.minlength) {
        isValid = value.length >= validation.minlength && isValid;
    }

    return isValid;
  }

  /* Render Inputs onChange validateControll */

  /* Render Inputs onChange */

  onChangeHandler = (event, controlName) => {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]};

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({formControls, isFormValid});
  };

  /* Render Inputs onChange */

  /* Render Inputs */

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, i)=>{
      const control = this.state.formControls[controlName];

      return(
        <Input
          key = {controlName + i}
          type = {control.type}
          value = {control.value}
          valid = {control.valid}
          touched = {control.touched}
          label = {control.label}
          errorMessage = {control.errorMessage}
          shouldValidate = {true}
          onChange = {(event)=> this.onChangeHandler(event, controlName)}
        />
      )
    });
  };

  /* Render Inputs */

  /* Sample <!-- getting started --> */
  
  baseHandler = (event) => {
    this.setState({sample: {...this.state.sample, base: event.target.value}});
  };

  base2Handler = (event) => {
    this.setState({sample: {...this.state.sample, base2: event.target.value}});
  };

  sampleDateHandler = (event) => {
    this.setState({sample: {...this.state.sample, date: event.target.value}});
  };

  dataWrite = async () => {

    await fetch(`https://api.exchangeratesapi.io/${ this.state.sample.date }?base=${ this.state.sample.base}`)
    .then((response) => response.json()).then((response) =>{
      this.setState({sample: {...this.state.sample, course: response.rates[this.state.sample.base2]}});
    });
    
    await axios.post('https://react-p-7469d-default-rtdb.firebaseio.com/sample.json', this.state.sample)
    .then((response) => {
      return('');
      //console.log(response);
    });

    await axios('https://react-p-7469d-default-rtdb.firebaseio.com/sample.json')
    .then((response) => {
      this.setState({sampleList: response.data});

      //console.log(response);
    });
  };

  sampleRemove = async (id) => {
    let sampleList = {...this.state.sampleList};

    delete sampleList[id];
    this.setState({sampleList});

    await axios.delete(`https://react-p-7469d-default-rtdb.firebaseio.com/sample/${id}.json`);
  };
  
  /*Sample <!-- end of receipt -->*/


  inputValueHandler = (event) => {
    this.setState({inputValue: event.target.value,
                   resault: null
    });
  };

  currencyValueHandler = (event) => {
    this.setState({currencyValue: event.target.value,
                   resault: null
    });
  };

  calculatorHandler = async (value) => {
    let resault;

    await fetch(`https://api.exchangeratesapi.io/latest?base=RUB`)
      .then((response)=> response.json()).then((response)=> {
        resault = response.rates[value] * this.state.inputValue;
      });

      this.setState({resault});

      // Проверка получени при калькуляции конечный результат
      //console.log(this.state.resault);
  };

  componentDidMount(){

    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
    .then((response)=> response.json()).then((response)=> {
      //console.log(response);

      const rateArr = ['USD', 'CNY', 'EUR', 'GBP', 'JPY', 'RUB', 'CHF'];
      const currency = {...this.state.currency};

      for(let i=0; i < rateArr.length; i++) {
        currency[rateArr[i]].course = response.rates[rateArr[i]];
      }

      this.setState({
        rate: response.rate,
        date: response.date,
        currency
      });

      axios('https://react-p-7469d-default-rtdb.firebaseio.com/sample.json')
      .then((response) => {
        this.setState({sampleList: response.data});

        //console.log(response);
      });

    });


  }

  render() {
    return (
      <RateContext.Provider value = {{state: this.state, 
                                      inputValueHandler: this.inputValueHandler,
                                      currencyValueHandler: this.currencyValueHandler,
                                      calculatorHandler: this.calculatorHandler,
                                      baseHandler: this.baseHandler,
                                      base2Handler: this.base2Handler,
                                      sampleDateHandler: this.sampleDateHandler,
                                      dataWrite: this.dataWrite,
                                      sampleRemove: this.sampleRemove,
                                      renderInputs: this.renderInputs,
                                      modalShowHandler: this.modalShowHandler,
                                      modalHideHandler: this.modalHideHandler,
                                      loginHandler: this.loginHandler,
                                      registerHandler: this.registerHandler}} >
        <Dark showModal = {this.state.showModal} modalHideHandler = {this.modalHideHandler}/>
        <Modal/>
        <Header/>
        <Layout/>
      </RateContext.Provider>
    )
  }

}

export default App;
