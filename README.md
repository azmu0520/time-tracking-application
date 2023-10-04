# Time Tracking Application Guide

#### The application contains a list of projects. Each project has a list of tasks. Each user can report a time for a given task. Each task can have multiple time entries for multiple users.

### Functionalities

- When a user starts working on a task <br />
  <input type='checkbox' /> <label> User can navigate to a specific project. </label> <br />
  <input type='checkbox' /> <label> User can select a task and clicks the “Play” icon next to it. From now on, the application starts recording the time for the specific task. </label> <br />
  <input type='checkbox' /> <label> The application can display the current time spent on a task and update it every second. </label> <br />
  <input type='checkbox' /> <label> The current time is displayed next to the task (on the task’s list) but also at the topbar of the application (always visible regardless of a page the user is on). </label> <br /> <br />

- When a user stops working on a task <br />
  <input type='checkbox' /> <label> At any moment, the user can stop the timer. This will create a new timesheet entry under the current task, which would contain: start time, end time, duration in “xh ymin” (e.g. 2h 17min). </label> <br />
  <input type='checkbox' /> <label> When the user starts the timer again, it will not update the existing timesheet entry (there is no “pause” functionality). </label> <br /> <br />

- When a user closes the application. <br />
  <input type='checkbox' /> <label> When the user closes the application while the timer is running, the timer should still run and display the proper time when the application is opened again. Let’s consider this scenario: the time shows “1h 5m 17s”, the user closes the application and reopens it after 1 min and 8 seconds, the timer should show a current duration of 1h 1m 25s”. </label> <br /> <br />

- Summaries <br />
  <input type='checkbox' /> <label> Each task can show the total time spent on it (sum of all the timesheet entries for all the users). It can be updated after the timer is stopped. </label> <br />
  <input type='checkbox' /> <label> Each project can show the total time spent on it (sum of all the totals from all the tasks). </label> <br />

### Restrictions

- Single user can’t record time for multiple tasks at the same time, however, multiple users can do it. (It is allowed for multiple users to work on the same task in parallel).

- Each task should have an estimated time assigned to it (which is optional). The application should warn the user if the total time spent on a task is reached (while the timer is running, the timer should not stop).

### Authentication

- Authentication is not included for this application, however we distinguish different users.

### Technology Stack

- Frontend: React.js
- Backend: Node.js
