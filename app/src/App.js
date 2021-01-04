import React from 'react';
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

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
    };
  }

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

  componentDidMount() {

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

    });


  }

  render() {
    return (
      <RateContext.Provider value = {{state: this.state, 
                                      inputValueHandler: this.inputValueHandler,
                                      currencyValueHandler: this.currencyValueHandler,
                                      calculatorHandler: this.calculatorHandler}} >
        <Layout/>
      </RateContext.Provider>
    )
  }

}

export default App;
