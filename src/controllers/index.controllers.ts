import {Request, Response} from 'express'

export function mainPage(req: Request, res: Response){
    res.render("index")
}
export function contactPage(req: Request, res: Response){
    res.render("contact")
}