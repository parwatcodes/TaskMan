export const ADMIN = 'admin';
export const MEMBER = 'member';
export const URL = 'http://localhost:5050'
export const APP_DATA_KEY = 'taskMan-data';
export const URI_LOGIN = '/pages/login.html';
export const URI_DASHBOARD = '/pages/dashboard.html';
export const DEFAULT_ADMIN = {
  "id": 1,
  "name": "Default Admin",
  "role": ADMIN,
  "email": "admin123@gmail.com",
  "password": "Admin@123"
};
export const DEFAULT_MEMBER = {
  "id": 2,
  "name": "Default Member",
  "role": MEMBER,
  "email": "member123@gmail.com",
  "password": "Member@123",
  "ratePerHr": 45
};
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
