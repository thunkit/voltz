// VOLTZ — 5-Factor Scoring Engine
window.VOLTZ = window.VOLTZ || {};

window.VOLTZ.score = {
  /**
   * Calculate VOLTZ score from 5 factors (weighted equally)
   * @param {Object} factors - { eui, peakDemand, buildingAge, schedule, carbon } each 0-100
   * @returns {number} composite score 0-100
   */
  calculate(factors) {
    const weights = {
      eui: 0.25,        // Energy Use Intensity — highest weight
      peakDemand: 0.20, // Peak demand/load factor
      buildingAge: 0.15, // Equipment vintage
      schedule: 0.25,   // Operational efficiency
      carbon: 0.15      // Carbon intensity
    };
    let total = 0;
    let weightSum = 0;
    for (const [key, weight] of Object.entries(weights)) {
      if (factors[key] !== undefined) {
        total += factors[key] * weight;
        weightSum += weight;
      }
    }
    return Math.round(total / weightSum);
  },

  /**
   * Get color tier for a score
   * @param {number} score
   * @returns {string} 'green' | 'amber' | 'red'
   */
  tier(score) {
    if (score >= 71) return 'green';
    if (score >= 41) return 'amber';
    return 'red';
  },

  /**
   * Get label for a score tier
   */
  tierLabel(score) {
    if (score >= 71) return 'High Performer';
    if (score >= 41) return 'Needs Improvement';
    return 'Critical';
  },

  /**
   * Benchmark data by building type
   * Source: ENERGY STAR Portfolio Manager national medians
   */
  benchmarks: {
    'Chemistry Lab':       { median: 52, top25: 72, top10: 85 },
    'Engineering Building': { median: 55, top25: 74, top10: 87 },
    'Dormitory':           { median: 60, top25: 76, top10: 88 },
    'Office Building':     { median: 58, top25: 75, top10: 89 },
    'Recreation Center':   { median: 50, top25: 70, top10: 83 },
    'Library':             { median: 62, top25: 78, top10: 90 }
  }
};
