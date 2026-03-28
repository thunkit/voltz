// VOLTZ — Contractor Marketplace
window.VOLTZ = window.VOLTZ || {};

window.VOLTZ.contractors = {
  database: [
    {
      id: 'siemens',
      name: 'Siemens Smart Infrastructure',
      logo: 'SI',
      specialty: 'Building Automation & Controls',
      website: 'siemens.com/us/en/products/buildings',
      email: 'us.smartinfrastructure@siemens.com',
      phone: '1-800-743-6367',
      certifications: ['LEED AP', 'ASHRAE Member', 'ENERGY STAR Partner'],
      peerProject: {
        university: 'University of Illinois',
        building: 'Noyes Chemistry Laboratory',
        year: 2021,
        fixes: ['Off-hours HVAC setback controls', 'Smart lab scheduling system'],
        outcome: 'Reduced energy use 28% — saved $185,000/yr',
        caseStudyUrl: '#'
      },
      assignedFixes: [
        'Off-hours Setback Control',
        'Smart Lab Scheduling'
      ],
      totalCost: 103000,
      rating: 4.8,
      reviews: 127,
      responseTime: '24 hours'
    },
    {
      id: 'limbach',
      name: 'Limbach Company',
      logo: 'LC',
      specialty: 'Mechanical & HVAC Systems',
      website: 'limbach.com',
      email: 'info@limbach.com',
      phone: '1-877-546-2224',
      certifications: ['NEBB Certified', 'SMACNA Member', 'ASHRAE Member'],
      peerProject: {
        university: 'University of Illinois',
        building: 'Noyes Chemistry Laboratory',
        year: 2022,
        fixes: ['Demand-controlled ventilation (DCV) retrofit', 'Lab exhaust optimization'],
        outcome: 'HVAC energy reduced 41% — saved $265,000/yr',
        caseStudyUrl: '#'
      },
      assignedFixes: [
        'DCV HVAC Retrofit'
      ],
      totalCost: 420000,
      rating: 4.9,
      reviews: 203,
      responseTime: '48 hours'
    },
    {
      id: 'trane',
      name: 'Trane Technologies',
      logo: 'TT',
      specialty: 'Sustainability & Climate Control',
      website: 'tranetechnologies.com',
      email: 'sustainability@tranetechnologies.com',
      phone: '1-844-487-2637',
      certifications: ['LEED AP', 'ISO 50001 Certified', 'ENERGY STAR Partner'],
      peerProject: {
        university: 'Purdue University',
        building: 'Lilly Hall of Life Sciences',
        year: 2023,
        fixes: ['Chilled water plant optimization', 'Variable frequency drives'],
        outcome: 'Campus energy intensity reduced 18% — saves $420,000/yr',
        caseStudyUrl: '#'
      },
      assignedFixes: [
        'Carbon Credit Monitoring & Verification'
      ],
      totalCost: 0,
      rating: 4.7,
      reviews: 89,
      responseTime: '24 hours'
    }
  ],

  getByFix(fixName) {
    return this.database.filter(c =>
      c.assignedFixes.some(f => f.toLowerCase().includes(fixName.toLowerCase()))
    );
  },

  getAll() {
    return this.database;
  }
};
