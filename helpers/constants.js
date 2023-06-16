export const ADMIN = 'admin';
export const MEMBER = 'member';
export const URL = 'http://localhost:5050'
export const APP_DATA_KEY = 'taskMan-data';
export const URI_LOGIN = '/pages/login.html';
export const URI_DASHBOARD = '/pages/dashboard.html';
export const LIST = {
  TODO: 'ToDo',
  IN_PROGRESS: 'In Progress',
  IN_REVIEW: 'In Review',
  DONE: 'Done'
};
export const TASK_PRIORITY = {
  LOW: 'low',
  medium: 'medium',
  HIGH: 'high'
};
export const DEFAULT_ADMIN = {
  "id": 1,
  "role": ADMIN,
  // "createdTask": [],
  "name": "Default Admin",
  "email": "admin123@gmail.com",
  "password": "Admin@123"
};
export const DEFAULT_MEMBER = {
  "id": 2,
  "role": MEMBER,
  "ratePerHr": 45,
  // "assignedTask": [],
  "password": "Member@123",
  "name": "Default Member",
  "email": "member123@gmail.com"
};
export const DEFAULT_TASK = {
  "id": 1,
  "name": "Design mobile layouts",
  "description": "Need to design 4 page layouts for dashboard, admin, login and user page.",
  "startDate": "06-06-2023",
  "endDate": "12-06-2023",
  "createdBy": 1,
  "assignedTo": 2,
  "listName": LIST.TODO,
  "priority": TASK_PRIORITY.LOW
}
