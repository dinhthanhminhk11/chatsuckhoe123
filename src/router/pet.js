import { Router } from 'express'
import {
   pushNoti

} from  '../controller/pet'
const router = Router()

router.route('/sendnoti/:tokenDevice').post(pushNoti)
export default router