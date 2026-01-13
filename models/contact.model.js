import mongoose from 'mongoose';


const ContactSchema = new mongoose.Schema({

    name:{
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: [true, 'the field must have lowercase characters'], 
    },
    phone: {
      type: String,
      required: false,
    },
    address:{
      type: String,
      required: false,
    }

    },

    {
      timestamps: true
    }
);

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;