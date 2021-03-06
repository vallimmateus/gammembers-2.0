import { useRouter } from "next/router";
import { createContext, useState } from "react";
import firebase from "../lib/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	const signin = (email, password) => {
		try {
			setLoading(true);
			console.log(email);
			console.log(password);
			return firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((userCredential) => {
					setUser(userCredential.user);
					router.push("/home");
				})
				.catch((error) => {
					var errorCode = error.code;
					var errorMessage = error.message;
					alert(error.toString());
				});
		} catch {
			alert("Login failed: Contacte o desenvolvedor da aplicação");
		} finally {
			setLoading(false);
		}
	};

	const signout = () => {
		try {
			router.push("/");
			return firebase
				.auth()
				.signOut()
				.then(() => {
					setUser(false);
				});
		} finally {
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				signin,
				signout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
