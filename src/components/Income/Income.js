import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import UserContext from "../../contexts/userContext";
import { Form, Input } from "../_shared/Forms";
import { PageContainer } from "../_shared/PageContainer";
import { PageTitle } from "../_shared/PageTitle";
import MoneyInput from "../_shared/MoneyInput";
import API from "../../API/requests";

export default function Income() {
	const history = useHistory();

	const { loggedUser, setLoggedUser } = useContext(UserContext);
	const [income, setIncome] = useState({
		userId: loggedUser.user?.id,
		type: 1,
		value: "",
		description: "",
	});

	function getUserFromLocalStorage() {
		const storagedUser = localStorage.getItem("myWalletUser");
		if (storagedUser) return JSON.parse(storagedUser);
	}

	useEffect(() => {
		const userStoragedData = getUserFromLocalStorage();
		console.log({ userStoragedData });
		if (userStoragedData?.token) {
			setLoggedUser(userStoragedData);
		} else {
			history.push("/");
		}
	}, []);

	function submitIncome(event) {
		event.preventDefault();
		API.addIncome(income, { token: loggedUser.token })
			.then((resp) => {
				setIncome({
					...income,
					value: "",
					description: "",
				});
				history.push("/transactions");
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
