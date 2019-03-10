const EventEmitter = require('events')
const readline = require('readline')

const client = new EventEmitter()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const server = require('./server')(client)

server.on('response', (res) => {

    // console.log(res)

    process.stdout.write('\u001B[2J\u001B[0;0f\nTask List\n_____________________\n\n')
    process.stdout.write(res)
    process.stdout.write('\n\> ')

})

let command, args;
rl.on('line', (input) => {
    // console.log(input)

    [command, ...args] = input.split(" ")

    client.emit('command', command, args)
})