import React from 'react';
import EventInformerCard from '@components/EventInformerCard/EventInformerCard';

export enum InformerType {
	event,
	buy,
}

export interface ApiInformer {
	title: string,
	text: string,
	type: InformerType,
	image: string,
	optional_fields: any
}

export default class Informer {
	title: string;
	text: string;
	type: InformerType;
	image: string | null;
	optionalFields: any;

	constructor({title, text, type, image, optional_fields}: ApiInformer) {
		this.title = title;
		this.text = text;
		this.type = type;
		this.image = image;
		this.optionalFields = optional_fields;
	}

	render(): React.ReactElement {
		switch (this.type) {
		case InformerType.event: {
			return <EventInformerCard {...this}/>;
		}

		default: {
			console.trace('bad informer type');
		}
		}
		return null;
	}
}
