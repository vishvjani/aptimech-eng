/* ================================================================
   APTISMECH CORPORATION LLP — PRODUCT CATALOGUE DATA
   Source: website.pdf & Official Technical Specification Documents
   ================================================================ */

export const productsData = [
  /* ══════════════════════════════════════════════════════════════
     CATEGORY: HEAVY FABRICATION MACHINERY (Pages 1–9)
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'mach-101',
    category: 'heavy_machinery',
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'Multi-Station',
    tag: 'Mechanical Series',
    title: 'Mechanical Multi-Functional Punching & Shearing Machine',
    subtitle: 'All-In-One Iron Worker — Punching, Shearing, Notching & Cutting',
    image: `${process.env.PUBLIC_URL}/products/multi_functional_machine.jpg`,
    pdfPage: 1,
    shortDesc: 'A versatile heavy-duty mechanical machine engineered to handle plate shearing, punching, angle/bar cutting, and notch-making in a single compact unit.',
    fullDesc: `A versatile heavy-duty mechanical machine engineered to handle multiple metal fabrication operations including plate shearing, punching, bar cutting, and notch-making in a single compact unit.

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
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'Open Throat',
    tag: 'Hydraulic Series',
    title: 'Hydraulic C-Type Punching Machine',
    subtitle: 'High-Tonnage Open Throat C-Frame Punching Operation',
    image: `${process.env.PUBLIC_URL}/products/c_type_punching_machine.png`,
    pdfPage: 2,
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
    categoryName: 'Heavy Fabrication Machinery',
    badge: '4-Column Rigid',
    tag: 'Hydraulic Series',
    title: 'Hydraulic H-Type Press Machine',
    subtitle: 'Four-Column Straight-Side Heavy Press for Deep Drawing & Moulding',
    image: `${process.env.PUBLIC_URL}/products/h_type_hydraulic_press.jpg`,
    pdfPage: 3,
    shortDesc: 'A heavy-duty four-column H-type hydraulic press engineered for high-precision deep drawing, forming, moulding, and heavy industrial pressing with uniform load distribution.',
    fullDesc: `A heavy-duty four-column H-type hydraulic press engineered for high-precision deep drawing, forming, moulding, and heavy industrial pressing applications with uniform load distribution.

Robust H-frame structure ensures maximum rigidity and minimal frame deflection under full tonnage. Features a precision-guided moving ram for exceptional parallel accuracy, and an independent hydraulic power pack with pressure gauge and adjustable tonnage controls.`,
    features: [
      'Robust H-frame structure ensuring maximum rigidity and minimal deflection under full tonnage',
      'Precision-guided moving ram for exceptional parallel platen accuracy',
      'Independent hydraulic power pack with pressure gauge and adjustable tonnage controls',
      'T-slotted heavy bolster plate for fast and secure die clamping',
      'Uniform pressing force distribution across large bed surface',
      'Integrated pressure relief valve and emergency stop safety circuit',
    ],
    specs: [
      { label: 'Structure', value: 'H-Type Fabricated Heavy Steel Structure' },
      { label: 'Hydraulics', value: 'Motorized hydraulic power unit with control valves' },
      { label: 'Bed Setup', value: 'T-slotted heavy bolster plate for secure die clamping' },
      { label: 'Capacity Range', value: '20 Tons to 500 Tons' },
      { label: 'Operating Pressure', value: 'Up to 315 Bar' },
      { label: 'Ram Guidance', value: 'Hardened Chrome-Plated Columns with Bronze Bushings' },
    ],
    applications: ['Metal Forming', 'Deep Drawing', 'Rubber & Plastic Moulding', 'Heavy Assembly Pressing', 'Industrial Component Stamping']
  },
  {
    id: 'mach-104',
    category: 'heavy_machinery',
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'Power Operated',
    tag: 'Workshop Series',
    title: 'H-Type Hydraulic Workshop Press — Power Operated',
    subtitle: 'Motorized Heavy-Duty Workshop Press with Adjustable Bolster Bed',
    image: `${process.env.PUBLIC_URL}/products/h_type_workshop_press_power.jpg`,
    pdfPage: 4,
    shortDesc: 'A motorized power-operated H-type workshop press built for general engineering maintenance, straightening, bending, and bearing insertion tasks with high speed and precision.',
    fullDesc: `A motorized power-operated H-type workshop press built for general engineering maintenance, straightening, bending, and bearing insertion tasks with high speed and precision.

Motorized hydraulic pump unit delivers quick approach and return strokes. The adjustable work table height is effortlessly operated using a winch or lifting mechanism. Equipped with a heavy-duty pressure gauge for accurate load monitoring during critical pressing operations.`,
    features: [
      'Motorized hydraulic pump unit delivering quick approach and return strokes',
      'Adjustable work table height using a winch or lifting mechanism',
      'Heavy-duty pressure gauge for accurate load monitoring during operation',
      'Overload relief valve integrated into the hydraulic circuit',
      'Rugged welded steel H-frame designed for lifetime workshop service',
      'Supplied with V-blocks and flat pressing plates as standard',
    ],
    specs: [
      { label: 'Operation', value: 'Motor-driven hydraulic power pack' },
      { label: 'Design', value: 'H-Frame floor model with adjustable lower bolster' },
      { label: 'Safety', value: 'Overload relief valve integrated into hydraulic circuit' },
      { label: 'Tonnage Range', value: '20T, 30T, 50T, 75T, 100T options' },
      { label: 'Work Table Adjustment', value: 'Multi-position height with cable winch' },
    ],
    applications: ['Automotive Service Garages', 'Machine Maintenance Shops', 'Straightening Shafts & Axles', 'Press-Fit Assembly Work', 'Bearing & Bushing Installation']
  },
  {
    id: 'mach-105',
    category: 'heavy_machinery',
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'Manual / Hand Pump',
    tag: 'Workshop Series',
    title: 'H-Type Manual Workshop Press',
    subtitle: 'Hand-Operated Precision Hydraulic Workshop Utility Press',
    image: `${process.env.PUBLIC_URL}/products/h_type_workshop_press_manual.png`,
    pdfPage: 5,
    shortDesc: 'A reliable hand-operated H-frame hydraulic press designed for precision pressing, bush extraction, bending, and utility jobs without requiring external electric power.',
    fullDesc: `A reliable hand-operated H-frame mechanical/hydraulic press designed for precision pressing, bush extraction, bending, and small-scale workshop utility jobs without requiring external electric power.

Hand-lever or hand-pump hydraulic operation provides tactile, fine control over pressing force. Features a compact and sturdy H-frame construction built from high-grade structural steel with movable work bed positions.`,
    features: [
      'Hand-lever or hand-pump hydraulic operation for fine tactile force control',
      'No external electric power required — 100% self-contained',
      'Compact and sturdy H-frame construction built from high-grade structural steel',
      'Movable work bed positions to accommodate various workpiece heights',
      'Dual-speed hand pump option for rapid approach and high-pressure pressing',
      'Pressure gauge with overload protection built-in',
    ],
    specs: [
      { label: 'Operation', value: 'Manual hand pump / lever mechanism' },
      { label: 'Capacity Options', value: '10T, 20T, 30T, 50T Tonnage ratings' },
      { label: 'Construction', value: 'Bolted and welded steel H-frame profile' },
      { label: 'Power Source', value: 'Manual Hydraulic (Zero Electricity Required)' },
      { label: 'Accessories', value: 'V-blocks and flat platen plates included' },
    ],
    applications: ['Tool Rooms', 'Repair Workshops', 'Bearing Fitting & Bushing Removal', 'Light Shaft Straightening', 'Vocational Training Centers']
  },
  {
    id: 'mach-106',
    category: 'heavy_machinery',
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'Specialized',
    tag: 'Electrical Machinery',
    title: 'Hydraulic Busbar Bending & Cutting Machines (Manual & NC)',
    subtitle: 'Dedicated Copper & Aluminium Busbar Processing Machinery',
    image: `${process.env.PUBLIC_URL}/products/reducing_adapters_fittings.jpg`,
    pdfPage: 6,
    shortDesc: 'Specialized machinery designed for precise bending, cutting, and punching of copper and aluminium busbars used extensively in electrical switchgear and panel building.',
    fullDesc: `Specialized machinery designed for precise bending, cutting, and punching of copper and aluminium busbars used extensively in electrical switchgear and panel building.

Delivers clean, distortion-free cutting and precision radius/angle bending for copper/aluminum busbars. Available in manual and Numerical Control (NC) variations with dedicated tooling dies for rapid, high-volume production.`,
    features: [
      'Clean, distortion-free cutting and radius/angle bending for copper & aluminium busbars',
      'Available in manual and Numerical Control (NC) variations for high-volume accurate production',
      'Compact hydraulic units with dedicated tooling dies for flat and edge-wise bending',
      'Zero burr cutting blades with smooth corner radiuses',
      'Integrated angle positioning gauge for repeatable bend accuracy',
    ],
    specs: [
      { label: 'Material Compatibility', value: 'Copper and Aluminium Busbars' },
      { label: 'Control Options', value: 'Manual hydraulic or NC programmable controller' },
      { label: 'Operations', value: 'Bending, cutting, punching, and offset forming modules' },
      { label: 'Max Busbar Size', value: 'Up to 12mm thickness × 200mm width' },
      { label: 'Hydraulic Pressure', value: '700 Bar high-pressure hydraulic circuit' },
    ],
    applications: ['Electrical Panel Manufacturing', 'Switchgear Fabrication', 'Power Distribution Equipment', 'Transformer Busbars', 'Electrical Contracting']
  },
  {
    id: 'mach-107',
    category: 'heavy_machinery',
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'Precision',
    tag: 'Machine Tools',
    title: 'Imported Universal / Vertical Milling Machine',
    subtitle: 'Heavy Ribbed Melanite Cast Iron Precision Milling Machine',
    image: `${process.env.PUBLIC_URL}/products/cnc_carbide_inserts.png`,
    pdfPage: 6,
    shortDesc: 'High-precision universal / vertical milling machine imported to deliver superior machining accuracy, rigidity, and versatility for complex workpiece shaping and slotting.',
    fullDesc: `High-precision universal / vertical milling machine imported to deliver superior machining accuracy, rigidity, and versatility for complex workpiece shaping, slotting, and face milling.

Hardened and ground guide ways ensure long-term cutting accuracy and wear resistance. Features a wide speed range gearbox supporting diverse cutting tools and material types, built on a heavy ribbed Melanite cast iron column and knee that absorbs heavy cutting vibrations.`,
    features: [
      'Hardened and ground guide ways ensuring long-term cutting accuracy and wear resistance',
      'Wide speed range gearbox supporting diverse cutting tools and material types',
      'Rigid cast iron column and knee design absorbing heavy cutting vibrations',
      'Swivel milling head for angular face milling and slotting operations',
      'Power feed on longitudinal and cross axes for effortless machining',
    ],
    specs: [
      { label: 'Spindle Type', value: 'Precision-machined high RPM spindle with ISO/R8 taper' },
      { label: 'Table Size', value: 'Precision slotted work table with longitudinal/cross feeds' },
      { label: 'Build Quality', value: 'Heavy ribbed Melanite cast iron structure' },
      { label: 'Spindle Speeds', value: 'Multi-step gearbox with wide RPM range' },
      { label: 'Lubrication', value: 'One-shot centralized lubrication system' },
    ],
    applications: ['Tool and Die Making', 'Mould Manufacturing', 'General Engineering Workshops', 'Precision Component Machining', 'R&D Prototyping']
  },
  {
    id: 'mach-108',
    category: 'heavy_machinery',
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'SPM Automation',
    tag: 'Hydraulic Series',
    title: 'Hydraulic C-Type Press Machine — SPM',
    subtitle: 'Special Purpose High-Speed C-Frame Hydraulic Press (10T to 250T)',
    image: `${process.env.PUBLIC_URL}/products/c_type_press_spm.png`,
    pdfPage: 7,
    shortDesc: 'A Special Purpose Machine (SPM) built on a C-frame hydraulic platform, custom-engineered for dedicated, high-speed repetitive manufacturing processes.',
    fullDesc: `A Special Purpose Machine (SPM) built on a C-frame hydraulic platform, custom-engineered for dedicated, high-speed repetitive manufacturing processes with automated or semi-automated cycles.

Custom-engineered tooling and fixture integration for specific component assembly or forming. Fast cycle times designed for mass production environments with advanced safety interlocks and PLC-based control integration. Complete technical configurations available from 10 TONS up to 250 TONS.`,
    features: [
      'Custom-engineered tooling and fixture integration for specific component assembly or forming',
      'Fast cycle times designed for mass production environments',
      'Advanced safety interlocks and PLC-based control integration',
      'Available across full tonnage spectrum from 10 Tons to 250 Tons',
      'Variable stroke adjustment from 6mm to 150mm',
      'Precision-machined crankshaft, bolster bed, and ram guide ways',
    ],
    specs: [
      { label: 'Machine Type', value: 'Special Purpose Hydraulic C-Press (SPM)' },
      { label: 'Control System', value: 'PLC-based automation with sensor feedback' },
      { label: 'Customization', value: 'Tailored stroke, daylight, and table dimensions' },
      { label: 'Tonnage Ratings', value: '10T, 20T, 30T, 50T, 80T, 100T, 150T, 200T, 250T' },
      { label: 'Bed Sizes', value: '450×250mm up to 900×700mm' },
      { label: 'Power Required', value: '1 HP up to 25 HP (1440 RPM)' },
      { label: 'Approx Weight', value: '630 kg up to 9,500 kg' },
    ],
    specTable: {
      headers: ['Technical Parameter', '10T', '20T', '30T', '50T', '80T', '100T', '150T', '200T', '250T'],
      rows: [
        ['CRANK SHAFT DIA (mm)', '57', '75', '82', '100', '115', '125', '150', '175', '200'],
        ['BED SIZE - LR x FB (mm)', '450x250', '500x375', '550x375', '750x500', '800x550', '900x650', '900x650', '900x700', '900x700'],
        ['STROKE ADJUSTABLE (mm)', '6-50', '6-75', '6-75', '6-100', '12-115', '12-125', '12-150', '12-150', '12-150'],
        ['DEPTH OF THROAT (mm)', '125', '175', '190', '250', '280', '325', '325', '350', '350'],
        ['HOLE IN RAM (mm)', '25', '32', '32', '38', '50', '50', '50', '50', '50'],
        ['SHUT HEIGHT (mm)', '200', '200', '225', '250', '288', '325', '300', '350', '350'],
        ['SLIDE ADJUSTMENT (mm)', '25', '40', '40', '50', '50', '65', '65', '65', '65'],
        ['DIST BED TO RAM (mm)', '250', '275', '300', '350', '400', '450', '450', '500', '500'],
        ['HOLE IN BED (mm)', '70', '90', '90', '100', '115', '125', '150', '150', '150'],
        ['WHEEL DIA (mm)', '455', '550', '625', '750', '900', '1000', '1,125', '1,175', '1,200'],
        ['STROKES PER MINUTE', '60', '35', '35', '35', '35', '35', '35', '30', '30'],
        ['POWER REQD (HP/RPM)', '1/1440', '2/1440', '3/1440', '5/1440', '7.5/1440', '10/1440', '15/1440', '20/1440', '25/1440'],
        ['APPROX WEIGHT (kg)', '630', '1,200', '1,450', '2,600', '3,800', '5,500', '7,500', '8,500', '9,500'],
      ]
    },
    applications: ['Automotive Ancillaries', 'Dedicated Assembly Lines', 'Mass-Production Stamping', 'Specialized Pressing', 'Appliance Part Fabrication']
  },
  {
    id: 'mach-109',
    category: 'heavy_machinery',
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'CNC Synchro',
    tag: 'Bending Series',
    title: 'CNC Front Cylinder Hydraulic Press Brake Machine',
    subtitle: 'Front-Cylinder Synchronized High-Accuracy Press Brake (40T to 120T)',
    image: `${process.env.PUBLIC_URL}/products/cnc_hydraulic_press_brake.png`,
    pdfPage: 8,
    shortDesc: 'An advanced CNC hydraulic press brake featuring front-cylinder design for superior synchronization, high bending accuracy, and multi-axis back gauge positioning.',
    fullDesc: `An advanced CNC hydraulic press brake featuring front-cylinder design for superior synchronization, high bending accuracy, and multi-axis back gauge positioning.

CNC graphical controller for intuitive angle programming and automatic depth calculation. Rigid synchro-hydraulic design ensures parallel ram movement across the entire bending length. Quick-clamp tooling system for rapid punch and die changes.`,
    features: [
      'CNC graphical controller for intuitive angle programming and automatic depth calculation',
      'Rigid synchro-hydraulic design ensuring parallel ram movement across entire bending length',
      'Quick-clamp tooling system for rapid punch and die changes',
      'Front-mounted dual hydraulic cylinders delivering balanced bending force',
      'Multi-axis precision back gauge with ball screw and linear guideway mechanism',
      'Motorized auto-crowning and deflection compensation on lower table',
    ],
    specs: [
      { label: 'Cylinder Configuration', value: 'Front-mounted dual hydraulic cylinders' },
      { label: 'Controller', value: 'Advanced CNC touch screen control system' },
      { label: 'Tonnage Range', value: '40T, 50T, 60T, 80T, 100T, 120T models' },
      { label: 'Bending Length (M.S.)', value: '1270mm up to 3300mm' },
      { label: 'Plate Thickness (M.S.)', value: '2mm to 12mm' },
      { label: 'Table Width', value: '150mm to 200mm' },
      { label: 'Motor Power', value: '5 HP to 12.5 HP' },
    ],
    specTable: {
      headers: ['Tonnage', 'Bending Capacity (MS)', 'Table Width', 'Clear Distance', 'Ram Stroke', 'Open Height', 'Depth Throat', 'Power HP', 'Dimensions (LxWxH)'],
      rows: [
        ['40T', '1270 x 4 mm', '150 mm', '900 mm', '100 mm', '250 mm', '200 mm', '5 HP', '1400x1050x1900 mm'],
        ['40T', '1525 x 3 mm', '150 mm', '1100 mm', '100 mm', '250 mm', '200 mm', '5 HP', '1700x1050x1900 mm'],
        ['40T', '2540 x 2 mm', '150 mm', '2000 mm', '100 mm', '250 mm', '200 mm', '5 HP', '2700x1050x1900 mm'],
        ['50T', '1525 x 4 mm', '175 mm', '1100 mm', '125 mm', '250 mm', '200 mm', '5 HP', '1700x1050x1900 mm'],
        ['50T', '2030 x 3 mm', '175 mm', '1550 mm', '125 mm', '250 mm', '200 mm', '5 HP', '2200x1050x1900 mm'],
        ['60T', '1270 x 6 mm', '175 mm', '900 mm', '125 mm', '330 mm', '200 mm', '5 HP', '1400x1200x2000 mm'],
        ['60T', '2030 x 4 mm', '175 mm', '1550 mm', '125 mm', '330 mm', '200 mm', '5 HP', '2200x1200x2000 mm'],
        ['60T', '2540 x 3 mm', '175 mm', '2000 mm', '125 mm', '330 mm', '200 mm', '5 HP', '2700x1200x2000 mm'],
        ['60T', '3125 x 2 mm', '175 mm', '2500 mm', '125 mm', '330 mm', '200 mm', '5 HP', '3300x1200x2000 mm'],
        ['80T', '1270 x 8 mm', '200 mm', '900 mm', '150 mm', '330 mm', '300 mm', '7.5 HP', '1400x1500x2200 mm'],
        ['80T', '1525 x 6 mm', '200 mm', '1100 mm', '150 mm', '330 mm', '300 mm', '7.5 HP', '1700x1500x2200 mm'],
        ['80T', '2540 x 4 mm', '200 mm', '2000 mm', '150 mm', '330 mm', '300 mm', '7.5 HP', '2700x1500x2200 mm'],
        ['80T', '3125 x 3 mm', '200 mm', '2500 mm', '150 mm', '330 mm', '300 mm', '7.5 HP', '3300x1500x2200 mm'],
        ['100T', '1270 x 10 mm', '200 mm', '900 mm', '150 mm', '330 mm', '300 mm', '10 HP', '1400x1500x2300 mm'],
        ['100T', '1525 x 8 mm', '200 mm', '1100 mm', '150 mm', '330 mm', '300 mm', '10 HP', '1700x1500x2300 mm'],
        ['100T', '2030 x 6 mm', '200 mm', '1550 mm', '150 mm', '330 mm', '300 mm', '10 HP', '2200x1600x2300 mm'],
        ['100T', '3125 x 4 mm', '200 mm', '2500 mm', '150 mm', '330 mm', '300 mm', '10 HP', '3300x1600x2300 mm'],
        ['120T', '1270 x 12 mm', '200 mm', '900 mm', '150 mm', '330 mm', '300 mm', '12.5 HP', '1400x1700x2300 mm'],
        ['120T', '1525 x 10 mm', '200 mm', '1100 mm', '150 mm', '330 mm', '300 mm', '12.5 HP', '1700x1700x2500 mm'],
        ['120T', '2030 x 8 mm', '200 mm', '1550 mm', '150 mm', '330 mm', '300 mm', '12.5 HP', '2200x1700x2800 mm'],
        ['120T', '2540 x 6 mm', '200 mm', '2000 mm', '150 mm', '330 mm', '300 mm', '12.5 HP', '2700x1700x2500 mm'],
      ]
    },
    applications: ['Sheet Metal Fabrication', 'Enclosure Manufacturing', 'Architectural Panel Bending', 'HVAC Ducting', 'Aerospace Components']
  },
  {
    id: 'mach-110',
    category: 'heavy_machinery',
    categoryName: 'Heavy Fabrication Machinery',
    badge: 'NC Guillotine',
    tag: 'Cutting Series',
    title: 'NC Hydraulic Shearing Machine',
    subtitle: 'High-Speed Precision Guillotine Shearing (1525mm to 4000mm)',
    image: `${process.env.PUBLIC_URL}/products/hydraulic_shearing_machine.png`,
    pdfPage: 9,
    shortDesc: 'A precision NC-controlled hydraulic guillotine shearing machine designed for clean, high-speed straight-line cutting of sheet metals with motorized back gauge.',
    fullDesc: `A precision NC-controlled hydraulic guillotine shearing machine designed for clean, high-speed straight-line cutting of sheet metals with motorized back gauge positioning.

NC programmable back gauge with ball screw mechanism for precise cut length accuracy. Hydraulic hold-down jacks securely clamp sheets during the cutting stroke to prevent slippage. Adjustable rake angle and blade clearance for burr-free cuts across varying sheet thicknesses.`,
    features: [
      'NC programmable back gauge with ball screw mechanism for precise cut length accuracy',
      'Hydraulic hold-down jacks securely clamp sheets during cutting stroke to prevent slippage',
      'Adjustable rake angle and blade clearance for burr-free cuts across varying sheet thicknesses',
      'High-alloy chromium-molybdenum (CrMo) 4-edge reversible tool steel blades',
      'Front sheet support arms with measuring scale and squaring arm',
      'Shadow-line lighting for accurate manual alignment and narrow blank cutting',
    ],
    specs: [
      { label: 'Control System', value: 'NC controller with digital readout for back gauge' },
      { label: 'Cutting Action', value: 'Swing beam or guillotine hydraulic shearing action' },
      { label: 'Blade Material', value: 'High-alloy chromium-molybdenum tool steel blades' },
      { label: 'Cutting Lengths', value: '1525mm, 2030mm, 2540mm, 3125mm, 4000mm' },
      { label: 'Shearing Thickness', value: '4mm up to 16mm (Mild Steel) / 2mm to 10mm (SS)' },
      { label: 'Motor Power', value: '7.5 HP up to 30 HP' },
      { label: 'Hold-Down System', value: 'Independent Hydraulic Hold-down Pistons' },
    ],
    specTable: {
      headers: ['Cutting Length', 'MS Nom/Max Angle', 'SS Nom/Max Angle', 'Rack Angle', 'Stroke/Min', 'Hold-Downs', 'Holding Force', 'Power HP', 'Blade L x W x T'],
      rows: [
        ['1525X4 MM', '4 / 6 mm', '2 / 3 mm', "1°37'", '30-15', '8', '4500 kg', '7.5 HP', '1525x75x18 mm'],
        ['2030X4 MM', '4 / 6 mm', '2 / 3 mm', "1°37'", '28-13', '11', '6200 kg', '7.5 HP', '2030x75x18 mm'],
        ['2540X4 MM', '4 / 6 mm', '2 / 3 mm', "1°37'", '30-8', '13', '8000 kg', '7.5 HP', '2540x75x18 mm'],
        ['3125X4 MM', '4 / 6 mm', '2 / 3 mm', "1°37'", '28-8', '15', '10000 kg', '10 HP', '3125x75x18 mm'],
        ['4000X4 MM', '4 / 6 mm', '2 / 3 mm', "1°37'", '22-8', '20', '12000 kg', '10 HP', '4000x75x18 mm'],
        ['1525X6 MM', '6 / 8 mm', '3 / 4 mm', "1°35'", '24-8', '8', '6500 kg', '10 HP', '1525x75x18 mm'],
        ['2030X6 MM', '6 / 8 mm', '3 / 4 mm', "1°37'", '22-7', '11', '6500 kg', '10 HP', '2030x75x18 mm'],
        ['2540X6 MM', '6 / 8 mm', '3 / 4 mm', "1°37'", '28-8', '13', '8500 kg', '15 HP', '2540x75x18 mm'],
        ['3125X6 MM', '6 / 8 mm', '3 / 4 mm', "1°15'", '24-6', '15', '10800 kg', '15 HP', '3125x75x18 mm'],
        ['4000X6 MM', '6 / 8 mm', '3 / 4 mm', "1°35'", '24-6', '20', '13600 kg', '20 HP', '4000x75x18 mm'],
        ['1525X8 MM', '8 / 10 mm', '4 / 5 mm', "1°27'", '20-10', '8', '10500 kg', '15 HP', '1525x90x20 mm'],
        ['2030X8 MM', '8 / 10 mm', '4 / 6 mm', "1°37'", '18-8', '11', '12000 kg', '15 HP', '2030x90x20 mm'],
        ['2540X8 MM', '8 / 10 mm', '4 / 5 mm', "1°37'", '28-8', '13', '16500 kg', '15 HP', '2540x90x20 mm'],
        ['3125X8 MM', '8 / 10 mm', '4 / 5 mm', "1°37'", '20-8', '15', '18500 kg', '20 HP', '3125x90x20 mm'],
        ['4000X8 MM', '8 / 10 mm', '4 / 5 mm', "1°37'", '20-8', '20', '23000 kg', '30 HP', '4000x90x20 mm'],
        ['2540X10 MM', '10 / 13 mm', '5 / 16 mm', "1°37'", '28-8', '13', '17500 kg', '15 HP', '2540x90x20 mm'],
        ['3125X10 MM', '10 / 13 mm', '6 / 8 mm', "1°37'", '18-6', '20', '25000 kg', '30 HP', '4000x90x20 mm'],
        ['2540X13 MM', '13 / 16 mm', '6 / 16 mm', "1°37'", '22-10', '16', '37000 kg', '25 HP', '3125x100x25 mm'],
        ['3125X16 MM', '16 / 18 mm', '8 / 10 mm', "1°37'", '12-6', '16', '43500 kg', '30 HP', '3125x100x25 mm'],
      ]
    },
    applications: ['Sheet Metal Processing Centres', 'Steel Service Centres', 'Fabrication Plants', 'General Metal Manufacturing', 'Automotive Blanking']
  },

  /* ══════════════════════════════════════════════════════════════
     CATEGORY: PRECISION HARDWARE & COMPONENTS (Pages 10–18, 20)
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'comp-201',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Micro-Tolerance',
    tag: 'Structural Spares',
    title: 'Plates & Custom Mounts (Square, Round & Heavy-Duty)',
    subtitle: 'High-Precision Machined Industrial Plates & Enclosure Covers',
    image: `${process.env.PUBLIC_URL}/products/plates_custom_mounts_1.jpg`,
    pdfPage: 10,
    shortDesc: 'High-precision industrial plates and covers designed for machinery, structural enclosures, and specialized assembly interfaces.',
    fullDesc: `High-precision industrial plates and covers designed for machinery, structural enclosures, and specialized assembly interfaces.

Manufactured with tight tolerances for exact fitment and alignment. Available in clean brushed, smooth milled, or precision-faced finishes. Offers exceptional strength, rigidity, and resistance to deformation under cyclic mechanical loads. Available in custom dimensions, hole patterns, and thicknesses as per exact project requirements.`,
    features: [
      'Square Cover Plates: Features 4-hole or multi-hole corner configuration with countersunk or standard bolt holes',
      'Round Cover Plates: Precision-turned circular plates designed for sealing or mounting applications',
      'Heavy-Duty Mounting Plates: Integrated with multiple threaded ports, pilot holes, and counterbores for complex SPM setups',
      'High-Precision Machining: Tight tolerances for exact fitment and alignment',
      'Surface Finish: Clean brushed, smooth milled, or precision-faced finishes',
      'Customization: Fully tailored dimensions, hole PCDs, and thicknesses',
    ],
    specs: [
      { label: 'Plate Varieties', value: 'Square Cover Plates, Round Cover Plates, Heavy-Duty Mounting Plates' },
      { label: 'Hole Configurations', value: 'Countersunk, Counterbored, Threaded Ports, Pilot Holes' },
      { label: 'Materials', value: 'Mild Steel (MS), Stainless Steel (SS304/316), High-Tensile Alloy' },
      { label: 'Surface Finish', value: 'Smooth Milled, Ground Faced, Black Oxide, Zinc Plated' },
    ],
    applications: ['Machinery Housings & Gearboxes', 'SPM and Jig Fixtures', 'Industrial Enclosures', 'Fluid Power Manifolds', 'Structural Equipment Beds']
  },
  {
    id: 'comp-202',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Fasteners & Turnings',
    tag: 'Hardware Catalog',
    title: 'Fasteners, Knurled Nuts & Precision Machine Spares',
    subtitle: 'Knurled Nuts, SPM Cover Nuts, Guide Pillars, Dowel Pins & Shafts',
    image: `${process.env.PUBLIC_URL}/products/knurled_nuts_fasteners.jpg`,
    pdfPage: 12,
    shortDesc: 'Essential precision hardware components engineered for secure fastening, alignment, and smooth operation in industrial machinery.',
    fullDesc: `Essential precision hardware components engineered for secure fastening, alignment, and smooth operation in industrial machinery.

High strength & durability built to withstand rigorous operational stress and frequent handling. Precision threading with clean, uniform threads for smooth tightening and secure retention. Available in multiple surface finishes to prevent rust and wear.`,
    features: [
      'Knurled Nuts: Straight, Thin Type, Step, Long, Flange, and Internal Thread Knurled Nuts for easy manual or tool-assisted gripping',
      'SPM Cover Nuts: Dome Cover Nuts, High Dome, Acorn, and Closed/Open-End Cap Nuts for bolt end protection and clean aesthetics',
      'Precision Parts: Precision Shafts, Shoulder Bolts, Dowel Pins, Bushings, Spacers, Guide Pillars, Ejector Pins, Locating Pins, Round Nuts, Threaded Inserts, and Ball Plungers',
      'High Tensile Strength & Fatigue Resistance under cyclic machine vibration',
      'Corrosion Resistance: Natural, Passivated, Black Phosphated, Zinc Plated',
    ],
    specs: [
      { label: 'Thread Standards', value: 'Metric (M3–M36), BSW, UNC, UNF Precision Threads' },
      { label: 'Material Options', value: 'Mild Steel (Black / Zinc Plated), Stainless Steel (Natural / Passivated), Brass' },
      { label: 'Specialty Parts', value: 'Hardened Dowel Pins, Shoulder Screws, Guide Pillars, Ejector Pins' },
      { label: 'Hardness Grades', value: 'Case Hardened, Through Hardened (HRC 45–60 options)' },
    ],
    applications: ['Die & Mould Assemblies', 'SPM Automation Fixtures', 'Machine Tool Enclosures', 'Automotive Component Fastening', 'Precision Instrumentation']
  },
  {
    id: 'comp-203',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Heavy Structural',
    tag: 'Hardware Catalog',
    title: 'Industrial Structural Brackets (L, U, Corner, T, Clevis & Box)',
    subtitle: 'Heavy-Duty Rigid Support & Mounting Brackets for Machinery & Piping',
    image: `${process.env.PUBLIC_URL}/products/industrial_brackets.jpg`,
    pdfPage: 13,
    shortDesc: 'Heavy-duty structural brackets designed to provide rigid support, alignment, and secure mounting for frames, motors, and piping systems.',
    fullDesc: `Heavy-duty structural brackets designed to provide rigid support, alignment, and secure mounting for frames, motors, and piping systems.

Heavy-duty load bearing engineered to support substantial weight and absorb mechanical vibrations. Versatile mounting features slotted, pre-drilled, or gusset-reinforced holes for flexible and secure installation. Durable build with high structural integrity, clean edges, and robust welding.`,
    features: [
      'Comprehensive Variations: L Brackets, Triangle Brackets, U Brackets, Corner Brackets, T Brackets, Clevis Brackets, Z Brackets, Box Brackets, Slotted Brackets, Mounting Brackets, Pipe/Clamp Brackets, and Heavy-Duty Gusset Brackets',
      'High load bearing capacity engineered to absorb severe dynamic vibrations',
      'Precision laser-cut and CNC press-brake formed geometries',
      'Slotted and elongated hole patterns for effortless on-site alignment adjustment',
      'Rust-preventive primer, powder coat, or hot-dip galvanized finishes',
    ],
    specs: [
      { label: 'Bracket Types', value: 'L, Triangle, U, Corner, T, Clevis, Z, Box, Slotted, Pipe/Clamp, Heavy-Duty' },
      { label: 'Material Thickness', value: '2mm to 16mm High-Grade Structural Steel' },
      { label: 'Mounting Style', value: 'Pre-drilled, Slotted, Counterbored, Gusset Reinforced' },
      { label: 'Finishes', value: 'Raw Steel, Zinc Plated, Powder Coated, Hot-Dip Galvanized' },
    ],
    applications: ['Structural Framing & Assembly Lines', 'Machine Tool Builds & Automation Setups', 'Motor & Gearbox Mountings', 'Pipe Routing & Equipment Anchoring']
  },
  {
    id: 'comp-204',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'High Pressure',
    tag: 'Hydraulic & Fluid',
    title: 'Reducing Adapters & Pipe Fittings',
    subtitle: 'Precision Threaded Transition Fittings for Hydraulic & Fluid Pipelines',
    image: `${process.env.PUBLIC_URL}/products/reducing_adapters_fittings.jpg`,
    pdfPage: 14,
    shortDesc: 'High-performance transition fittings designed to connect pipes, tubes, and hoses of varying sizes and thread standards seamlessly.',
    fullDesc: `High-performance transition fittings designed to connect pipes, tubes, and hoses of varying sizes and thread standards seamlessly.

Leak-proof seal with precision-machined threads (BSP, NPT, Metric, JIC, ORFS) ensuring tight, secure seal under intense pressure. Built to safely handle demanding industrial fluid, gas, and hydraulic applications. Premium metallic composition prevents degradation in harsh chemical or moisture-rich environments.`,
    features: [
      'Reducing Nipples & Bushings: Hex, Square, Cone, Parallel, Long, and Stepped variations',
      'Couplings & Unions: Reducing couplings, sockets, and unions for flexible pipeline modifications',
      'Specialty Adapters: Tube OD, Compression, Hydraulic, Metric, and Flare reducing adapters',
      'Precision Machined Threads: BSP, BSPT, NPT, Metric, JIC, ORFS thread profiles',
      'High-pressure rating capable of handling hydraulic circuits up to 400 Bar',
    ],
    specs: [
      { label: 'Thread Standards', value: 'BSP, BSPT, NPT, Metric (M), JIC 37°, ORFS' },
      { label: 'Fittings Range', value: 'Hex Nipples, Reducing Bushings, Sockets, Unions, Flange Adapters' },
      { label: 'Pressure Rating', value: 'High Pressure (Up to 400 Bar / 6000 PSI)' },
      { label: 'Material Grades', value: 'Forged Carbon Steel, Stainless Steel (SS304/SS316), Brass' },
    ],
    applications: ['Hydraulic Fluid Lines', 'Pneumatic Systems', 'Chemical Processing Plants', 'High-Pressure Oil & Gas Lines', 'Machine Tool Lubrication']
  },
  {
    id: 'comp-205',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Precision Bore',
    tag: 'Shaft Accessories',
    title: 'SPM Shaft Collars (Split & Solid Design)',
    subtitle: 'Precision-Engineered Split Collars for Shaft Positioning & Mechanical Stops',
    image: `${process.env.PUBLIC_URL}/products/spm_collars.jpg`,
    pdfPage: 15,
    shortDesc: 'Precision-engineered SPM collars designed for secure component positioning, bearing-face halting, and mechanical stop applications on rotating shafts.',
    fullDesc: `Precision-engineered SPM collars designed for secure component positioning, bearing-face halting, and mechanical stop applications on rotating shafts.

Precision machined to ensure a true, concentric bore for uniform clamping power without marring or scoring the shaft. High clamping strength evenly distributes holding power around the circumference using high-tensile socket head cap screws. Split-design allows for quick installation and adjustment without dismantling entire assemblies.`,
    features: [
      'Precision Machined: Ensures a true concentric bore for uniform clamping power without shaft damage',
      'High Clamping Strength: Even holding force distribution via high-tensile socket head cap screws',
      'Split-Design Architecture: Allows rapid installation and relocation without dismantling shafts',
      'Available in Single-Split, Double-Split, and Solid Set-Screw variations',
      'Fine micro-tolerance bore diameter for tight shaft slip-fit',
    ],
    specs: [
      { label: 'Bore Diameter (d)', value: 'Customizable from Ø6mm to Ø150mm as per shaft size' },
      { label: 'Design Styles', value: 'One-Piece (Single Split), Two-Piece (Double Split), Threaded Bore' },
      { label: 'Fasteners Included', value: 'High-Tensile Grade 12.9 Socket Head Cap Screws' },
      { label: 'Materials Available', value: 'Mild Steel (Black), Zinc Plated, Stainless Steel, Black Oxide Finish' },
    ],
    applications: ['Rotating Machinery Shafts', 'Conveyor Guide Rails', 'Motor Mount Positioning', 'Linear Actuator Mechanical Stops', 'Bearing Pre-Load Collars']
  },
  {
    id: 'comp-206',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'High Shear',
    tag: 'Linkages & Joints',
    title: 'Clevis Ends, U Hooks & Clevis Pins',
    subtitle: 'Robust Linkage Components for Pivoting, Steering & Motion Transfer',
    image: `${process.env.PUBLIC_URL}/products/clevis_ends_hooks_pins.jpg`,
    pdfPage: 16,
    shortDesc: 'Robust linkage components designed for pivoting, motion transfer, and mechanical connection systems.',
    fullDesc: `Robust linkage components designed for pivoting, motion transfer, and mechanical connection systems.

Secure articulation allows smooth angular movement and load transfer in mechanical linkages. High shear strength pins and hooks manufactured from high-grade materials prevent bending or shearing under cyclic shock loads. Available with matching pins, washers, and R-clips/split pins for fast, secure deployment.`,
    features: [
      'U Hooks (Clevis Ends): Designed for high-load tension linkage with precision pin hole diameters',
      'Clevis Pins: Available with R-Clip, Hex Head, and Plain variations for secure locking',
      'High Shear Strength: Precision-turned alloy steel pins resisting fatigue and cyclic wear',
      'Smooth Articulation: Low friction rotational movement for steering and cylinder linkages',
      'Complete Assembly: Ready-to-install kits with clevis fork, pin, and retaining clip',
    ],
    specs: [
      { label: 'Product Variations', value: 'U Hooks (Clevis Forks), Clevis Pins (R-Clip, Hex Head, Plain)' },
      { label: 'Thread Connections', value: 'Female/Male Metric & Imperial Linkage Threads' },
      { label: 'Pin Diameters', value: 'Ø5mm to Ø50mm Precision Ground' },
      { label: 'Material & Plating', value: 'Forged Steel, Stainless Steel, Clear/Yellow Zinc Passivated' },
    ],
    applications: ['Mechanical Linkage Systems', 'Hydraulic/Pneumatic Cylinder Rod Ends', 'Steering Mechanisms', 'Trailer Hitches', 'Agricultural & Construction Machinery']
  },
  {
    id: 'comp-207',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Certified Rigging',
    tag: 'Lifting & Bushings',
    title: 'Eye Bolts & Sleeve Bushings',
    subtitle: 'Heavy Industrial Forged Eye Bolts & Friction-Reduction Sleeve Bushings',
    image: `${process.env.PUBLIC_URL}/products/eye_bolts_lifting.jpg`,
    pdfPage: 17,
    shortDesc: 'Safe lifting solutions and friction-reduction bushings built for heavy industrial lifting and moving machinery parts.',
    fullDesc: `Safe lifting solutions and friction-reduction bushings built for heavy industrial lifting and moving machinery parts.

Eye Bolts: Designed for safe lifting, hoisting, and rigging. Built with high-tensile forged steel to provide a secure anchorage point with high load capacities.
Sleeve Bushings: Engineered to reduce friction, minimize wear, and ensure smooth linear or rotational motion between moving parts.`,
    features: [
      'Eye Bolt Types: Shoulder Eye Bolt, Plain Eye Bolt, Eye Bolt with Nut, Forged Eye Bolt, Swivel Eye Bolt, and Long Shank Eye Bolt',
      'Sleeve Bushing Types: Plain, Self-Lubricating (Oilless/Graphite), Flanged, Split, Oil Grooved, and Stepped Bushings',
      'Forged High-Tensile Construction for certified rigging and overhead crane lifting',
      'Bushing Materials: Bronze, Phosphor Bronze, Case Hardened Steel, Stainless Steel, Sintered Bronze',
      'High load carrying capacity and superior wear resistance under extreme pressure',
    ],
    specs: [
      { label: 'Eye Bolt Thread Sizes', value: 'M6 to M48 (Shoulder, Plain, Swivel, Long Shank)' },
      { label: 'Bushing Types', value: 'Plain, Flanged, Oil Grooved, Self-Lubricating Graphite Bushings' },
      { label: 'Bushing Materials', value: 'Phosphor Bronze (PB1/PB2), Sintered Bronze, En31 Case Hardened' },
      { label: 'Load Certification', value: 'Tested for Rated WLL (Working Load Limit)' },
    ],
    applications: ['Crane Hoisting & Equipment Rigging', 'Heavy Machinery Bearing Assemblies', 'Automotive Linkages & Pivots', 'Hydraulic Press Ram Guidance']
  },
  {
    id: 'comp-208',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Industrial Piping',
    tag: 'Connectors & Clamps',
    title: 'Metal Connectors, MS Nipples & U-Bolts',
    subtitle: 'Fluid Power Connectors, Threaded MS Pipe Nipples (1/4" to 2" NB) & U-Bolts',
    image: `${process.env.PUBLIC_URL}/products/ms_nipples_connectors.jpg`,
    pdfPage: 18,
    shortDesc: 'A comprehensive suite of industrial connection elements designed for fluid power, electrical routing, structural clamping, and piping networks.',
    fullDesc: `A comprehensive suite of industrial connection elements designed for fluid power, electrical routing, structural clamping, and piping networks.

MS Nipples: Short lengths of mild steel pipe with male threads on both ends (BSP/NPT), offering excellent machinability, weldability, and high-pressure suitability. Available in sizes from 1/4" to 2" NB.
U-Bolts: Formed for a strong hold and secure fit on pipes, tubes, and hoses with corrosion-resistant finishes.`,
    features: [
      'MS Nipples: Short lengths of mild steel pipe with precision male threads on both ends (BSP/NPT), sizes 1/4" to 2" NB',
      'U-Bolt Varieties: Standard, Square Bend, Round Bend, Long Leg, Offset, and V-Type U-Bolts with nuts and backing plates',
      'Industrial Connectors: Pipe, Hose, Hydraulic, Electrical (Cable Glands/EMT), Flange, and Structural Turnbuckles',
      'High pressure capability and excellent weldability for pipeline integration',
      'Available in zinc plated, hot-dip galvanized, or raw black finish',
    ],
    specs: [
      { label: 'MS Nipple Sizes', value: '1/4" NB to 2" NB (Length: Close, 2", 3", 4", 6", Custom)' },
      { label: 'U-Bolt Configurations', value: 'Standard Round Bend, Square Bend, Long Leg, V-Type' },
      { label: 'Threading Options', value: 'BSP, BSPT, NPT, Metric Male Threading' },
      { label: 'Connector Categories', value: 'Hydraulic Hose Fittings, Beam Clamps, Flange Adapters, Turnbuckles' },
    ],
    applications: ['Plumbing & Piping Networks', 'Water Supply & Hydraulic Lines', 'Oil & Gas Industry', 'Heating & Cooling Systems', 'Electrical Conduit Routing & Pipe Clamping']
  },
  {
    id: 'comp-209',
    category: 'hardware_spares',
    categoryName: 'Precision Components & Spares',
    badge: 'Precision Machined',
    tag: 'Flanges & Rings',
    title: 'Industrial Round Flanges & Machined Rings',
    subtitle: 'Heavy-Duty Circular Steel Flanges with Symmetrical Bolt PCD Circle',
    image: `${process.env.PUBLIC_URL}/products/machined_round_flange.jpg`,
    pdfPage: 20,
    shortDesc: 'A heavy-duty circular steel flange featuring a uniform multi-hole bolt circle and a central bored aperture, built for piping and structural mating.',
    fullDesc: `A heavy-duty circular steel flange featuring a uniform multi-hole bolt circle and a central bored aperture, built for piping, structural joining, or mechanical mating applications.

Forged or machined from high-strength steel to handle heavy structural and fluid-handling demands. Uniformly spaced bolt holes ensure even pressure distribution and secure fastening. Smoothly turned faces and bore edges designed for reliable gasket sealing or close-tolerance mechanical fitting.`,
    features: [
      'Circular flange with symmetric bolt hole circle (PCD) and central through-bore',
      'Forged or machined from high-strength steel for structural and pressure duty',
      'Uniform bolt spacing ensures even gasket compression and zero leakages',
      'Smoothly turned faces and chamfered bore edges for precision mating',
      'Available in standard ANSI/DIN/BS standards and bespoke CAD dimensions',
    ],
    specs: [
      { label: 'Configuration', value: 'Circular flange with symmetric bolt hole circle and central through-bore' },
      { label: 'Material Options', value: 'Mild Steel (MS), Carbon Steel A105, Stainless Steel (SS304/SS316)' },
      { label: 'Facing Types', value: 'Flat Face (FF), Raised Face (RF), O-Ring Grooved' },
      { label: 'Pressure Ratings', value: 'Class 150 to Class 600 / PN6 to PN40' },
    ],
    applications: ['Industrial Fluid Pipeline Systems', 'Mechanical Shaft & Housing Assemblies', 'Structural Equipment Flanges', 'Pressure Vessel Ports']
  },

  /* ══════════════════════════════════════════════════════════════
     CATEGORY: CNC TOOLING & INSERTS (Page 19)
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'tool-301',
    category: 'cnc_tooling',
    categoryName: 'CNC Tooling & Inserts',
    badge: 'Multi-Coated',
    tag: 'CNC Lathe Tooling',
    title: 'CNC Indexable Carbide Turning Inserts (Catalog Collection)',
    subtitle: 'Triangular, Rhombic/Diamond, Square & Round Coated Carbide Inserts',
    image: `${process.env.PUBLIC_URL}/products/cnc_carbide_inserts.png`,
    pdfPage: 19,
    shortDesc: 'A diverse assortment of indexable carbide turning inserts featuring various geometries with specialized chip breakers and multi-colour performance coatings.',
    fullDesc: `A diverse assortment of indexable carbide turning inserts featuring various geometries (Triangular, Rhombic/Diamond, Square, and Round) with specialized Chip breaker designs and multi-colour performance coatings.

Multi-material compatibility engineered with distinct coating variants optimized for efficient cutting across steel, stainless steel, and cast iron. Advanced chip breakers with intricate molded top-face geometries ensure optimal chip curling, lower cutting resistance, and smooth chip evacuation. Micro-grain carbide substrates maintain sharp edge integrity under extreme thermal and mechanical loads.`,
    features: [
      'Multi-Material Compatibility: Distinct coating variants optimized for Steel (P), Stainless Steel (M), and Cast Iron (K)',
      'Advanced Chip breakers: Molded top-face geometries for optimal chip curling and low cutting force',
      'High Wear Resistance: Micro-grain carbide substrate with multi-layer CVD/PVD coatings',
      'Precision Indexability: Ground to tight dimensional tolerances for repeatable positioning',
      'Geometries: Triangular (T), Rhombic/Diamond (C, D, V, W), Square (S), Trigon (W), Round (R)',
      'Corner Radii: 0.4mm, 0.8mm, 1.2mm options for finishing, semi-finishing, and heavy roughing',
    ],
    specs: [
      { label: 'Insert Geometries', value: 'Triangular (T), Rhombic (C, D, V), Square (S), Trigon (W), Round (R)' },
      { label: 'Corner Radii & Sizes', value: '0.4 mm, 0.8 mm, 1.2 mm for roughing, semi-finishing & finishing' },
      { label: 'Material Grades', value: 'Tailored CVD/PVD coatings for Steel, Stainless Steel, Cast Iron' },
      { label: 'Chip Breakers', value: 'Finishing (LF/SF), Medium (PM/MA), Heavy Roughing (HR/DR)' },
      { label: 'Clamping Compatibility', value: 'Standard ISO Toolholders (Screw clamp, Lever clamp, Wedge clamp)' },
    ],
    applications: ['External & Internal Turning on CNC Lathes', 'Facing & Profiling Operations', 'Automotive Component Machining', 'Heavy Engineering Spares']
  },

  /* ══════════════════════════════════════════════════════════════
     CATEGORY: INDUSTRIAL MOTORS & DRIVES (Page 21)
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'motor-401',
    category: 'motors',
    categoryName: 'Industrial Motors & Drives',
    badge: 'IP55 Rated',
    tag: 'Induction Motors',
    title: 'Industrial Three-Phase Induction Motors (Foot & Flange Mount)',
    subtitle: 'Rugged High-Efficiency AC Induction Motors — B3, B5, B14 & B35 Combinations',
    image: `${process.env.PUBLIC_URL}/products/induction_motor_flange.png`,
    pdfPage: 21,
    shortDesc: 'Rugged, high-efficiency three-phase AC induction motors designed for demanding industrial machinery drives with IP55 protection and Class F insulation.',
    fullDesc: `Rugged, high-efficiency three-phase AC induction motors designed for demanding industrial applications. Built with heavy-duty cast housings, optimal cooling fins, and precision-balanced rotors for continuous, reliable operation.

High efficiency & performance engineered for low energy consumption, high starting torque, and stable operational speeds. Cast cooling ribs maximize heat dissipation preventing thermal overload during continuous duty. Sealed terminal box with cable glands provides IP55 ingress protection against dust and water jets.`,
    features: [
      'High Efficiency & Performance: Low energy consumption, high starting torque, and stable operational speeds',
      'Robust Cooling System: Integrated cast cooling ribs maximize heat dissipation during continuous 24/7 duty',
      'Ingress Protection (IP55): Sealed terminal box with cable glands protecting against dust and moisture',
      'Dual Mounting Versatility: Available in foot-mounted (B3), flange-mounted (B5/B14), and combined (B35)',
      'Class F insulation system with Class B temperature rise for extended motor lifespan',
      'Dynamic precision-balanced rotor ensuring ultra-low vibration and quiet operation',
    ],
    specs: [
      { label: 'Power Rating', value: 'Standard models from 0.75 kW to 75 kW (1 HP to 100 HP, e.g. 5.5 kW / 7.5 HP featured model)' },
      { label: 'Voltage & Frequency', value: '380V – 415V, 50 Hz / 60 Hz three-phase supply' },
      { label: 'Speed (RPM)', value: '1440 RPM (4-Pole standard), 2-Pole (2880 RPM), 6-Pole (960 RPM)' },
      { label: 'Insulation & Protection', value: 'Class F insulation system with IP55 enclosure protection' },
      { label: 'Enclosure Material', value: 'Durable Cast Iron / High-Grade Aluminium Alloy with precision bearing shields' },
      { label: 'Mounting Styles', value: 'B3 (Foot), B5 (D-Flange), B14 (C-Face), B35 (Foot + Flange)' },
    ],
    applications: ['Industrial Machinery Drives', 'Hydraulic Power Pack Pumps', 'Air Compressors & Industrial Blowers', 'Conveyor Systems', 'Special Purpose Machines (SPMs)', 'Manufacturing Automation']
  },

  /* ══════════════════════════════════════════════════════════════
     CATEGORY: RAW MATERIALS & METAL SCRAP TRADING (Page 22)
     ══════════════════════════════════════════════════════════════ */
  {
    id: 'scrap-501',
    category: 'scrap_trading',
    categoryName: 'Raw Materials & Scrap Trading',
    badge: 'Certified Purity',
    tag: 'Scrap Trading Streams',
    title: 'Industrial Raw Materials & Categorized Metal Scrap Trading',
    subtitle: 'Systematic Supply & Professional Trading of High-Grade MS, SS, Al, Cu & Brass',
    image: `${process.env.PUBLIC_URL}/products/metal_scrap_trading.png`,
    pdfPage: 22,
    shortDesc: 'Reliable supply and professional trading of high-grade industrial metal scrap streams: Mild Steel, Stainless Steel (304/316), Aluminium, Copper, and Brass.',
    fullDesc: `At AptisMech Corporation LLP, we specialize in the reliable supply and professional trading of high-grade industrial metal scrap and raw materials. We ensure seamless sourcing, precision categorization, and transparent transactions designed to keep your industrial production moving forward.

Our systematic sorting and certified weighing procedures guarantee consistent material flow, accurate chemistry, and transparent pricing across all non-ferrous and ferrous metal recycling streams.`,
    features: [
      'MS Scrap (Mild Steel): Structural Scrap, Cut Pieces, Heavy Machine Scrap, Fabrication Scrap',
      'SS Scrap (Stainless Steel): SS 304 / 316 Scrap, Sheet & Plate Scrap, Pipe & Tube Scrap, Cutlery Scrap',
      'Aluminium Scrap: Extrusion Scrap, Sheet & Plate Scrap, Cast Aluminium Scrap, Cable & Wire Scrap',
      'Copper Scrap: Copper Wire Scrap (Millberry), Copper Tube Scrap, Copper Sheet Scrap, Electrical Scrap',
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

/* Categories configuration with counts */
export const categoriesConfig = [
  { key: 'all', label: 'All Portfolio', count: productsData.length },
  { key: 'heavy_machinery', label: 'Heavy Machinery', count: productsData.filter(p => p.category === 'heavy_machinery').length },
  { key: 'hardware_spares', label: 'Precision Spares & Hardware', count: productsData.filter(p => p.category === 'hardware_spares').length },
  { key: 'cnc_tooling', label: 'CNC Tooling & Inserts', count: productsData.filter(p => p.category === 'cnc_tooling').length },
  { key: 'motors', label: 'Induction Motors', count: productsData.filter(p => p.category === 'motors').length },
  { key: 'scrap_trading', label: 'Metal Scrap Trading', count: productsData.filter(p => p.category === 'scrap_trading').length },
];
