console.log('Starting app...')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
var command = argv._[0]
console.log('Command: ', command)
console.log('Yargs', argv)

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note added successfully')
        notes.logNote(note)
    } else {
        console.log('Note already exists')
    }
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    var note = notes.getNote(argv.title)
    if (note) {
        console.log('Note read successfully')
        notes.logNote(note)
    } else {
        console.log('Note does not exist')
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)
} else {
    console.log('Command not recognized')
}