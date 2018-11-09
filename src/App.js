import React, { Component } from 'react';
import { tJoin, sumTho, period, cents } from './logic';
import logo from './logo.svg';
import './App.css';

// to be replaced with user input
// will change num to immutable
let num = ' $101511 ';
// clean up the input
num = num.trim().replace('$', '').replace(/,/g,'');
num = parseFloat(num).toFixed(2).toString();
num = num.split('.');

const dlr = num[0].padStart(9,'0'); // ES17 padding, might need a polly
const cnt = num[1];
console.log(dlr);
console.log(cnt);
console.log(cnt.substring(0,1));
console.log(cnt.substring(1,2));

let arr = dlr.split("");

// Don't really need to do this, could just access
// the array by index, creating variables just helps
// with legibility, also arr is now dead.
const one = arr.pop(),
      ten = arr.pop(),
      hun = arr.pop(),
      tho = arr.pop(),
      tth = arr.pop(),
      hth = arr.pop(),
      mil = arr.pop(),
      tml = arr.pop(),
      hml = arr.pop();

const mString = parseInt(mil + tml + hml) > 0 ? `${period(hml, tml, mil)} million` : '';
const tString = parseInt(tho + tth + hth) > 0 ? `${period(hth, tth, tho)} thousand` : '';
const oString = parseInt(one + ten + hun) > 0 ? `${period(hun, ten, one)}` : '';

const dString = `${mString} ${tString.length>0?tString:''}${oString.length>0?tJoin(sumTho(mil, tml, hml), hth):''}${oString.length>0?tJoin(sumTho(tho, tth, hth), hun):''}${oString} dollars`;

// This is a bit hacky, need to improve joining
const dStringClean = dString.replace(/\s\s/g, ' ').trim();

console.log(`${dStringClean}${cents(cnt.substring(0,1), cnt.substring(1,2))}`);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
