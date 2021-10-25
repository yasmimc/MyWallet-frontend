import axiosBase from "./axiosBase";

const API = {
	signUp,
	signIn,
	addIncome,
	addOutgo,
	getTransictions,
};

function createBearerAuthorization(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

function signUp({ name, email, password }) {
	return axiosBase.post("/sign-up", {
		name,
		email,
		password,
	});
}

function signIn({ name, email, password }) {
	return axiosBase.post("/sign-in", {
		email,
		password,
	});
}

function getTransictions(token) {
	const config = createBearerAuthorization(token);
	return axiosBase.get("/transactions", config);
}

function addIncome(income, { token }) {
	const config = createBearerAuthorization(token);
	return axiosBase.post("/transactions", income, config);
}

function addOutgo(outgo, { token }) {
	const config = createBearerAuthorization(token);
	return axiosBase.post("/transactions", outgo, config);
}

export default API;
