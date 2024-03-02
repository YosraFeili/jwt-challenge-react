import { Header } from "../Header";
import { Footer } from "../Footer";

export const DefaultLayout = (props) => {
	return (
		<>
			<div className="min-h-app m-auto w-full">
				<Header/>
				<main className="grow overflow-hidden min-h-screen m-auto relative -top-20 -z-10">
					{props.children}
				</main>
				<Footer/>
			</div>
		</>
	)
}