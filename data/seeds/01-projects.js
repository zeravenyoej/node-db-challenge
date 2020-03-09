
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Deliver food to Costco'},
        {name: 'Install computers at UC Davis', description: "UC Davis is switching from Macs to PCs. Computers are already at the school."},
        {name: 'Schedule meeting with the IT team', description: "Monthly meeting"},
        {name: 'Deliver merchandise to the store'}
      ]);
    });
};
