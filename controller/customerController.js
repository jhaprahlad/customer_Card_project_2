const customerModel = require("../model/customerModel")
const mongoose = require("mongoose")

const createCustomer = async function (req, res) {
    try {

        let data = req.body;
        let customer = await customerModel.create(data);
        return res.status(201).send({ msg: customer })


    } catch (error) {
        if (error.message.includes("validation")) {
            return res.status(400).send({ status: false, message: error.message })
        }
        else if (error.message.includes("duplicate")) {
            return res.status(400).send({ status: false, message: "MobileNumber oR emailId is not unique" })
        }
        else {
            return res.status(500).send({ status: false, message: error.message })
        }
    }

}
const getCustomer = async function (req, res) {
    try {
        let customer = await customerModel.find({ status: "ACTIVE" });
        return res.status(200).send({ status: true, data: customer })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
const deleteCustomer = async function (req, res) {
    try {
        let customerID = req.query.customerID
        if (!customerID) {
            return res.status(400).send({status:false,msg:"customerId is required for deletion"})
        }
        let customer = await customerModel.updateMany(
            { $and: [{ customerID: customerID }, { status: "ACTIVE" }] },
            { $set: { status: "INACTIVE" } },   
        )
        if (customer.modifiedCount > 0) {
            return res.status(200).send({status:true, msg: "successfully deleted" })
        }
        return res.status(404).send({status:false,msg:"customer not found"})
       
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }


}

module.exports.createCustomer = createCustomer;
module.exports.getCustomer = getCustomer;
module.exports.deleteCustomer = deleteCustomer  
