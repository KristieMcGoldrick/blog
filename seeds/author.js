
exports.seed = function(knex, Promise) {

return knex('author').del()
  .then(function(){
    return Promise.all([
      // Inserts seed entries
      knex('author').insert({username: 'kristMcg',
      first_name: 'Kristie',
      last_name: 'McGoldrick',
      email: 'kristie.mcgoldrick@gmail.com',
       image_url:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAWGAAAAJDhkY2QxZWEwLWQ3MTItNGE3OC05ODVkLTU0YTQ2ODViYWE3Yg.jpg'}),
       knex('author').insert({username: 'Meeshy',
       first_name: 'Michelle',
       last_name: 'Scanlan',
       email: 'meeshy@gmail.com',
        image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaMdqjZY2B276ttCxqlNA17gidgdTnxPpEVHkJx-_R5DxT4-PLaGx6mU'}),
        knex('author').insert({username: 'Meeshy',
        first_name: 'Michelle',
        last_name: 'Scanlan',
        email: 'meeshy@gmail.com',
         image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaMdqjZY2B276ttCxqlNA17gidgdTnxPpEVHkJx-_R5DxT4-PLaGx6mU'})
    ]);
  })
};
