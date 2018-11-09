import React, { Component } from 'react';
import { tJoin, sumTho, period, cents, cleanAmount } from './logic';
import './App.css';

let arr = [];
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

	constructor(props) {
		super(props);
		this.state = {
			amount: '0',
			one: '',
			ten: '',
			hun: '',
			tho: '',
			tth: '',
			hth: '',
			mil: '',
			tml: '',
			hml: '',
			cnt: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({[name]: value });
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevState.amount !== this.state.amount) {
			const cleaned = cleanAmount(this.state.amount).split('.');
			const dlr = cleaned[0].padStart(9,'0'); // ES17 padding, might need a polly
			const cnt = cleaned[1];

			this.setState({cnt: cnt });

			let arr = dlr.split("");
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div>
						<label htmlFor="amount">Enter an amount for the cheque</label>
						<input id="amount" name="amount" type="text" value={this.state.amount} onChange={this.handleChange} />
					</div>
					<div>
						{"string to go here"}
					</div>
				</header>
			</div>
		);
	}
}

export default App;
