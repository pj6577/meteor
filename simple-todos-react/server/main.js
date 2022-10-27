import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '../imports/db/TasksCollection';
import { ServiceConfiguration } from 'meteor/service-configuration';
import '../imports/api/taskMethods';
import '../imports/api/tasksPublications';

const insertTask = (taskText, user) =>
TasksCollection.insert({
  text: taskText,
  userId: user._id,
  createdAt: new Date(),
});

const SEED_USERNAME = '박재현';
const SEED_PASSWORD = '1234';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
    ].forEach(taskText => insertTask(taskText, user));
  }
});

ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      loginStyle: 'popup',
      clientId: 'a78d3027319c3d9170a0', 
      secret: '3fcc7a6ecdd58ba8a695456501b57d6ed8907911', 
    },
  }
);