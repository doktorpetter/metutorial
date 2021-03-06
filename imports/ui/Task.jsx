import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/tasks.js';

// Task component - represents a single task item
export default class Task extends Component {
	toggleChecked() {
		// set checked value to opposite of its current value
		Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
	}

	deleteThisTask () {
		Meteor.call('tasks.remove', this.props.task._id);
	}

	render() {
		// give tasks different className so we can style them differently when checking them off
		const taskClassName = this.props.task.checked ? 'checked' : '';

		return (
			<li className={taskClassName}>
				<button className="delete" onClick={this.deleteThisTask.bind(this)}>
					&times;
				</button>

				<input
					type="checkbox"
					readOnly
					checked={this.props.task.checked}
					onClick={this.toggleChecked.bind(this)}
				/>

				<span className="text">
					<strong>{this.props.task.username}</strong>: {this.props.task.text}
				</span>
			</li>
		);
	}
}

Task.propTypes = {
	// This component gets the task to display through a React prop
	// We can use propTypes to indicate that it is required
	task: PropTypes.object.isRequired,
	showPrivateButton: React.PropTypes.bool.isRequired,
};