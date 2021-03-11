const MySql2Dialect = require('./index');

describe('initialize', () => {
  it('should', async () => {
    const knex = require('knex')({
        client: MySql2Dialect,
        connection: {
          host : '127.0.0.1',
          user : 'root',
          password : 'secret',
        }
      });

      expect((await knex.raw('select 2'))[0][0]['2']).toBe(2);
  })
});