import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import UserContext from "../../contexts/userContext";
import { Form, Input } from "../_shared/Forms";
import { PageContainer } from "../_shared/PageContainer";
import { PageTitle } from "../_shared/PageTitle";
import MoneyInput from "../_shared/MoneyInput";
import API from "../../API/requests";

export default function Outgo() {
	const history = useHistory();

	const { loggedUser, setLoggedUser } = useContext(UserContext);
	const [outgo, setOutgo] = useState({
		userId: loggedUser.user?.id,
		type: 2,
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

	function submitOutgo(event) {
		event.preventDefault();
		API.addOutgo(outgo, { token: loggedUser.token })
			.then((resp) => {
				setOutgo({
					...outgo,
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
