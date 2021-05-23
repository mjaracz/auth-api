module.exports = {
  async up(db) {
    await db.collection('Users').insertMany([
      {
        userId: 0,
        username: 'michal@example.pl',
        name: 'michal',
        surname: 'kliniecki',
        password:
          '$2b$09$drMgYcU/obHFWjYB/Rf/M.Ka7fLO0QeBRmpKNGCceeTvLGw8cSdXe',
      },
      {
        userId: 1,
        username: 'john@gmail.com',
        name: 'john',
        surname: 'wadowski',
        password:
          '$2b$09$YRMYrcHFRmYVHJ0nucZfduKJbQ1lOYjWulQ7VY2GFPtYyI2JFcVh2',
      },
      {
        userId: 2,
        username: 'chris@onet.pl',
        name: 'chris',
        surname: 'litowski',
        password:
          '$2b$09$rE/UnO0N4DRNDQHs55Yexu7jmAmmPpsbXEA9qur07qSRAcPEAYUVG',
      },
    ]);
  },
  async down(db) {
    await db.collection('Users').remove({});
  },
};
