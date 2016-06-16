
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', function(table){
  table.increments();
  table.text('username');
  table.text('first_name');
  table.text('last_name');
  table.text('email');
  table.text('image_url')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('author');
};
