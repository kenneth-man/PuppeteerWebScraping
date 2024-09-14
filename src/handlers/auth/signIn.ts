import { Response } from "express"
import { IRequestBody } from '../../models/interfaces'
import { TSignIn } from '../../models/types'

const signIn = async (
	req: IRequestBody<TSignIn>,
	res: Response
) => {

}

export default signIn