const { spec, request } = require('pactum');

describe('get posts test suite', ()=>{
    before(async() => {
        request.setDefaultTimeout(10000);
    });
    it('test status code', async ()=>{
        await spec()
        .get('https://jsonplaceholder.typicode.com/posts')
        .expectStatus(200)
    })
});