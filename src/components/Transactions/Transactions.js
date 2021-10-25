import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "../_shared/PageContainer";
import { PageTitle } from "../_shared/PageTitle";
import {
	RiLogoutBoxRLine,
	RiAddCircleLine,
	RiIndeterminateCircleLine,
} from "react-icons/ri";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/userContext";
import API from "../../API/requests";

export default function Transactions() {
	const { loggedUser } = useContext(UserContext);

	const [transactions, setTransactions] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		API.getTransictions(loggedUser.token)
			.then((resp) => {
				console.log(resp.data);
				setTransactions([...resp.data]);
				setTotal(
					[...resp.data].reduce((acc, curr) => acc + curr.value, 0) / 100
				);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);

	return (
		<PageContainer>
			<Header>
				<PageTitle>Olá, {loggedUser.user?.name}</PageTitle>
				<LogoutButton />
			</Header>
			<Container>
				<TransactionsHistory>
					<TransactionsContainer>
						{transactions.length > 0 ? (
							<>
								{transactions.map((transaction) => (
									<Transaction>
										<div>
											<p className="date">
												{`${new Date(transaction.date).getDate()}/${new Date(
													transaction.date
												).getMonth()}`}
												`
											</p>
											<p className="description">{transaction.description}</p>
										</div>
										<p className={`${transaction.type} value`}>
											{Math.abs(transaction.value / 100)
												.toFixed(2)
												.replace(".", ",")}
										</p>
									</Transaction>
								))}
								<Transaction>
									<Total>SALDO </Total>
									<p className={total < 0 ? "outgo" : "income"}>
										{Math.abs(total).toFixed(2).replace(".", ",")}
									</p>
								</Transaction>
							</>
						) : (
							<EmptyHistory>
								<p>Não há registros de entrada ou saída</p>
							</EmptyHistory>
						)}
					</TransactionsContainer>
				</TransactionsHistory>
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
	font-size: 16px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const TransactionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	position: relative;
`;

const Transaction = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		padding: 10px;
	}

	div {
		display: flex;
	}

	.income {
		color: green;
	}

	.outgo {
		color: red;
	}

	.date {
		color: #c6c6c6;
	}

	.description {
		overflow-x: hidden;
		text-overflow: ellipsis;
		width: 190px;
	}
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

const EmptyHistory = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #868686;
	font-size: 20px;

	p {
		width: 60%;
		text-align: center;
	}
`;

const Total = styled.p`
	font-weight: 700;
`;

const IncomeIcon = styled(RiAddCircleLine)``;

const OutgoIcon = styled(RiIndeterminateCircleLine)``;
