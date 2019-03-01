'use strict'


const Route = use('Route')

Route.get('/', function * (request, response) {
  response.send('This is the home page')
})