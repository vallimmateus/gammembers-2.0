import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Login() {
	const { user, signin } = useAuth();
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	// console.log("> #email:");
	// console.log("user", user);
	// var email = document.querySelector("#email").value;
	// var password = document.querySelector("#password").value;
	return (
		<div>
			<h2>Login</h2>
			<label for="email">Enter USP</label>
			<input
				id="email"
				type="email"
				required
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<label for="password">Senha</label>
			<input
				id="password"
				type="password"
				required
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			{/* <button>Esqueceu sua senha?</button> */}
			<button
				onClick={() => {
					// console.log(email, password);
					signin(email, password);
					// document.getElementById("email").value,
					// document.getElementById("password").value
				}}
			>
				Login
			</button>
		</div>
	);
}
