import React, { Component } from 'react';
import { tJoin, sumTho, period, cents, cleanAmount } from './logic';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			amount: '',
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
			oor: false,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		if(parseFloat(cleanAmount(value)) > 974790317.77) {
			this.setState({oor: true });
		} else {
			this.setState({oor: false });
		}
		this.setState({[name]: value });
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevState.amount !== this.state.amount) {
			const cleaned = cleanAmount(this.state.amount).split('.');
			const dlr = cleaned[0].padStart(9,'0'); // ES17 padding, might need a polly
			const cnt = cleaned[1];

			this.setState({cnt: cnt });

			let arr = dlr.split("");

			// Don't really need to do this, could just access
			// the array by index, creating variables just helps
			// with legibility, also arr is now dead.
			this.setState({one: arr.pop()});
			this.setState({ten: arr.pop()});
			this.setState({hun: arr.pop()});
			this.setState({tho: arr.pop()});
			this.setState({tth: arr.pop()});
			this.setState({hth: arr.pop()});
			this.setState({mil: arr.pop()});
			this.setState({tml: arr.pop()});
			this.setState({hml: arr.pop()});
		}
	}

	render() {

		const one = this.state.one,
		      ten = this.state.ten,
		      hun = this.state.hun,
		      tho = this.state.tho,
		      tth = this.state.tth,
		      hth = this.state.hth,
		      mil = this.state.mil,
		      tml = this.state.tml,
		      hml = this.state.hml,
		      cnt = this.state.cnt;

		const mString = parseInt(mil + tml + hml) > 0 ? `${period(hml, tml, mil)} million` : '';
		const tString = parseInt(tho + tth + hth) > 0 ? `${period(hth, tth, tho)} thousand` : '';
		const oString = parseInt(one + ten + hun) > 0 ? `${period(hun, ten, one)}` : '';
		
		const dString = `${mString} ${tString.length>0?tString:''}${oString.length>0?tJoin(sumTho(mil, tml, hml), hth):''}${oString.length>0?tJoin(sumTho(tho, tth, hth), hun):''}${oString} dollars`;
		
		const dStringClean = dString.replace(/\s\s/g, ' ').trim().toUpperCase(); // This is a bit hacky, need to improve joining
		const cString = cnt === undefined ? '' : cents(cnt.substring(0,1), cnt.substring(1,2)).toUpperCase();
		
		let placeHolder;
		
		if(this.state.oor === true) {
			placeHolder = 'Maximum amount reached, please enter a lower amount';
		} else if(this.state.amount === '0' || this.state.amount === '') {
			placeHolder = '';
		} else {
			placeHolder = `${dStringClean}${cString}`;
		}

		return (
			<div className="App">
				<header className="App-header">
					<h1>Cheque Wordifier</h1>
				</header>
				<main className="App-main">
					<div>
						<label htmlFor="amount">Enter an amount for the cheque</label>
						<input id="amount" name="amount" type="text" value={this.state.amount} onChange={this.handleChange} />
					</div>
					<div className="output">
						{ placeHolder }
					</div>
				</main>
			</div>
		);
	}
}

export default App;
