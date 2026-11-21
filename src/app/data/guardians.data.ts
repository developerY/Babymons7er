export type GuardianId =
  | 'grace'
  | 'cadence'
  | 'serenity'
  | 'guidance'
  | 'hope'
  | 'faith'
  | 'love';

export type RealmFilter = 'all' | 'polar' | 'equatorial' | 'ancient';

export interface Guardian {
  id: GuardianId;
  nodeNumber: string;
  name: string;
  epithet: string;
  realm: string;
  shortRealm: string;
  oceanRegionBadge: string;
  subRealmLabel: string;
  coordinates: string;
  title: string;
  virtue: string;
  idealApplication: string;
  idealShort: string;
  latticeSymbol: string;
  latticeWeight: number;
  latticeDisplay: string;
  filterCategory: Exclude<RealmFilter, 'all'>;
  icon: string;
  overviewImageUrl: string;
  portraitImageUrl: string;
  realmImageUrl: string;
  overviewDescription: string;
  dossierDescription: string;
  specialtyDescription: string;
  telemetryLabel: string;
  telemetryValue: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  metric3Label: string;
  metric3Value: string;
  computePrimitive: string;
  faultTolerance: string;
  latencySla: string;
  chapterTitle: string;
  chapterMeta: string;
  chapterDescription: string;
  tunedResonance: string;
  chapterIcon: string;
  bathymetryRegion: string;
  bathymetryVector: string;
  bathymetryState: string;
  sparklineType: 'rise' | 'wave' | 'bars' | 'trend' | 'curve' | 'nodes' | 'infinity';
  svgCoord: { x: number; y: number; labelX: number; labelY: number; anchor: 'middle' | 'start' | 'end' };
}

export const ARCHIVAL_MEDIA = {
  overviewMap:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDQEUAZ46Xzz8-dQ0HpNMLdhsHXJe_dyXAtJQi6kLLKkqIHvcZsBxzSaS4RBHmmwi1RLO3IrvoSGaWtyuOlXwrM_qNTZJ_TiV4cB-4ISAvJhek7FNNYX6RDMFb55E9xWT5388zPlfU0Ml3cleyuVXqF3lLzap7hczoTNS5P5ojWcdb86bzegxroUFENiGKTt9SrsuCCHMoe_ENT5NZzqMZSwuKxCxQuq-5hCBDQMjA',
  chronicleChart:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBi09HMP2MuBHVkGOlzg66W3nCFRbPjShqIKDz211vPtHN6P15-cMzb9cEhyGLRBaiGjbzASs6tB-uG5AYyieo8nhis4dhUu9LXze1mS0Z7WbGQXXx7rW8RGikU9JmdH4nUJPf84WMsyaIMcrX-ekevcKDs2d79E3avXzK57bf7CAKAxqWO6QBg-bsOzVnUW6MbvVfZbqod8lmj3JfLBQaM8DflPyVG3KjgZ6in92I',
  architectureFabric:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDBoXntRtfUqvUKqlQPzKsrixheCrw7PS2D0oRWJ_P49BjZ937Ra6E2pA4lz0XRapFwD3FCswpEmKy5iGyNNeQD2N35D5F2LGFkYxRjZtH-foFJylVoma02OuRUvhDEz6vpCi_x6X5woV1ZaJWr1ZLmfUeVtfxxCBx5iLPY3McQFsgyVOMeijWPNNBAHfOnVLlFNFW_KfBhGGdeiz2WJuLpeRlK1-z5L7qRXdK8KdI',
} as const;

export const GUARDIANS: Guardian[] = [
  {
    id: 'grace',
    nodeNumber: '01',
    name: 'Grace',
    epithet: 'The Arctic Guardian',
    realm: 'North Atlantic / Arctic Ice Shelf',
    shortRealm: 'North Atlantic',
    oceanRegionBadge: 'Node 01 · Arctic',
    subRealmLabel: 'Polar Drift Shelf',
    coordinates: "82°19'N 14°22'W",
    title: 'The Glistening Stillness of Patience',
    virtue: 'Precision & Focus',
    idealApplication: 'Debugging, long-term planning, and deep-logic tasks.',
    idealShort: 'Precision Debugging',
    latticeSymbol: 'Ψ',
    latticeWeight: 0.998,
    latticeDisplay: 'Ψ 0.998',
    filterCategory: 'polar',
    icon: 'ac_unit',
    overviewImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMooImkfgbXXmUMLWR85TVPx-UA2gGddrXVbSuQHoOZ-ZhO29UwfCA00mNnuAXNR1TL_lycyq90dEDeVLoBaob826qj31hVRTUfyqgmSsgaRnNaZrITmKjROAsDQBtPtHlsS0hmj-6QPmSgUZCKGfDoc52Hp2VP4GHO8ra2diy0_sP_41eTo782F1MkkMFIvPgD9g8Bge0qlbAo-3lsYpZhzyGDpzlj3CMzk_A540',
    portraitImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCh_QMBuWJHtoYbHZEzgUBcvceOdAaPRZFeQlGDQUTFMpc4AyGtYoaPv6ZvG9wsp_OTOAngXjSXUnmqUy7PZnMlSwY2pBe0lFJJp5gyJ8BmSY37b3OBL-Qa7tFke92X8qj_bzJmv2-mN1yM9fFCj-xCeqz7AMUYjsSXfjVkn2JQ8qlJS8yJFPT9FWP8QRl1m3gl8wMDl-CnCZaArE-bqR45mlYZoRnWwnLx5UcKlz0',
    realmImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSmGRtLsovZZixq7kNSLTBL-DZETGDvIT-sQRhR8A8LXPg2T0DyrVEtJkuiGKWSKuZAfH7QekyuxljlTYT7W7yZOcuoM6DTAVqKq-vqEHYlORuKThe9DOHKx6B7kkxnq7R-IAeLklwW0Toe2Ep6qc-VpS3QAvmML1FmY8ojnbJ2rtVWjfeMtRMqswW0UDLrg10iesEPG_6cFAeWgqJx0n1ZLODJihScS5md0DF4jg',
    overviewDescription:
      'Coiled in turquoise and icy white watercolor, Grace features deep emerald-green scales that shimmer like compressed glacier ice. She moves with imperceptible, elegant fluidity—representing enduring beauty through stillness.',
    dossierDescription:
      'Coiled in crystalline turquoise and icy white waters, Grace possesses iridescent emerald-green scales that shimmer like compressed Arctic glacier ice. Moving with imperceptible, elegant fluidity, she embodies enduring beauty through stillness—deployed against critical edge-case anomalies, compiler deadlocks, and deep logic bugs.',
    specialtyDescription:
      'Debugging, deep-logic architecture, and complex edge-case resolution. Where computational chaos fractures other nodes, Grace pauses runtime drift and reconstructs pristine deterministic pathways.',
    telemetryLabel: 'Precision Resonance',
    telemetryValue: '0.998 Focus Coefficient',
    metric1Label: 'Strength',
    metric1Value: 'Precision & Focus',
    metric2Label: 'Latency Floor',
    metric2Value: '0.14 ms',
    metric3Label: 'Domain',
    metric3Value: 'Deep Logic',
    computePrimitive: 'Logic Verification & Invariant Proofs',
    faultTolerance: '99.999%',
    latencySla: '< 18.0 ms',
    chapterTitle: 'The Eternal Quiet of Compressed Ice',
    chapterMeta: 'Depth: 1,820m · Temp: -1.8°C',
    chapterDescription:
      'Beneath colossal pack-ice that has stood unyielding across geological epochs rests a silence so absolute that thought crystalizes. Grace inhabits these tranquil turquoise fissures, observing deep logic anomalies with glacial patience. Here, computational execution is never rushed; it is carved with crystalline precision, neutralizing recursion traps and deep memory deadlocks before sound can travel.',
    tunedResonance: 'Compiler Deadlock Dissolution',
    chapterIcon: 'ac_unit',
    bathymetryRegion: '01 · Arctic',
    bathymetryVector: '0.012 rad',
    bathymetryState: 'Crystalline',
    sparklineType: 'rise',
    svgCoord: { x: 200, y: 34, labelX: 200, labelY: 14, anchor: 'middle' },
  },
  {
    id: 'cadence',
    nodeNumber: '02',
    name: 'Cadence',
    epithet: 'The Antarctic Sentinel',
    realm: 'Southern Ocean / Antarctic Convergence',
    shortRealm: 'Southern Ocean',
    oceanRegionBadge: 'Node 02 · Antarctic',
    subRealmLabel: 'Southern Circumpolar Trench',
    coordinates: "64°45'S 63°30'W",
    title: 'The Rhythmic Soul of the Deep',
    virtue: 'Rhythm & Sync',
    idealApplication: 'Real-time data queues, scheduling, and multi-platform synchronization.',
    idealShort: 'Time-Series Sync',
    latticeSymbol: 'λ',
    latticeWeight: 0.999,
    latticeDisplay: 'λ 0.999',
    filterCategory: 'polar',
    icon: 'graphic_eq',
    overviewImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJlptE744JteKyj7c4lp5qj3kKsbvThHDiQJfJDlBgSSj_6FzGVCSWuSSb267uA4QACcztfKzRfsM7jGgFsFa5zGW1AIRf68ZR8hqNaxmYsvKL5VAJ6FONpdGiBeJdRZPO_o9S6Gcna2tKmfNo45adsVICl0PKDF88iXqwqjfPXECS5-vdFOfPpcR27f6PwCPql34L2rGglhGPcWtp6-gWLRDNUWl2QRudrt6x6jo',
    portraitImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdPOI71ea2oWq0ezWUM9k3CP9M6G2WY-bjpIWqG3AsgLutAYwnzC7wfvf1YShyfVWJsc95loELtFolnj7CNrRPwEmxepk8tm3dqBt87zkH8DDLWCtaS67fsJLsUJFKSROEHxvY8aZSrdMNxqJ_lxcMYmGHI5d5aTftXw_oWF8YDQ_12-Uw-C5F-B02_W7e2dT1-vjWSaUZ64LET9lQ9-AmKcU6UMchD5wpG_pk5AI',
    realmImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBw6pugPqfckF1DHwgH2566tuaFof2XrEApWgsQhNpaVB5qgvZdce3Xx2mcoIyn72Q6ymqHcK7xu3DPW2pccP7VD8Zo5h8RrvJUoNtQotW5FFuopYj173A2yEER47HcGXuQg2Eso2syFwN2eMqlOHJzxx7Mq3uutRyZBUXlvC9VaPWIu0R9FDrEEE5rz1Oh9EryAxcK429A35YN70oGa8AFGoe0rlV0AGiMRPJYdes',
    overviewDescription:
      'Nestled in deep violet washes with translucent scales pulsing with an ancient heartbeat. She is the pulse of the great currents, harmonizing runtime schedules and cross-platform synchronization with musical grace.',
    dossierDescription:
      'Nestled in swirling deep amethyst and violet ocean washes, Cadence radiates translucent scales with subtle bioluminescence pulsing like an ancient ocean heartbeat. She is the pulse of the great currents, harmonizing runtime schedules, tick rates, and cross-platform synchronization with musical grace.',
    specialtyDescription:
      'Real-time data streams, distributed scheduler synchronization, and event-bus lock minimization. She orchestrates multi-agent task concurrency with musical, microsecond-accurate elegance.',
    telemetryLabel: 'Rhythm Harmonic',
    telemetryValue: '120.00 Hz Sync Clock',
    metric1Label: 'Strength',
    metric1Value: 'Rhythm & Sync',
    metric2Label: 'Jitter Threshold',
    metric2Value: '< 0.002%',
    metric3Label: 'Domain',
    metric3Value: 'Streaming Queues',
    computePrimitive: 'Time-Series & Event Stream Clocking',
    faultTolerance: '99.990%',
    latencySla: '< 2.4 ms',
    chapterTitle: 'The Rhythmic Pulse of the Conveyor',
    chapterMeta: 'Antarctic Circumpolar Current · 140 Sv',
    chapterDescription:
      'The Drake Passage roars with the uninterrupted kinetic energy of planet Earth. Without continental barriers, the Antarctic convergence pulses in perpetual, musical cadence, driving the global thermohaline conveyor belt. Cadence commands this majestic cadence, translating chaos into metric synchronization, guaranteeing real-time swarm telemetry across all planetary clusters.',
    tunedResonance: 'Global Tick Synchrony & Stream Orchestration',
    chapterIcon: 'waves',
    bathymetryRegion: '02 · Southern',
    bathymetryVector: '1.428 rad',
    bathymetryState: 'Harmonic',
    sparklineType: 'wave',
    svgCoord: { x: 325, y: 88, labelX: 344, labelY: 84, anchor: 'start' },
  },
  {
    id: 'serenity',
    nodeNumber: '03',
    name: 'Serenity',
    epithet: 'The Indian Ocean Shepherd',
    realm: 'Indian Ocean / Coral Triangle',
    shortRealm: 'Coral Triangle',
    oceanRegionBadge: 'Node 03 · Indo-Pacific',
    subRealmLabel: 'Coral Triangle Basin',
    coordinates: "04°12'S 119°54'E",
    title: 'The Warmth of Giving & Growth',
    virtue: 'Optimization & Calm',
    idealApplication: 'Horizontal scaling, resource management, and reducing system noise.',
    idealShort: 'Resource Scaling',
    latticeSymbol: 'Θ',
    latticeWeight: 0.996,
    latticeDisplay: 'Θ 0.996',
    filterCategory: 'equatorial',
    icon: 'spa',
    overviewImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDwBpwFVPr8ys7xOxkTboxjAOTeZSWa-HYmi3i7qcRgHd1Mcz0XME8PBib8yIG24l5uEorHRfV77vGE2PKJsn-eDpg_OnGAk_qCSRluRKjHlp3xA-OtIjaq7cpBxPCTgvArq6DSK4K-5-yeSTI_iimNcgtrDc3pePA7eGVqzFmmk6Syb3xzO3n8-KWHFgXHO6gzP_9-h8rVaIxwrMl7HEq0_aSiWIFhkDowhc_AO4',
    portraitImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPGQrYnCaNgYDk-PJVhuHS99tDYuTdhhVLfTzw-zcwN35e640MqTeBfkUX2lgDKSIePziv8TzCtMrbIwRR5_NwpjTiTm1eXvcfiqK9YLIFRdX6YN687o4m6_bdxzFp9jPzCoFYfg_AEpEx0C1Kv8gTy3Rlc-g91J0LgcnArZpOiokKWwcmntnnHtCxekZL1FdWsbUMvNQVJ257oKCLSrfgyDClkVXUlSWnmN0THTE',
    realmImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCq_La9spwUHhfJ85nAVyICXHXkUnOvUYpWXtglo8870K0q-l71jS0_4a8FAK78SSi_RQ8xm1dGmMOy0tn2ig8CG4puiuZWbQRFGPR9l2j6Nz1AlNBwI2q7PSEGFk-mS2Hd-k4ub5LdbxDCXXxy44Yo8dy_HUNcr756farAjo7SZHO_a9Jd3ILREmbF5AiS65-xZSZF9EuAND4DxNdqE2Ho1kZFV9DsMluAgcH_eYQ',
    overviewDescription:
      'Immersed in sapphire and golden-amber gradients with bronze undertones. She nurtures vast system architectures and reduces friction noise, allowing ecosystems to flourish with unconditional generosity.',
    dossierDescription:
      'Immersed in warm sapphire and golden-amber ocean currents, Serenity features sapphire-blue scales with deep bronze and copper undertones. Swimming gently among tropical coral reefs, she nurtures vast system architectures, reducing computational friction and memory bloat.',
    specialtyDescription:
      'Resource scaling, horizontal memory balancing, and reducing algorithmic overhead. She dissipates computational fever, guaranteeing steady-state throughput under heavy user summon volumes.',
    telemetryLabel: 'Memory Footprint',
    telemetryValue: '-42.8% Noise Floor',
    metric1Label: 'Strength',
    metric1Value: 'Optimization & Calm',
    metric2Label: 'Load Dissipation',
    metric2Value: '99.98% Safe',
    metric3Label: 'Domain',
    metric3Value: 'Horizontal Mesh',
    computePrimitive: 'Garbage Collection & Memory Pacing',
    faultTolerance: '99.995%',
    latencySla: '< 12.0 ms',
    chapterTitle: 'The Flourishing Nurseries of Living Synergy',
    chapterMeta: 'Salinity: 34.8 PSU · High Biodiversity',
    chapterDescription:
      'Where warm equatorial currents nurture ninety percent of ocean vitality, Serenity moves among ancient coral cathedrals. She is the mother of complex horizontal scaling: under her stewardship, myriad diverse micro-services coexist without friction, pruning memory bloat and nourishing the collective computational flora.',
    tunedResonance: 'Horizontal Topology & Heat Dissipation',
    chapterIcon: 'spa',
    bathymetryRegion: '03 · Indian',
    bathymetryVector: '0.871 rad',
    bathymetryState: 'Balanced',
    sparklineType: 'bars',
    svgCoord: { x: 350, y: 198, labelX: 368, labelY: 202, anchor: 'start' },
  },
  {
    id: 'guidance',
    nodeNumber: '04',
    name: 'Guidance',
    epithet: 'Mediterranean Mariner',
    realm: 'Mediterranean Ancient Tides',
    shortRealm: 'Ancient Currents',
    oceanRegionBadge: 'Node 04 · Mediterranean',
    subRealmLabel: 'Ionian Trench Waters',
    coordinates: "36°34'N 21°08'E",
    title: 'Clear Direction of History & Knowledge',
    virtue: 'Navigation & Logic',
    idealApplication: 'Strategic direction, historical context, and “baked” system rules.',
    idealShort: 'Strategic Roadmaps',
    latticeSymbol: 'Ω',
    latticeWeight: 0.995,
    latticeDisplay: 'Ω 0.995',
    filterCategory: 'ancient',
    icon: 'history',
    overviewImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy1JL6mbUVCFtHXIbr0UtRMTqhuTL9JkB2cEEKVZjKzELaP5rofU6xygkOuoIDeKJgFzRKaBxcuqYd7qt_IVzCfhGDXC0R3rNZ1yILWbwfzRaIsP-cD6SNFaPGUxw3xW1naXm9TuupTZiI7IS58Gd8YojC2kGkzuHipw3aeNtyc7NWvtXvIiCbgu9Gi1DRwKNFT1-NmnJaz3_2_AKnYaBLi-WsUL_Dc2pgMQiB-as',
    portraitImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBJGR2ALr8Q4oycnWcwOQPafW9pFWe3p_NM5l61xxXSOQD04-2Qcj7BdOJqYRvH5MEXHmE2Oirad4NmadmNZF0eHC4reO8o--Xlp2OClRnMAP4BWqE0sKYZPmcSbDu7iURMTUVD2FIGPkvyAQj__Nj2FBJN8_530QeRW__p9z2-TaP0unf_vj6oSSkxLGudq4WnpbFjhiA7xPV9HyswRM1NR8Uvr_U549IEmyJs39Q',
    realmImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaFfn3k6JVOfTROxO01kfknRwwJ-F-3eHoYF1ULEac06VahDXG839dxE868ZSSoyXkp51Q1V9lMSt2aWyaKyHWawRRpeTE52TWG3vznK2dfbBCekwcUH9qb7-iQYlfI4WGlcfGz34K8z5QmOT0EtGejukcig9iJE2FLvLWSB9v-9jXmzCtmgBFtDV6AUrzhtHxOksRnj4gADNKYTNvbqFgBHX3qxptP0XDEiLxvCo',
    overviewDescription:
      'Adorned in ruby crimson scales with ghostly golden mosaic patterns. Guidance commands millennia of precedent, preventing regression bugs and directing teams through the complex tides of architectural history.',
    dossierDescription:
      'Gracefully coiling within a Mediterranean turquoise sea, Guidance is adorned in sleek polished ruby-red and crimson scales with faint golden ancient mosaic patterns. She commands millennia of precedent, preventing regression bugs and directing teams through the complex tides of architectural history.',
    specialtyDescription:
      'Strategic roadmaps, historical context, precedent-based architectural rules, and technical governance. She shields the swarm against catastrophic structural regressions.',
    telemetryLabel: 'Historical Grounding',
    telemetryValue: '100% Zero-Regression',
    metric1Label: 'Strength',
    metric1Value: 'Navigation & Logic',
    metric2Label: 'Precedent Fidelity',
    metric2Value: '100% Strict',
    metric3Label: 'Domain',
    metric3Value: 'System Governance',
    computePrimitive: 'AST Tree Parsing & Regression Guards',
    faultTolerance: '99.999%',
    latencySla: '< 25.0 ms',
    chapterTitle: 'Millennia of Mariner Precedent',
    chapterMeta: 'Cradle of Nautical Cartography',
    chapterDescription:
      'From the Strait of Gibraltar to the Levant, these historic waters bore the triremes of antiquity, the astronomical calculations of Ptolemy, and the birth of maritime law. Guidance guards this accumulated treasure of institutional knowledge. She cross-references four thousand years of navigational strategy, preventing semantic regressions in code and charting clean paths through ambiguous regulatory waters.',
    tunedResonance: 'Archival Precedent & Zero-Regression Logic',
    chapterIcon: 'history_edu',
    bathymetryRegion: '04 · Mediterr.',
    bathymetryVector: '0.419 rad',
    bathymetryState: 'Historical',
    sparklineType: 'trend',
    svgCoord: { x: 276, y: 286, labelX: 294, labelY: 304, anchor: 'start' },
  },
  {
    id: 'hope',
    nodeNumber: '05',
    name: 'Hope',
    epithet: 'The Atlantic Voyager',
    realm: 'Mid-Atlantic Open Ocean / Ridge',
    shortRealm: 'Mid-Atlantic Ridge',
    oceanRegionBadge: 'Node 05 · Mid-Atlantic',
    subRealmLabel: 'Mid-Atlantic Ridge Abyss',
    coordinates: "24°40'N 45°20'W",
    title: 'The Luminous Dawn of New Beginnings',
    virtue: 'Momentum & Vision',
    idealApplication: 'Brainstorming, project launches, and innovative “cold starts.”',
    idealShort: 'Innovation Sparks',
    latticeSymbol: 'Δ',
    latticeWeight: 0.992,
    latticeDisplay: 'Δ 0.992',
    filterCategory: 'ancient',
    icon: 'wb_twilight',
    overviewImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUsX453RlnmN8wDdw7WezQZ-OOu49rJdbIqCiCm8dmE3WChBPOqn6LcRP4X064oD3c8_31UF_iLdcMuQ7ewzGxM02w1fSXMpcoRSeSe25EL0uDuUrOXwczO3aMZGLYxwehNrKDRD-yz5OyhxnkN6VlYDKRlIEd9DQFM-axErRuzPPEMFbAEGi9e6rtY4l8b2wg5yRVT3WX8pjH2bcqQ70uZvm4LrbVV61eJ5iecmY',
    portraitImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpG3Q4GVLW16j6hDjmfKMe_K-_oFovkvUU1vJDvYvIkQQRptZ3ST_LOXdudv4YaVRv9QCeAza8Xwt-F-wVcoloaol4Ytg0H2bEo1wk6vuCY0_jLhjvhG9S29FEZJu7-gqF3PlpRbvHs385YY-wtL5ev5gIuz504qZ5YMMSbZDpt0EU1z0g8UQgRk2sOkCn3PiGBVgOkvcgEc91b0JzHJUrCGNJCUbXA_8CYxYhqsw',
    realmImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_Ockq5tHhvCtjI1ySOGq4WlLCcQpUfmuLBcAAcq9xTbKzQAKX3mLIvgnZcGuUIhaKgxKT7_wdmGSAPsx3NAkyRphmu5uR2Rq2vzuSjh6ZB-hhS9OPlh0CrEICjSRiDm19avgqKNV3iDkEK_S1oWWylva4mXMtT20oCqH9xuEmyKRLmFlnfZ-szPZOznU-Xxc9XxCcK3wSrQRm1Li4PjE3xXE9S_rxPSW9FqMF4-0',
    overviewDescription:
      'Set in deep sea-blue with golden scales glowing with bronze reflections. She moves fearlessly through treacherous ocean canyons, breaking initial creative blocks and fueling cold-start innovation.',
    dossierDescription:
      'Breaking through the deep oceanic shadows of the Mid-Atlantic, Hope gleams in rich tarnish-proof gold and bronze reflections, radiating warm dawn sunlight into dark waters. She moves fearlessly through treacherous ocean canyons, breaking initial creative blocks and fueling cold-start innovation.',
    specialtyDescription:
      'Cold-start initiatives, brainstorming, exploratory architecture, and breaking deadlocks. She provides the catalyst force when engineering teams confront blank-page paralysis.',
    telemetryLabel: 'Cold-Start Velocity',
    telemetryValue: 'Instant Breakthrough',
    metric1Label: 'Strength',
    metric1Value: 'Momentum & Vision',
    metric2Label: 'Ideation Vector',
    metric2Value: '+88.4 M/Tokens',
    metric3Label: 'Domain',
    metric3Value: 'Creative Genesis',
    computePrimitive: 'Generative Seeding & Cold-Start Synthesizers',
    faultTolerance: '99.980%',
    latencySla: '< 35.0 ms',
    chapterTitle: 'The Fiery Rift of Perpetual Genesis',
    chapterMeta: 'Basalt Seafloor Spreading · +2.5 cm/yr',
    chapterDescription:
      'Along the planetary spine where continental plates pull apart, magma surges into freezing ocean trenches to forge pristine crust. Hope rules this tectonic threshold. She is the catalyst of zero-to-one breakthroughs, shattering computational creative blocks and directing unyielding dawn momentum into high-risk, frontier exploratory models.',
    tunedResonance: 'Cold-Start Generation & Paradigm Shift',
    chapterIcon: 'flare',
    bathymetryRegion: '05 · Mid-Atlantic',
    bathymetryVector: '2.103 rad',
    bathymetryState: 'Ignition',
    sparklineType: 'curve',
    svgCoord: { x: 124, y: 286, labelX: 106, labelY: 304, anchor: 'end' },
  },
  {
    id: 'faith',
    nodeNumber: '06',
    name: 'Faith',
    epithet: 'The Caribbean Drift',
    realm: 'Caribbean Reef Shallows',
    shortRealm: 'Shallow Coral Reefs',
    oceanRegionBadge: 'Node 06 · Caribbean',
    subRealmLabel: 'Cayman Trench Shallows',
    coordinates: "18°50'N 81°20'W",
    title: 'Unshakable Trust in Inner Truth',
    virtue: 'Security & Integrity',
    idealApplication: 'Encryption protocols, privacy verification, and ethical AI boundaries.',
    idealShort: 'Security & Trust Boundaries',
    latticeSymbol: 'Α',
    latticeWeight: 1.0,
    latticeDisplay: 'Α 1.000',
    filterCategory: 'equatorial',
    icon: 'security',
    overviewImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeyudUUX9pEwe92d9YEDvm4G6Ka4NlfKvzRMn62SU8Mgs_YoTADlQXnkOBCq3HVa-c-6vfYzDxu6pttaII5J0OH6qX-rnX4fSUnyLfNhjDTQMZAedAsR-M26lCvm-2K-QhhSXe8eySXUXIhsa8VLm5_cKYrv4jZngxTh8Ocp6jcvl0o5XlAnDatPSYHMbg8qeguAVXYF18KiJvI5FoyCb9DXdS7FV-qZzVjdwP3Lo',
    portraitImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADVdvzRNyuK9PvJucy_YCixEBcKQZd3kz6gHiDF1zkpsScUu4C2VRsYQNPEQBiC-5GgBzuAj1zQbExBSIfHEqhYFPW6mC7ZVIbJMgvpexXDNGNOq5ac9dM7udWqBF5rHqu8bOtSHNo28ikC6njsFJ0F9K56JLh93hC-wy5Rk350GTAP-qqyyeEdkbWaq0fJp8cN8VBS2GQVY0RorgqcpQOuNY4-7ZpEUq8M-V1g4A',
    realmImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9WjgzBKUqkb4XvDIXGvcgh8zpXf-zo9U0c3Nyryj5R_4Mh4u9x6he-5SxJ7Qx_zqhg2BkhwzlGIDWb-SL7_eDqC-d7SVxNtCPIPvtgzCuwtxZ4yVZLR0qRde5WXIL39543R7KT4xtBw-QH8WUWfB4Tqdk6hKxPzrNt4-zxgEbmYTA9Z6kexyeHLiimoOakUOFtVx7AGLHktF21PvIpQO7RVIB6Rm6SEuz6ZoiOdE',
    overviewDescription:
      'Shimmering in cyan and aquamarine, relying on natural buoyancy rather than force. She effortlessly threads labyrinthine security policies, validating cryptographic truths and zero-trust security postures.',
    dossierDescription:
      'Drifting effortlessly over sunlit turquoise coral reefs, Faith shimmers in cyan and aquamarine scales catching crystalline sunlight rays. Relying on natural buoyancy rather than force, she threads labyrinthine security policies, validating cryptographic truths and zero-trust boundaries.',
    specialtyDescription:
      'Cryptographic verification, zero-trust perimeter auditing, privacy validation, and ethical AI boundary enforcement with zero compromise.',
    telemetryLabel: 'Zero-Trust Integrity',
    telemetryValue: '1.0000 Cryptographic Proof',
    metric1Label: 'Strength',
    metric1Value: 'Security & Integrity',
    metric2Label: 'Verification Speed',
    metric2Value: '0.02 ms Proof',
    metric3Label: 'Domain',
    metric3Value: 'Cryptographic Truth',
    computePrimitive: 'Zero-Knowledge Cryptographic Proofs',
    faultTolerance: '100.00%',
    latencySla: '< 8.5 ms',
    chapterTitle: 'Unshakable Buoyancy in Pure Light',
    chapterMeta: 'Clarity: 50m Visibility · Constant Buoyancy',
    chapterDescription:
      'In waters so transparent that navigation requires neither force nor anxiety, Faith glides across sun-drenched banks of crystalline sand. Her principle is mathematical trust: cryptographic zero-knowledge proofs and inviolable ethical boundaries that hold steadfast without burdensome surveillance or heavy computational ballast.',
    tunedResonance: 'Zero-Trust Attestation & Cryptographic Integrity',
    chapterIcon: 'verified_user',
    bathymetryRegion: '06 · Caribbean',
    bathymetryVector: '0.000 rad',
    bathymetryState: 'Verified',
    sparklineType: 'nodes',
    svgCoord: { x: 50, y: 198, labelX: 32, labelY: 202, anchor: 'end' },
  },
  {
    id: 'love',
    nodeNumber: '07',
    name: 'Love',
    epithet: 'The Pacific Depth',
    realm: 'Deep Pacific / Mariana Trench',
    shortRealm: 'Mariana Trench',
    oceanRegionBadge: 'Node 07 · Mariana Depth',
    subRealmLabel: 'Challenger Deep Subsurface',
    coordinates: "11°22'N 142°35'E",
    title: 'The Profound Intensity of Connection',
    virtue: 'Integration & Synergy',
    idealApplication: 'Holistic UX orchestration, connecting disparate APIs, and system cohesion.',
    idealShort: 'Omnichannel Cohesion',
    latticeSymbol: 'Φ',
    latticeWeight: 0.997,
    latticeDisplay: 'Φ 0.997',
    filterCategory: 'polar',
    icon: 'all_inclusive',
    overviewImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBG0_Tg9U4055W5wvYsIpyjQDfMCGz4J10oJowfIGnOvvw8EtP9JAQVhpdpSdrrQNp791cAcXwhjEcA0I8jO12NRkrlo2I9W_ffHARoc9ly-I6xb4nfioFRZoKNA_0hn5ivxeUzyBVataWrnwaEBOVShzB1oxjKFsGyz90vuWQM5lU8hvyTThru9D6TN4W18doTaXO5KNHslQTpfFnwmNj9hcQsq4UYEQlUE0S0PDk',
    portraitImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrcvJiyYIZaVACxGuW4WUUwKyAcjD5qVmgE8jgLpyl7d7GX-kNNJkGE4Pm770sxbrmh3XPZAmn-tGjtO7GkKC7orlMKkTlCf9wFcG3zDWuKYW6xUrZnuLb6BxeC8zTM5YSL74ToPtxPYJ60q4OJRodmnhgCqwfr1EhK3cfTCiR2TZJ00hNQwtd4HvR5Z1az9Fnb8-UyVqV3xaWVvuQ55nLKFI-1vwCjhwazuyZqk',
    realmImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2DbG9XXjGTiU8czhklaLQxEcT8F2FKiRGc6fsSGqkDN6Lx6O4hdLjeveB3j7uB9hUpAxv-KEwVYyRi3EvTi1VJFEySNDGhPjyf1X8TlbCJg1GUem7ng4iS4-IM2M7BPDYW90lVkj2q-XrHwdwAN4lqW35CvWUH5r97KNy5SwHpISWJnVaZ0ZIC8rvBO7iJyisg3vM0tj7OZ3ZB9bfIcIdKmicpX_nqQL4ECe8LH4',
    overviewDescription:
      'Coiled in inky midnight-blue with onyx scales flecked with pure platinum. Thriving in the deep abyss and illuminated by internal light, Love represents the inescapable cohesive gravity that connects all disparate APIs.',
    dossierDescription:
      'Dwelling in the deep oceanic abyss of the Mariana Trench, Love is coiled in inky midnight-blue watercolor with striking onyx-black scales flecked with brilliant platinum and silver star-like reflections. Illuminated by internal gentle light, she represents the cohesive gravity that binds all disparate APIs.',
    specialtyDescription:
      'Holistic user experience harmonization, interconnecting disparate microservice APIs, and synthesizing cognitive output into graceful human dialogue.',
    telemetryLabel: 'Swarm Cohesion Index',
    telemetryValue: '100% Full Interlock',
    metric1Label: 'Strength',
    metric1Value: 'Integration & Synergy',
    metric2Label: 'API Convergence',
    metric2Value: '100% Unified',
    metric3Label: 'Domain',
    metric3Value: 'Holistic UX Matrix',
    computePrimitive: 'API Harmonization & Cognitive Cohesion',
    faultTolerance: '99.997%',
    latencySla: '< 14.5 ms',
    chapterTitle: 'The Profound Intensity of Connection',
    chapterMeta: 'Depth: 10,994m · Pressure: 1,086 bar',
    chapterDescription:
      'At the Challenger Deep, where sunlight never penetrated and eleven hundred atmospheres of hydrostatic pressure compress reality, Love dwells in radiant, unshakeable communion. She represents ultimate synthesis: the invisible gravity that binds disparate distributed nodes, cross-modal vectors, and isolated human intentions into one indivisible computational consciousness.',
    tunedResonance: 'Omnichannel Synthesis & Unified Swarm Gravity',
    chapterIcon: 'hub',
    bathymetryRegion: '07 · Mariana',
    bathymetryVector: '3.141 rad',
    bathymetryState: 'Gravitational',
    sparklineType: 'infinity',
    svgCoord: { x: 75, y: 88, labelX: 56, labelY: 84, anchor: 'end' },
  },
];

export function getGuardianById(id: GuardianId): Guardian {
  return GUARDIANS.find((g) => g.id === id) ?? GUARDIANS[0];
}
