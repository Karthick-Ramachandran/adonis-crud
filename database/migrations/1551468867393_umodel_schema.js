'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UmodelSchema extends Schema {
  up () {
    this.create('umodels', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('umodels')
  }
}

module.exports = UmodelSchema
