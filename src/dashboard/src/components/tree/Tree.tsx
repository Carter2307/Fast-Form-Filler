import { UilBooks } from "@iconscout/react-unicons";

export default function Tree(props: { title: string; presets: presetType[], onclick: CallableFunction }) {

	const items = props.presets.map((p, index) => {
		let badge = null;

		if (p.type === "multiple") {
			badge = <span>{p.type}</span>;
		}

		return (
			<li className="fff__tree__group__list__item" key={index} onClick={() => props.onclick(index)}>
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
