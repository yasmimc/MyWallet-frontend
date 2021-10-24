import axiosBase from "./axiosBase";

const API = {
	signUp,
};

function signUp({ name, email, password }) {
	return axiosBase.post("/sign-up", {
		name,
		email,
		password,
	});
}

export default API;
