'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('posts', 'UserController.index')
Route.post('posts', 'UserController.pot').as('route.store');
Route.get('posts/:id', 'UserController.gets');

Route.post('posts/:id', 'UserController.getstore').as('route.update');
Route.get('delete/:id', 'UserController.del');
