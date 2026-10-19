// data/student.js

export const studentData = {
  // Personal Information
  studentId: '2024-001',
  firstName: 'Samuel',
  lastName: 'Mpando',
  fullName: 'Samuel Mpando',
  initials: 'SM',
  email: 'smpando@mubas.ac.mw',
  phone: '+265 999 123 456',
  dateOfBirth: '2002-05-14',
  gender: 'Male',
  nationality: 'Malawian',

  // Academic Information
  programme: 'BSc Management Information Systems',
  programmeCode: 'BSCMIS',
  faculty: 'Faculty of Applied Sciences',
  department: 'Department of Information Systems',
  year: 3,
  semester: 1,
  academicYear: '2024/2025',
  gpa: 3.72,
  credits: 18,
  totalCredits: 120,
  academicStatus: 'Good Standing',

  // Financial Information
  feeBalance: 250000,
  feePaid: 750000,
  feeTotal: 1000000,
  currency: 'MK',
  feeStatus: 'Partially Paid',

  // Hostel / Accommodation
  accommodation: 'On-Campus',
  hostelName: 'Kanjedza Hostel',
  roomNumber: 'B-204',

  // Account
  isActive: true,
  lastLogin: '2024-09-26T08:15:00Z',
};

// Helper: format currency
export const formatCurrency = (amount) => {
  return `MK${amount.toLocaleString()}`;
};

// Helper: get greeting based on time of day
export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};