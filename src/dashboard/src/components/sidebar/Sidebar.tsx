import { Logo } from "../_basics";
import Tree from "../tree/tree";
import { Button } from "../_basics";

const datas = [
	{
		title: "Incub form",
		type: "standard",
		fields: [],
	},
	{
		title: "Hiddencode form",
		type: "standard",
		fields: [],
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
	,
	{
		title: "Portfolio contact",
		type: "multiple",
		fields: [],
	},
];

export function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Logo></Logo>
			</div>
			<div className="sidebar__body">
				<Tree title="Preset schemas" presets={datas} />
			</div>

			<div className="sidebar__footer">
				<Button type="button" label="New form preset" style="primary" icon="uil uil-plus"></Button>
			</div>
		</div>
	);
}
