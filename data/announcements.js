// data/announcements.js

export const announcementsData = [
  {
    id: 'ann-001',
    title: 'Semester Registration',
    summary: 'Registration for the current semester is now open.',
    date: '2024-09-26',
    category: 'Academic',
    priority: 'high',
  },
  {
    id: 'ann-002',
    title: 'Examination Timetable',
    summary: 'The latest examination timetable is now available.',
    date: '2024-09-25',
    category: 'Academic',
    priority: 'high',
  },
  {
    id: 'ann-003',
    title: 'University News',
    summary: 'Stay updated with the latest MUBAS news and events.',
    date: '2024-09-24',
    category: 'General',
    priority: 'medium',
  },
  {
    id: 'ann-004',
    title: 'Library Extended Hours',
    summary: 'The library will remain open until 10 PM during exam period.',
    date: '2024-09-23',
    category: 'General',
    priority: 'medium',
  },
  {
    id: 'ann-005',
    title: 'Career Fair 2024',
    summary: 'Annual career fair scheduled for 15th October. Register now.',
    date: '2024-09-22',
    category: 'Events',
    priority: 'medium',
  },
];

// Home screen shows only the first 3
export const homeAnnouncements = announcementsData.slice(0, 3);