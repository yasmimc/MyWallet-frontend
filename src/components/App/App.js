import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Transactions from "../Transactions/Transactions";
import Income from "../Income/Income";
import Outgo from "../Outgo/Outgo";
import UserContext from "../../contexts/userContext";

function App() {
	const [loggedUser, setLoggedUser] = useState({
		token: "",
		user: {
			name: "",
			id: null,
		},
	});

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ loggedUser, setLoggedUser }}>
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
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
