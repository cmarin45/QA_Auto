const { spec, request } = require("pactum");
const { faker } = require('@faker-js/faker');

const baseUrl = 'https://test-api.k6.io/';

describe('Login user test suite', () => {
    before(async() => {
        request.setDefaultTimeout(10000);
    });

    it('login user test', async () => {
        const requestBody = {
            "username": "unk4588",
            "password": "123123"
        };

        await spec().post(`${baseUrl}/auth/token/login/`)
        .withHeaders('Content-Type','application/json')
        .withBody(requestBody)
        .expectStatus(200)
    });
});