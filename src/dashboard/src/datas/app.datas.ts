const datas: presetType[] = [
	{
		title: "Incub form",
		type: "standard",
		fields: [
			{
				name: "user-name",
				type: "text",
				value: "Roger Bentcha",
			},
			{
				name: "user-tel",
				type: "tel",
				value: "0781261282",
			},
		],
	},
	{
		title: "Hiddencode form",
		type: "standard",
		fields: [
			{
				name: "user-name",
				type: "text",
				value: "Roger Bentcha",
			},
		],
	},
	{
		title: "Clic cash contact",
		type: "multiple",
		fields: [
			{
				name: "step 01",
				fields: [
					{
						name: "user-name",
						type: "text",
						value: "Roger Bentcha",
					},
					{
						name: "user-tel",
						type: "tel",
						value: "0781261282",
					},
				],
			},
			{
				name: "step 02",
				fields: [
					{
						name: "user-sport",
						type: "text",
						value: "Football & workout",
					},
					{
						name: "user-age",
						type: "date",
						value: "16",
					},
				],
			},
		],
	},
];

const canvasData: presetType = {
	title: "Incub form",
	type: "standard",
	fields: [
		{
			name: "user-name",
			type: "text",
			value: "Roger Bentcha",
		},
		{
			name: "user-tel",
			type: "tel",
			value: "0781261282",
		},
		{
			name: "user-tel",
			type: "tel",
			value: "0781261282",
		},
		{
			name: "user-tel",
			type: "tel",
			value: "0781261282",
		},
	],
};

const canvasData2 = {
	title: "Clic cash contact",
	type: "multiple",
	fields: [
		{
			name: "step 01",
			fields: [
				{
					name: "user-name",
					type: "text",
					value: "Roger Bentcha",
				},
				{
					name: "user-tel",
					type: "tel",
					value: "0781261282",
				},
			],
		},
		{
			name: "step 02",
			fields: [
				{
					name: "user-sport",
					type: "text",
					value: "Football & workout",
				},
				{
					name: "user-age",
					type: "date",
					value: "16",
				},
			],
		},
	],
};

function getDatas() {}

function saveData() {
	const dataSchema = {
		fff: {
			firstConnection: false,
			datas: {
				predefined: [
					{
						title: "Incub form",
						type: "standard",
						fields: [
							{
								name: "user-name",
								type: "text",
								value: "Roger Bentcha",
							},
							{
								name: "user-tel",
								type: "tel",
								value: "0781261282",
							},
						],
					},
					{
						title: "Hiddencode form",
						type: "standard",
						fields: [
							{
								name: "user-name",
								type: "text",
								value: "Roger Bentcha",
							},
						],
					},
					{
						title: "Clic cash contact",
						type: "multiple",
						fields: [
							{
								name: "step 01",
								fields: [
									{
										name: "user-name",
										type: "text",
										value: "Roger Bentcha",
									},
									{
										name: "user-tel",
										type: "tel",
										value: "0781261282",
									},
								],
							},
							{
								name: "step 02",
								fields: [
									{
										name: "user-sport",
										type: "text",
										value: "Football & workout",
									},
									{
										name: "user-age",
										type: "date",
										value: "16",
									},
								],
							},
						],
					},
				],
			},
		},
	};
}
