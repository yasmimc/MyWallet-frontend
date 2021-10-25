import { useContext } from "react";
import { useState } from "react";
import UserContext from "../../contexts/userContext";
import { Form, Input } from "../_shared/Forms";
import { PageContainer } from "../_shared/PageContainer";
import { PageTitle } from "../_shared/PageTitle";
import MoneyInput from "../_shared/MoneyInput";
import API from "../../API/requests";

export default function Income() {
	const { loggedUser } = useContext(UserContext);
	const [income, setIncome] = useState({
		userId: loggedUser.user?.id,
		type: 1,
		value: "",
		description: "",
	});

	function submitIncome(event) {
		event.preventDefault();
		console.log(income);
		API.addIncome(income, { token: loggedUser.token })
			.then((resp) => {
				setIncome({
					...income,
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
			<PageTitle>Nova entrada</PageTitle>
			<Form>
				<MoneyInput
					value={income.value ? null : ""}
					amountMoney={income}
					placeholder="Valor"
					onChange={(event) =>
						setIncome({
							...income,
							value: event.target.value,
						})
					}
				/>

				<Input
					placeholder="Descrição"
					required
					onChange={(event) =>
						setIncome({ ...income, description: event.target.value })
					}
				/>
				<button onClick={submitIncome} type="submit">
					Salvar entrada
				</button>
			</Form>
		</PageContainer>
	);
}
