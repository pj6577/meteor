import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { TasksCollection } from './TasksCollection';

Meteor.methods({
    'tasks.insert'(text){
        check(text, String);

        if(!this.userId){
            throw new Meteor.Error('Not Authorized');
        }

        TasksCollection.insert({
            text,
            createdAt: new Date,
            userId: this.userId,
        })
    },
    'tasks.remove'(taskId){
        check(taskId, String);

        if(!this.userId){
            throw new Meteor('Not Authorized');
        }
        TasksCollection.remove(taskId);
    },

    'tasks.setIsChecked'(taskId, isChecked){
        check(taskId, String);
        check(isChecked, Boolean);

        if(!this.userId){
            throw new Meteor.Error('Not Authorized');
        }
        TasksCollection.update(taskId,{
            $set:{
                isChecked,
            },
        });
    },
});