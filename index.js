const format = require('date-fns/format');
const squel = require('squel');
const faker = require('faker/locale/id_ID');
const fs = require('fs');
faker.locale = 'id_ID';

const tableName = 'protokol';

for (let i = 1; i <= 1000; i++) {
  console.log('🚀 ~ file: index.js ~ line 9 ~ i', i);

  const content = squel
    .insert()
    .into(tableName)
    .setFields({
      pr_id: i,
      pu_id: i,
      pr_judul:
        'PENGARUH ' +
        faker.address.state().toUpperCase() +
        ' TERHADAP ' +
        faker.name.findName().toUpperCase(),
      pr_tglpengajuan: format(faker.date.past(1), 'yyyy-MM-dd'),
      pr_tglkeputusankep: format(faker.date.recent(20), 'yyyy-MM-dd'),
      pr_nosle: '1234',
      pr_tgl_sle: '2021-12-01',
      pr_tgluploadsle: '2021-12-02',
      pr__pathfilesle: '/documents/filesle.pdf',
      pr_klasifikasikep: faker.random.arrayElement(['FB', 'E1', 'E2']),
    })
    .toString();

  fs.writeFile(`insert_script/${tableName}.txt`, content + '\n', { flag: 'a+' }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}
