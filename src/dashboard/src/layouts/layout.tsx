import React from "react";

/**
 * Flex layout usign Flexbox
 */

type ContainerDirection = "column" | "row" | "column-reverse" | "row-reverse";
type ContainerJustifyContent = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type ContainerAlignContent = "flex-start" | "flex-center" | "flex-end" | "stretch" | "baseline";
type ContainerWrapp = "wrap" | "nowrap" | "wrap-reverse";

type ContainerStyle = {
	gap: string | undefined;
	direction: ContainerDirection | undefined;
	justify: ContainerJustifyContent | undefined;
	align: ContainerAlignContent | undefined;
	wrap: ContainerWrapp | undefined;
};
export default function Container(props: { style: ContainerStyle; children: React.ReactNode }) {
	const style = Object.assign(
		{
			gap: "0",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItem: "stretch",
			flexWrap: "nowrap",
		},
		{
			display: "flex",
			gap: props.style.gap,
			flexDirection: props.style.direction,
			justifyContent: props.style.justify,
			alignItem: props.style.align,
			flexWrap: props.style.wrap,
		}
	);

	return (
		<div className="flex-container" style={style}>
			{props.children}
		</div>
	);
}
