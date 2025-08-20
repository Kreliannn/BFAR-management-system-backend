import { Response, Request } from "express";


export const testController = async (request : Request , response : Response) => {
    response.send("hello")
}