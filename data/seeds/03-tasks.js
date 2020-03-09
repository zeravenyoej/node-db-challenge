
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'pick up food',
          notes: "food supplier is open 4am-8pm",
          project_id: 1
        },
        {
          description: 'drop off food at Costco',
          notes: 'Costco is open from 5am-10pm',
          project_id: 1
        },
        {
          description: 'drive to UC Davis and install the computers',
          project_id: 2
        },
        {
          description: 'Send out mass email to IT department to gauge availability',
          project_id: 3
        },
        {
          description: 'Email receptionist to book conference room C',
          project_id: 3
        },
        {
          description: 'Pick up merchandise',
          notes: "Supplier hours are from 4am-8pm",
          project_id: 4
        },
        {
          description: 'Drop off merchandise at the store',
          notes: "The store is opened at 8am-6pm",
          project_id: 4
        }
      ]);
    });
};
