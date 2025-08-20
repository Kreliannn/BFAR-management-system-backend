import Test from "../model/fisherFolk.model"


export const getTest = async () => {
    return await Test.find()
}