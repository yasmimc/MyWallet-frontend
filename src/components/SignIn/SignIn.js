import { Link } from "react-router-dom";
import { Input, SignForm } from "../_shared/Forms";
import Logo from "../_shared/Logo";

export default function SignIn() {
	return (
		<SignForm>
			<Logo />
			<Input placeholder="E-mail" />
			<Input placeholder="Senha" />
			<button type="submit">Entrar</button>
			<Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
		</SignForm>
	);
}
