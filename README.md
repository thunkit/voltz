# VOLTZ — University Energy Intelligence Platform

VOLTZ is a web-based energy intelligence tool for universities. It benchmarks a building against its highest-performing peer, scores it across 5 validated factors, and generates a fully-funded, contractor-ready implementation roadmap.

## Demo

Open `index.html` in any browser. Click **Autofill MSU Chemistry Demo** to load the sample data, then follow the 4-screen flow.

## Features

- **Peer Matching** — 5-filter algorithm (building type, climate zone, size, age, use intensity) finds the best energy twin from a national university database
- **VOLTZ Score** — 0–100 composite score across EUI, peak demand, equipment vintage, schedule optimization, and carbon intensity; each factor cited to a real source
- **Grant Finder** — matches building to available federal and state grants with application contacts
- **Carbon Credits** — projects annual Verified Emission Reduction revenue using EPA eGRID grid factors
- **Contractor Marketplace** — shows contractors who completed the exact same fixes at the peer building
- **Simulation Engine** — interactive budget slider with live score, savings, and payback output
- **Full Roadmap** — week-by-week implementation plan with contractors assigned, grants allocated, and milestones tracked

## Project Structure

```
voltz/
├── index.html             Main single-page application
├── data/buildings.js      MSU and peer building data
├── scoring/score.js       5-factor scoring engine
├── matching/match.js      Peer matching with 5 filters
├── engines/
│   ├── grants.js          Grant finder and eligibility logic
│   ├── carbon.js          Carbon credit calculator
│   ├── contractors.js     Contractor marketplace data
│   └── simulator.js       Budget simulation engine
└── roadmap/roadmap.js     Sequenced implementation plan generator
```

## Sample Data — MSU Chemistry Building

| Metric | Value |
|--------|-------|
| Current VOLTZ Score | 44 / 100 |
| Peer | University of Illinois Chemistry — 79/100 |
| Annual kWh | 4,900,000 |
| Annual Cost | $680,000 |
| Fix 1 | Off-hours setback — $8K → saves $95K/yr, +7 pts |
| Fix 2 | Smart lab scheduling — $95K → saves $180K/yr, +10 pts |
| Fix 3 | DCV HVAC retrofit — $420K → saves $310K/yr, +18 pts |
| Total Grants | $660,000 (DOE + IRA 179D + Indiana OED) |
| Net Investment | $0 (grants exceed project cost) |
| Carbon Credits | 1,715 tonnes/yr at $22 = $37,730/yr |
| Payback | 0.84 years |

## Usage

No build step required. Open `index.html` directly in a browser.
