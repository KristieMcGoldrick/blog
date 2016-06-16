
exports.seed = function(knex, Promise) {

return knex('post').del()
  .then(function(){
    return Promise.all([
      // Inserts seed entries
      knex('post').insert({
        title: 'Q1 Review',
      category:'Galvanize Curriculum'})
    ]);
  })
};
