// VOLTZ — Building data for MSU and peer institutions
window.VOLTZ = window.VOLTZ || {};

window.VOLTZ.buildings = {
  msuChemistry: {
    id: 'msu-chem',
    university: 'Midwest State University',
    building: 'Chemistry Building',
    type: 'Chemistry Lab',
    zone: 'Zone 5',
    yearBuilt: 1978,
    sqft: 45000,
    annualKwh: 4900000,
    annualCost: 680000,
    score: 44,
    scoreColor: 'amber',
    factors: [
      {
        key: 'eui',
        label: 'Energy Use Intensity',
        score: 45,
        value: '108.9 kWh/sqft/yr',
        source: 'ENERGY STAR Portfolio Manager',
        sourceUrl: 'https://www.energystar.gov/buildings/benchmark'
      },
      {
        key: 'peakDemand',
        label: 'Peak Demand Management',
        score: 45,
        value: '40% load factor',
        source: 'ASHRAE 90.1-2019',
        sourceUrl: 'https://www.ashrae.org/technical-resources/bookstore/standard-90-1'
      },
      {
        key: 'buildingAge',
        label: 'Building & System Vintage',
        score: 35,
        value: '47-year-old systems',
        source: 'DOE CBECS Database 2018',
        sourceUrl: 'https://www.eia.gov/consumption/commercial/'
      },
      {
        key: 'schedule',
        label: 'Operational Schedule Optimization',
        score: 50,
        value: '18 hrs/day unoccupied HVAC',
        source: 'LBNL Building Schedules DB',
        sourceUrl: 'https://buildings.lbl.gov/'
      },
      {
        key: 'carbon',
        label: 'Carbon Intensity',
        score: 45,
        value: '12.8 kg CO₂/sqft/yr',
        source: 'EPA eGRID 2023',
        sourceUrl: 'https://www.epa.gov/egrid'
      }
    ]
  },

  uiChemistry: {
    id: 'ui-chem',
    university: 'University of Illinois',
    building: 'Noyes Chemistry Laboratory',
    type: 'Chemistry Lab',
    zone: 'Zone 5',
    yearBuilt: 1992,
    sqft: 51000,
    annualKwh: 3100000,
    annualCost: 430000,
    score: 79,
    scoreColor: 'green',
    factors: [
      {
        key: 'eui',
        label: 'Energy Use Intensity',
        score: 80,
        value: '60.8 kWh/sqft/yr',
        source: 'ENERGY STAR Portfolio Manager',
        sourceUrl: 'https://www.energystar.gov/buildings/benchmark'
      },
      {
        key: 'peakDemand',
        label: 'Peak Demand Management',
        score: 82,
        value: '71% load factor',
        source: 'ASHRAE 90.1-2019',
        sourceUrl: 'https://www.ashrae.org/technical-resources/bookstore/standard-90-1'
      },
      {
        key: 'buildingAge',
        label: 'Building & System Vintage',
        score: 70,
        value: '33-year-old systems',
        source: 'DOE CBECS Database 2018',
        sourceUrl: 'https://www.eia.gov/consumption/commercial/'
      },
      {
        key: 'schedule',
        label: 'Operational Schedule Optimization',
        score: 80,
        value: '4 hrs/day unoccupied HVAC',
        source: 'LBNL Building Schedules DB',
        sourceUrl: 'https://buildings.lbl.gov/'
      },
      {
        key: 'carbon',
        label: 'Carbon Intensity',
        score: 83,
        value: '6.8 kg CO₂/sqft/yr',
        source: 'EPA eGRID 2023',
        sourceUrl: 'https://www.epa.gov/egrid'
      }
    ],
    peerFilters: [
      { label: 'Building Type', match: 'Chemistry Lab', passed: true },
      { label: 'Climate Zone', match: 'Zone 5 (Cold)', passed: true },
      { label: 'Size Similarity', match: '51,000 sqft (±13%)', passed: true },
      { label: 'Age Proximity', match: '1992 build (14-yr gap)', passed: true },
      { label: 'Use Intensity Class', match: 'Research-Grade Laboratory', passed: true }
    ]
  }
};
