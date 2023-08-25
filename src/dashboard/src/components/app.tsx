import * as React from "react";
import { Onboard, Actions, Modal, Sidebar, Canvas } from "../components";
import options from "../datas/options.datas";

const fffData = {
	firstConnection: false,
	data: {
		predefined: [
			{
				title: "Incub form",
				type: "standard",
				fields: [
					{
						name: "user-name",
						type: "text",
						value: "Roger Bentcha",
					},
					{
						name: "user-tel",
						type: "tel",
						value: "0781261282",
					},
				],
			},
			{
				title: "Hiddencode form",
				type: "standard",
				fields: [
					{
						name: "user-name",
						type: "text",
						value: "Roger Bentcha",
					},
				],
			},
			{
				title: "Clic cash contact",
				type: "multiple",
				fields: [
					{
						name: "step 01",
						fields: [
							{
								name: "user-name",
								type: "text",
								value: "Roger Bentcha",
							},
							{
								name: "user-tel",
								type: "tel",
								value: "0781261282",
							},
						],
					},
					{
						name: "step 02",
						fields: [
							{
								name: "user-sport",
								type: "text",
								value: "Football & workout",
							},
							{
								name: "user-age",
								type: "date",
								value: "16",
							},
						],
					},
				],
			},
		],
	},
};

const AppContext = React.createContext({});

export default function App(props: { firstConnection: boolean }) {

	const [data, setdData] = React.useState(fffData);
	const [presets, setPreset] = React.useState(data.data.predefined);
	const [currentId, setCurentId] = React.useState(0)
	const [currentPreset, setCurrentPreset] = React.useState(presets[currentId]);

	if (props.firstConnection) {
		return (
			<div className="app">
				<Onboard></Onboard>
			</div>
		);
	}

	console.log(currentPreset)

	function changeCurrentId(id: number) {
		setCurentId(id)
		setCurrentPreset(presets[id]);
	}

	function updatePresetsFields(field: presetFieldType, id: number) {
		
	}



	function modalCallback() {}

	return (
		<AppContext.Provider value={{ data, actions: options, changeIdHandler: changeCurrentId }}>
			<div className="app">
				<Modal title="New preset" open={false} callback={modalCallback}>
					<h1>welcomde to fast form filler</h1>
				</Modal>
				<Sidebar />
				<Actions actions={options} />
				<Canvas preset={currentPreset} />
			</div>
		</AppContext.Provider>
	);
}

export { AppContext };
