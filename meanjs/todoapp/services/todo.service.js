var ToDo = require('../models/todo.model');

_this = this;


exports.getTodos = async function(query, page, limit){
	var options = {
		page,
		limit
	};

	try{

		var todos = await ToDo.paginate(query, options);
		return todos;
	}catch(e){
		throw Error('Error while paginating todos.');
	}
}

exports.createTodo = async function(todo){
	var newTodo = new ToDo({
		title: todo.title,
		description: todo.description,
		date: new Date(),
		status: todo.status
	});

	try{
		var saveTodo = await newTodo.save();
		return saveTodo;
	}catch(e){
		throw Error('Error while creating todo.');
	}
}

exports.updateTodo = async function(todo){
	var id = todo.id;

	try{
		var oldTodo = await ToDo.findById(id);
	}catch(e){
		throw Error('Error occured while finding todo.');
	}

	if(!oldTodo){
		return false;
	}

	console.log(oldTodo);

	oldTodo.title = todo.title;
	oldTodo.description = todo.description;
	oldTodo.status = todo.status;

	console.log(oldTodo);

	try{
		var saveTodo = await oldTodo.save();
		return saveTodo;
	}catch(e){
		throw Error('Error occured while updating todo.');
	}
}

exports.deleteTodo = async function(id){
	
	try{
		var deleted = await ToDo.remove({_id: id});
		if(deleted.result.n === 0){
			throw Error('Todo could not be deleted.');
		}

		return deleted;
	}catch (e){
		throw Error('Error occured while deleting todo.');
	}
}