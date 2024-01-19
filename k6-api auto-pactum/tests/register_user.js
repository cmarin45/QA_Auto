const { spec, request } = require("pactum");
const baseUrl = 'https://test-api.k6.io/';
const { faker } = require('@faker-js/faker');

describe('Register user test suite', () => {
    before(async() => {
        request.setDefaultTimeout(10000);
    });

    it('register user test', async () => {
        const requestBody = {
            "username": faker.internet.userName(),
            "first_name": "john",
            "last_name": "doe",
            "email": faker.internet.email(),
            "password": "123456"
        };

        await spec().post(`${baseUrl}/user/register/`)
        .withHeaders('Content-Type','application/json')
        .withBody(requestBody)
        .expectStatus(201)
    });
});