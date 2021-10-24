import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { Input, SignForm } from "../_shared/Forms";
import Logo from "../_shared/Logo";
import API from "../../API/requests";
import UserContext from "../../contexts/userContext";

export default function SignIn() {
	const history = useHistory();

	const [input, setInput] = useState({
		email: "",
		password: "",
	});

	const { setLoggedUser } = useContext(UserContext);

	function submitForm(event) {
		event.preventDefault();
		const { email, password } = input;

		API.signIn({ email, password })
			.then((resp) => {
				console.log(resp.data);
				const { name, token } = resp.data;
				setLoggedUser({
					token,
					name,
				});
				history.push("/transactions");
			})
			.catch((err) => {
				console.log(`${err.response.status} - ${err.response.statusText}`);
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
					// setInputError({
					// 	...inputError,
					// 	email: !event.target.value.match(emailRegex)?.length,
					// });
				}}
				// inputError={!!inputError.email}
			/>
			<Input
				type="password"
				placeholder="Senha"
				required
				onChange={(event) => {
					setInput({ ...input, password: event.target.value });
					// setInputError({
					// 	...inputError,
					// 	passwordMatch: event.target.value !== input.passwordConfirmation,
					// 	password: event.target.value.length < 6,
					// });
				}}
				// inputError={!!inputError.password}
			/>
			<button type="submit">Entrar</button>
			<Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
		</SignForm>
	);
}
