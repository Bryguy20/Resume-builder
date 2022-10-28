const express = require('express')
const router  = express.Router()

const {
    createAbout,
    createEducation,
    createPersonal,
    createWorkExperience,
    createProjects,
    getAbout,
    getEducation,
    getPersonal,
    getProjects,
    getWorkExperience
} = require('../config/Controllers/apiController')


// Post Routes
router.post('/about', createAbout)

router.post('/ed', createEducation)

router.post('/personal', createPersonal)

router.post('/work', createWorkExperience)

router.post('/projects', createProjects)


// Get Routes
router.get('/about', getAbout)

router.get('/ed', getEducation)

router.get('/personal', getPersonal)

router.get('/work', getWorkExperience)

router.get('/projects', getProjects)


module.exports = router