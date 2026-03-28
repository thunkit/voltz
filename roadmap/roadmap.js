// VOLTZ — Sequenced Implementation Roadmap Generator
window.VOLTZ = window.VOLTZ || {};

window.VOLTZ.roadmap = {
  /**
   * Generate week-by-week implementation plan
   */
  generate() {
    return {
      phases: [
        {
          phase: 'Phase 1 — Funding',
          weeks: 'Weeks 1–4',
          color: 'blue',
          steps: [
            {
              week: 'Week 1',
              action: 'Apply for DOE Weatherization Assistance Program grant',
              description: 'Submit application package including energy audit, building profile, and projected savings documentation.',
              contractor: null,
              cost: 0,
              grant: 'DOE Weatherization — $285,000',
              grantEmail: 'doe.wap@hq.doe.gov',
              scoreImpact: null,
              milestone: 'Grant application submitted'
            },
            {
              week: 'Week 2',
              action: 'File IRA Section 179D deduction paperwork',
              description: 'Coordinate with legal/finance team to file 179D. Confirm contractor eligibility for deduction transfer.',
              contractor: null,
              cost: 0,
              grant: 'IRA Section 179D — $225,000',
              grantEmail: 'irs.179d@irs.gov',
              scoreImpact: null,
              milestone: '179D filing initiated'
            },
            {
              week: 'Week 3',
              action: 'Apply for Indiana OED State Energy Grant',
              description: 'Submit project proposal to Indiana Office of Energy Development with Midwest State University project scope.',
              contractor: null,
              cost: 0,
              grant: 'Indiana OED — $150,000',
              grantEmail: 'energy@oed.in.gov',
              scoreImpact: null,
              milestone: 'State grant application submitted'
            },
            {
              week: 'Week 4',
              action: 'Issue RFPs to Siemens and Limbach Company',
              description: 'Release Request for Proposals to selected contractors with project scope, VOLTZ peer data, and performance targets.',
              contractor: 'Siemens + Limbach Company',
              cost: 0,
              grant: null,
              scoreImpact: null,
              milestone: 'RFPs issued to contractors'
            }
          ]
        },
        {
          phase: 'Phase 2 — Quick Wins',
          weeks: 'Weeks 5–8',
          color: 'amber',
          steps: [
            {
              week: 'Week 5',
              action: 'Contract execution — Siemens Smart Infrastructure',
              description: 'Sign service agreements, finalize scope of work, mobilize installation teams.',
              contractor: 'Siemens Smart Infrastructure',
              cost: 8000,
              grant: null,
              scoreImpact: null,
              milestone: 'Contracts signed'
            },
            {
              week: 'Week 6–8',
              action: 'Install off-hours HVAC setback controls',
              description: 'Program building automation system for setback schedules on nights (8PM–6AM) and weekends. Zero-occupancy spaces drop to minimum ventilation.',
              contractor: 'Siemens Smart Infrastructure',
              cost: 8000,
              grant: 'Covered by DOE Weatherization',
              scoreImpact: '+7 points → Score: 51/100',
              savingsUnlocked: '$95,000/yr',
              milestone: 'VOLTZ Score: 51 — Setback active'
            }
          ]
        },
        {
          phase: 'Phase 3 — Intelligence Layer',
          weeks: 'Weeks 9–16',
          color: 'amber',
          steps: [
            {
              week: 'Week 9–10',
              action: 'DOE grant funding received (expected)',
              description: 'DOE Weatherization funds disbursed to university facilities account. Confirm allocation to project.',
              contractor: null,
              cost: 0,
              grant: '$285,000 received from DOE',
              scoreImpact: null,
              milestone: '$285K grant in hand'
            },
            {
              week: 'Week 10–16',
              action: 'Deploy smart lab scheduling system',
              description: 'Install occupancy sensors in all 24 lab spaces. Integrate with existing BAS for demand-based HVAC and lighting. Train facilities staff.',
              contractor: 'Siemens Smart Infrastructure',
              cost: 95000,
              grant: 'Covered by Indiana OED Grant',
              scoreImpact: '+10 points → Score: 61/100',
              savingsUnlocked: '$180,000/yr',
              milestone: 'VOLTZ Score: 61 — Smart scheduling live'
            }
          ]
        },
        {
          phase: 'Phase 4 — Major Retrofit',
          weeks: 'Weeks 17–26',
          color: 'green',
          steps: [
            {
              week: 'Week 17',
              action: 'Limbach Company mobilization for DCV retrofit',
              description: 'Pre-construction meeting, phased lab shutdown schedule agreed, permits pulled.',
              contractor: 'Limbach Company',
              cost: 0,
              grant: null,
              scoreImpact: null,
              milestone: 'DCV project mobilized'
            },
            {
              week: 'Week 17–24',
              action: 'DCV HVAC retrofit — demand-controlled ventilation installation',
              description: 'Install CO₂ sensors in all fume hoods, replace fixed-volume air handlers with variable air volume (VAV) units. Phased by lab section to maintain research continuity.',
              contractor: 'Limbach Company',
              cost: 420000,
              grant: 'Covered by DOE + IRA 179D funds',
              scoreImpact: '+18 points → Score: 79/100',
              savingsUnlocked: '$310,000/yr',
              milestone: 'VOLTZ Score: 79 — Peer parity achieved'
            },
            {
              week: 'Week 24',
              action: 'Register for carbon credit program (Gold Standard)',
              description: 'Submit project documentation to Gold Standard registry. Engage third-party ISO 14064-3 verifier for baseline audit.',
              contractor: 'Trane Technologies (M&V)',
              cost: 0,
              grant: null,
              scoreImpact: null,
              savingsUnlocked: '$37,730/yr in carbon credits',
              milestone: 'Carbon credits registration filed'
            },
            {
              week: 'Week 25–26',
              action: 'Measurement & Verification (M&V) audit',
              description: 'ASHRAE Level III audit to verify savings, document carbon reductions, and confirm grant compliance reporting.',
              contractor: 'Trane Technologies',
              cost: 0,
              grant: null,
              scoreImpact: null,
              milestone: 'M&V complete — savings verified'
            },
            {
              week: 'Week 26',
              action: 'Final VOLTZ score report & ongoing monitoring setup',
              description: 'Generate final VOLTZ score report, set up automated monthly score tracking dashboard, schedule annual peer benchmarking review.',
              contractor: null,
              cost: 0,
              grant: null,
              scoreImpact: 'Final Score: 79/100 ✓',
              milestone: 'Project complete'
            }
          ]
        }
      ],

      totals: {
        grantsSecured: 660000,
        totalInvestment: 523000,
        netCost: 0,
        grantSurplus: 137000,
        annualSavings: 585000,
        carbonRevenue: 37730,
        totalAnnualBenefit: 622730,
        paybackYears: 0.84,
        scoreJump: '44 → 79 (+35 points)',
        co2Reduced: '1,715 tonnes/yr',
        timeline: '26 weeks'
      },

      expansion: [
        {
          buildingType: 'Engineering Research Building',
          currentScore: 38,
          projectedScore: 74,
          sqft: 62000,
          estimatedSavings: 820000,
          primaryFix: 'VAV HVAC retrofit + fume hood controls',
          timelineWeeks: 32
        },
        {
          buildingType: 'Student Recreation Center',
          currentScore: 42,
          projectedScore: 76,
          sqft: 88000,
          estimatedSavings: 1200000,
          primaryFix: 'Pool HVAC optimization + LED lighting',
          timelineWeeks: 20
        },
        {
          buildingType: 'Administrative Office Tower',
          currentScore: 51,
          projectedScore: 83,
          sqft: 41000,
          estimatedSavings: 340000,
          primaryFix: 'Smart occupancy controls + chiller upgrade',
          timelineWeeks: 16
        }
      ],

      emailTemplates: [
        {
          subject: 'Research building energy benchmarking — sharing our results from the VOLTZ pilot',
          body: `Dear [Name],

I'm writing as [VP/Director of Facilities] at Midwest State University to share the results of a building energy intelligence initiative we recently completed, and to offer our full methodology to your team if it would be useful.

Our Chemistry Building — 45,000 sq ft, constructed 1978, ASHRAE Climate Zone 5 — was operating at 108.9 kBtu/sq ft/yr, approximately 79% above the ENERGY STAR median for university research laboratory facilities. After running a peer benchmarking analysis, we identified the University of Illinois Noyes Chemistry Laboratory as our highest-performing comparable building (51,000 sq ft, 1992 construction, same zone and use classification) operating at 60.8 kBtu/sq ft — a 44% energy intensity gap we had not previously quantified against a validated peer.

Three interventions account for the full performance gap, with a combined $585,000/yr in projected annual savings:

  • Off-hours HVAC setback controls — $8,000 capital, $95,000/yr savings, 1-month payback
  • Smart lab scheduling with occupancy sensors across 24 lab spaces — $95,000, $180,000/yr savings
  • Demand-controlled ventilation retrofit (CO₂ sensors, VAV air handlers) — $420,000, $310,000/yr savings

On funding: DOE Weatherization Assistance ($285K), IRA Section 179D ($225K), and Indiana OED ($150K) combine to $660,000 — exceeding our $523,000 total project cost with a $137,000 surplus reallocated to Phase 2 buildings. Net capital outlay: $0.

We are currently in Week 18 of a 26-week implementation with Siemens Smart Infrastructure and Limbach Company, both of whom had prior project experience at the Illinois peer building. ASHRAE Level III M&V is scheduled for Week 25.

I'm happy to share our grant application packages, contractor RFP templates, and VOLTZ scoring methodology documentation with your facilities team. If your institution is working through similar questions on research building performance, a 20-minute call would be worth the time.

Warmly,
[Name]
[Title], Facilities & Energy Management
Midwest State University`
        }
      ]
    };
  }
};
