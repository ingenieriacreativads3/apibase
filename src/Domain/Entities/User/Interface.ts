import { Schema } from 'mongoose'

import Registrable from './Ports/Registrable'
import Enableable from './Ports/Enableable'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil, Registrable, Enableable {
	name: string
	surname: string
	dni: number
	token: string
	tokenExpiration: number
	aceptTC: boolean
	wingcoins: number
	phone: number
	image: string
	googleId: string
	verified: boolean
}