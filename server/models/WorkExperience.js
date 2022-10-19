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
          type: string, 
          required: true
      },
      startDate: {
          type: date,
          required: true
      },
      endDate: {
          type: date, 
          required: false
      }, 
      description: {
          type: string,
          required: true
      }
});

const workExperience = mongoose.model('workExperience', userWorkExperience);
module.exports = workExperience;