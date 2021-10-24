import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;

	button {
		width: 100%;
		height: 46px;
		background: #a328d6;
		border-radius: 5px;
		border: none;
		font-size: 20px;
		color: #ffffff;
		font-weight: 700;
	}
`;

const Input = styled.input`
	width: 100%;
	height: 58px;
	background: #ffffff;
	border-radius: 5px;
	border: none;
	margin-bottom: 13px;
	padding-left: 15px;

	font-size: 20px;
	font-family: "Raleway", sans-serif;

	border: ${({ inputError }) => (inputError ? "3px solid orange" : null)};

	&&::placeholder {
		color: #000000;
		/* padding-left: 15px;
		font-family: "Raleway", sans-serif; */
	}
`;

const SignForm = styled(Form)`
	height: 100vh;
	justify-content: center;
	align-items: center;
	padding: 25px;
	a {
		font-size: 15px;
		margin-top: 36px;
		color: #ffffff;
		font-weight: 700;
	}
`;

const InputErrorMsg = styled.div`
	display: flex;

	width: 100%;
	margin-bottom: 15px;
	color: white;
	padding: 5px;

	p {
		display: flex;
		align-items: center;
		padding-left: 5px;
	}

	svg {
		font-size: 20px;
	}
`;

export { Form, SignForm, Input, InputErrorMsg };
