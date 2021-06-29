const squel = require('squel');
const faker = require('faker/locale/id_ID');
const fs = require('fs');
faker.locale = 'id_ID';

const tableName = 'peneliti';

let a = 0;
let flag;

for (let i = 1; i <= 1000; i++) {
  console.log(i);

  if (i % 5 === 0) {
    a += 1;
    flag = false;
  } else {
    flag = true;
  }

  const content = squel
    .insert()
    .into(tableName)
    .setFields({
      p_id: i,
      pu_id: flag ? null : a,
      p_nama: faker.name.findName(),
      p_instansi: 'UNIVERSITAS ' + faker.address.state().toUpperCase(),
      p_email: faker.internet.email(),
      p_nik: faker.phone.phoneNumber('################'),
    })
    .toString();

  fs.writeFile(`insert_script/${tableName}.txt`, content + '\n', { flag: 'a+' }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}
