export interface Item {
	id: string;
	label: string;
	[prop: string]: any;
}

export interface Group<T extends Item> {
	items: T[];
}
