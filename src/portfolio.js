
const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '',
    title: 'DG.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Dharmik Gajjar',
    role: 'IT Engineering Student',
    description:
      'I am a IT student from VGEC-Chandkheda. I love exploring new technologies often amazed by the progress We as a human species have made so far in the recent years.',
    resume: 'DharmikGajjar-Resume.pdf',
    social: {
      linkedin: 'https://www.linkedin.com/in/dharmik-gajjar-8a372a241/',
      github: 'https://github.com/dharmik803',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Inventory Management System',
      description:
        'An inventory management website tracks and organizes a business\'s stock efficiently, minimizing errors and optimizing supply chain operations.',
      stack: ['Html', 'TypescriptScript', 'Bootstrap', 'Angular', 'Node JS'],
      sourceCode: 'https://github.com/dharmik803/inv_sys',
      livePreview: 'https://github.com/dharmik803/inv_sys',
    },
    {
      name: 'Upsilon Perfume',
      description:
        'A simple Landing page of the Upsilon Perfume with responsive design!!!',
      stack: ['Html', 'Css', 'Bootstrap'],
      sourceCode: 'https://github.com/dharmik803/Upsilon-Dharmik_Gajjar',
      livePreview: 'https://upsilon-perfume.netlify.app/',
    },
    {
      name: 'Contact Management',
      description:
        'By using this website one can see all the contact details and also keeps record of it!!',
      stack: ['Angular', 'DotNet Core', 'Sql', 'DevExtreme'],
      sourceCode: 'https://github.com/dharmik803/Contact-Management-DevExtreme-Ang',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'Docker',
    'Git',
    'DotNet Core',
    'MongoDB',
    'C',
    'C#',
    'SQL'
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'dgajjar974@gmail.com',
  }
  
  export { header, about, projects, skills, contact }