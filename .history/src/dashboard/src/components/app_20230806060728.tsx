import { Onboard } from "./";

export default function App(props: { firstConnection: boolean }) {

	if (props.firstConnection) {
		return (
			<div className="app">
				<Onboard></Onboard>
			</div>
		);
    }
    
	return (
		<div className="app">
			<h1>welcomde to fast form filler</h1>
		</div>
	);
}
