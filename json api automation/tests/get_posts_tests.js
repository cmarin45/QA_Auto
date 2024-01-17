const { spec, request } = require("pactum");
const baseUrl = "https://jsonplaceholder.typicode.com";
const getPostSchema = require('../data_response/get posts schema.json');

describe("Get all posts test suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });
  it("get all post test", async () => {
    await spec()
      .get(`${baseUrl}/posts`)
      .expectStatus(200)
      .expectResponseTime(10000)
      .expectJsonSchema(getPostSchema)
  });
});