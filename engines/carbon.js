// VOLTZ — Carbon Credit Calculator
window.VOLTZ = window.VOLTZ || {};

window.VOLTZ.carbon = {
  /**
   * MSU Chemistry Lab carbon data
   * Source: EPA eGRID 2023 — Midwest Region (MROW)
   */
  msuData: {
    gridEmissionFactor: 0.000350,  // tonnes CO2 per kWh (MROW grid)
    currentKwh: 4900000,
    projectedKwh: 3185000,         // after all 3 fixes
    carbonReduction: 1715,         // tonnes CO2/yr
    pricePerTonne: 22,             // USD — Voluntary Carbon Market 2024 avg
    annualRevenue: 37730,
    registry: 'Gold Standard Voluntary Emissions Reductions',
    registryUrl: 'https://www.goldstandard.org/',
    verificationStandard: 'ISO 14064-3',
    creditType: 'Verified Emission Reductions (VERs)'
  },

  /**
   * Calculate carbon reduction and credit revenue
   * @param {number} currentKwh
   * @param {number} projectedKwh
   * @param {number} gridFactor - tonnes CO2/kWh
   * @param {number} pricePerTonne
   */
  calculate(currentKwh, projectedKwh, gridFactor = 0.000350, pricePerTonne = 22) {
    const kwhReduction = currentKwh - projectedKwh;
    const tonnesReduced = Math.round(kwhReduction * gridFactor);
    const annualRevenue = Math.round(tonnesReduced * pricePerTonne);
    const fiveYearRevenue = annualRevenue * 5;

    return {
      kwhReduction,
      tonnesReduced,
      pricePerTonne,
      annualRevenue,
      fiveYearRevenue,
      co2EquivalentCars: Math.round(tonnesReduced / 4.6), // EPA: avg car = 4.6 tonnes/yr
      co2EquivalentAcres: Math.round(tonnesReduced / 0.91) // EPA: acre of forest = 0.91 t/yr
    };
  },

  /**
   * Steps to monetize carbon credits
   */
  monetizationSteps: [
    {
      step: 1,
      action: 'Baseline Establishment',
      description: 'Document current energy use and emissions using ASHRAE Level II audit',
      timeline: 'Week 1-2'
    },
    {
      step: 2,
      action: 'Project Registration',
      description: 'Register with Gold Standard or Verra VCS registry',
      timeline: 'Week 3-6'
    },
    {
      step: 3,
      action: 'Third-Party Verification',
      description: 'ISO 14064-3 audit by accredited verifier',
      timeline: 'Month 6-12'
    },
    {
      step: 4,
      action: 'Credit Issuance & Sale',
      description: 'Credits issued and sold on voluntary carbon market',
      timeline: 'Month 12-15'
    }
  ]
};
