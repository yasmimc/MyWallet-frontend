import CurrencyInput from "react-currency-masked-input";
import styled from "styled-components";

export default function MoneyInput({ ...props }) {
	// console.log(CurrencyInput());
	return (
		<MoneyInputContainer>
			{props.amountMoney?.value !== "" ? <p>R$</p> : null}
			<CurrencyInput
				name="currency"
				type="text"
				separator={","}
				{...props}
				required
			/>
		</MoneyInputContainer>
	);
}

const MoneyInputContainer = styled.div`
	display: flex;
	width: 100%;
	height: 58px;
	background: #ffffff;
	border-radius: 5px;
	border: none;
	margin-bottom: 13px;
	padding-left: 15px;
	font-size: 20px;

	input {
		font-family: "Raleway", sans-serif;
		border: none;
		font-size: 20px;
	}
	p {
		display: flex;
		align-items: center;
	}
`;
