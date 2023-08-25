import React from "react";
import { Logo, Button } from "../_basics";
import Tree from "../tree/Tree";
import { AppContext } from "../app";

export function Sidebar() {
	const { data, changeIdHandler } = React.useContext(AppContext);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Logo></Logo>
			</div>
			<div className="sidebar__body">
				<Tree title="Preset schemas" presets={data.data.predefined} onclick={changeIdHandler} />
			</div>

			<div className="sidebar__footer">
				<Button type="button" label="New form preset" style="primary" icon="uil uil-plus"></Button>
			</div>
		</div>
	);
}
