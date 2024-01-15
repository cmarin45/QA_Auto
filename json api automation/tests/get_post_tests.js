const { spec, request } = require('pactum');
const baseUrl = 'https://jsonplaceholder.typicode.com'
const { faker } = require('@faker-js/faker');

describe('get posts test suite', ()=>{
    before(async() => {
        request.setDefaultTimeout(10000);
    });
    it('test status code', async ()=>{
        await spec()
        .get(`${baseUrl}/posts`)
        .expectStatus(200)
    })
    it('test POST', async ()=>{
        const randomFullName = faker.person.fullName();
        const requestBody = {
            "userId": 2,
            "title": randomFullName,
            "body": "body2"
        };

        console.log(randomFullName);
    await spec().post(`${baseUrl}/posts`)
    .withBody(requestBody)
    .expectStatus(201)
    .expectJsonLike('title', requestBody.title)
    .expectJsonLike('body', requestBody.body)
    })
});