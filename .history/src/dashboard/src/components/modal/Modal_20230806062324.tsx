export function Modal(props: {
	mode: "list" | "modal";
	iconType: "list" | "modal" | "logo";
	children: React.ReactNode;
	open: boolean;
	createCallback?: CallableFunction;
	cancelCallback?: CallableFunction;
	okCallback?: CallableFunction;
}) {
	if (props.mode === "modal") {
        return <div className="modal" modal-mode={props.mode} modal-state={props.open}>
            <div className="modal__container"></div>
        </div>;
	}

	return <div className="modal" modal-mode={props.mode} modal-state={props.open}></div>;
}



function modalHeader({iconType}) {
    if(iconType === "logo")
}

function modalBody() {
    
}


function modalFooter() {
    
}
