import { Link } from "react-router-dom";
import { SignForm } from "../_shared/Forms";
import Logo from "../_shared/Logo";

export default function SignUp() {
	return (
		<SignForm>
			<Logo />
			<input placeholder="Nome" />
			<input placeholder="E-mail" />
			<input placeholder="Senha" />
			<input placeholder="Confirme a senha" />
			<button type="submit">Cadastrar</button>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
		</SignForm>
	);
}
