import { InitView } from "./sections/InitView.jsx";
import { PropertyType } from "./sections/PropertyType.jsx";
import { Gallery } from "./sections/Gallery";

export const Home = () => {
	return (
		<>
			<InitView />
			<PropertyType />
			<Gallery />
		</>
	)
}