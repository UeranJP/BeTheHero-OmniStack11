
//exports up -> cria a tabela (executa)

exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

//exports down -> caso ocorra algum problema, exports down é uma "rollback"

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
