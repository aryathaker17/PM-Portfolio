const projects = [
  {
    num: '01', title: 'Radwell Commerce Scale', tag: 'Adobe Commerce', year: '2024 - 2025',
    type: 'professional',
    role: 'Digital Product Manager',
    stack: ['Adobe Commerce', 'Prophet 21', 'Monday.com', 'AB Tasty', 'Google Analytics'],
    summary: 'Conversion, catalog scale, and throughput gains across a B2B industrial commerce platform.',
    problem: 'A massive industrial catalog carried friction through PDP, cart, and checkout — while operations leaned on slow, manual order entry.',
    approach: [
      'Drove a cross-functional launch of PDP, cart, and checkout optimizations across Sales, SEO, UX, and Engineering.',
      'Expanded the product catalog by 20 million SKUs and improved site performance 10% with Adobe Commerce Optimizer.',
      'Automated manual web order-entry validation in Prophet 21 and a custom internal system.',
      'A/B tested a simplified payment flow with AB Tasty and Google Analytics; standardized dependency reviews and dynamic roadmaps in Monday.com.'
    ],
    impact: [
      { stat: '+20%', label: 'conversion rate' },
      { stat: '+20M', label: 'SKUs added' },
      { stat: '+68%', label: 'order throughput' },
      { stat: '+12%', label: 'checkout completion' }
    ]
  },
  {
    num: '02', title: 'Kroll Inc.', tag: 'C# · .NET · Azure', year: '2023',
    type: 'professional',
    role: 'Backend Developer Intern',
    stack: ['C#', '.NET', 'Azure', 'SQL'],
    summary: 'Backend features shipped to production on a 10-person engineering team at a global risk advisory firm.',
    problem: 'Manual client onboarding consumed hours per batch, a new investment-tracking page had no backend, and project visibility across tickets and milestones was fragmented.',
    approach: [
      'Built a CSV bulk-upload feature in C#/.NET that onboards 200+ client accounts in a single action.',
      'Built the backend for a new investment-tracking page in C#/.NET, shipped to production as part of a 10-person engineering team.',
      'Created an Azure dashboard consolidating ticket status and milestones into custom views for real-time project visibility.'
    ],
    impact: [
      { stat: '2h→30m', label: 'onboarding time' },
      { stat: '200+',   label: 'accounts per batch' },
      { stat: '1',      label: 'page shipped to prod' },
      { stat: '10',     label: 'person eng team' }
    ]
  },
  {
    num: '03', title: 'DawnCast News Digest', tag: 'Swift · Claude API', year: '2025',
    type: 'personal',
    role: 'Solo — Concept to Deploy',
    stack: ['Swift', 'SwiftUI', 'CryptoKit', 'NewsData.io', 'Claude API'],
    summary: "A solo iOS app that turns the day's top news into four personalized AI briefings.",
    problem: "News apps overwhelm. People want the day's signal in a couple of minutes — tuned to what they actually care about, not an infinite scroll.",
    approach: [
      'Built solo from concept to deployment, owning design, engineering, and product.',
      'Engineered the AI content pipeline in Swift — NewsData.io for article ingestion, the Claude API for automated summarization into four daily briefings.',
      'Refined onboarding and the AI-summary interface across 3 iterations, informed by testing with 8 early users, so briefings tailor to each user\'s chosen sources and topics.'
    ],
    impact: [
      { stat: '4',   label: 'briefings / day' },
      { stat: '8',   label: 'test users' },
      { stat: '3',   label: 'design iterations' },
      { stat: '1',   label: 'solo shipped product' }
    ]
  },
  {
    num: '04', title: 'Table-time Reservations', tag: 'PM · Full-stack', year: '2023',
    type: 'personal',
    role: 'PM & Contributing Developer',
    stack: ['Python', 'PHP', 'RabbitMQ', 'MySQL', 'Yelp API'],
    summary: 'A restaurant reservation system built across a 4-month Agile sprint cycle on a 5-person team.',
    problem: 'Booking flows are long and clunky, and static restaurant data goes stale fast — users abandon before they reserve.',
    approach: [
      'Ran Agile sprints as PM and contributing developer on a 5-person team across a 4-month build.',
      'Integrated the Yelp API to replace static data with live restaurant search inside the reservation flow.',
      'Designed and built the MySQL schema for 100+ demo accounts, reservation records, and activity logs.',
      'Added SHA-256 auth and session management, plus RabbitMQ async queuing to decouple processing from notifications.'
    ],
    impact: [
      { stat: '6→3',  label: 'booking steps' },
      { stat: '100+', label: 'demo accounts' },
      { stat: '4 mo', label: 'agile build' },
      { stat: '5',    label: 'person team' }
    ]
  },
  {
    num: '05', title: 'Jewelry Store Website', tag: 'HTML · SQL', year: '2022',
    type: 'personal',
    role: 'Designer & Developer',
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    summary: 'A functional online store supporting 500+ products across 20+ categories.',
    problem: 'A small retailer needed a storefront that loaded fast and tracked inventory accurately across a wide catalog.',
    approach: [
      'Designed and developed the storefront with HTML/CSS, JavaScript, and SQL.',
      'Implemented a SQL database to manage product information, inventory, and user roles with accurate stock tracking.',
      'Optimized performance through CSS and server-side techniques.'
    ],
    impact: [
      { stat: '500+',      label: 'products' },
      { stat: '20+',       label: 'categories' },
      { stat: '4.5→1.8s', label: 'load time' },
      { stat: '100%',      label: 'stock accuracy' }
    ]
  }
];

const experience = [
  {
    range: 'Jun 2024 — Nov 2025', company: 'Radwell International',
    role: 'Digital Product Manager', loc: 'Willingboro, NJ',
    bullets: [
      'Drove a cross-functional launch of PDP, cart, and checkout optimizations across Sales, SEO, UX, and Engineering — increasing conversion rate 20%.',
      'Expanded the product catalog by 20 million SKUs and improved site performance 10% using Adobe Commerce Optimizer.',
      'Boosted order-processing throughput 68% by automating manual web order-entry validation in Prophet 21 and a custom internal system.',
      'Reduced missed launch deadlines 33% across 4 teams through dynamic roadmaps in Monday.com and standardized dependency reviews.'
    ]
  },
  {
    range: 'Jun 2023 — Oct 2023', company: 'Kroll Inc.',
    role: 'Backend Developer Intern', loc: 'Morristown, NJ',
    bullets: [
      'Built a CSV bulk-upload feature in C#/.NET that cut onboarding from 2 hours to 30 minutes per batch — 200+ accounts in a single action.',
      'Built the backend for a new investment-tracking page in C#/.NET, shipped to production as part of a 10-person engineering team.',
      'Created an Azure dashboard consolidating ticket status and milestones into custom views for real-time visibility.'
    ]
  },
  {
    range: 'Jan 2022 — Dec 2023', company: 'Alpha Kappa Psi',
    role: 'VP, Membership & Technology', loc: 'Newark, NJ',
    bullets: [
      'Led strategic planning and coordination for a 100+ member organization, executing 10 events including the annual networking event and chapter formal.',
      'Managed a $10,000 annual budget across operations, philanthropy, and events.',
      'Redesigned and maintained the chapter website (HTML/CSS), growing traffic 40% over 6 months.'
    ]
  }
];

const skills = [
  { label: 'Product',           items: ['Roadmap Planning', 'A/B Testing', 'Agile', 'Technical Documentation', 'Cross-Functional Leadership'] },
  { label: 'Analytics & Tools', items: ['Google Analytics', 'Microsoft Clarity', 'HubSpot', 'Figma', 'Jira', 'Confluence', 'Monday.com', 'Notion', 'GitHub', 'Adobe Commerce'] },
  { label: 'Technical',         items: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'C#', 'SQL', 'REST APIs', 'PowerBI', 'RabbitMQ', 'Pandas', 'Claude', 'Claude Code', 'AB Tasty'] },
  { label: 'Certifications',    items: ['Aha! Product Management Professional', 'Product Analytics (PAC)', 'Product Roadmapping (PRC)', 'CCNA'] }
];

const education = [
  { school: 'New Jersey Institute of Technology', sub: 'Martin Tuchman School of Management', deg: 'M.B.A — Finance & Product Management', date: 'Expected May 2028' },
  { school: 'New Jersey Institute of Technology', sub: 'B.S. Information Technology',          deg: 'GPA 3.35 / 4.00',                      date: 'Graduated May 2024' }
];
