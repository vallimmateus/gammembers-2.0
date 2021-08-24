import useAuth from "../hooks/useAuth";

export default function Home() {
	const { user, signout } = useAuth();
	return (
		<div>
			<h2>Home</h2>
			<h3>Seja bem-vindo, {user?.displayName}</h3>
			<button
				onClick={() => {
					signout();
				}}
			>
				Sair
			</button>
		</div>
	);
}
