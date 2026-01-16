import mongoose from 'mongoose';


const ContactSchema = new mongoose.Schema({

    firstName:{
      type: String,
      required: [true, "First name is required"],
      trim: true
    },
    lastName:{
      type: String,
      required: [true, "Last name is required"],
      trim: true
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: [true, 'the field must have lowercase characters'], 
    },
    favoriteColor:{
      type: String,
    },
    birthday:{
      type: Date,
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