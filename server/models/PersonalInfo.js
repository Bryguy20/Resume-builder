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
          type: string, 
          required: true
      },
      state: {
          type: string,
          required: true
      }

});

const personal = mongoose.model('personal', userPersonal);
module.exports = personal;