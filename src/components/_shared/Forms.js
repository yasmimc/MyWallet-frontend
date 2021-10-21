import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;

	input {
		width: 100%;
		height: 58px;
		background: #ffffff;
		border-radius: 5px;
		border: none;
		margin-bottom: 13px;
		font-size: 20px;
	}

	input::placeholder {
		color: #000000;
		padding-left: 15px;
		font-family: "Raleway", sans-serif;
	}

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

export { Form, SignForm };
