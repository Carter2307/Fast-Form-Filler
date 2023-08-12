import { MouseEventHandler } from "react";

export function Button(props: {
	type: "button" | "submit" | "reset" | undefined;
	label: string;
	style: string;
	icon?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
	const className = `button button-${props.style}`;

	if (props.icon) {
		return (
			<button type={props.type} onClick={props.onClick} className={className}>
				<span className="button__text">{props.label}</span>
				<i className={props.icon}></i>
			</button>
		);
	}

	return (
		<button type={props.type} className={className} onClick={props.onClick}>
			<span className="button__text">{props.label}</span>
		</button>
	);
}
