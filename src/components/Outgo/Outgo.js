import { useContext } from "react";
import { useState } from "react";
import UserContext from "../../contexts/userContext";
import { Form, Input } from "../_shared/Forms";
import { PageContainer } from "../_shared/PageContainer";
import { PageTitle } from "../_shared/PageTitle";
import MoneyInput from "../_shared/MoneyInput";
import API from "../../API/requests";

export default function Outgo() {
	const { loggedUser } = useContext(UserContext);
	const [outgo, setOutgo] = useState({
		userId: loggedUser.user?.id,
		type: 2,
		value: "",
		description: "",
	});

	function submitOutgo(event) {
		event.preventDefault();
		API.addOutgo(outgo, { token: loggedUser.token })
			.then((resp) => {
				setOutgo({
					...outgo,
					value: "",
					description: "",
				});
			})
			.catch((error) => {
				console.log(error.response);
			});
	}
	return (
		<PageContainer>
			<PageTitle>Nova saída</PageTitle>
			<Form>
				<MoneyInput
					value={outgo.value ? null : ""}
					amountMoney={outgo}
					placeholder="Valor"
					onChange={(event) =>
						setOutgo({
							...outgo,
							value: event.target.value,
						})
					}
				/>

				<Input
					placeholder="Descrição"
					required
					onChange={(event) =>
						setOutgo({ ...outgo, description: event.target.value })
					}
				/>
				<button onClick={submitOutgo} type="submit">
					Salvar saída
				</button>
			</Form>
		</PageContainer>
	);
}
