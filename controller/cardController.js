const cardModel =require("../model/cardModel")

const createCard = async function(req,res){
    try {
      
    let data = req.body
    let card = await cardModel.create(data)
    return res.status(201).send({msg:card})

    } catch (error) {

        if (error.message.includes("validation")) {
            return res.status(400).send({ status: false, message: error.message })
        }
        else if (error.message.includes("duplicate")) {
            return res.status(400).send({ status: false, message: "cardNumber is not unique" })
        }
        else {
            return res.status(500).send({ status: false, message: error.message })
        }
    }
}
const getAllCards = async function(req,res){
    try {
        let card = await cardModel.find({status:"ACTIVE"})
        if(!card){
            return res.status(404).send({status:false,msg:"card not found"})
        }
        return res.status(200).send({status:true,data:card})
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.createCard=createCard;
module.exports.getAllCards=getAllCards

