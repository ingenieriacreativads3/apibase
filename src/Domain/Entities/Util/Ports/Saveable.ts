import { Model, Document } from 'mongoose'
import User from '../../User/Interface'
import Responseable from './Responseable'
import GeteableAll from './GeteableAll'

export default interface Saveable extends GeteableAll{
	save(
		objData: {},
		model: Model<Document, {}>,
		userModel: Model<Document, {}>,
		idUser?: string
	): Promise<Responseable>
}