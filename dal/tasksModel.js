
const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
const sequelize = require("../DB/PostgreSQL/connectSequelize");

let tasksModel = sequelize.define('tasks', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},
	priority: {
		type: DataTypes.INTEGER,
		defaultValue: 1
	},
	start_date: {
		type: DataTypes.BIGINT,
		defaultValue: 1
	},
	end_date: {
		type: DataTypes.BIGINT
	},
	is_done: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	},
});

(async () => {
	await tasksModel.sync();
})();


function findAll(options) {
	return tasksModel.findAll(options);
}

function findByPk(id) {
	return tasksModel.findByPk(id);
}

function addTask(obj) {
	return tasksModel.create(obj);
}

function editTask(obj, id) {
	return tasksModel.update(obj, { where: { id: id } });
}

function deleteTask(id) {
	return tasksModel.destroy({ where: { id: id } });
}

module.exports = {
	findAll,
	addTask,
	findByPk,
	editTask,
	deleteTask,
}