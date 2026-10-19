// data/serviceDetails.js

export const serviceDetails = {
  // ─── ACADEMIC ───

  'srv-001': {
    // Courses
    title: 'My Courses',
    description: 'Your enrolled courses for Semester 1, 2024/2025',
    sections: [
      {
        heading: 'Enrolled Courses',
        type: 'list',
        items: [
          {
            code: 'MIS301',
            name: 'Database Systems',
            credits: 3,
            lecturer: 'Dr. B. Phiri',
            status: 'Active',
          },
          {
            code: 'MIS302',
            name: 'Mobile Application Development',
            credits: 3,
            lecturer: 'Mr. T. Mwale',
            status: 'Active',
          },
          {
            code: 'MIS303',
            name: 'Systems Analysis & Design',
            credits: 3,
            lecturer: 'Dr. L. Banda',
            status: 'Active',
          },
          {
            code: 'MIS304',
            name: 'Network Administration',
            credits: 3,
            lecturer: 'Mr. K. Chirwa',
            status: 'Active',
          },
          {
            code: 'MIS305',
            name: 'Project Management',
            credits: 3,
            lecturer: 'Dr. M. Zgambo',
            status: 'Active',
          },
          {
            code: 'MIS306',
            name: 'Research Methods',
            credits: 3,
            lecturer: 'Dr. A. Kanyama',
            status: 'Active',
          },
        ],
      },
    ],
  },

  'srv-002': {
    // Results
    title: 'Academic Results',
    description: 'Your performance for the previous semester',
    sections: [
      {
        heading: 'Semester 2, 2023/2024 Results',
        type: 'list',
        items: [
          { code: 'MIS201', name: 'Object Oriented Programming', grade: 'A', points: 4.0 },
          { code: 'MIS202', name: 'Data Structures', grade: 'B+', points: 3.3 },
          { code: 'MIS203', name: 'Web Development', grade: 'A', points: 4.0 },
          { code: 'MIS204', name: 'Operating Systems', grade: 'B', points: 3.0 },
          { code: 'MIS205', name: 'Statistics', grade: 'A-', points: 3.7 },
        ],
      },
      {
        heading: 'Summary',
        type: 'stats',
        items: [
          { label: 'GPA', value: '3.72' },
          { label: 'Credits', value: '18' },
          { label: 'Status', value: 'Passed' },
        ],
      },
    ],
  },

  'srv-003': {
    // Timetable
    title: 'Class Timetable',
    description: 'Your weekly class schedule for Semester 1',
    sections: [
      {
        heading: 'Weekly Schedule',
        type: 'timetable',
        items: [
          { day: 'Monday', time: '08:00 - 10:00', course: 'MIS301 - Database Systems', venue: 'LH-A' },
          { day: 'Monday', time: '10:00 - 12:00', course: 'MIS302 - Mobile Dev', venue: 'Lab-2' },
          { day: 'Tuesday', time: '08:00 - 10:00', course: 'MIS303 - Systems Analysis', venue: 'LH-B' },
          { day: 'Wednesday', time: '14:00 - 16:00', course: 'MIS304 - Network Admin', venue: 'Lab-3' },
          { day: 'Thursday', time: '08:00 - 10:00', course: 'MIS305 - Project Mgmt', venue: 'LH-C' },
          { day: 'Friday', time: '10:00 - 12:00', course: 'MIS306 - Research Methods', venue: 'LH-A' },
        ],
      },
    ],
  },

  'srv-004': {
    // E-Library
    title: 'E-Library',
    description: 'Digital books, journals and academic resources',
    sections: [
      {
        heading: 'Popular Resources',
        type: 'list',
        items: [
          { name: 'Introduction to Algorithms (4th Ed.)', author: 'Cormen, Leiserson', type: 'E-Book' },
          { name: 'Clean Code', author: 'Robert C. Martin', type: 'E-Book' },
          { name: 'Database System Concepts', author: 'Silberschatz', type: 'E-Book' },
          { name: 'IEEE Software Engineering Journal', author: 'IEEE', type: 'Journal' },
        ],
      },
    ],
  },

  'srv-005': {
    // Moodle
    title: 'Moodle Learning',
    description: 'Online courses, assignments and materials',
    sections: [
      {
        heading: 'Active Courses',
        type: 'list',
        items: [
          { name: 'MIS301 – Database Systems', progress: '85%', pending: '1 assignment' },
          { name: 'MIS302 – Mobile Development', progress: '90%', pending: 'None' },
          { name: 'MIS303 – Systems Analysis', progress: '75%', pending: '2 assignments' },
          { name: 'MIS305 – Project Management', progress: '60%', pending: '1 quiz' },
        ],
      },
    ],
  },

  // ─── ADMINISTRATIVE ───

  'srv-006': {
    // Fees
    title: 'Fee Statement',
    description: 'Your account statement for 2024/2025',
    sections: [
      {
        heading: 'Account Summary',
        type: 'stats',
        items: [
          { label: 'Total Fees', value: 'MK1,000,000' },
          { label: 'Amount Paid', value: 'MK750,000' },
          { label: 'Balance', value: 'MK250,000' },
        ],
      },
      {
        heading: 'Payment History',
        type: 'list',
        items: [
          { date: '15 Aug 2024', amount: 'MK500,000', method: 'Bank Transfer', status: 'Paid' },
          { date: '10 Sep 2024', amount: 'MK250,000', method: 'Airtel Money', status: 'Paid' },
        ],
      },
    ],
  },

  'srv-007': {
    // Registration
    title: 'Course Registration',
    description: 'Semester 1, 2024/2025 registration status',
    sections: [
      {
        heading: 'Registration Status',
        type: 'stats',
        items: [
          { label: 'Status', value: 'Completed' },
          { label: 'Courses', value: '6' },
          { label: 'Credits', value: '18' },
        ],
      },
      {
        heading: 'Deadlines',
        type: 'list',
        items: [
          { name: 'Registration Open', date: '01 Sep 2024' },
          { name: 'Registration Close', date: '30 Sep 2024' },
          { name: 'Late Registration', date: '05 Oct 2024' },
        ],
      },
    ],
  },

  'srv-008': {
    // Student ID
    title: 'Digital Student ID',
    description: 'Your official MUBAS student ID',
    sections: [
      {
        heading: 'Student Card',
        type: 'stats',
        items: [
          { label: 'Name', value: 'Samuel Mpando' },
          { label: 'Student ID', value: '2024-001' },
          { label: 'Programme', value: 'BSc MIS' },
          { label: 'Valid Until', value: '31 Dec 2024' },
        ],
      },
    ],
  },

  'srv-009': {
    // Transcripts
    title: 'Official Transcripts',
    description: 'Request or view your academic transcript',
    sections: [
      {
        heading: 'Available Transcripts',
        type: 'list',
        items: [
          { name: 'Year 1 Official Transcript', date: 'Jul 2024', status: 'Available' },
          { name: 'Year 2 Official Transcript', date: 'Aug 2024', status: 'Available' },
          { name: 'Current Semester', date: 'Pending', status: 'Not Ready' },
        ],
      },
    ],
  },

  // ─── STUDENT LIFE ───

  'srv-010': {
    // Accommodation
    title: 'Accommodation',
    description: 'Your hostel and housing details',
    sections: [
      {
        heading: 'Current Accommodation',
        type: 'stats',
        items: [
          { label: 'Hostel', value: 'Kanjedza' },
          { label: 'Room', value: 'B-204' },
          { label: 'Type', value: 'On-Campus' },
        ],
      },
      {
        heading: 'Notices',
        type: 'list',
        items: [
          { name: 'Hostel fees', date: 'Pay by 30 Oct 2024' },
          { name: 'Room inspection', date: '15 Oct 2024' },
        ],
      },
    ],
  },

  'srv-011': {
    // Cafeteria
    title: 'Cafeteria',
    description: 'Meal plans and cafeteria info',
    sections: [
      {
        heading: 'Your Meal Plan',
        type: 'stats',
        items: [
          { label: 'Plan', value: 'Standard' },
          { label: 'Meals/Day', value: '3' },
          { label: 'Balance', value: 'MK15,000' },
        ],
      },
      {
        heading: 'Today\u2019s Menu',
        type: 'list',
        items: [
          { name: 'Breakfast', date: '07:00 - 09:00' },
          { name: 'Lunch', date: '12:00 - 14:00' },
          { name: 'Dinner', date: '18:00 - 20:00' },
        ],
      },
    ],
  },

  'srv-012': {
    // Sports
    title: 'Sports & Recreation',
    description: 'Sports facilities, teams and activities',
    sections: [
      {
        heading: 'Available Sports',
        type: 'list',
        items: [
          { name: 'Football', date: 'Mon, Wed, Fri' },
          { name: 'Basketball', date: 'Tue, Thu' },
          { name: 'Athletics', date: 'Daily' },
          { name: 'Volleyball', date: 'Sat' },
        ],
      },
    ],
  },

  'srv-013': {
    // Clubs
    title: 'Clubs & Societies',
    description: 'Student clubs you can join',
    sections: [
      {
        heading: 'Popular Clubs',
        type: 'list',
        items: [
          { name: 'ICT Club', date: '120 members' },
          { name: 'Debate Society', date: '45 members' },
          { name: 'Entrepreneurship Club', date: '78 members' },
          { name: 'Music & Drama', date: '60 members' },
        ],
      },
    ],
  },

  'srv-014': {
    // Health
    title: 'Campus Health Services',
    description: 'Clinic info and wellness support',
    sections: [
      {
        heading: 'Clinic Hours',
        type: 'list',
        items: [
          { name: 'Weekdays', date: '08:00 - 17:00' },
          { name: 'Saturday', date: '08:00 - 12:00' },
          { name: 'Emergency', date: '24/7' },
        ],
      },
      {
        heading: 'Contacts',
        type: 'stats',
        items: [
          { label: 'Phone', value: '0888 123 456' },
          { label: 'Location', value: 'Block C' },
        ],
      },
    ],
  },

  // ─── ICT ───

  'srv-015': {
    // ICT Support
    title: 'ICT Support',
    description: 'Technical support for students',
    sections: [
      {
        heading: 'Contact ICT',
        type: 'stats',
        items: [
          { label: 'Email', value: 'ictsupport@mubas.ac.mw' },
          { label: 'Phone', value: '0888 000 111' },
          { label: 'Office', value: 'ICT/ODL Room 208' },
        ],
      },
      {
        heading: 'Common Issues',
        type: 'list',
        items: [
          { name: 'Password reset', date: '2 min' },
          { name: 'WiFi setup', date: '5 min' },
          { name: 'Email access', date: '3 min' },
        ],
      },
    ],
  },

  'srv-016': {
    // WiFi
    title: 'Campus WiFi',
    description: 'Wireless internet access information',
    sections: [
      {
        heading: 'Network Info',
        type: 'stats',
        items: [
          { label: 'Network', value: 'MUBAS-STUDENT' },
          { label: 'User', value: '2024-001' },
          { label: 'Status', value: 'Connected' },
        ],
      },
      {
        heading: 'Hotspots',
        type: 'list',
        items: [
          { name: 'Library', date: 'Strong' },
          { name: 'Lecture Halls', date: 'Strong' },
          { name: 'Hostels', date: 'Medium' },
        ],
      },
    ],
  },

  'srv-017': {
    // Printing
    title: 'Printing Services',
    description: 'Campus printing and scanning facilities',
    sections: [
      {
        heading: 'Printing Credits',
        type: 'stats',
        items: [
          { label: 'Credits', value: 'MK2,500' },
          { label: 'Pages Left', value: '~125' },
          { label: 'Cost/Page', value: 'MK20' },
        ],
      },
      {
        heading: 'Print Stations',
        type: 'list',
        items: [
          { name: 'Library Ground Floor', date: 'Open' },
          { name: 'ICT Building', date: 'Open' },
          { name: 'Hostel Block A', date: 'Maintenance' },
        ],
      },
    ],
  },

  'srv-018': {
    // Email
    title: 'Student Email',
    description: 'Your MUBAS email account',
    sections: [
      {
        heading: 'Account Info',
        type: 'stats',
        items: [
          { label: 'Email', value: 'smpando@mubas.ac.mw' },
          { label: 'Storage', value: '5.2 / 15 GB' },
          { label: 'Unread', value: '3' },
        ],
      },
      {
        heading: 'Recent Messages',
        type: 'list',
        items: [
          { name: 'Registrar Office', date: 'Today, 08:15' },
          { name: 'ICT Helpdesk', date: 'Yesterday' },
          { name: 'Library Notice', date: '2 days ago' },
        ],
      },
    ],
  },
};

export const getServiceDetails = (id) => serviceDetails[id] || null;