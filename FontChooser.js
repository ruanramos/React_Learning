class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			bold : this.props.bold == 'true',
			size : Number(this.props.size),
			hidden : true
		};
		// console.log(this.state);
	}

	componentWillReceiveProps() {
		if ()
	}

	handleClick() {
		this.setState({hidden : !this.state.hidden});
	}
	
	changeBold() {
		this.setState({bold : !this.state.bold});
	}

	changeSizeUp() {
		let actualSize = Number(this.state.size);
		if (actualSize < this.props.max) this.setState({size : actualSize + 1});
	}

	changeSizeDown() {
		let actualSize = Number(this.state.size);
		if (actualSize > this.props.min) this.setState({size : actualSize - 1});
	}

	resetFontSize() {
		this.setState({size : Number(this.props.size)});
	}

    render() {
		let weight = this.state.bold ? 'bold' : 'normal';
		let isHidden = this.state.hidden;
		let size = this.state.size;
		let checked = this.state.bold;
		let textColor = size === Number(this.props.max) || size === Number(this.props.min) ? 'red' : 'black';
		return(
			<div>
				<br></br>
				<input type="checkbox" id="boldCheckbox" 
					checked={checked}
					onChange={this.changeBold.bind(this)}
					hidden={isHidden} />
				<button id="decreaseButton" 
					onClick={this.changeSizeDown.bind(this)}
					hidden={isHidden}>-</button>
				<span id="fontSizeSpan"
					onDoubleClick={this.resetFontSize.bind(this)} 
					hidden={isHidden}>{size}</span>
				<button id="increaseButton" 
					onClick={this.changeSizeUp.bind(this)}
					hidden={isHidden} >+</button>
				<span id="textSpan" 
					onClick={this.handleClick.bind(this)}
					style={{fontWeight:weight, fontSize:size, color:textColor}}>{this.props.text}</span>
			</div>
		);
    }
}