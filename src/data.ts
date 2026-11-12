export const profile = {
  name: 'Saranya S',
  role: 'Embedded Systems Engineer',
  subRole: 'Mechatronics Engineer',
  tagline: 'Mechatronics graduate building real-time embedded solutions — from STM32 data acquisition and ESP32 wireless links to sensor-driven vehicle safety and robotics.',
  location: 'Coimbatore, Tamil Nadu, India',
  phone: '9344375597',
  email: 'saranyasaravanan0305@gmail.com',
  github: 'https://github.com/Saranya-2005',
  linkedin: 'https://linkedin.com/in/saranya-saravanan-444664281',
  resume: 'https://drive.google.com/file/d/1hEzXBiGQv1MOsgWcHfbiW_kpuVtDgkLe/view?usp=sharing',
};

export const stats = [
  { value: '5', label: 'Hardware projects' },
  { value: '2×', label: 'SEVC 1st Prize' },
  { value: '7.8', label: 'B.E. CGPA' },
];

export const about = [
  'B.E. Mechatronics Engineering graduate with a strong interest in Embedded Systems, Embedded Software, Firmware Development and IoT. Familiar with C, C++, Python, microcontrollers, sensor interfacing, communication protocols and hardware–software integration.',
  'My project work spans real-time vehicle monitoring, driver safety systems, robotics and wireless robot control — and I enjoy building embedded solutions that are reliable, efficient and real-time.',
];

export const education = [
  { degree: 'B.E. Mechatronics Engineering', school: 'Sri Krishna College of Engineering and Technology, Coimbatore', period: 'May 2026', score: 'CGPA 7.8' },
  { degree: 'Higher Secondary – Bio-Maths', school: 'Government Girls Higher Secondary School, Chidambaram', period: '2022', score: '86.33%' },
];

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Python', 'Java'] },
  { group: 'Microcontrollers', items: ['STM32', 'ESP32', 'Arduino', 'Raspberry Pi'] },
  { group: 'Embedded Core', items: ['GPIO / ADC / PWM', 'Timers & Interrupts', 'Sensor Interfacing', 'Motor & Servo Control', 'Real-time Data Acquisition'] },
  { group: 'Protocols', items: ['UART', 'I²C', 'SPI', 'Wi-Fi', 'MCU-to-MCU'] },
  { group: 'Tools', items: ['STM32CubeIDE', 'Arduino IDE', 'VS Code', 'Git & GitHub', 'Serial Monitor'] },
  { group: 'OS & Frameworks', items: ['Linux', 'ROS 2', 'RTOS Fundamentals'] },
  { group: 'Test & Debug', items: ['Oscilloscope', 'Logic Analyzer', 'Multimeter', 'Hardware Debugging', 'Circuit Interfacing'] },
  { group: 'IoT & Integration', items: ['IoT', 'GPS Integration', 'Mobile App Integration', 'Wireless Comms'] },
  { group: 'Robotics & CAD', items: ['Mobile Robotics', 'Manipulators', 'SolidWorks', 'Creo', 'AutoCAD', 'Mastercam'] },
];

// kind: 'phone' = app screenshot, 'diagram' = white-background render/diagram (recoloured to dark), 'photo' = real photo
export type Shot = { src: string; caption: string; kind: 'phone' | 'diagram' | 'photo' | 'cutout' };

export const projects: {
  title: string; tag: string; desc: string; points: string[]; flow: string[]; stack: string[]; images: Shot[];
}[] = [
  {
    title: 'AI-Integrated Real-Time Vehicle Monitoring System',
    tag: 'Automotive · IoT',
    desc: 'Connected vehicle monitoring combining STM32 data acquisition, ESP32 wireless communication, GPS tracking and AI-assisted analysis.',
    points: [
      'Hardware integration and communication between STM32 and ESP32.',
      'STM32 collects real-time motor and battery data.',
      'ESP32 transfers collected data to the mobile application.',
      'Integrated GPS for live vehicle location tracking.',
      'Displayed vehicle monitoring data in the mobile app.',
      'Historical-data-based motor & battery health analysis concept.',
      'AI functionality for vehicle-related information and user questions.',
    ],
    flow: ['Motor & Battery', 'STM32', 'ESP32', 'Mobile App', 'AI Analysis'],
    stack: ['STM32', 'ESP32', 'C/C++', 'STM32CubeIDE', 'GPS', 'Wi-Fi', 'IoT', 'AI'],
    images: [
      { src: '/img/vm-dashboard.jpg', caption: 'Battery & motor telemetry dashboard', kind: 'phone' },
      { src: '/img/vm-analysis.jpg', caption: 'Voltage trend & battery health analysis', kind: 'phone' },
      { src: '/img/vm-gps.jpg', caption: 'Live GPS vehicle tracking', kind: 'phone' },
      { src: '/img/vm-transmission.jpg', caption: 'Transmission / drivetrain reference', kind: 'phone' },
      { src: '/img/vm-profile.jpg', caption: 'Astra app profile screen', kind: 'phone' },
    ],
  },
  {
    title: 'Morphobot M4 – Dual-Mode Disaster Rescue Robot',
    tag: 'Robotics · ROS 2',
    desc: 'A hybrid robot combining aerial flight and wheeled mobility for disaster assessment and rescue. Flight mode supports aerial observation; wheeled mode supports ground mobility and longer operation.',
    points: [
      'Flight mode for aerial observation and monitoring.',
      'Wheeled mode for ground navigation.',
      'Hybrid mobility for accessing different environments.',
      'Applications in disaster assessment, inspection and search-and-rescue.',
    ],
    flow: ['Aerial Mode', 'Wheeled Mode', 'Hybrid Ops', 'Assessment'],
    stack: ['ROS 2', 'Robotics', 'Mechanical Design', 'Autonomous Systems'],
    images: [
      { src: '/img/morpho-flight.png', caption: 'CAD render – flight configuration', kind: 'cutout' },
      { src: '/img/morpho-wheeled.png', caption: 'CAD render – wheeled configuration', kind: 'cutout' },
    ],
  },
  {
    title: 'Blind-Spot Detection & Driver Alert System',
    tag: 'Vehicle Safety',
    desc: 'Ultrasonic sensors detect nearby objects and alert the driver through LED indicators on the vehicle dashboard.',
    points: [
      'Ultrasonic sensors for nearby object detection.',
      'Integrated sensor data with the vehicle dashboard.',
      'LED indicators for visual alerts on detection.',
      'Hardware interfacing and system integration.',
    ],
    flow: ['Ultrasonic Sensors', 'Arduino Uno', 'LED Alert'],
    stack: ['Arduino', 'Ultrasonic Sensors', 'Sensor Interfacing', 'LEDs'],
    images: [
      { src: '/img/bsd-prototype.jpg', caption: 'Blind-spot detection prototype', kind: 'photo' },
      { src: '/img/bsd-flow.jpg', caption: 'System block diagram', kind: 'diagram' },
    ],
  },
  {
    title: 'Wearable Driver Health Monitoring System',
    tag: 'Wearables · Racing',
    desc: 'Monitors driver health parameters during racing using sensors and shows them on the unified vehicle dashboard.',
    points: [
      'Monitored driver health parameters during racing applications.',
      'Worked with the dashboard team on a unified display.',
      'Heart-rate sensor, MAX30100 pulse oximeter and DHT11 temperature sensor.',
    ],
    flow: ['Health Sensors', 'Arduino Nano', 'Dashboard'],
    stack: ['Arduino Nano', 'Heart-rate Sensor', 'MAX30100', 'DHT11'],
    images: [
      { src: '/img/health-prototype.jpg', caption: 'Health-monitoring prototype', kind: 'photo' },
      { src: '/img/health-flow.jpg', caption: 'System block diagram', kind: 'diagram' },
    ],
  },
  {
    title: 'PickBot – Design & Fabrication of a Mobile Pick-and-Place Robot',
    tag: 'Robotics · Raspberry Pi',
    desc: 'A 3R planar mobile robotic manipulator that moves on mecanum wheels and picks up and places objects in different locations, controlled wirelessly through a web interface from a phone or PC.',
    points: [
      'Contributed to the design and fabrication of the 3R planar mobile manipulator.',
      'Built a web-based interface for wireless robot control from mobile and PC.',
      'Raspberry Pi 3B+ drives wheel motors via a motor driver and the arm via a servo driver, with a camera for vision.',
      'Arm tuned for accurate, reliable handling of objects of different sizes and shapes.',
      'Goals: higher efficiency, precise placement, flexibility, safety and reduced labour cost.',
      'Delivered Aug–Oct 2024: calculations, arm design, fabrication, assembly, programming and testing.',
    ],
    flow: ['Mobile / PC', 'Web Interface', 'Raspberry Pi 3B+', 'Motor + Servo Drivers', 'Robot Motion'],
    stack: ['Raspberry Pi 3B+', 'Servo Control', 'Motor Driver', 'Camera', 'Web Interface', 'Mechanical Design'],
    images: [
      { src: '/img/pickbot.png', caption: 'PickBot – mecanum base with robotic arm', kind: 'cutout' },
      { src: '/img/pickbot-flow.jpg', caption: 'System block diagram', kind: 'diagram' },
    ],
  },
];

export const journey = [
  { title: 'Microcontroller Programming', text: 'How STM32, ESP32 and Arduino are used for sensor interfacing, data acquisition and hardware communication.' },
  { title: 'STM32 Development', text: 'Project-based work with STM32CubeIDE, collecting and processing motor and battery data.' },
  { title: 'ESP32 & Wireless', text: 'ESP32 talking to other MCUs and pushing hardware data to mobile apps wirelessly.' },
  { title: 'GPS Integration', text: 'Using GPS modules for location data and live vehicle tracking.' },
  { title: 'Sensor Interfacing', text: 'Ultrasonic sensors for nearby-vehicle detection and sensor-based monitoring.' },
  { title: 'Hardware–Software Integration', text: 'Moving real-time data from embedded hardware into application interfaces.' },
  { title: 'Data Monitoring & Analysis', text: 'Real-time and historical analysis of motor and battery performance.' },
  { title: 'AI-Assisted Apps', text: 'Using vehicle data to power AI answers inside a monitoring app.' },
  { title: 'Wearable Technology', text: 'How wearables collect health data and communicate with apps.' },
  { title: 'Robotics & Control', text: 'Wireless control interfaces, mobile robotics and ROS 2 through projects and internship.' },
];

export const experience = [
  {
    period: 'Feb 2026 — Present',
    role: 'Design Engineer',
    company: 'Rainer Engineering · Coimbatore',
    points: ['Mechanical design, fixture design and assembly engineering.', 'CNC/CAM programming with Mastercam as a supporting responsibility.'],
  },
  {
    period: 'Aug 2025 — Nov 2025',
    role: 'Mobile Robotics Intern',
    company: 'Maxbyte Technologies',
    points: ['Three-month internship on mobile robotics and Autonomous Mobile Robot (AMR) projects.'],
  },
];

export const leadership = {
  title: 'Innovation Team Captain – Team Astra',
  period: 'Solar Kart · 2024–2025',
  text: 'Led the innovation team and contributed to vehicle systems including real-time monitoring, blind-spot detection and driver health monitoring.',
  image: '/img/team-astra.jpg',
};

export const achievements = [
  { title: 'First Prize – Innovation', event: 'SEVC 2023', text: 'Recognised for innovation in the solar vehicle competition.' },
  { title: 'First Prize – Innovation', event: 'SEVC 2024', text: 'Recognised for innovation in the solar vehicle competition.' },
  { title: 'Overall Runner-Up', event: 'SEVC', text: 'Team recognition for overall performance.' },
  { title: 'Competition Recognition', event: 'BSVC 2024', text: 'Innovation, design evaluation and autocross.' },
  { title: 'Smart India Hackathon', event: 'SIH 2024', text: 'Hardware category with a drone technology concept.' },
  { title: 'UAV Workshop · ROS Uncovered', event: 'Workshops 2024', text: 'Hands-on UAV technology and Robot Operating System.' },
];
