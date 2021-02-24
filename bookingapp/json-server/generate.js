var faker = require('faker')

var db = {events:[]};

for(var i=0; i< 10;i++){
    db.events.push({
        eventId : i,
        imageurl : faker.image.city(),
        eventName :faker.random.words(3),
        eventDate:faker.date.soon(3),
        eventTime:faker.time.recent(),
        venueName:faker.random.words(2),
        availableSeats:faker.random.number(100),
        ticketPrice:faker.random.number(500),
        artistName : faker.name.firstName(),
        description :faker.lorem.sentences(7),
        approvalStatus : faker.random.number(1)

    })
}

console.log(JSON.stringify(db));


