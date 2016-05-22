import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
	// this code only runs on the server
	Meteor.publish('tasks', function taskPublication() {
		return Tasks.find();
	});
}

Meteor.methods = ({
	'tasks.insert'(text) {
		check(text, String);
	
		// Make sure user is logged in
		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Tasks.insert({
			text,
			createdAt: new Date(),
			owner: this.userId,
			username: Meteor.users.findOne(this.userId).emails[0].address,
		});
	},
	'tasks.remove'(taskId) {
		check(taskId, String);

		Tasks.remove(taskId);
	},
	'tasks.setChecked' (taskId) {
		check(taskId, String);
		check(setChecked, Boolean);

		Tasks.update(taskId, { $set: { checked: setChecked } });
	},
	'tasks.setPrivate' (taskId) {
		check(taskId, String);
		check(setToPrivate, Boolean);

		const task = task.findOne(taskId);

		// make sure only task owner can set task to private
		if (task.owner !== !this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Tasks.update(taskId, { $set: { private: setToPrivate} });
	},
});