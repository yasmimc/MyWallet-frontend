import { Link } from "react-router-dom";
import { SignForm } from "../_shared/Forms";
import Logo from "../_shared/Logo";

export default function SignIn() {
	return (
		<SignForm>
			<Logo />
			<input placeholder="E-mail" />
			<input placeholder="Senha" />
			<button type="submit">Entrar</button>
			<Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
		</SignForm>
	);
}
