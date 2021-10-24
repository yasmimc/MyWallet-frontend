import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { Input, InputErrorMsg, SignForm } from "../_shared/Forms";
import Logo from "../_shared/Logo";
import API from "../../API/requests";
import UserContext from "../../contexts/userContext";
import WarningIcon from "../_shared/WarningIcon";

export default function SignIn() {
	const history = useHistory();

	const [input, setInput] = useState({
		email: "",
		password: "",
	});

	const { setLoggedUser } = useContext(UserContext);
	const [loginError, setLoginError] = useState(false);

	function submitForm(event) {
		event.preventDefault();
		const { email, password } = input;

		API.signIn({ email, password })
			.then((resp) => {
				console.log(resp.data);
				const { user, token } = resp.data;
				setLoggedUser({
					token,
					user,
				});
				history.push("/transactions");
			})
			.catch((err) => {
				console.log(`${err.response.status} - ${err.response.statusText}`);
				setLoginError(true);
				return;
			});
	}

	return (
		<SignForm onSubmit={submitForm}>
			<Logo />
			<Input
				type="email"
				placeholder="E-mail"
				required
				onChange={(event) => {
					setInput({ ...input, email: event.target.value });
				}}
			/>
			<Input
				type="password"
				placeholder="Senha"
				required
				onChange={(event) => {
					setInput({ ...input, password: event.target.value });
				}}
			/>
			{loginError ? (
				<InputErrorMsg>
					<WarningIcon />
					<p>Email e/ou senha inválidos</p>
				</InputErrorMsg>
			) : null}
			<button type="submit">Entrar</button>
			<Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
		</SignForm>
	);
}
