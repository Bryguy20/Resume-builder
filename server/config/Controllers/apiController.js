const About = require('../../models/About');
const Education = require('../../models/Education')
const PersonalInfo = require('../../models/PersonalInfo')
const Projects = require('../../models/Project')
const workExperience = require('../../models/WorkExperience')


// Create data for about section
const createAbout = async(req, res) => {
    const {description} = req.body

    try {
        const about = await About.create({description})
        res.status(200).json(about)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get data for About section
const getAbout = async(req, res) => {
    const about = await About.find({})
    res.status(200).json(about)
}




// Create data for Education section
const createEducation = async(req, res) => {
    const {schoolName, majorSubject, degree, startDate, endDate, location} = req.body

    try {
        const education = await Education.create({schoolName, majorSubject, degree, startDate, endDate, location})
        res.status(200).json(education)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get data for Education section
const getEducation = async(req, res) => {
    const education = await Education.find({})
    res.status(200).json(education)
}

// Create data for Personal section
const createPersonal = async(req, res) => {
    const {name, email, phoneNumber, city, state} = req.body

    try {
        const personal = await PersonalInfo.create({name, email, phoneNumber, city, state})
        res.status(200).json(personal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get data for Personal section
const getPersonal= async(req, res) => {
    const personal = await PersonalInfo.find({})
    res.status(200).json(personal)
}

// Create data for Projects section
const createProjects = async(req, res) => {
    const {title, link, about} = req.body

    try {
        const project = await Projects.create({title, link, about})
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get data for Projects section
const getProjects= async(req, res) => {
    const projects = await Projects.find({})
    res.status(200).json(projects)
}

// Create data for Work Experience section
const createWorkExperience = async(req, res) => {
    const {position, companyName, employmentType, location, startDate, endDate, description} = req.body

    try {
        const workexperience = await workExperience.create({position, companyName, employmentType, location, startDate, endDate, description})
        res.status(200).json(workexperience)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get data for Work Experience section
const getWorkExperience= async(req, res) => {
    const workexperience = await workExperience.find({})
    res.status(200).json(workexperience)
}


module.exports = {
    createAbout,
    createEducation,
    createPersonal,
    createProjects,
    createWorkExperience,
    getAbout,
    getEducation,
    getPersonal,
    getProjects,
    getWorkExperience
}