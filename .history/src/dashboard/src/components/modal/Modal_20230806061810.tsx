export function Modal(props: {
	mode: "list" | "modal";
	iconType: "list" | "modal" | "logo";
	children: React.ReactNode;
	createCallback?: CallableFunction;
	cancelCallback?: CallableFunction;
	okCallback?: CallableFunction;
})

if(props.mode === "modal")

{
	return <div className="modal"></div>;
}
