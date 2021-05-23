module.exports = {
  async up(db) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('Products').insertMany([
      {
        productId: 0,
        userId: 0,
        name: "sofa",
        price: 1200,
        quantity: 200,
        description: "Perfect blue furniture",
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 1,
        userId: 0,
        name: "dresser",
        price: 800,
        quantity: 20,
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 2,
        userId: 0,
        name: "chair",
        price: 350,
        quantity: 20,
        description: "Chairs, unlimited edition",
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 3,
        userId: 0,
        name: "pillow",
        price: 30,
        quantity: 300,
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "additional"
      },
      {
        productId: 4,
        userId: 1,
        name: "sofa red",
        price: 1200,
        quantity: 200,
        description: "We have perfect red furniture in magazine",
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 5,
        userId: 1,
        name: "dresser yellow",
        price: 800,
        quantity: 20,
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 6,
        userId: 1,
        name: "old wood chair",
        price: 350,
        quantity: 20,
        description: "Chairs, unlimited wood edition",
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "furniture"
      },
      {
        productId: 7,
        userId: 1,
        name: "sofa pillow",
        price: 30,
        quantity: 300,
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "additional"
      },
      {
        productId: 8,
        userId: 2,
        name: "lamps blue",
        price: 20,
        quantity: 250,
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "lamps"
      },
      {
        productId: 9,
        userId: 2,
        name: "lamps yellow",
        price: 25,
        quantity: 250,
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "lamps"
      },
      {
        productId: 10,
        userId: 2,
        name: "lamps red",
        price: 30,
        quantity: 250,
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "lamps"
      },
      {
        productId: 11,
        userId: 2,
        name: "lamps green",
        price: 15,
        quantity: 250,
        currency: {
          baseCurrency: "EUR",
          currency: "PLN",
          worth: 0.2249010435
        },
        type: "lamps"
      }
    ])
  },

  async down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('Products').remove({})
  }
};
