import { MouseEventHandler } from "react";
import { Button } from "../_basics";
import onboardImgUrl from "../../assets/onboard.svg";
import onboardGradientUrl from "../../assets/gradient.svg";

export function Onboard() {
	function close() {
		console.log("close onboarding screen");
	}

	return (
		<section className="onboard">
			<OnboardConent onclick={close}></OnboardConent>
			<OnboardBackground></OnboardBackground>
		</section>
	);
}

function OnboardConent(props: { onclick: MouseEventHandler }) {
	return (
		<div className="onboard__content">
			<div className="onboard__content__image">
				<img src={onboardImgUrl} alt="Fast Form Filler onboard image" />
			</div>

			<div className="onboard__content__body">
				<h3>Welcome to 3F (Fast Form Filler).</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur. Tortor diam egestas tellus nec mattis massa elementum. Sapien nunc ac pellentesque sed sed
					tincidunt aliquam suspendisse.
				</p>
				<Button label="Start creating form data schema" type="button" style="primary" onClick={props.onclick}></Button>
			</div>
		</div>
	);
}

function OnboardBackground() {
	return (
		<div className="onboard__background">
			<img src={onboardGradientUrl} alt="onboard gradient image" />
		</div>
	);
}
