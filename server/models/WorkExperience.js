const mongoose = require("mongoose");

const { Schema } = mongoose;

const userWorkExperience = new Schema({
    postion: {
        type: String,
        required: true,
      },
      companyName: {
          type: String,
          required: true
      }, 
      employmentType: {
          type: String,
          required: true
      },
      location: {
          type: String, 
          required: true
      },
      startDate: {
          type: Date,
          required: true
      },
      endDate: {
          type: Date, 
          required: false
      }, 
      description: {
          type: String,
          required: true
      }
});

const workExperience = mongoose.model('workExperience', userWorkExperience);
module.exports = workExperience;