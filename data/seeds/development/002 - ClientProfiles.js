
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clientProfiles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {userId: 1, companyName: 'TestCompanyOne'},
        {userId: 2, companyName: 'TestCompanyTwo'},
      ]);
    });
};
