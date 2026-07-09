// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'noahweidig', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Noah Weidig',
    description:
      'Noah Weidig is an ecologist and GIS analyst specializing in geospatial data science, environmental modeling, and large-scale spatial analysis.',
    imageURL: '',
  },
  social: {
    linkedin: 'noahweidig',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.noahweidig.com',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'R',
    'Python',
    'JavaScript',
    'SQL',
    'Markdown',
    'LaTeX',
    'HTML',
    'CSS',
    'Git',
    'GitHub',
    'GitHub Actions',
    'Conda',
    'tidyverse',
    'pandas',
    'NumPy',
    'Plotly',
    'ArcGIS Pro',
    'Google Earth Engine',
    'QGIS',
    'GDAL',
    'sf',
    'terra',
    'GeoPandas',
    'OpenStreetMap',
  ],
  experiences: [
    {
      company: 'University of Florida',
      position: 'GIS & Remote Sensing Research Associate',
      from: 'August 2025',
      to: 'Present',
      companyLink: 'https://www.victoriamdonovan.org/',
    },
    {
      company: 'University of Florida',
      position: 'Graduate Research Assistant',
      from: 'August 2023',
      to: 'August 2025',
      companyLink: 'https://www.victoriamdonovan.org/',
    },
    {
      company: 'USDA Agricultural Research Service',
      position: 'Research Assistant Intern',
      from: 'May 2023',
      to: 'August 2023',
      companyLink: 'https://www.ars.usda.gov/plains-area/miles-city-mt/larrl/',
    },
    {
      company: 'Student Conservation Association / US Forest Service',
      position: 'Fire & Recreation Intern',
      from: 'January 2023',
      to: 'May 2023',
      companyLink:
        'https://thesca.org/integrated-fire-and-recreation-internship-program',
    },
    {
      company: 'University of Cincinnati',
      position: 'Research Assistant',
      from: 'May 2022',
      to: 'January 2023',
      companyLink: 'https://med.uc.edu/',
    },
    {
      company: 'Garage Living',
      position: 'CAD Design Specialist',
      from: 'September 2021',
      to: 'June 2022',
      companyLink: 'https://www.garageliving.com/f/cincinnati',
    },
    {
      company: 'Northern Kentucky University',
      position: 'Research Assistant',
      from: 'February 2020',
      to: 'May 2022',
      companyLink: 'https://www.nku.edu/',
    },
    {
      company: "Boone County Clerk's Office",
      position: 'Elections Data Specialist',
      from: 'August 2017',
      to: 'February 2020',
      companyLink: 'https://boonecountyclerk.ky.gov/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'University of Florida',
      degree: 'M.S., Forest Resources & Conservation',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Northern Kentucky University',
      degree: 'B.S., Biological Sciences',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title:
        'Regional differences in infilling and land-use conversion characterize woody cover increases across the Eastern United States',
      conferenceName: '',
      journalName: 'Forest Ecology and Management',
      authors:
        'Michaella A. Ivey, Noah Weidig, Alan A. Ivory II, Victoria M. Donovan',
      link: 'https://doi.org/10.1016/j.foreco.2025.123446',
      description:
        'Trees and shrubs are expanding into historically open ecosystems across the globe, threatening ecological function and ecosystem services. Using remotely sensed land-use and vegetation cover data, we quantified changes in woody cover between 2001 and 2021 across land-use types in the eastern U.S. to determine the relative contribution of forest infilling and land-use conversion to woody cover increases. Infilling of deciduous forests and encroachment in open land-use types dominated the northeast, while high levels of land-use conversion to forests and increasing woody cover in wetlands dominated the southeast. Our findings highlight areas to target ecological impact assessments and management efforts.',
    },
    {
      title: 'Woody cover fuels large wildfire risk in the eastern US',
      conferenceName: '',
      journalName: 'Geophysical Research Letters',
      authors:
        'Michaella A. Ivey, Carissa L. Wonkka, Noah Weidig, Victoria M. Donovan',
      link: 'https://doi.org/10.1029/2024GL110586',
      description:
        'Large wildfires are increasing in the eastern United States; however, what factors are heightening large wildfire risk remains unclear. We characterize multi-scale changes in woody cover through time and assess the relationship between woody cover and large wildfire (>200 ha) occurrence in the eastern US between 1990 and 2020. We found a 37% increase in woody cover across the eastern US, with increases occurring in every ecoregion. The odds of large wildfire increased as woody cover increased in most central and southern ecoregions, suggesting fuels management will be an important tool for reducing large wildfire risk.',
    },
    {
      title:
        'Changing large wildfire dynamics in the wildland–urban interface of the eastern United States',
      conferenceName: '',
      journalName: 'International Journal of Wildland Fire',
      authors:
        'Noah Weidig, Carissa L. Wonkka, Michaella A. Ivey, Victoria M. Donovan',
      link: 'https://doi.org/10.1071/WF24110',
      description:
        'The recent increase in large wildfires in the eastern United States makes it crucial to examine the subsequent risk to human life and property. We quantified wildland–urban interface (WUI) growth and characterised large (>200 ha) wildfire regimes inside and outside the WUI at multiple spatial scales across the eastern US between 1986 and 2021. WUI wildfires comprised 45% of all large wildfires and 55% of the area burned, and were on average 46% larger than non-WUI wildfires, though most increases in wildfire number and area burned occurred outside of the WUI.',
    },
    {
      title:
        'The Goldilocks principle: Finding the balance between water volume and nutrients for ovipositing Culex mosquitoes (Diptera: Culicidae)',
      conferenceName: '',
      journalName: 'PLOS ONE',
      authors: 'Noah Weidig, Amber L. Miller, Allison T. Parker',
      link: 'https://doi.org/10.1371/journal.pone.0277237',
      description:
        'Females of container-breeding mosquito species use visual and chemical cues to determine suitable habitats to oviposit their eggs. Using three semi-controlled field assays, the effects of water volume and nutrient concentration on female Culex mosquito oviposition preference were studied. The results suggest female Culex prefer larger volumes of water and higher concentrations of nutrients separately, but chose intermediate conditions when presented with a combination of these two variables, following the Goldilocks principle.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark'],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://noahweidig.com"
      target="_blank"
      rel="noreferrer"
    >Noah Weidig</a>`,

  enablePWA: true,
};

export default CONFIG;
