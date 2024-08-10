const mongoose = require('mongoose');

const introSchema = new mongoose.Schema(
    {
        welcomeText: {
            type: String,
            required: true,
        },
        
            firstName: {
                type: String,
                required: true,
            },
            lastName: {
                type: String,
                required: true,
            },
            caption: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            linedinLink: {
              type: String,
              required: true,
            },
            gitLink: {
              type: String,
              required: true,
            },
    });
//eivabe sob gulo protion er er emn
const aboutSchema = new mongoose.Schema({
   lottieUrl :{
    type: String,
    required: true,
   },
   dercription1:{
    type: String,
    required: true,
   },
   dercription2:{
    type: String,
    required: true,
   },
   skills: {
    type: Array,
    required: true,
},
});

const supervisorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const researchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  contributions: {
    type: String,
    required: true,
  },
  supervisor: {
    type: supervisorSchema, // Embedding the supervisor schema
    required: false, // Not all research may have a supervisor
  },
  paperLink: {
    type: String,
    required: true,
  },
  gitLink: {
    type: String,
    required: true,
  },
  driveLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  contributions: {
    type: String,
    required: true,
  },
  paperLink: {
    type: String,
    required: true,
  },
  gitLink: {
    type: String,
    required: true,
  },
  driveLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const linksSchema = new mongoose.Schema({
    github: {
      type: String,
      required: true,
    },
    youtube: {
      type: String,
      required: true,
    },
    drive: {
      type: String,
      required: true,
    },
  });
  
  const projectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    listItem: {
      type: [String], // An array of strings
      required: true,
    },
    links: {
      type: linksSchema, // Embedding the links schema
      required: true,
    },
  });
  const detailSchema = new mongoose.Schema({
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  });
  
  const educationSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  });
  
  const experienceSchema = new mongoose.Schema({
    organization: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true,
      enum: ['Job', 'Internship']
    }
  });
  const awardSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    organizer: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: true
    }
  });
  const leadershipSchema = new mongoose.Schema({
    organization: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: true,
      enum: ['Volunteering', 'Community'] // Optional, to enforce category values
    }
  });
  const contactSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    
    
  });

module.exports={
 Intro : mongoose.model('intros', introSchema),
 About : mongoose.model('abouts', aboutSchema),
 Supervisor: mongoose.model('supervisors',supervisorSchema),
 Research : mongoose.model('researchs', researchSchema),
 Publication : mongoose.model('publications', publicationSchema),
 Link : mongoose.model('links',linksSchema ),
 Project : mongoose.model('projects', projectSchema),
 Detail : mongoose.model('details',detailSchema),
 Education : mongoose.model('educations', educationSchema),
 Experience : mongoose.model('experiences', experienceSchema),
 Award : mongoose.model('awards', awardSchema),
 Leadership : mongoose.model('leaderships', leadershipSchema),
 Contact : mongoose.model('contacts', contactSchema),

};
