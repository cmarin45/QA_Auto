const { spec, request } = require("pactum");
const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Get post by ID test suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });
  it("get post by id test", async () => {
    const postId = 1;
    await spec()
      .get(`${baseUrl}/posts/${postId}`)
      .inspect()
      .expectStatus(200)
      .expectResponseTime(10000);
  });
});