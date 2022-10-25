const mongoose = require("mongoose");

const { Schema } = mongoose;

const userPersonal = new Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
          type: String,
          required: true
      }, 
      phoneNumber: {
          type: int,
          required: true
      },
      city: {
          type: String, 
          required: true
      },
      state: {
          type: String,
          required: true
      }

});

const personal = mongoose.model('personal', userPersonal);
module.exports = personal;