import Express from "express";

import { displayAll, getDetails, addGame,  updateGame} from '../Controllers/Games.controller.js'

const router = Express.Router()

router.route('/')
    .get(displayAll)
    .post(addGame)

router.route('/details')
    .get(getDetails)

router.route('/update')
    .patch(updateGame)

export default router