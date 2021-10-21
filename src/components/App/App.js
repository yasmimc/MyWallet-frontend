import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Transactions from "../Transactions/Transactions";
import Income from "../Income/Income";
import Outgo from "../Outgo/Outgo";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<SignIn />
				</Route>
				<Route exact path="/sign-up">
					<SignUp />
				</Route>
				<Route exact path="/transactions">
					<Transactions />
				</Route>
				<Route exact path="/income">
					<Income />
				</Route>
				<Route exact path="/outgo">
					<Outgo />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
