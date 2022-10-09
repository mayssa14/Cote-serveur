import Express from "express";

import { MakeBuy } from '../Controllers/Achats.controller.js'


const router = Express.Router()

router.route('/')
    .post(MakeBuy)

export default router