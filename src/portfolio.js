
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
      github: 'https://github.com',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Weather app',
      description:
        'By using this app one can know weather related information at any time easily!!!',
      stack: ['Html', 'JavaScript', 'Css'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Calculator',
      description:
        'A simple non-scientific calculator app for calculations!!!',
      stack: ['C++'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Announcement Portal',
      description:
        'By using this app one can make announcement on portal related anything!!',
      stack: ['React', 'NodeJs', 'MongoDB'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'C',
    'C++',
    'MySOL',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'dgajjar974@gmail.com',
  }
  
  export { header, about, projects, skills, contact }