type presetListType = "standard" | "multiple";

type presetFieldType = {
	name: string;
	type: string;
	value: string;
};

type presetType = {
	title: string;
	type: presetListType;
	fields: presetFieldType[] | presetListItemType[];
};


type presetListItemType = {
	name: string;
	fields: presetFieldType[];
};
