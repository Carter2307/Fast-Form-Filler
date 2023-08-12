import { UilBooks } from "@iconscout/react-unicons";

type presetsType = "standard" | "multiple";

export default function Tree(props: {
	title: string;
	presets: { title: string; type: presetsType; fields : any }[];
}) {
	const items = props.presets.map((p, index) => {
		let badge = null;

		if (p.type === "multiple") {
			badge = <span>{p.type}</span>;
		}

		return (
			<li className="fff__tree__group__list__item" key={index}>
				<h4>{p.title}</h4>
				{badge}
			</li>
		);
	});

	return (
		<div className="fff__tree">
			<div className="fff__tree__group">
				<div className="fff__tree__group__title">
					<UilBooks size="24" color="#1F2937"></UilBooks>
					<h4>{props.title}</h4>
				</div>
				<ul className="fff__tree__group__list">{items}</ul>
			</div>
		</div>
	);
}
