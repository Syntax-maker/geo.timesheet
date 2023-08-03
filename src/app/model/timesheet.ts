export interface Timesheet {
  id: Number,
  isChecked: boolean,
  approvedBy: String,
  isOT: boolean,
  isND: boolean,
  date: String,
  location: String,
  project: String,
  task: String,
  actualHours: Number,
  projectDescription: String,
  weekNo: Number,
}