// VOLTZ — Peer Matching Engine (5 filters)
window.VOLTZ = window.VOLTZ || {};

window.VOLTZ.match = {
  /**
   * 5-filter peer matching criteria
   */
  filters: [
    {
      id: 'buildingType',
      label: 'Building Type',
      description: 'Exact match on primary building use category',
      source: 'ENERGY STAR Use Types taxonomy'
    },
    {
      id: 'climateZone',
      label: 'Climate Zone',
      description: 'Same ASHRAE climate zone (±0 zones)',
      source: 'ASHRAE 169-2020 Climate Map'
    },
    {
      id: 'sizeSimilarity',
      label: 'Size Similarity',
      description: 'Gross square footage within ±30% of target',
      source: 'DOE Building Typology Standards'
    },
    {
      id: 'ageProximity',
      label: 'Age Proximity',
      description: 'Year built within ±15 years',
      source: 'CBECS Vintage Classification'
    },
    {
      id: 'useClass',
      label: 'Use Intensity Class',
      description: 'Same lab/research/office intensity classification',
      source: 'LBNL End-Use Intensity Database'
    }
  ],

  /**
   * Find best peer for a given building from a list
   * @param {Object} target - building to match
   * @param {Array} candidates - potential peer buildings
   * @returns {Object} { peer, filtersMatched, score }
   */
  findBestPeer(target, candidates) {
    let bestPeer = null;
    let bestScore = -1;

    for (const candidate of candidates) {
      if (candidate.id === target.id) continue;
      const result = this.evaluateMatch(target, candidate);
      if (result.filtersMatched === 5 && candidate.score > bestScore) {
        bestScore = candidate.score;
        bestPeer = candidate;
      }
    }

    if (!bestPeer) {
      // Fallback: best partial match with highest VOLTZ score
      let maxFilters = 0;
      for (const candidate of candidates) {
        if (candidate.id === target.id) continue;
        const result = this.evaluateMatch(target, candidate);
        if (result.filtersMatched > maxFilters ||
          (result.filtersMatched === maxFilters && candidate.score > bestScore)) {
          maxFilters = result.filtersMatched;
          bestScore = candidate.score;
          bestPeer = candidate;
        }
      }
    }

    return bestPeer;
  },

  evaluateMatch(target, candidate) {
    let matched = 0;
    const details = [];

    // Filter 1: Building type
    if (target.type === candidate.type) {
      matched++;
      details.push({ filter: 'buildingType', passed: true });
    }

    // Filter 2: Climate zone
    if (target.zone === candidate.zone) {
      matched++;
      details.push({ filter: 'climateZone', passed: true });
    }

    // Filter 3: Size within ±30%
    const sizeDiff = Math.abs(target.sqft - candidate.sqft) / target.sqft;
    if (sizeDiff <= 0.30) {
      matched++;
      details.push({ filter: 'sizeSimilarity', passed: true });
    }

    // Filter 4: Age within ±15 years
    const ageDiff = Math.abs(target.yearBuilt - candidate.yearBuilt);
    if (ageDiff <= 15) {
      matched++;
      details.push({ filter: 'ageProximity', passed: true });
    }

    // Filter 5: Use intensity class (simplified: same type = same class)
    if (target.type === candidate.type) {
      matched++;
      details.push({ filter: 'useClass', passed: true });
    }

    return { filtersMatched: matched, details };
  }
};
