import logo from './logo.svg';
import './App.css';
import Form from './components/PhoneBookForm';
import Table from './components/InformationTable';
import style from './components/styles';
import codeAndcode from './assets/codeAndcode.jpeg'

function App(props) {
	return (
		<section style = {style.section}>
				<img src={codeAndcode} alt="logo.jpeg" style = {style.cw}/>
				<Form />
				<Table />
		</section>
	);
}

export default App;
