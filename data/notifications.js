// data/notifications.js

export const notificationsData = [
  {
    id: 'notif-001',
    title: 'Semester Registration Open',
    message:
      'Registration for the 2024/2025 academic year is now open. Please complete your registration by 30th September 2024.',
    date: '2024-09-26T06:30:00Z',
    timeAgo: '2 hours ago',
    type: 'Academic',
    read: false,
    priority: 'high',
  },
  {
    id: 'notif-002',
    title: 'Examination Timetable Released',
    message:
      'The final examination timetable for Semester 1 has been published. Check your schedule on the student portal.',
    date: '2024-09-25T10:00:00Z',
    timeAgo: '1 day ago',
    type: 'Academic',
    read: false,
    priority: 'high',
  },
  {
    id: 'notif-003',
    title: 'Fee Payment Deadline',
    message:
      'Reminder: The deadline for fee payment is approaching. Please ensure you clear your balance by 15th October 2024.',
    date: '2024-09-23T08:15:00Z',
    timeAgo: '3 days ago',
    type: 'Financial',
    read: true,
    priority: 'medium',
  },
  {
    id: 'notif-004',
    title: 'Library Closure Notice',
    message:
      'The university library will be closed on 20th September 2024 for annual maintenance. Online resources will remain available.',
    date: '2024-09-21T14:00:00Z',
    timeAgo: '5 days ago',
    type: 'General',
    read: true,
    priority: 'low',
  },
  {
    id: 'notif-005',
    title: 'Sports Day Registration',
    message:
      'Register for the annual MUBAS Sports Day. Events include football, basketball, athletics, and volleyball.',
    date: '2024-09-19T09:00:00Z',
    timeAgo: '1 week ago',
    type: 'Events',
    read: true,
    priority: 'medium',
  },
  {
    id: 'notif-006',
    title: 'ICT System Maintenance',
    message:
      'The student portal will be offline on 25th September 2024 from 2:00 AM to 6:00 AM for scheduled system upgrades.',
    date: '2024-09-18T16:30:00Z',
    timeAgo: '1 week ago',
    type: 'ICT',
    read: true,
    priority: 'medium',
  },
  {
    id: 'notif-007',
    title: 'Accommodation Applications Open',
    message:
      'Applications for on-campus accommodation for the next semester are now being accepted.',
    date: '2024-09-15T11:00:00Z',
    timeAgo: '2 weeks ago',
    type: 'Student Life',
    read: true,
    priority: 'low',
  },
];

export const notificationTypes = {
  Academic: { color: '#454FA8', bgColor: '#EEF0FF' },
  Financial: { color: '#E67E22', bgColor: '#FEF5E7' },
  Events: { color: '#27AE60', bgColor: '#EAFAF1' },
  ICT: { color: '#2980B9', bgColor: '#EBF5FB' },
  'Student Life': { color: '#8E44AD', bgColor: '#F4ECF7' },
  General: { color: '#7F8C8D', bgColor: '#F2F4F4' },
};

export const getUnreadCount = (notifications) =>
  notifications.filter((n) => !n.read).length;