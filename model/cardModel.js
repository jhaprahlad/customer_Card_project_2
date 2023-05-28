const mongoose= require("mongoose")

const cardSchema = new mongoose.Schema({
    //cardNumber string Auto_increment e.g: C001
    cardNumber: {
        type: String,
        required: [true, "cardNumber is required"],
        trim: true,
        unique: true
    },
   
    cardType: {
        type: String,
        required: [true, "cardType is required"],
        trim: true,
        enum: ["REGULAR", "SPECIAL"]
    },
    customerName:{
        type: String,
        required: [true, "customerName is required"],
        trim: true
    },
    status: {
        type: String,
        default: "ACTIVE",
        enum: {
            values: ["ACTIVE", "INACTIVE"],
            message: "{VALUE} is not a valid title"
        }
    },
    vision :{
        type: String,
        required: [true, "vision is required"],
        trim: true
    },
    customerID :{
        type: String,
        ref: "Customer"

    }

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Card", cardSchema)