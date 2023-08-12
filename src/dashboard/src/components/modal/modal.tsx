import { UilTimes } from "@iconscout/react-unicons";
import { UilBrowser } from "@iconscout/react-unicons";
import { Button } from "../_basics";

export function Modal(props: { title: string; children: React.ReactNode; open: boolean; callback: CallableFunction }) {
	return (
		<div className="modal" modal-open={props.open ? "true": "false"}>
			<div className="modal__container">
				<ModalHeader title={props.title}></ModalHeader>
				<ModalBody childs={props.children}></ModalBody>
				<ModalFooter callback={props.callback}></ModalFooter>
			</div>
		</div>
	);
}

function ModalHeader(props: { title: string }) {
	return (
		<div className="modal__header">
			<div className="modal__header__title">
				<UilBrowser size="24" color="#4B5563"></UilBrowser>
				<h4>{props.title}</h4>
			</div>
			<button type="button" className="modal__header__button">
				<UilTimes size="24" color="#D1D5DB"></UilTimes>
			</button>
		</div>
	);
}

function ModalBody(props: { childs: React.ReactNode }) {
    return <div className="modal__body">
        {props.childs}
    </div>
}

function ModalFooter(props: { callback: CallableFunction }) {

    function onCreateClick() {
        props.callback()
    }

    return (
			<div className="modal__footer">
				<Button type="button" label="Create" style="primary" onClick={onCreateClick} />
				<Button type="button" label="Cancel" style="secondary" />
			</div>
		);
}
