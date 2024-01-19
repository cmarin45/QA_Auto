const { spec, request } = require("pactum");
const { faker } = require('@faker-js/faker');
const { doLogin } = require("../utils/login");

const args = require('minimist')(process.argv.slice(2));

const baseUrl = args.env;

describe('POST crocodiles test suite', () => {
    let tokenValue = "";

    before(async () => {
        request.setDefaultTimeout(10000);
        tokenValue = await doLogin('test1234321', '123123123');
    });

    it('post crocodiles test', async () => {
        const requestBody = {
            "id": 1,
            "name": faker.person.firstName('male'),
            "sex": "M",
            "date_of_birth": "2010-06-27",
            "age": faker.number.int({ min: 1, max: 90 })
        };

        await spec().post(`${baseUrl}/my/crocodiles/`)
        .withHeaders('Authorization', `Bearer ${tokenValue}`)
        .withBody(requestBody)
        .expectStatus(201)
        console.log(tokenValue);
    });

    it('post crocodiles test - wrong token', async () => {
        const requestBody = {
            "id": 1,
            "name": faker.person.firstName('male'),
            "sex": "M",
            "date_of_birth": "2010-06-27",
            "age": faker.number.int({ min: 1, max: 90 })
        };

        await spec().post(`${baseUrl}/my/crocodiles/`)
        .withHeaders('Authorization', `Bearer qwerty`)
        .withBody(requestBody)
        .expectStatus(401)
    });

    it('post crocodiles test - unauthorized scenario', async () => {
        await spec().post(`${baseUrl}/my/crocodiles/`)
        .expectStatus(401)
    });
});