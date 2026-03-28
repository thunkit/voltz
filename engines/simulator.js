// VOLTZ — Budget Simulation Engine
window.VOLTZ = window.VOLTZ || {};

window.VOLTZ.simulator = {
  baseScore: 44,
  baseCost: 680000,
  totalGrants: 660000,

  fixes: [
    {
      id: 'setback',
      name: 'Off-hours Setback Control',
      description: 'Automated HVAC setback during unoccupied hours (nights, weekends)',
      cost: 8000,
      annualSavings: 95000,
      scoreGain: 7,
      contractor: 'Siemens Smart Infrastructure',
      paybackMonths: 1,
      complexity: 'Low'
    },
    {
      id: 'scheduling',
      name: 'Smart Lab Scheduling System',
      description: 'AI-driven occupancy-based HVAC and lighting control for lab spaces',
      cost: 95000,
      annualSavings: 180000,
      scoreGain: 10,
      contractor: 'Siemens Smart Infrastructure',
      paybackMonths: 6,
      complexity: 'Medium'
    },
    {
      id: 'dcv',
      name: 'DCV HVAC Retrofit',
      description: 'Demand-controlled ventilation with CO₂ sensors and variable air volume',
      cost: 420000,
      annualSavings: 310000,
      scoreGain: 18,
      contractor: 'Limbach Company',
      paybackMonths: 16,
      complexity: 'High'
    }
  ],

  /**
   * Run simulation for a given budget
   * @param {number} budget - dollars available
   * @returns {Object} simulation results
   */
  simulate(budget) {
    const included = [];
    let totalCost = 0;
    let totalSavings = 0;
    let totalScoreGain = 0;

    for (const fix of this.fixes) {
      if (totalCost + fix.cost <= budget) {
        included.push({ ...fix, included: true });
        totalCost += fix.cost;
        totalSavings += fix.annualSavings;
        totalScoreGain += fix.scoreGain;
      } else {
        included.push({ ...fix, included: false });
      }
    }

    const newScore = this.baseScore + totalScoreGain;
    const paybackYears = totalSavings > 0 ? totalCost / totalSavings : 0;
    const grantsApplied = Math.min(this.totalGrants, totalCost);
    const netCost = Math.max(0, totalCost - this.totalGrants);
    const surplus = Math.max(0, this.totalGrants - totalCost);
    const carbonRevenue = totalScoreGain > 0
      ? Math.round((totalSavings / 585000) * 37730)
      : 0;

    return {
      budget,
      included,
      totalCost,
      totalSavings,
      totalScoreGain,
      newScore,
      paybackYears,
      grantsApplied,
      netCost,
      surplus,
      carbonRevenue,
      totalAnnualBenefit: totalSavings + carbonRevenue,
      fixCount: included.filter(f => f.included).length
    };
  },

  /**
   * Full investment scenario (all fixes)
   */
  fullScenario() {
    return this.simulate(600000);
  }
};
