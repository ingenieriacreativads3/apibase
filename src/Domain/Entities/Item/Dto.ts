import { IsDefined, IsString } from 'class-validator'
import { Schema } from 'mongoose'
import { injectable } from 'inversify'

import DtoUtil from '../Util/Dto'
import Interface from './Interface'

@injectable()
export default class EntityDto extends DtoUtil implements Interface {

	public name: string
	public subcategory: Schema.Types.ObjectId
	public tag: {
		name: string
	}[]
	public description: string
	public price: number
	public tyc: boolean

}