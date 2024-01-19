const { spec, request } = require("pactum");
const { faker } = require('@faker-js/faker');
const { doLogin } = require("../utils/login");

const args = require('minimist')(process.argv.slice(2));

const baseUrl = args.env;

describe('GET crocodiles test suite', () => {
    let tokenValue = "";

    before(async () => {
        request.setDefaultTimeout(10000);

        tokenValue = await doLogin('test1234321', '123123123');
        // const requestBody = {
        //     "username": "test1234321",
        //     "password": "123123123"
        // };
        // const response = await spec().post(`${baseUrl}/auth/token/login/`)
        // .withHeaders('Content-Type','application/json')
        // // .inspect()
        // .withBody(requestBody)
        // .expectStatus(200);
        // tokenValue = response.body.access;
    });

    it('get crocodiles test', async () => {
        await spec().get(`${baseUrl}/my/crocodiles/`)
        .withHeaders('Authorization', `Bearer ${tokenValue}`)
        .expectStatus(200)
    });

    it('get crocodiles test - wrong token', async () => {
        await spec().get(`${baseUrl}/my/crocodiles/`)
        .withHeaders('Authorization', `Bearer qwerty`)
        .expectStatus(401)
    });

    it('get crocodiles test - unauthorized scenario', async () => {
        await spec().get(`${baseUrl}/my/crocodiles/`)
        .expectStatus(401)
    });
});