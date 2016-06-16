
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table){
  table.increments();
  table.text('title');
  table.date('date');
  table.text('category');
  table.integer('author_id').references('author.id')
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post');
};
