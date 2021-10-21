import { Form } from "../_shared/Forms";
import { PageContainer } from "../_shared/PageContainer";
import { PageTitle } from "../_shared/PageTitle";

export default function Outgo() {
	return (
		<PageContainer>
			<PageTitle>Nova saída</PageTitle>
			<Form>
				<input placeholder="Valor" />
				<input placeholder="Descrição" />
				<button type="submit">Salvar saída</button>
			</Form>
		</PageContainer>
	);
}
