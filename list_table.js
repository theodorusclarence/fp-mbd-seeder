const format = require('date-fns/format');
const faker = require('faker/locale/id_ID');
faker.locale = 'id_ID';
const i = 0;
const anggota = {
  ag_id: i,
  ag_nama: faker.name.findName(),
  ag_institusiasal: 'UNIVERSITAS ' + faker.address.state().toUpperCase(),
  ag_email: faker.internet.email(),
  ag_password: faker.internet.password(),
};

const kep = {
  kep_id: i,
  kep_nama: faker.name.findName(),
  kep_email: faker.internet.email(),
  kep_password: faker.internet.password(),
  kep_instansi: 'UNIVERSITAS ' + faker.address.state().toUpperCase(),
  kep_alamat: faker.address.streetAddress(),
  kep_provinsi: faker.address.state(),
  kep_kotakab: faker.address.cityName(),
  kep_notelp: faker.phone.phoneNumber('+628#########'),
  kep_reknamabank: 'BANK ' + faker.address.state().toUpperCase(),
};

const dhl = {
  dhl_id: i,
  kep_id: i,
  dhl_nama: faker.random.arrayElement([
    'PENELITIAN TESIS',
    'PENELITIAN DINKES',
    'PENELITIAN MAHASISWA',
    'PENELITIAN DOKTOR',
    'PENELITIAN KESEHATAN',
    'SWASTA',
    'BUMN',
  ]),
  dhl_biaya: faker.datatype.number({ min: 50000, max: 500000 }),
  dhl_deksripsi: 'Penelitian yang mantap',
  dhl_hargavalidstart: '2020-12-01',
  dhl_hargavalidend: '2025-08-15',
};

const peneliti = {
  p_id: i,
  pu_id: i,
  p_nama: faker.name.findName(),
  p_instansi: 'UNIVERSITAS ' + faker.address.state().toUpperCase(),
  p_email: faker.internet.email(),
  p_nik: faker.phone.phoneNumber('################'),
};

const pengusul = {
  pu_id: i,
  p_id: i * 5,
  pu_nama: faker.name.findName(),
  pu_instansi: 'UNIVERSITAS ' + faker.address.state().toUpperCase(),
  pu_nik: faker.phone.phoneNumber('################'),
  pu_email: faker.internet.email(),
  pu_password: faker.internet.password(),
  pu_nokontak: faker.phone.phoneNumber('+628#########'),
};

const protokol = {
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
};
console.log({ protokol });
