const { stringifyForDisplay } = require("@apollo/client/utilities");
const { introspectionFromSchema } = require("graphql");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const userEducation = new Schema({
    schoolName: {
      type: String,
      required: true,
    },
    majorSubject: {
        type: String,
        required: true
    }, 
    degree: {
        type: String,
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
    location: {
        type: string, 
        required: true
    }, 
    grade: {
        type: int,
        required: false
    }

});


const userEd = mongoose.model("UserEducation", userEducation);

module.exports = userEd;