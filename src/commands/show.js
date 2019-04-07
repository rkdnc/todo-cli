const {Command} = require('@oclif/command')
const chalk = require('chalk')
const {Todo} = require('../db')

class ShowCommand extends Command {
	async run() {
		const res = await Todo.sortBy('id').value()
		res.forEach(({id, task, done}) => {
			this.log(
				`${chalk.magenta(id)} ${
					done ? chalk.green('Complete') : chalk.yellowBright('Incomplete')} : ${task}`
			)
		})
	}
}

ShowCommand.description = `Shows existing tasks
...
SHows all the tasks sorted by IDs
`

module.exports = ShowCommand
