const mongoose = require("mongoose")
const uuid = require('uuid');

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "fname is required"],
        trim: true,
        validate: {
            validator: function (value) {
                const nameRegex = /^[A-Za-z\s]+$/;
                return nameRegex.test(value);
            },
            message: 'Name should only contain alphabets and spaces.'
        }
    },
    lastName: {
        type: String,
        required: [true, "lname is required"],
        trim: true,
        validate: {
            validator: function (value) {
                const nameRegex = /^[A-Za-z\s]+$/;
                return nameRegex.test(value);
            },
            message: 'Name should only contain alphabets and spaces.'
        }

    },
    mobileNumber: {
        type: String,
        required: [true, "mobileNumber is required"],
        trim: true,
        minlength: [10, 'Mobile number should be exactly 10 digits long.'],
        maxlength: [10, 'Mobile number should be exactly 10 digits long.'],
        unique:true

    },
    DOB: {
        type: Date,
        required: [true, "DOB is required"]
    },
    emailId: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            },
            message: "{VALUE} is not a valid email"
        }

    },
    address: {
        type: String,
        required: [true, "address is required"]
    },
    customerID: {
        type: String,
        default: () => uuid.v4().replace(/\-/g, ""),
    },
    status: {
        type: String,
        default: "ACTIVE",
        enum: {
            values: ["ACTIVE", "INACTIVE"],
            message: "{VALUE} is not a valid title"
        }
    }

},
    {
        timestamps: true
    }
)

module.exports= mongoose.model("Customer", customerSchema)