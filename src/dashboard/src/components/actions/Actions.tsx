type actionType = { icon: string; label: string; keys: string[] };

export function Actions(props: { actions: actionType[] }) {

	const items = props.actions.map((item: actionType, index) => {
		return (
			<li className="fff__actions__list__item" key={index}>
				<div className="list__item__label">
					<i className={item.icon}></i>
					{item.label}
				</div>
				<div className="list__item__keys">
					{item.keys.map((key: string) => {
						return <span className="list__item__key">{key}</span>;
					})}
				</div>
			</li>
		);
	});

	return (
		<div className="fff__actions">
			<div className="fff__actions__header">
				<h4>Actions</h4>
			</div>

			<div className="fff__actions__body">
                <ul className="fff__actions__list">{items}</ul>
			</div>
		</div>
	);
}
