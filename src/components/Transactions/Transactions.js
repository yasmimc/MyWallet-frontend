import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "../_shared/PageContainer";
import { PageTitle } from "../_shared/PageTitle";
import {
	RiLogoutBoxRLine,
	RiAddCircleLine,
	RiIndeterminateCircleLine,
} from "react-icons/ri";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";

export default function Transactions() {
	const { loggedUser } = useContext(UserContext);

	return (
		<PageContainer>
			<Header>
				<PageTitle>Olá, {loggedUser.name}</PageTitle>
				<LogoutButton />
			</Header>
			<Container>
				<TransactionsHistory></TransactionsHistory>
				<TransactionActions>
					<Link to="/income">
						<button>
							<IncomeIcon />
							<p>Nova entrada</p>
						</button>
					</Link>
					<Link to="/outgo">
						<button>
							<OutgoIcon />
							<p>Nova saída</p>
						</button>
					</Link>
				</TransactionActions>
			</Container>
		</PageContainer>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const LogoutButton = styled(RiLogoutBoxRLine)`
	color: #ffffff;
	font-size: 24px;
`;

const TransactionsHistory = styled.div`
	width: 100%;
	height: calc(100vh - 220px);
	background: #ffffff;
	border-radius: 5px;
`;

const TransactionActions = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 15px;
	button {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 175px;
		height: 114px;
		background: #a328d6;
		border-radius: 5px;
		border: none;
		color: #ffffff;
		padding: 10px;

		p {
			font-size: 17px;
			font-weight: 700;
		}

		svg {
			font-size: 22px;
		}
	}
`;

const IncomeIcon = styled(RiAddCircleLine)``;

const OutgoIcon = styled(RiIndeterminateCircleLine)``;
