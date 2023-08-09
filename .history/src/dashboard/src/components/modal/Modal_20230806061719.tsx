export function Modal(props: {
	mode: "list" | "modal";
	iconType: "list" | "modal" | "logo";
	children: React.ReactNode;
	cancelCallback?: CallableFunction;
	Callback?: CallableFunction;
}) {
	return <div className="modal"></div>;
}
