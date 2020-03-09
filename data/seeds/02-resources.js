
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'delivery van', description: "gas needs to be refilled upon return"},
        {name: 'food'},
        {name: 'dolly'},
        {name: 'IT person'},
        {name: 'computers'},
        {name: 'conference room C', description: "2 hour booking max"},
        {name: 'merchandise'},
      ]);
    });
};
