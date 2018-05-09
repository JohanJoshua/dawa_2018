import React,{Component} from 'react';
import classes from './Calculadora.css';

export default class Calculadora extends Component {
	state={
		number1: 0,
		number2: 0,
		result: 0,
		operacion: "",
		sign: "",
		done: false,
	}

	firstNumberHandler = (e) => {
		this.setState({
			number1: e.target.value
		});
	}
	secondNumberHandler = (e) => {
		this.setState({
			number2: e.target.value
		});
	}
	operationHandler = (e) => {
		this.setState({
			operacion: e.target.value
		});	
	}

	calculate = () => {
		if (this.state.number1 !== null && this.state.number2 !== null) {
			switch (this.state.operacion) {
			case "Suma": 
				this.setState({
					result: parseFloat(this.state.number1)+parseFloat(this.state.number2),
					sign: "+",
				});
				break;
			case "Resta":
				this.setState({
					result: this.state.number1 - this.state.number2,
					sign: "-",
				});
				break;
			case "Division":
				this.setState({
					result: this.state.number1 / this.state.number2,
					sign: "÷",
				});
				break;
			case "Multiplicacion":
				this.setState({
					result: this.state.number1 *  this.state.number2,
					sign: "×",
				});
				break;
			case "Porcentaje":
				this.setState({
					result: this.state.number1 * this.state.number2/100,
					sign: "×",
				});
				break;
			default:
				break;
			}	
		}
		this.setState({
			done: true,
		});
	}

	render(){
		let res = <p className={classes.label}>Ingresa una operacion</p>;
		if(this.state.done && this.state.operacion === "Porcentaje"){
			res = <p>
				 {this.state.number1} 
				 {this.state.sign} 
				 {this.state.number2}% =   
				 {this.state.result}
			  </p>	
		}else if (this.state.done) {
			res = <p>
				 {this.state.number1} 
				 {this.state.sign} 
				 {this.state.number2} = 
				 {this.state.result}
			  </p>	
		}
		return(
			<div className={classes.Calculadora}>
			<h1 className={classes.titulo}>Calculadora Basica</h1>
			<p>Numeros</p>
			<input
			className={classes.input} 
			onChange={this.firstNumberHandler} 
			placeholder="Ingrese Primer Numero">
			</input><br/><br/>
			<input 
			className={classes.input}
			onChange={this.secondNumberHandler} 
			placeholder="Ingrese Segundo Numero">
			</input>
			<p>Operacion</p>
			<select 
			className={classes.input}
			value={this.state.operacion}
			onChange={this.operationHandler}>
			<option value="" defaultValue >Selecciona</option>
			<option value="Suma">Suma</option>
			<option value="Resta">Resta</option>
			<option value="Multiplicacion">Multiplicacion</option>
			<option value="Division">Division</option>
			<option value="Porcentaje">Porcentaje</option>
			</select><br/><br/>
			<button
			className={classes.button} 
			onClick={this.calculate}>Calcular</button>
			{res}
			</div>
			);
	}
}