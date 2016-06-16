
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function(table){
  table.increments();
  table.integer('author_id').references('author.id');
  table.integer('post_id').references('post.id');
  table.text('comment');
  table.date('date');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment');
};
