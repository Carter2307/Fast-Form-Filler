import React from "react";
import { Button } from "../_basics";


export function Canvas(props: { preset: presetType }) {

	const preset = props.preset

	if (preset.type === "multiple") {
		const preseltList = preset.fields.map((list: presetListItemType, index) => {
			return (
				<div className="canvas__presets__lists" key={index}>
					<div className="canvas__presets__name">
						<i className="uil uil-auto-flash"></i>
						<h4>{list.name}</h4>
					</div>

					<ul className="canvas__presets__list">{getFields(list.fields)}</ul>
				</div>
			);
		});
		return (
			<div className="canvas">
				<div className="canvas__container">
					<div className="canvas__container__lists">{preseltList}</div>
				</div>
			</div>
		);
	}

	return (
		<div className="canvas">
			<div className="canvas__container">
				<div className="canvas__container__lists">
					<div className="canvas__presets__lists">
						<div className="canvas__presets__name">
							<i className="uil uil-auto-flash"></i>
							<h4>{preset.title}</h4>
						</div>

						<ul className="canvas__presets__list">{getFields(preset.fields)}</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

function getFields(fields: presetFieldType[]) {
	return fields.map((field, index) => {
		return (
			<li className="canvas__presets__list__item" key={index}>
				<div className="canvas__presets__list__item__header">
					<div className="canvas__presets__list__item__content">
						<span className="canvas__presets__list__item__icon">
							<i className="uil uil-layer-group"></i>
						</span>
						<span className="canvas__presets__list__item__type">{field.type}</span>
					</div>
					<div className="canvas__presets__list__item__cta">
						<Button type="button" label="Edit" style="primary-light" onClick={() => {}}></Button>
						<Button type="button" label="" icon="uil uil-trash-alt" style="gray" onClick={() => {}}></Button>
					</div>
				</div>
				<div className="canvas__presets__list__item__body">
					{/* <div className="canvas__presets__list__item__output">
						<div className="canvas__presets__list__item__output__header">Type</div>
						<div className="canvas__presets__list__item__output__body">{field.type.toUpperCase()}</div>
					</div> */}
					<div className="canvas__presets__list__item__output">
						<div className="canvas__presets__list__item__output__header">Value</div>
						<div className="canvas__presets__list__item__output__body">{field.value.toUpperCase()}</div>
					</div>
				</div>
			</li>
		);
	});
}
