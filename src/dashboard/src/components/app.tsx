import { Onboard, Actions, Modal, Sidebar, Canvas } from "../components";


const optionsDatas = [
	{
		icon: "uil uil-telegram-alt",
		label: "Publish",
		keys: ["⌘", "P"],
	},
	{
		icon: "uil uil-ban",
		label: "Show/Hide ui",
		keys: ["@"],
	}
];


export default function App(props: { firstConnection: boolean }) {
	if (props.firstConnection) {
		return (
			<div className="app">
				<Onboard></Onboard>
			</div>
		);
	}

	function callback() {}

	return (
		<div className="app">
			<Modal title="New preset" open={false} callback={callback}>
				<h1>welcomde to fast form filler</h1>
			</Modal>
			<Sidebar />
			<Actions actions={optionsDatas} />
			<Canvas presets={{}}/>
		</div>
	);
}
