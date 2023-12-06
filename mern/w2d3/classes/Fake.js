const { faker } = require('@faker-js/faker');


class Fake {
    constructor(){
        this.name = faker.person.fullName();
        this.companyName = faker.company.name();
        this.commonSaying = faker.hacker.phrase();
        this.createdAt = faker.date.anytime();
    }
}

module.exports = Fake;