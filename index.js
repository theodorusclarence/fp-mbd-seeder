const squel = require('squel');
const faker = require('faker/locale/id_ID');
const fs = require('fs');
faker.locale = 'id_ID';

for (let i = 0; i < 10000; i++) {
  console.log(i);

  const content = squel
    .insert()
    .into('students')
    .setFields({
      email: faker.internet.email(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
    })
    .toString();

  fs.writeFile('name.txt', content + '\n', { flag: 'a+' }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}
