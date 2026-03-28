// VOLTZ — Grant Finder Engine
window.VOLTZ = window.VOLTZ || {};

window.VOLTZ.grants = {
  database: [
    {
      id: 'doe-weatherization',
      name: 'DOE Weatherization Assistance Program',
      agency: 'U.S. Department of Energy',
      amount: 285000,
      amountLabel: '$285,000',
      description: 'Federal funding for energy efficiency upgrades in buildings. Covers HVAC systems, insulation, controls, and envelope improvements for institutions in cold climate zones.',
      eligibility: ['Zone 4', 'Zone 5', 'Zone 6', 'Zone 7'],
      buildingTypes: ['all'],
      deadline: 'Rolling — applications accepted quarterly',
      contact: 'doe.wap@hq.doe.gov',
      coversFixes: ['Off-hours Setback Control', 'DCV HVAC Retrofit'],
      matchScore: 98
    },
    {
      id: 'ira-179d',
      name: 'IRA Section 179D Energy Efficiency Deduction',
      agency: 'Internal Revenue Service',
      amount: 225000,
      amountLabel: '$225,000',
      description: 'Tax deduction up to $5/sqft for energy-efficient commercial building improvements. Applies to HVAC, lighting, and building envelope. Universities may transfer deduction to contractors.',
      eligibility: ['all zones'],
      buildingTypes: ['all'],
      deadline: 'Annual tax filing — no pre-application required',
      contact: 'irs.179d@irs.gov',
      coversFixes: ['Smart Lab Scheduling', 'DCV HVAC Retrofit'],
      matchScore: 95
    },
    {
      id: 'indiana-oed',
      name: 'Indiana Office of Energy Development Grant',
      agency: 'Indiana Office of Energy Development',
      amount: 150000,
      amountLabel: '$150,000',
      description: 'State-level grant for energy efficiency projects at Indiana universities and public institutions. Priority given to HVAC optimization and demand response projects.',
      eligibility: ['Zone 5'],
      buildingTypes: ['all'],
      deadline: 'Next cycle: June 1 — applications open March 15',
      contact: 'energy@oed.in.gov',
      coversFixes: ['Off-hours Setback Control', 'Smart Lab Scheduling'],
      matchScore: 92
    }
  ],

  /**
   * Find matching grants for a building
   * @param {Object} building
   * @returns {Array} sorted by amount descending
   */
  findMatches(building) {
    return this.database
      .filter(grant => {
        const zoneMatch = grant.eligibility.includes('all zones') ||
          grant.eligibility.includes(building.zone);
        const typeMatch = grant.buildingTypes.includes('all') ||
          grant.buildingTypes.includes(building.type);
        return zoneMatch && typeMatch;
      })
      .sort((a, b) => b.amount - a.amount);
  },

  totalAvailable(matches) {
    return matches.reduce((sum, g) => sum + g.amount, 0);
  }
};
