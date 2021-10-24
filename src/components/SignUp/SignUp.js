import { Link, useHistory } from "react-router-dom";
import { SignForm, Input, InputErrorMsg } from "../_shared/Forms";
import Logo from "../_shared/Logo";
import { useState } from "react";
import { RiErrorWarningFill as WarningIcon } from "react-icons/ri";
import API from "../../API/requests";

export default function SignUp() {
	const history = useHistory();
	function submitForm(event) {
		event.preventDefault();
		const { name, email, password } = input;
		const inputErrors = Object.values(inputError).some((key) => key === true);
		if (!inputErrors) {
			API.signUp({ name, email, password })
				.then((resp) => {
					history.push("/");
				})
				.catch((err) => {
					console.log(`${err.response.status} - ${err.response.statusText}`);
					return;
				});
		}
	}

	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
		passwordConfirmation: "",
	});

	const [inputError, setInputError] = useState({
		name: null,
		email: null,
		password: null,
		passwordConfirmation: null,
		passwordMatch: null,
	});

	const emailRegex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	return (
		<SignForm onSubmit={submitForm}>
			<Logo />
			<Input
				type="text"
				placeholder="Nome"
				required
				autocomplete="off"
				action=""
				onChange={(event) => {
					setInput({ ...input, name: event.target.value });
					setInputError({
						...inputError,
						name: event.target.value.length < 3,
					});
				}}
				inputError={!!inputError.name}
			/>
			{inputError.name ? (
				<InputErrorMsg>
					<WarningIcon />
					<p> Nome deve ter mais do que 3 caracteres</p>
				</InputErrorMsg>
			) : null}

			<Input
				type="email"
				placeholder="E-mail"
				required
				onChange={(event) => {
					setInput({ ...input, email: event.target.value });
					setInputError({
						...inputError,
						email: !event.target.value.match(emailRegex)?.length,
					});
				}}
				inputError={!!inputError.email}
			/>
			{inputError.email ? (
				<InputErrorMsg>
					<WarningIcon />
					<p> Digite um email válido</p>
				</InputErrorMsg>
			) : null}
			<Input
				type="password"
				placeholder="Senha"
				required
				onChange={(event) => {
					setInput({ ...input, password: event.target.value });
					setInputError({
						...inputError,
						passwordMatch: event.target.value !== input.passwordConfirmation,
						password: event.target.value.length < 6,
					});
				}}
				inputError={!!inputError.password}
			/>
			{inputError.password ? (
				<InputErrorMsg>
					<WarningIcon />
					<p> A senha deve ter no mínimo 6 caracteres</p>
				</InputErrorMsg>
			) : null}
			<Input
				type="password"
				placeholder="Confirme a senha"
				required
				onChange={(event) => {
					setInput({ ...input, passwordConfirmation: event.target.value });
					setInputError({
						...inputError,
						passwordMatch: input.password !== event.target.value,
					});
				}}
				inputError={!!(input.passwordConfirmation && inputError.passwordMatch)}
			/>
			{input.password &&
			input.passwordConfirmation &&
			inputError.passwordMatch ? (
				<InputErrorMsg>
					<WarningIcon />
					<p> As senhas diferem</p>
				</InputErrorMsg>
			) : null}
			<button type="submit">Cadastrar</button>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
		</SignForm>
	);
}