import { Header } from "../Header";
import { Footer } from "../Footer";

export const DefaultLayout = (props) => {
	return (
		<>
			<div className="min-h-app m-auto w-full">
				<Header/>
				<main className="grow overflow-hidden min-h-screen m-auto">
					{props.children}
				</main>
				<Footer/>
			</div>
		</>
	)
}