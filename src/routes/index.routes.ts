import {Router} from 'express'
const router= Router()

import {mainPage,  contactPage} from "../controllers/index.controllers"

router.route("/")
    .get(mainPage)

router.route("/contact")
    .get(contactPage)
module.exports= router