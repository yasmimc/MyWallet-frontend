import { Form } from "../_shared/Forms";
import { PageContainer } from "../_shared/PageContainer";
import { PageTitle } from "../_shared/PageTitle";

export default function Income() {
	return (
		<PageContainer>
			<PageTitle>Nova entrada</PageTitle>
			<Form>
				<input placeholder="Valor" />
				<input placeholder="Descrição" />
				<button type="submit">Salvar entrada</button>
			</Form>
		</PageContainer>
	);
}
