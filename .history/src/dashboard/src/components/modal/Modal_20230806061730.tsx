export function Modal(props: {
	mode: "list" | "modal";
	iconType: "list" | "modal" | "logo";
	children: React.ReactNode;
	cancelCallback?: CallableFunction;
	okCallback?: CallableFunction;
	createCallback?: CallableFunction;
}) {
	return <div className="modal"></div>;
}
