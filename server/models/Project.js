const mongoose = require("mongoose");

const { Schema } = mongoose;

const userProjects = new Schema({
    title: {
        type: String,
        required: true,
      },
      link: {
          type: String,
          required: true
      }, 
      about: {
          type: String,
          required: true
} 

});

const projects = mongoose.model('projects', userProjects);
module.exports = projects;