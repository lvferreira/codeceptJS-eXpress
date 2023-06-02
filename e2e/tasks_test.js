Feature('tasks')

const tasks = new DataTable(['name'])

tasks.add(['Go Shopping'])
tasks.add(['Read Book'])
tasks.add(['Study Java'])

Data(tasks)
	.Scenario('should be able to create new tasks', ({ I, tasksPage, current }) => {
		const taskName = current.name

		I.deleteByHelper(taskName)

		tasksPage.create(taskName)
		tasksPage.have(taskName)
	}).tag('new')

Scenario('should not create duplicated task', ({ I, tasksPage }) => {
	const task = {
		name: 'Pay Check',
		is_done: false,
	}
	// {name: "Go shopping", is_done: false}
	I.deleteByHelper(task.name)

	I.postTask(task)

	tasksPage.create(task.name)
	tasksPage.popUp('Task already exist!')
}).tag('critical')