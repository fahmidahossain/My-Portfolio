const router = require('express').Router();
const { Link, Detail, Supervisor, About, Award, Contact, Education, Intro, Experience, Leadership, Project, Publication, Research } = require('../modules/protfolioModule');
const User = require('../modules/userModule')
// Get all portfolio-data
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const links = await Link.find();
        const details = await Detail.find();
        const supervisors = await Supervisor.find();
        const intros = await Intro.find();
        const abouts = await About.find();
        const researchs = await Research.find();
        const publications = await Publication.find();
        const projects = await Project.find();
        const educations = await Education.find();
        const experiences = await Experience.find();
        const awards = await Award.find();
        const leaderships = await Leadership.find();
        const contacts = await Contact.find();

        res.status(200).send({
            links,
            supervisors,
            details,
            intro: intros[0], // Assuming you want the first document from each collection
            about: abouts[0],
            researchs,
            publications,
            projects,
            educations,
            experiences,
            awards,
            leaderships,
            contacts: contacts[0],
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Update intro
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: 'Intro updated successfully'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'An error occurred while updating intro',
            error: error.message
        });
    }
});

// Update about section
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: 'About updated successfully'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'An error occurred while updating about',
            error: error.message
        });
    }
});

// Add experience
router.post('/add-experience', async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added successfully",
        });
    } catch (error) {
        console.error('Error adding experience:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to add experience', error: error.message });
    }
});

// Update experience
router.post('/update-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated successfully",
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
// Delete experience
router.post('/delete-experience', async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.body._id);
        if (!experience) {
            return res.status(404).send({ success: false, message: 'Experience not found' });
        }
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted successfully",
        });
    } catch (error) {
        console.error('Error deleting experience:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to delete experience', error: error.message });
    }
});
// Add Award
router.post('/add-award', async (req, res) => {
    try {
        const award = new Award(req.body);
        await award.save();
        res.status(200).send({
            data: award,
            success: true,
            message: "Award added successfully",
        });
    } catch (error) {
        console.error('Error adding award:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to add award', error: error.message });
    }
});

// Update Award
router.post('/update-award', async (req, res) => {
    try {
        const award = await Award.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        if (!award) {
            return res.status(404).send({ success: false, message: 'Award not found' });
        }
        res.status(200).send({
            data: award,
            success: true,
            message: "Award updated successfully",
        });
    } catch (error) {
        console.error('Error updating award:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to update award', error: error.message });
    }
});

// Delete Award
router.post('/delete-award', async (req, res) => {
    try {
        const award = await Award.findByIdAndDelete(req.body._id);
        if (!award) {
            return res.status(404).send({ success: false, message: 'Award not found' });
        }
        res.status(200).send({
            data: award,
            success: true,
            message: "Award deleted successfully",
        });
    } catch (error) {
        console.error('Error deleting award:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to delete award', error: error.message });
    }
});
// Add Leadership
router.post('/add-leadership', async (req, res) => {
    try {
        const leadership = new Leadership(req.body);
        await leadership.save();
        res.status(200).send({
            data: leadership,
            success: true,
            message: "Leadership entry added successfully",
        });
    } catch (error) {
        console.error('Error adding leadership:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to add leadership', error: error.message });
    }
});

// Update Leadership
router.post('/update-leadership', async (req, res) => {
    try {
        const leadership = await Leadership.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        if (!leadership) {
            return res.status(404).send({ success: false, message: 'Leadership entry not found' });
        }
        res.status(200).send({
            data: leadership,
            success: true,
            message: "Leadership entry updated successfully",
        });
    } catch (error) {
        console.error('Error updating leadership:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to update leadership', error: error.message });
    }
});

// Delete Leadership
router.post('/delete-leadership', async (req, res) => {
    try {
        const leadership = await Leadership.findByIdAndDelete(req.body._id);
        if (!leadership) {
            return res.status(404).send({ success: false, message: 'Leadership entry not found' });
        }
        res.status(200).send({
            data: leadership,
            success: true,
            message: "Leadership entry deleted successfully",
        });
    } catch (error) {
        console.error('Error deleting leadership:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to delete leadership', error: error.message });
    }
});

// Add Research
router.post('/add-research', async (req, res) => {
    try {
        const research = new Research({
            title: req.body.title,
            year: req.body.year,
            contributions: req.body.contributions,
            supervisor: req.body.supervisor, // Expecting an object with name and link
            paperLink: req.body.paperLink,
            gitLink: req.body.gitLink,
            driveLink: req.body.driveLink,
            image: req.body.image,
        });
        await research.save();
        res.status(200).send({
            data: research,
            success: true,
            message: "Research entry added successfully",
        });
    } catch (error) {
        console.error('Error adding research:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to add research', error: error.message });
    }
});

// Update Research
router.post('/update-research', async (req, res) => {
    try {
        const research = await Research.findOneAndUpdate(
            { _id: req.body._id },
            {
                title: req.body.title,
                year: req.body.year,
                contributions: req.body.contributions,
                supervisor: req.body.supervisor, // Expecting an object with name and link
                paperLink: req.body.paperLink,
                gitLink: req.body.gitLink,
                driveLink: req.body.driveLink,
                image: req.body.image,
            },
            { new: true }
        );
        if (!research) {
            return res.status(404).send({ success: false, message: 'Research entry not found' });
        }
        res.status(200).send({
            data: research,
            success: true,
            message: "Research entry updated successfully",
        });
    } catch (error) {
        console.error('Error updating research:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to update research', error: error.message });
    }
});

// Delete Research
router.post('/delete-research', async (req, res) => {
    try {
        const research = await Research.findByIdAndDelete(req.body._id);
        if (!research) {
            return res.status(404).send({ success: false, message: 'Research entry not found' });
        }
        res.status(200).send({
            data: research,
            success: true,
            message: "Research entry deleted successfully",
        });
    } catch (error) {
        console.error('Error deleting research:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to delete research', error: error.message });
    }
});
// Add Project
router.post('/add-project', async (req, res) => {
    try {
        const project = new Project({
            title: req.body.title,
            des: req.body.des,
            listItem: req.body.listItem, // Expecting an array of strings
            links: {
                github: req.body.links.github,
                youtube: req.body.links.youtube,
                drive: req.body.links.drive,
            },
        });
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project entry added successfully",
        });
    } catch (error) {
        console.error('Error adding project:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to add project', error: error.message });
    }
});

// Update Project
router.post('/update-project', async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            {
                title: req.body.title,
                des: req.body.des,
                listItem: req.body.listItem, // Expecting an array of strings
                links: {
                    github: req.body.links.github,
                    youtube: req.body.links.youtube,
                    drive: req.body.links.drive,
                },
            },
            { new: true }
        );
        if (!project) {
            return res.status(404).send({ success: false, message: 'Project entry not found' });
        }
        res.status(200).send({
            data: project,
            success: true,
            message: "Project entry updated successfully",
        });
    } catch (error) {
        console.error('Error updating project:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to update project', error: error.message });
    }
});

// Delete Project
router.post('/delete-project', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.body._id);
        if (!project) {
            return res.status(404).send({ success: false, message: 'Project entry not found' });
        }
        res.status(200).send({
            data: project,
            success: true,
            message: "Project entry deleted successfully",
        });
    } catch (error) {
        console.error('Error deleting project:', error); // Add error logging
        res.status(500).send({ success: false, message: 'Failed to delete project', error: error.message });
    }
});
//admin login
router.post("/admin-login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        });
        user.password = "";

        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login Successful",
            });
        } else {
            res.status(200).send({
                data: null,
                success: false,
                message: "Invalid username or password"
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "An error occurred",
            error: error.message
        });
    }
});

module.exports = router;
