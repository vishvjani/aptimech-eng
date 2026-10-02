/* ================================================================
   APTISMECH CORPORATION LLP — OFFICIAL PRODUCT CATALOGUE DATA
   Importer, Supplier & Exporter of Industrial Machinery & Materials
   ================================================================ */

export const productsData = [
  /* ══════════════════════════════════════════════════════════════
     CATEGORY: HEAVY INDUSTRIAL MACHINERY & WORKSHOP EQUIPMENT
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'mach-101',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Multi-Station',
    tag: 'Mechanical Series',
    title: 'Mechanical Multi-Functional Punching & Shearing Machine',
    subtitle: 'All-In-One Iron Worker — Punching, Shearing, Notching & Cutting',
    image: `${process.env.PUBLIC_URL}/products/multi_functional_machine.jpg`,
    shortDesc: 'A versatile heavy-duty mechanical machine engineered to handle plate shearing, punching, angle/bar cutting, and notch-making in a single compact unit.',
    fullDesc: `A versatile heavy-duty mechanical ironworker engineered to handle multiple metal fabrication operations including plate shearing, punching, bar cutting, and notch-making in a single compact unit.

Engineered with an all-in-one multi-station design for high workshop productivity, a rigid structural steel frame built to withstand high cyclic mechanical loads, and integrated safety guards with a user-friendly control station for maximum operator security.`,
    features: [
      'All-in-one multi-station design for maximum workshop productivity',
      'Rigid structural steel frame engineered to withstand cyclic mechanical loads',
      'Integrated safety guards and user-friendly control station for operator security',
      'Simultaneous multi-operation capability across independent stations',
      'Clean flat cutting, angle shearing, round bar cutting, and 90° notching',
      'Heavy-duty fabricated steel plate body with high durability',
    ],
    specs: [
      { label: 'Operation Type', value: 'Mechanical action with flywheel & clutch' },
      { label: 'Available Capacities', value: '55T (AMC55) to 125T (AMC125)' },
      { label: 'Stamping Speed', value: '25 – 30 Times/Min' },
      { label: 'Motor Power', value: '2.2 kW – 5.5 kW (3HP – 7.5HP)' },
      { label: 'Flat Cutting Capacity', value: '200×8mm up to 330×14mm' },
      { label: 'Angle Shearing', value: '75×75×8mm up to 150×150×14mm' },
      { label: 'Round Bar Cutting', value: 'Ø30mm to Ø40mm solid bar' },
      { label: 'Voltage Range', value: '220V / 380V / 400V / 415V (50/60 Hz)' },
    ],
    specTable: {
      headers: ['Model', 'Pressure', 'Mould Stroke', 'Speed', 'Total Power', 'Weight', 'Angle Size', 'Flat Cutting', 'Punch Thickness', 'Round Bar'],
      rows: [
        ['AMC55', '55 TON', '27 mm', '30 Time/Min', '2.2 KW', '450 KG', '75x75x8 mm', '200x8 mm', '8 mm', '30 mm'],
        ['AMC75', '75 TON', '30 mm', '30 Time/Min', '3.0 KW', '750 KG', '100x100x10 mm', '230x10 mm', '10 mm', '35 mm'],
        ['AMC100A', '100 TON', '36 mm', '30 Time/Min', '4.0 KW', '950 KG', '125x125x12 mm', '330x12 mm', '12 mm', '40 mm'],
        ['AMC100B', '100 TON', '36 mm', '30 Time/Min', '4.0 KW', '950 KG', '125x125x12 mm', '330x12 mm', '12 mm', '40 mm'],
        ['AMC125', '125 TON', '36 mm', '25 Time/Min', '5.5 KW', '1300 KG', '150x150x14 mm', '330x14 mm', '14 mm', '40 mm'],
      ]
    },
    applications: ['Structural Steel Fabrication', 'Fabrication Workshops', 'Busbar Processing', 'General Metal Manufacturing', 'Construction Frameworks']
  },
  {
    id: 'mach-102',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Open Throat',
    tag: 'Hydraulic Series',
    title: 'Hydraulic C-Type Punching Machine',
    subtitle: 'High-Tonnage Open Throat C-Frame Punching Operation',
    image: `${process.env.PUBLIC_URL}/products/c_type_punching_machine.png`,
    shortDesc: 'An open-throat C-frame hydraulic punching machine offering wide 3-sided accessibility, designed for accurate, high-tonnage punching on plates, channels, and structural sections.',
    fullDesc: `An open-throat C-frame hydraulic punching machine offering wide accessibility from three sides, designed for accurate, high-tonnage punching operations on plates, channels, and structural sections.

The open C-frame structure provides unobstructed material handling and easy workpiece loading. Smooth hydraulic power delivery ensures clean, distortion-free holes with minimal burrs. Equipped with a push-button electrical control panel and foot switch operation.`,
    features: [
      'C-frame design provides unobstructed material handling and easy workpiece loading',
      'Smooth hydraulic power delivery ensuring clean holes with minimal burrs',
      'Equipped with foot pedal operation and integrated electrical control panel',
      'Three-sided accessibility for large plate and channel manipulation',
      'Low noise and high stability hydraulic power pack',
      'Adjustable stroke depth and rapid cylinder return cycle',
    ],
    specs: [
      { label: 'Frame Type', value: 'C-Type Open Throat Welded Steel Structure' },
      { label: 'Drive Mechanism', value: 'Hydraulic Power Pack with Precision Cylinder' },
      { label: 'Control System', value: 'Push-button control box with foot switch' },
      { label: 'Tonnage Range', value: '10 Tons to 250 Tons options' },
      { label: 'Throat Depth', value: '125mm to 350mm' },
      { label: 'Stroke Range', value: '6mm – 150mm adjustable' },
      { label: 'Bed Configuration', value: 'Heavy Bolster Plate with Centering Hole' },
    ],
    applications: ['Sheet Metal Shops', 'Electrical Panel Manufacturing', 'Automobile Component Punching', 'Structural Steel Fabrication']
  },
  {
    id: 'mach-103',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: '4-Column Rigid',
    tag: 'Hydraulic Series',
    title: 'Hydraulic H-Type Press Machine',
    subtitle: 'Four-Column Straight-Side Heavy Press for Deep Drawing & Moulding',
    image: `${process.env.PUBLIC_URL}/products/h_type_hydraulic_press.jpg`,
    shortDesc: 'A heavy-duty four-column H-type hydraulic press engineered for high-precision deep drawing, forming, moulding, and heavy industrial pressing with uniform load distribution.',
    fullDesc: `A heavy-duty four-column H-type hydraulic press engineered for high-precision deep drawing, forming, moulding, and heavy industrial pressing applications with uniform load distribution.

Robust H-frame structure ensures maximum rigidity and minimal frame deflection under full tonnage. Features a precision-guided moving ram for exceptional parallel accuracy, and an independent hydraulic power pack with pressure gauge and adjustable tonnage controls.`,
    features: [
      'Rigid four-column / H-frame design ensures minimal deflection under heavy tonnage',
      'Even pressure distribution across large workpiece surfaces',
      'Independent hydraulic power pack with pressure regulator and dual pressure gauges',
      'Ideal for metal stamping, deep drawing, straightening, and composite moulding',
      'Dual-hand safety push buttons and optical safety curtains',
      'Hard chrome plated columns and ram for extended service life',
    ],
    specs: [
      { label: 'Frame Construction', value: 'Heavy-Duty 4-Column H-Frame Fabricated Steel' },
      { label: 'Tonnage Range', value: '20 Tons to 500 Tons' },
      { label: 'Ram Stroke', value: '150mm to 600mm (model dependent)' },
      { label: 'Bed Size (L×W)', value: '500×500mm up to 1500×1200mm' },
      { label: 'Daylight Opening', value: '300mm to 1000mm' },
      { label: 'Hydraulic System', value: 'Compact high-pressure hydraulic unit' },
      { label: 'Operation Modes', value: 'Manual Inching / Semi-Automatic Cycle' },
    ],
    applications: ['Automotive Deep Drawing', 'Embossing & Coining', 'Metal Straightening & Forming', 'Rubber & Composite Moulding', 'Heavy Appliance Fabrication']
  },
  {
    id: 'mach-104',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Power Operated',
    tag: 'Workshop Series',
    title: 'H-Type Hydraulic Workshop Press (Power Operated)',
    subtitle: 'Motorized Hydraulic Workshop Press with Movable Bed',
    image: `${process.env.PUBLIC_URL}/products/h_type_workshop_press_power.jpg`,
    shortDesc: 'A heavy-duty motorized hydraulic workshop press with adjustable movable bed, designed for bushing removal, bearing pressing, shaft straightening, and repair work.',
    fullDesc: `A heavy-duty motorized hydraulic workshop press equipped with an adjustable movable bed, designed for industrial maintenance, bushing insertion/removal, bearing pressing, shaft straightening, and general repair operations.

Powered hydraulic cylinder with fine-touch lever controls delivers effortless force application. The multi-height adjustable bed with heavy-duty support pins accommodates diverse workpiece sizes.`,
    features: [
      'Motorized hydraulic cylinder for effortless high-tonnage operation',
      'Multi-level adjustable bed with heavy-duty locking pins for varied workpiece heights',
      'High-precision pressure gauge for real-time load monitoring',
      'Heavy-channel fabricated steel frame with high stability',
      'Fast approach and powerful pressing stroke speeds',
      'Removable V-blocks and flat bolster plates included',
    ],
    specs: [
      { label: 'Drive Mechanism', value: 'Electric Motor Driven Hydraulic Pump' },
      { label: 'Available Capacities', value: '10 Ton, 20 Ton, 30 Ton, 50 Ton, 75 Ton, 100 Ton' },
      { label: 'Frame Width', value: '600mm to 1000mm' },
      { label: 'Piston Stroke', value: '150mm – 300mm' },
      { label: 'Operating Pressure', value: 'Up to 300 Bar' },
      { label: 'Motor Power', value: '1.5 kW – 5.5 kW (3-Phase 415V)' },
    ],
    applications: ['Machine Maintenance Workshops', 'Automobile Service Centers', 'Bearing & Bushing Pressing', 'Shaft & Axle Straightening', 'Heavy Equipment Overhaul']
  },
  {
    id: 'mach-105',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Manual Lever',
    tag: 'Workshop Series',
    title: 'H-Type Hydraulic Workshop Press (Manual Operated)',
    subtitle: 'Hand-Pump Hydraulic Workshop Utility Press',
    image: `${process.env.PUBLIC_URL}/products/h_type_workshop_press_manual.png`,
    shortDesc: 'A standalone manual hand-pump operated hydraulic workshop press for precision low-to-medium volume pressing, bearing fitting, and maintenance tasks without requiring electrical power.',
    fullDesc: `A standalone manual hand-pump operated hydraulic workshop press designed for precision low-to-medium volume pressing, bearing fitting, gear extraction, and general maintenance tasks without requiring electrical power connections.

Features a dual-speed manual hydraulic hand pump for rapid piston extension followed by high-pressure pressing stroke. Built with an open-sided H-frame allowing long shafts to pass through horizontally.`,
    features: [
      'Dual-speed manual hydraulic hand pump — fast approach & high-pressure stroke',
      'Zero electrical power required — fully portable for flexible workshop placement',
      'Adjustable work table with winch-assisted elevation mechanism',
      'High-clarity dial pressure gauge calibrated in metric tons',
      'Includes V-blocks and hardened cylinder nose cap',
      'Heavy welded channel frame with wide stance foot plates',
    ],
    specs: [
      { label: 'Drive Mechanism', value: 'Dual-Speed Manual Hydraulic Hand Pump' },
      { label: 'Available Capacities', value: '5 Ton, 10 Ton, 20 Ton, 30 Ton, 50 Ton' },
      { label: 'Piston Travel', value: '125mm – 200mm' },
      { label: 'Working Width', value: '500mm – 800mm' },
      { label: 'Vertical Daylight', value: '100mm – 950mm adjustable' },
    ],
    applications: ['Small & Medium Machine Workshops', 'Agricultural Equipment Repair', 'Tool Rooms & Prototype Labs', 'Educational & ITI Workshops']
  },
  {
    id: 'mach-106',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Compact C-Frame',
    tag: 'SPM Series',
    title: 'Hydraulic C-Type Press Machine (SPM)',
    subtitle: 'Special Purpose Single-Column High-Speed Assembly Press',
    image: `${process.env.PUBLIC_URL}/products/c_type_press_spm.png`,
    shortDesc: 'A compact single-column C-type hydraulic special purpose machine (SPM) press engineered for precision component assembly, riveting, crimping, and localized stamping.',
    fullDesc: `A compact single-column C-type hydraulic special purpose machine (SPM) press engineered for high-precision component assembly, riveting, crimping, localized stamping, and bearing pressing in serial production environments.

Engineered with three-side open access for seamless integration with conveyor lines, robotic pick-and-place, or manual loading jigs. Features a rigid welded C-frame with low deformation characteristics and precision ram guidance.`,
    features: [
      'Compact single-column C-frame footprint saving valuable shop-floor space',
      'Three-sided accessibility ideal for progressive tooling and automation jigs',
      'Precise electronic pressure and stroke limit adjustments',
      'High-speed approach with smooth hydraulic deceleration before contact',
      'Dual optical safety light curtains and emergency stop switches',
      'Integrated coolant and oil filtration unit for 24/7 industrial duty',
    ],
    specs: [
      { label: 'Capacity Range', value: '5 Ton to 60 Ton options' },
      { label: 'Frame Structure', value: 'Heavy C-Type Single Column Welded Steel' },
      { label: 'Throat Depth', value: '150mm – 300mm' },
      { label: 'Ram Stroke', value: '50mm – 250mm adjustable' },
      { label: 'Max Daylight', value: '250mm – 500mm' },
      { label: 'Operating Speed', value: 'Approach: 120 mm/s | Press: 15–30 mm/s | Return: 100 mm/s' },
      { label: 'Motor Rating', value: '2.2 kW to 7.5 kW' },
    ],
    applications: ['Electrical Appliance Assembly', 'Bearing & Bushing Insertion', 'Automotive Sensor & Valve Crimping', 'Hardware & Fastener Riveting', 'SPM Line Integration']
  },
  {
    id: 'mach-107',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Heavy-Duty',
    tag: 'Processing Equipment',
    title: 'Hydraulic Busbar Bending Machine',
    subtitle: 'Heavy-Duty Copper & Aluminium Busbar Bending, Punching & Cutting Machine',
    image: `${process.env.PUBLIC_URL}/products/hydraulic_busbar_bending.jpg`,
    shortDesc: 'High-precision hydraulic busbar bending and processing machine for copper and aluminium flats used in electrical control panels and switchgear.',
    fullDesc: `High-precision hydraulic busbar bending and processing machine engineered specifically for copper and aluminium flats used in electrical control panels, transformers, and switchgear manufacturing.

Delivers accurate bend angles up to 90° without cracking or wrinkling the conductive material. Features graduated angle scale, quick-change tooling dies, and powerful hydraulic power pack.`,
    features: [
      'Accurate bending up to 90° without surface cracking or conductive distortion',
      'Quick-change die tooling for flat bending, vertical bending, and punching',
      'High-capacity hydraulic cylinder delivering smooth uniform pressure',
      'Compact heavy-duty footprint suitable for control panel fabrication workshops',
      'Integrated angle protractor gauge for repeatable precision angles',
    ],
    specs: [
      { label: 'Material Suitability', value: 'Copper & Aluminium Busbars' },
      { label: 'Max Bending Width', value: 'Up to 200 mm' },
      { label: 'Max Bending Thickness', value: 'Up to 15 mm' },
      { label: 'Max Bending Angle', value: '0° – 90° adjustable' },
      { label: 'Hydraulic Pressure', value: 'Up to 700 Bar (70 MPa)' },
      { label: 'Operation', value: 'Hydraulic Foot / Hand Valve Control' },
    ],
    applications: ['Electrical Control Panel Builders', 'Switchgear & Substation Manufacturing', 'Transformer Busbar Fabrication', 'Power Distribution Equipment']
  },
  {
    id: 'mach-108',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Pillar / Radial',
    tag: 'Drilling Equipment',
    title: 'Heavy Duty Industrial Drill Machine',
    subtitle: 'Precision Pillar & Radial Industrial Drilling Machine for Heavy Fabrication',
    image: `${process.env.PUBLIC_URL}/products/drill_machine.jpg`,
    shortDesc: 'Rugged heavy-duty industrial pillar drill machine with multi-speed gearbox, precision spindle, and rigid column for accurate hole drilling and tapping.',
    fullDesc: `Rugged heavy-duty industrial pillar drill machine engineered for rigorous hole drilling, counter-boring, and tapping across structural steel, cast iron, and non-ferrous metals.

Features a heavy cast-iron column, precision ground quill and spindle, multi-step pulley/gearbox speed transmission, and an adjustable tilting work table.`,
    features: [
      'Heavy cast iron column and base ensuring maximum vibration dampening',
      'Precision ground spindle with hardened Morse taper bore',
      'Wide speed selection for small precision holes up to large core drilling',
      'Height adjustable and rotating work table with T-slots',
      'Heavy-duty rack and pinion mechanism with depth gauge stop',
    ],
    specs: [
      { label: 'Drilling Capacity (Steel)', value: 'Ø20 mm to Ø50 mm' },
      { label: 'Spindle Taper', value: 'MT-3 / MT-4' },
      { label: 'Spindle Travel', value: '120 mm – 200 mm' },
      { label: 'Speed Range', value: 'Multi-speed gearbox / stepped pulleys' },
      { label: 'Column Diameter', value: 'Heavy cast Ø90 mm – Ø160 mm' },
      { label: 'Motor Power', value: '1.5 HP to 5.0 HP (3-Phase 415V)' },
    ],
    applications: ['Structural Steel Fabrication', 'Machine Component Machining', 'Maintenance Toolrooms', 'Automotive Repair Workshops']
  },
  {
    id: 'mach-109',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Dual Function',
    tag: 'Milling & Drilling',
    title: 'Heavy Duty Drilling-Cum-Milling Machine',
    subtitle: 'Dual-Purpose Industrial Drilling & Face/End Milling Machine',
    image: `${process.env.PUBLIC_URL}/products/drilling_cum_milling.jpg`,
    shortDesc: 'A versatile dual-purpose machine combining precision drilling with compound X-Y table face and end milling capabilities in a single rigid unit.',
    fullDesc: `A versatile dual-purpose industrial machine combining high-torque drilling capabilities with compound X-Y coordinate table milling for facing, slotting, keyway cutting, and spot drilling.

Equipped with a precision cross-slide compound table with micrometer dials, heavy column support, swivel head mechanism, and powerful drive motor for heavy metal removal.`,
    features: [
      'Dual capability: heavy drilling + precise X-Y compound table milling',
      'Precision machined cross-slide table with calibrated feed dials',
      'Swivel milling head for angled drilling and bevel machining',
      'Heavy-duty hardened gears and rigid cast column',
      'Fine micro-downfeed control for accurate depth milling',
    ],
    specs: [
      { label: 'Max Drilling Diameter', value: 'Ø32 mm – Ø45 mm' },
      { label: 'Max Face Milling Diameter', value: 'Ø80 mm' },
      { label: 'Max End Milling Diameter', value: 'Ø28 mm – Ø32 mm' },
      { label: 'Table Size (L×W)', value: '800×240 mm (with T-slots)' },
      { label: 'Head Swivel Angle', value: '±45° Left / Right' },
      { label: 'Spindle Motor', value: '2.0 HP – 3.0 HP (3-Phase 415V)' },
    ],
    applications: ['Tool Rooms & Die Making', 'Fabrication & Maintenance Shops', 'Keyway & Slot Milling', 'Precision Prototype Machining']
  },
  {
    id: 'mach-110',
    category: 'heavy_machinery',
    categoryName: 'Heavy Industrial Machinery',
    badge: 'Vertical Turret',
    tag: 'Milling Equipment',
    title: 'Precision Vertical Milling Machine',
    subtitle: 'Heavy Duty Industrial Vertical Turret Milling Machine',
    image: `${process.env.PUBLIC_URL}/products/vertical_milling_machine.jpg`,
    shortDesc: 'High-precision heavy-duty vertical milling machine designed for flat surfacing, slotting, contouring, and multi-axis metal machining.',
    fullDesc: `High-precision heavy-duty vertical turret milling machine engineered for continuous industrial manufacturing, die sinking, mold profiling, facing, and precision slotting.

Features precision-hardened and ground slideways with Turcite-B coating, a high-torque variable speed spindle head, power feeds on X/Y axes, and a heavy-duty ribbed casting structure for chatter-free cuts.`,
    features: [
      'Rigid Meehanite cast iron structure for superior vibration dampening',
      'Precision ground quill and chrome-plated spindle with high runout accuracy',
      'Longitudinal and cross power feeds with rapid traverse',
      'Turcite-B coated slideways for smooth stick-slip free movement',
      'Integrated coolant pump, tray, and centralized lubrication system',
    ],
    specs: [
      { label: 'Table Working Area', value: '1270×254 mm (or 1370×300 mm)' },
      { label: 'Table Travel (X / Y / Z)', value: '800 mm / 380 mm / 400 mm' },
      { label: 'Spindle Taper', value: 'ISO 40 / NT40 / R8' },
      { label: 'Spindle Speed Range', value: '60 – 4200 RPM (Step/Variable)' },
      { label: 'Spindle Motor Power', value: '3.7 kW (5.0 HP) 3-Phase 415V' },
      { label: 'Machine Net Weight', value: 'Approx 1400 – 1650 KG' },
    ],
    applications: ['Die & Mould Manufacturing', 'Precision Component Machining', 'Automotive Tooling', 'Heavy Engineering Workshops']
  },

  /* ══════════════════════════════════════════════════════════════
     CATEGORY: INDUSTRIAL RAW MATERIALS — CRC, MS & SS COILS/SHEETS
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'raw-101',
    category: 'raw_materials',
    categoryName: 'Industrial Raw Materials',
    badge: 'Prime / CRCA',
    tag: 'Cold Rolled Sheets',
    title: 'CRC Sheets (Cold Rolled Coils & Sheets)',
    subtitle: 'Prime & Commercial Grade CRCA Sheets & Coils for Stamping & Fabrication',
    image: `${process.env.PUBLIC_URL}/products/crc_sheets.jpg`,
    shortDesc: 'Superior surface finish Cold Rolled Closed Annealed (CRCA) steel sheets and slit coils for precision sheet metal stamping, deep drawing, and electrical panel enclosures.',
    fullDesc: `High-quality Cold Rolled Closed Annealed (CRCA) steel sheets and slit coils supplied in customized thicknesses, widths, and temper grades for precision stamping, automotive panels, and metal furniture fabrication.

Features close dimensional tolerances, smooth uniform surface finish, excellent formability, and uniform mechanical properties across the entire coil width.`,
    features: [
      'Smooth, uniform surface texture ideal for powder coating, painting, and plating',
      'Consistent thickness tolerance and excellent deep-drawing properties',
      'Available in full coils, slit strips, and cut-to-length flat sheets',
      'Certified chemical composition and mechanical tensile properties',
      'Corrosion preventive oil coating for secure transit and storage',
    ],
    specs: [
      { label: 'Material Grade', value: 'CR1 / CR2 / CR3 / CR4 (IS 513 / ASTM A1008)' },
      { label: 'Thickness Range', value: '0.40 mm to 3.20 mm' },
      { label: 'Standard Widths', value: '900 mm, 1000 mm, 1220 mm, 1250 mm & custom slit' },
      { label: 'Lengths Available', value: 'Standard 2000 mm, 2440 mm, 2500 mm or Coil form' },
      { label: 'Surface Finish', value: 'Matte (Oiled) / Bright / Skin Passed' },
      { label: 'Supply Form', value: 'Cut Sheets, Slit Strips, and Full Prime Coils' },
    ],
    applications: ['Electrical Enclosures & Control Panels', 'Automotive Body & Component Stamping', 'Home Appliances & White Goods', 'Steel Furniture & Storage Racks', 'General Sheet Metal Fabrication']
  },
  {
    id: 'raw-102',
    category: 'raw_materials',
    categoryName: 'Industrial Raw Materials',
    badge: 'Hot / Cold Rolled',
    tag: 'Mild Steel Supply',
    title: 'MS Coils (Mild Steel Industrial Coils & Sheets)',
    subtitle: 'High Tensile Structural Mild Steel Coils & Slit Plates',
    image: `${process.env.PUBLIC_URL}/products/ms_coils.jpg`,
    shortDesc: 'Prime and commercial Mild Steel (MS) coils and slit plates offering high tensile strength, excellent weldability, and uniform thickness for heavy structural fabrication.',
    fullDesc: `Heavy-duty Mild Steel (MS) Hot Rolled (HR) and Cold Rolled coils, slit bands, and sheets supplied to fabrication units, pipe manufacturers, and engineering OEMs across India.

Selected for high tensile strength, superior weldability, ductile forming characteristics, and consistent gauge accuracy across large batch supplies.`,
    features: [
      'High tensile and yield strength suitable for structural load-bearing applications',
      'Exceptional weldability by MIG, TIG, and SAW processes without cracking',
      'Precision slitting and cut-to-size sheet de-coiling available',
      'Strict quality checks for surface defects and dimensional consistency',
      'Available in wholesale coil lots and tailored project quantities',
    ],
    specs: [
      { label: 'Standard Grades', value: 'IS 2062 E250 / E350, ASTM A36, SAE 1008 / 1018' },
      { label: 'Thickness Range', value: '1.20 mm up to 12.0 mm (HR) / 0.50 mm to 3.0 mm (CR)' },
      { label: 'Width Range', value: '1000 mm, 1250 mm, 1500 mm, and customized slit widths' },
      { label: 'Coil Weight', value: '3 Tons to 15 Tons per coil' },
      { label: 'Finish Condition', value: 'Pickled & Oiled (HRPO) / Mill Scale / Bare' },
    ],
    applications: ['Heavy Structural Fabrication', 'ERW Pipe & Tube Manufacturing', 'Railway Wagon & Chassis Building', 'Pressure Vessels & Storage Tanks', 'Pre-Engineered Building (PEB) Structures']
  },
  {
    id: 'raw-103',
    category: 'raw_materials',
    categoryName: 'Industrial Raw Materials',
    badge: 'SS 304 / 316',
    tag: 'Stainless Steel Supply',
    title: 'SS Coils (Stainless Steel Coils, Strips & Sheets)',
    subtitle: 'Corrosion Resistant Austenitic & Ferritic Stainless Steel Coils',
    image: `${process.env.PUBLIC_URL}/products/ss_coils.jpg`,
    shortDesc: 'Premium stainless steel coils and slit strips in grades SS 304, 304L, 316, 316L, and 201 with 2B, BA, No.4 hairline, and PVC film protected surfaces.',
    fullDesc: `High-grade Stainless Steel (SS) coils, slit strips, and precision sheets supplied for chemical processing equipment, pharmaceutical machinery, architectural trims, and food processing lines.

Available in austenitic grades (SS304 / SS316) offering superior corrosion resistance, high hygienic standards, and high temperature strength. Supplied with protective PVC laser film to ensure scratch-free fabrication.`,
    features: [
      'Outstanding resistance to chemical corrosion, oxidation, and pitting',
      'High ductility for deep drawing, rolling, and tight-radius bending',
      'Diverse surface finishes: 2B (cold rolled), BA (bright annealed), No.4 hairline, mirror finish',
      'Protected with laser-grade PE/PVC protective film',
      'Mill test certificate (MTC) supplied with full chemical spectrometry',
    ],
    specs: [
      { label: 'Available Grades', value: 'AISI / ASTM 304, 304L, 316, 316L, 201, 430' },
      { label: 'Thickness Range', value: '0.30 mm to 6.0 mm' },
      { label: 'Slit Width Range', value: '15 mm up to 1500 mm precision slitting' },
      { label: 'Surface Finishes', value: '2B, BA, No.4 Satin / Hairline, Mirror (8K), Scotch Brite' },
      { label: 'Edge Type', value: 'Slit Edge / Mill Edge / Deburred Round Edge' },
    ],
    applications: ['Dairy & Food Processing Machinery', 'Pharma & Chemical Process Tanks', 'Kitchenware & Industrial Sinks', 'Architectural Cladding & Handrails', 'Exhaust Systems & Flue Ducting']
  },

  /* ══════════════════════════════════════════════════════════════
     CATEGORY: PRECISION COMPONENTS, MOUNTS & HARDWARE SPARES
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'spares-101',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'High Precision',
    tag: 'Machined Components',
    title: 'Custom Mounting & Base Plates',
    subtitle: 'Heavy-Duty Ground & Drilled Machine Base Mounting Plates',
    image: `${process.env.PUBLIC_URL}/products/plates_custom_mounts_1.jpg`,
    shortDesc: 'Heavy-duty machined mounting plates with precision-located hole patterns, counterbores, and ground surfaces for machine assembly and fixture mounting.',
    fullDesc: `Heavy-duty machined mounting plates with precision-located hole patterns, counterbores, and ground surfaces manufactured for machine assembly and fixture mounting.

Fabricated from high-tensile structural steel or alloy grades, stress-relieved to prevent warping, with precise CNC bored hole center distances.`,
    features: [
      'Precision CNC milled hole patterns, counterbores, and threaded holes',
      'Stress-relieved steel plates ensuring zero dimensional distortion over time',
      'Available with black oxide, nickel plating, or zinc passivated coatings',
      'Custom drilled to customer engineering drawings and tolerance prints',
    ],
    specs: [
      { label: 'Material Options', value: 'Mild Steel (IS 2062), EN8, EN9, SS304, Tool Steel' },
      { label: 'Thickness Range', value: '8mm to 65mm' },
      { label: 'Surface Flatness', value: 'Within 0.05mm across 500mm span' },
      { label: 'Hole Accuracy', value: 'CNC drilled ±0.05mm center-to-center' },
    ],
    applications: ['Machine Base Platforms', 'Fixture & Jig Mounts', 'Hydraulic Manifold Sub-Plates', 'Robotic Base Mounts']
  },
  {
    id: 'spares-102',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Diamond Knurl',
    tag: 'Fasteners & Hardware',
    title: 'Knurled Nuts & SPM Adjuster Screws',
    subtitle: 'Precision Threaded Hand-Turn Adjuster Nuts & Thumbscrews',
    image: `${process.env.PUBLIC_URL}/products/knurled_nuts_fasteners.jpg`,
    shortDesc: 'Precision-turned knurled thumb nuts and adjustment collars for rapid manual tool-less locking, fixture clamping, and micro-adjustments on industrial machinery.',
    fullDesc: `Precision-turned knurled thumb nuts and adjustment collars engineered for rapid manual tool-less locking, fixture clamping, and micro-adjustments on industrial machinery.

Features sharp diamond knurling for positive hand grip even in oily workshop environments, with precision single-point CNC cut threads.`,
    features: [
      'High-traction diamond knurled exterior for slip-free manual adjustment',
      'Precision single-point cut internal metric / imperial threads',
      'Chamfered lead-in for easy thread engagement without cross-threading',
      'Available in EN1A (free cutting steel), brass, stainless steel, and mild steel',
    ],
    specs: [
      { label: 'Thread Sizes', value: 'M6, M8, M10, M12, M16, M20 & Custom pitches' },
      { label: 'Knurl Style', value: 'Diamond (Cross) / Straight Knurl' },
      { label: 'Materials', value: 'EN1A / Carbon Steel / Brass / SS 304' },
      { label: 'Plating', value: 'Zinc Blue Passivated / Black Od / Nickel Chrome' },
    ],
    applications: ['Machine Tool Fixtures', 'Limit Switch Stops', 'Optical & Gauge Mounts', 'Manual Clamp Adjustments']
  },
  {
    id: 'spares-103',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'High Rigidity',
    tag: 'Structural Brackets',
    title: 'Industrial Heavy Brackets & Corner Mounts',
    subtitle: 'Reinforced Angle Brackets & Gusseted Machine Mounts',
    image: `${process.env.PUBLIC_URL}/products/industrial_brackets.jpg`,
    shortDesc: 'Reinforced heavy-gauge steel angle brackets with welded gussets and slotted mounting holes for structural machine framing and sensor mounting.',
    fullDesc: `Reinforced heavy-gauge steel angle brackets with welded gussets and slotted mounting holes designed for structural machine framing, sensor bracket mounting, and perpendicular load transfer.`,
    features: [
      'Heavy-wall structural steel construction with reinforced support gussets',
      'Slotted mounting holes for fast horizontal and vertical alignment adjustment',
      'High load capacity under dynamic machine vibrations',
      'Durable powder coated or zinc galvanised corrosion protection',
    ],
    specs: [
      { label: 'Plate Thickness', value: '4mm to 16mm fabricated steel' },
      { label: 'Angles Available', value: '90° Rigid / Custom Acute & Obtuse angles' },
      { label: 'Hole Config', value: 'Round holes + Slotted adjustment channels' },
    ],
    applications: ['Machine Frame Assemblies', 'Guard Rail Support', 'Linear Rail Mounting', 'Conveyor Framing']
  },
  {
    id: 'spares-104',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Forged Steel',
    tag: 'Lifting & Rigging',
    title: 'Heavy Duty Eye Bolts',
    subtitle: 'Drop-Forged High-Tensile Eye Bolts for Machinery Lifting & Rigging',
    image: `${process.env.PUBLIC_URL}/products/eye_bolts_lifting.jpg`,
    shortDesc: 'Drop-forged high-tensile carbon steel lifting eye bolts engineered for safe crane lifting, rigging, and hoist attachment on heavy machines and dies.',
    fullDesc: `Drop-forged high-tensile carbon steel lifting eye bolts engineered for safe overhead crane lifting, rigging, die handling, and hoist attachment on heavy industrial equipment.

Manufactured with forged shanks, precision-cut metric threads, and certified safe working load (SWL) ratings.`,
    features: [
      'Drop-forged high-strength carbon steel with normalized microstructure',
      'Precision cut metric thread shank for deep secure engagement in tapped holes',
      'Wide internal eye loop compatible with standard crane hooks and shackles',
      'Zinc plated or self-color finish for long outdoor and workshop durability',
    ],
    specs: [
      { label: 'Thread Sizes', value: 'M8, M10, M12, M16, M20, M24, M30, M36' },
      { label: 'Material', value: 'Forged Carbon Steel (C15 / Grade 80 alloy)' },
      { label: 'Standard', value: 'DIN 580 / IS 4190' },
      { label: 'Safety Factor', value: '4:1 Rated Capacity' },
    ],
    applications: ['Machine Lifting & Transport', 'Die & Mould Handling', 'Overhead Rigging & Slings', 'Structural Tie-Down Points']
  },
  {
    id: 'spares-105',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Hydraulic / Pneumatic',
    tag: 'Fluid Connectors',
    title: 'Reducing Adapters & Hydraulic Connectors',
    subtitle: 'Precision Threaded Hydraulic Hex Nipples, Bushings & Adapters',
    image: `${process.env.PUBLIC_URL}/products/reducing_adapters_fittings.jpg`,
    shortDesc: 'High-pressure hydraulic hex reducing nipples, BSP/NPT threaded male-female adapters, and pipe fittings engineered for leak-proof fluid power lines.',
    fullDesc: `High-pressure hydraulic hex reducing nipples, BSP/NPT threaded male-female adapters, and pipe fittings engineered for leak-proof fluid power lines, manifold blocks, and cylinder ports.

CNC machined from solid hexagonal bar stock with smooth sealing cones and cleanly cut thread flanks capable of withstanding hydraulic shock pressures.`,
    features: [
      'Machined from solid hexagonal steel bar stock for maximum burst pressure resistance',
      'Precision BSP, BSPT, NPT, and Metric thread configurations',
      '60° / 37° JIC cone seat profiles for metal-to-metal leak-tight sealing',
      'Trivalent zinc plating with 240+ hours salt spray corrosion resistance',
    ],
    specs: [
      { label: 'Thread Standards', value: 'BSP (G), NPT, BSPT (R), Metric (M)' },
      { label: 'Pressure Rating', value: 'Up to 400 Bar (6000 PSI)' },
      { label: 'Sizes Available', value: '1/8", 1/4", 3/8", 1/2", 3/4", 1", 1-1/2" BSP/NPT' },
      { label: 'Material', value: 'Free Cutting Steel (11SMnPb30) / SS304 / Brass' },
    ],
    applications: ['Hydraulic Power Packs', 'Pneumatic Control Valves', 'Lubrication Lines', 'Machine Tool Plumbing']
  },
  {
    id: 'spares-106',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Locking Collar',
    tag: 'Shaft Components',
    title: 'SPM Precision Shaft Collars & Rings',
    subtitle: 'Single-Split & Solid Clamp-On Shaft Positioning Collars',
    image: `${process.env.PUBLIC_URL}/products/spm_collars.jpg`,
    shortDesc: 'Precision-bored solid and split shaft clamping collars designed to position bearings, pulleys, and gears on shafts without marring or gouging.',
    fullDesc: `Precision-bored solid and clamp-on shaft collars designed to locate bearings, sprockets, pulleys, and stop positions along drive shafts without marring or scoring the shaft surface.`,
    features: [
      'Uniform clamping force that wraps around shaft without set-screw indentation marks',
      'Honed internal bore with tight H7 tolerance for perfect concentricity',
      'Black oxide or zinc finish with high-tensile socket head cap screws',
    ],
    specs: [
      { label: 'Bore Sizes', value: 'Ø10mm up to Ø80mm' },
      { label: 'Styles', value: 'Solid Set-Screw / Single-Split Clamp / Double-Split' },
      { label: 'Material', value: 'Carbon Steel / SS304 / Aluminium 6061' },
    ],
    applications: ['Linear Guide Stops', 'Conveyor Drive Shafts', 'Motor Coupling Locators', 'SPM Linkage Pivots']
  },
  {
    id: 'spares-107',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Linkage Hardware',
    tag: 'Mechanical Linkages',
    title: 'Clevis Linkage Ends, Pins & Yokes',
    subtitle: 'Precision Hydraulic/Pneumatic Cylinder Rod Clevis Ends & Pins',
    image: `${process.env.PUBLIC_URL}/products/clevis_ends_hooks_pins.jpg`,
    shortDesc: 'Heavy-duty forged and machined clevis rod ends, linkage forks, and hardened pivot pins for connecting hydraulic cylinder rods and mechanical linkages.',
    fullDesc: `Heavy-duty forged and machined clevis rod ends, linkage forks, and hardened pivot pins engineered for connecting hydraulic and pneumatic cylinder rods to moving press arms and linkages.`,
    features: [
      'High-tensile forged steel body with machined pin clearance',
      'Hardened pivot pins with circlip or cotter pin retention grooves',
      'Precision internal threads matching cylinder piston rod ends',
    ],
    specs: [
      { label: 'Thread Types', value: 'Metric M10 to M48 (Female) / Fine Pitch' },
      { label: 'Pin Diameters', value: 'Ø10mm to Ø50mm hardened pins' },
      { label: 'Standard', value: 'ISO 8140 / DIN 71752' },
    ],
    applications: ['Cylinder Rod Connections', 'Press Brake Linkage Arms', 'Mechanical Lever Actuators', 'Agricultural Linkages']
  },
  {
    id: 'spares-108',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Industrial Pipe',
    tag: 'Pipe Connectors',
    title: 'MS Heavy Hex Nipples & Barrel Connectors',
    subtitle: 'Heavy-Wall Welded & Threaded Steel Barrel Nipples & Pipe Fittings',
    image: `${process.env.PUBLIC_URL}/products/ms_nipples_connectors.jpg`,
    shortDesc: 'Heavy-wall mild steel hex nipples, pipe connectors, and welded pipe sockets designed for heavy industrial fluid transfer and hydraulic manifold plumbing.',
    fullDesc: `Heavy-wall mild steel hex nipples, pipe connectors, and welded pipe sockets designed for industrial fluid transfer, steam pipes, hydraulic manifold plumbing, and structural couplings.`,
    features: [
      'Heavy Schedule 40/80 pipe stock with full-depth taper threads',
      'Tapered NPT and BSPT threads for tight pressure-sealed joints with sealant',
      'Chamfered weld-prep ends for strong butt weld connections',
    ],
    specs: [
      { label: 'Sizes', value: '1/4" to 3" Nominal Bore (NB)' },
      { label: 'Schedule', value: 'SCH 40 / SCH 80 / SCH 160' },
      { label: 'End Types', value: 'Threaded Both Ends (TBE) / Plain End (PE) / Hex Central' },
    ],
    applications: ['Industrial Plumbing', 'High-Pressure Hydraulic Circuits', 'Air Compressor Distribution', 'Chemical & Water Piping']
  },
  {
    id: 'spares-109',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Flange Joint',
    tag: 'Machined Flanges',
    title: 'Machined Round Pipe Flanges & Blind Plates',
    subtitle: 'Forged & Plate Steel Slip-On, Blind & Threaded Flanges',
    image: `${process.env.PUBLIC_URL}/products/machined_round_flange.jpg`,
    shortDesc: 'Precision CNC turned circular slip-on flanges, blind plates, and weld neck flanges manufactured to ANSI/DIN/IS standards for industrial piping.',
    fullDesc: `Precision CNC turned circular slip-on flanges, blind plates, and weld neck flanges manufactured to ANSI B16.5, DIN, and IS 6392 standards for industrial piping, pressure vessels, and tank nozzles.`,
    features: [
      'Precision turned gasket face with phonographic serration grooves',
      'Accurate CNC drilled bolt circle PCD with tight pitch accuracy',
      'Supplied with full material test certification',
    ],
    specs: [
      { label: 'Pressure Class', value: '150#, 300#, PN10, PN16, Table D/E' },
      { label: 'Sizes', value: '1/2" (15 NB) to 12" (300 NB)' },
      { label: 'Flange Types', value: 'Slip-On (SORF), Blind (BLRF), Threaded, Weld Neck (WNRF)' },
    ],
    applications: ['Industrial Pipe Lines', 'Storage Tanks & Pressure Vessels', 'Pump & Valve Assemblies', 'Process Plant Manifolds']
  },

  /* ══════════════════════════════════════════════════════════════
     CATEGORY: INDUSTRIAL MOTORS & CNC TOOLING
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'cnc-101',
    category: 'cnc_motors',
    categoryName: 'Industrial Motors & Tooling',
    badge: 'Carbide Turning',
    tag: 'CNC Tooling',
    title: 'CNC Indexable Carbide Turning Inserts',
    subtitle: 'High-Performance CVD/PVD Coated Tungsten Carbide Cutting Inserts',
    image: `${process.env.PUBLIC_URL}/products/cnc_carbide_inserts.png`,
    shortDesc: 'Premium CVD/PVD coated tungsten carbide indexable inserts (CNMG, WNMG, TNMG, DNMG) engineered for high-speed CNC turning, facing, and profiling.',
    fullDesc: `Premium CVD and PVD coated tungsten carbide indexable cutting inserts engineered for high-speed CNC lathe turning, facing, profiling, and parting across mild steel, alloy steels, stainless steel (SS304/316), and cast iron.

Featuring multi-layer nano coatings with exceptional thermal wear resistance, micro-engineered chip breaker geometries that maintain tight chip control, and reinforced cutting edges that resist chipping during interrupted cutting passes.`,
    features: [
      'Multi-layer CVD/PVD coating technology for superior thermal hardness and wear life',
      'Advanced 3D chip breaker geometry ensuring reliable chip breaking at low & high feeds',
      'Micro-grain tungsten carbide substrate offering high toughness against edge fracture',
      'Consistent tool life and dimensional accuracy across high-volume production batches',
      'Available in standard ISO geometries: CNMG, WNMG, TNMG, DNMG, CCMT, DCMT',
      'Optimized for steel, stainless steel, cast iron, and high-temperature alloys',
    ],
    specs: [
      { label: 'Insert Geometries', value: 'CNMG 120408, WNMG 080408, TNMG 160408, DNMG 150608, CCMT, VBMT' },
      { label: 'Substrate', value: 'Micro-grain Tungsten Carbide (WC-Co)' },
      { label: 'Coating Types', value: 'Multi-layer CVD (TiCN+Al2O3+TiN) / PVD (AlTiN / TiAlN)' },
      { label: 'Workpiece Materials', value: 'P (Steel), M (Stainless Steel), K (Cast Iron), N (Aluminium)' },
      { label: 'Cutting Speeds', value: 'Vc: 120 – 350 m/min (material & grade dependent)' },
      { label: 'Feed Range', value: 'fn: 0.10 – 0.50 mm/rev' },
    ],
    specTable: {
      headers: ['Insert Code', 'Shape', 'Relief Angle', 'Tolerance', 'Thickness', 'Corner Radius', 'Application'],
      rows: [
        ['CNMG 120408', '80° Diamond', '0° (Negative)', 'Class M', '4.76 mm', 'R 0.8 mm', 'Heavy Roughing & Semi-Finishing Steel'],
        ['WNMG 080408', '80° Trigon', '0° (Negative)', 'Class M', '4.76 mm', 'R 0.8 mm', 'Economical 6-Corner Turning & Facing'],
        ['TNMG 160408', '60° Triangle', '0° (Negative)', 'Class M', '4.76 mm', 'R 0.8 mm', 'General Purpose Turning & Chamfering'],
        ['DNMG 150608', '55° Diamond', '0° (Negative)', 'Class M', '6.35 mm', 'R 0.8 mm', 'Precision Copying & Profiling Turning'],
        ['CCMT 09T304', '80° Diamond', '7° (Positive)', 'Class M', '3.97 mm', 'R 0.4 mm', 'Internal Boring & Light Finishing'],
      ]
    },
    applications: ['CNC Turning Centers', 'Heavy Lathe Operations', 'Automotive Component Manufacturing', 'Hydraulic Cylinder Rod Machining', 'Die & Mould Roughing']
  },
  {
    id: 'motor-101',
    category: 'cnc_motors',
    categoryName: 'Industrial Motors & Tooling',
    badge: 'IP55 Class F',
    tag: 'Electric Motors',
    title: 'Three-Phase Industrial Induction Motors (IP55)',
    subtitle: 'High-Torque Squirrel Cage Induction Motors for Heavy Industrial Drives',
    image: `${process.env.PUBLIC_URL}/products/induction_motor_flange.png`,
    shortDesc: 'Heavy-duty 415V three-phase squirrel cage induction motors built in rigid cast-iron frames with IP55 protection, high starting torque, and Class F insulation.',
    fullDesc: `Heavy-duty three-phase squirrel cage induction motors engineered for continuous duty (S1) operation driving hydraulic power packs, power presses, compressors, pumps, and industrial machine tools.

Built in a heavy-ribbed cast iron frame with IP55 dust and water-jet protection, Class F insulation with low temperature rise, dynamically balanced rotors for vibration-free running, and high starting torque characteristics designed for demanding industrial starts.`,
    features: [
      'Heavy-ribbed cast-iron construction offering maximum mechanical strength and thermal dissipation',
      'IP55 ingress protection against abrasive industrial dust and pressurized water jets',
      'Class F insulation system with Class B temperature rise limit for extended insulation lifespan',
      'Dynamically balanced rotor with Grade G2.5 balance quality for minimal vibration',
      'Vacuum Pressure Impregnation (VPI) treated windings resistant to humidity and chemical fumes',
      'Available in Foot (B3), Flange (B5), and Foot-cum-Flange (B35) mounting configurations',
    ],
    specs: [
      { label: 'Rated Voltage', value: '415 V ±10% (3-Phase)' },
      { label: 'Rated Frequency', value: '50 Hz ±5% (60 Hz available)' },
      { label: 'Power Range', value: '0.75 kW to 75 kW (1.0 HP to 100 HP)' },
      { label: 'Pole Configurations', value: '2 Pole (3000 RPM) | 4 Pole (1500 RPM) | 6 Pole (1000 RPM)' },
      { label: 'Enclosure Rating', value: 'Totally Enclosed Fan Cooled (TEFC) — IP55' },
      { label: 'Insulation / Duty', value: 'Class F Insulation / Continuous Duty (S1)' },
      { label: 'Mounting Types', value: 'B3 (Foot), B5 (Flange), B35 (Foot-cum-Flange)' },
      { label: 'Frame Standards', value: 'IEC 60034 / IS 12615 standard metric frames (63 to 280M)' },
    ],
    specTable: {
      headers: ['Frame Size', 'Output (kW / HP)', 'Speed (RPM)', 'Current (A at 415V)', 'Efficiency (%)', 'Power Factor (cos φ)', 'Mounting'],
      rows: [
        ['80M', '0.75 kW / 1.0 HP', '1420 RPM (4P)', '1.8 A', '82.5%', '0.76', 'B3 Foot / B5 Flange'],
        ['90L', '1.5 kW / 2.0 HP', '1430 RPM (4P)', '3.4 A', '85.3%', '0.78', 'B3 Foot / B5 Flange'],
        ['100L', '2.2 kW / 3.0 HP', '1435 RPM (4P)', '4.8 A', '86.7%', '0.80', 'B3 Foot / B5 Flange'],
        ['112M', '3.7 kW / 5.0 HP', '1440 RPM (4P)', '7.6 A', '88.3%', '0.82', 'B3 Foot / B5 Flange'],
        ['132M', '7.5 kW / 10.0 HP', '1450 RPM (4P)', '14.8 A', '90.4%', '0.84', 'B3 Foot / B5 Flange'],
        ['160L', '15.0 kW / 20.0 HP', '1465 RPM (4P)', '28.5 A', '92.1%', '0.86', 'B3 Foot / B5 Flange'],
      ]
    },
    applications: ['Hydraulic Power Pack Drives', 'Mechanical Power Press Flywheels', 'Air Compressors & Blowers', 'Industrial Water & Chemical Pumps', 'Heavy Workshop Machine Drives']
  },

  /* ══════════════════════════════════════════════════════════════
     CATEGORY: RAW MATERIALS & METAL SCRAP TRADING
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'scrap-101',
    category: 'scrap_trading',
    categoryName: 'Raw Materials & Scrap Trading',
    badge: 'Direct Mill Supply',
    tag: 'Certified Scrap Lots',
    title: 'Categorized Non-Ferrous & Ferrous Metal Scrap',
    subtitle: 'Wholesale Certified Metal Scrap Supply — Copper, Brass, Aluminium, SS & MS',
    image: `${process.env.PUBLIC_URL}/products/metal_scrap_trading.png`,
    shortDesc: 'Certified wholesale supplies of segregated non-ferrous and ferrous industrial metal scrap for melting furnaces, rolling mills, and foundries across India.',
    fullDesc: `AptisMech Corporation LLP is a trusted importer, supplier, and trader of categorized, high-purity non-ferrous and ferrous industrial metal scrap.

Supplying foundries, steel melting induction furnaces, recycling plants, and extrusion mills across India with certified chemical purity, zero contamination, and accurate weighbridge documentation.`,
    features: [
      'Copper Scrap: Millberry Wire Scrap (99.9% Cu), Berry/Birch Copper, Copper Tube Scrap, Heavy Copper Busbar Scrap',
      'Aluminium Scrap: 6063 Extrusion Scrap, Tense/Tabor Cast Aluminium, Aluminium Sheet Scrap (Taint/Tabor), Wire Scrap',
      'Stainless Steel Scrap: SS 304 Scrap (8% Ni, 18% Cr), SS 316 Scrap (Molybdenum bearing), SS 430 Magnetic Scrap',
      'Brass Scrap: Brass Rod Scrap (Honey), Brass Sheet Scrap, Brass Pipe Scrap, Mixed Brass Scrap',
      'Accurate weighbridge measurements, certified material sortation, and pan-India logistics',
    ],
    specs: [
      { label: 'Core Categories', value: 'Mild Steel (MS), Stainless Steel (SS304/316), Aluminium, Copper, Brass' },
      { label: 'Supply Forms', value: 'Bundles, Loose Segregated Scrap, Cut Pieces, Heavy Melting Scrap (HMS 1/2)' },
      { label: 'Testing & Purity', value: 'Spectrometer verified purity and grade segregation' },
      { label: 'Logistics', value: 'Wholesale lot supply with fast dispatch and transparent weighing' },
    ],
    specTable: {
      headers: ['Scrap Category', 'Key Materials & Specifications'],
      rows: [
        ['MS Scrap (Mild Steel)', 'Structural Scrap, Cut Pieces, Heavy Machine Scrap, Fabrication Scrap'],
        ['SS Scrap (Stainless Steel)', 'SS 304 / 316 Scrap, Sheet & Plate Scrap, Pipe & Tube Scrap, Cutlery Scrap'],
        ['Aluminium Scrap', 'Extrusion Scrap, Sheet & Plate Scrap, Cast Aluminium Scrap, Cable & Wire Scrap'],
        ['Copper Scrap', 'Copper Wire Scrap (Millberry), Copper Tube Scrap, Copper Sheet Scrap, Electrical Scrap'],
        ['Brass Scrap', 'Brass Rod Scrap, Brass Sheet Scrap, Brass Pipe Scrap, Mixed Brass Scrap'],
      ]
    },
    applications: ['Foundries & Smelters', 'Metal Recycling Plants', 'Steel Melting Induction Furnaces', 'Extrusion & Billet Manufacturers', 'Export & Domestic Metal Trading']
  }
];

/* ── Categories Configuration with Accurate Metadata & Counts ── */
export const categoriesConfig = [
  {
    id: 'heavy_machinery',
    name: 'Heavy Industrial Machinery & Workshop Equipment',
    badge: 'Fabrication & Utility Equipment',
    icon: '🏗️',
    desc: 'Multi-Functional Ironworkers, C-Type Hydraulic Punching, H-Frame Hydraulic Presses, Workshop Utility Presses, Busbar Bending, Heavy Radial Drills & Vertical Milling Machines.'
  },
  {
    id: 'raw_materials',
    name: 'Industrial Raw Materials (CRC, MS & SS Coils)',
    badge: 'Prime Coils & Sheets',
    icon: '🏭',
    desc: 'High-grade Cold Rolled (CRCA) Sheets, Structural Mild Steel (MS) Coils, and Corrosion-Resistant Stainless Steel (SS 304/316) Coils & Slit Strips.'
  },
  {
    id: 'hardware_spares',
    name: 'Precision Components, Mounts & Hardware',
    badge: 'Machined Spares & Fasteners',
    icon: '⚙️',
    desc: 'Custom Mounting Base Plates, Knurled Nuts, Shaft Collars, Clevis Linkages, Drop-Forged Eye Bolts, Hydraulic Reducing Adapters & Round Flanges.'
  },
  {
    id: 'cnc_motors',
    name: 'Industrial Electric Motors & Tooling',
    badge: 'IP55 Motors & Tooling',
    icon: '⚡',
    desc: 'Heavy-duty 415V Three-Phase Induction Motors (IP55) and Premium CVD/PVD Coated Indexable Tungsten Carbide Turning Inserts.'
  },
  {
    id: 'scrap_trading',
    name: 'Categorized Metal Scrap Solutions',
    badge: 'Certified Metal Supply',
    icon: '♻️',
    desc: 'Wholesale segregated industrial scrap lots — Millberry Copper, Honey Brass, Extrusion Aluminium, Stainless Steel (SS304/316) & Heavy Melting Steel (HMS).'
  },
];
