import { Schema } from 'mongoose'
import { injectable } from 'inversify';

import Schemable from '../Util/Model'
import Nameable from '../Util/Ports/Nameable'

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	
	public name: string

	constructor() {

		let entity: string = 'item'

		super({
			name: {
				type: String,
				typed: 'string'
			},
			subcategory: {
				ref: 'subcategory',
				typed: 'id',
				type: Schema.Types.ObjectId,
			},
			tag: [{
				name: {
					type: String,
					typed: 'string'
				}
			}],
			description: {
				type: String,
				typed: 'string'
			},
			price: {
				type: Number,
				typed: 'number'
			},
			tyc: {
				type: Boolean,
				typed: 'boolean'
			},
			entity: {
				type: String,
				typed: entity
			}
	
		}, { 
			collection: entity
		})

		this.name = entity

	}
}