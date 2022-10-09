import Express from "express";

import { update, LogIn, register } from '../Controllers/Users.controller.js'


const router = Express.Router()

router.route('/')
    .get(LogIn)
    .post(register)

router.route('/update')
    .patch(update)

export default router