const { spec, request } = require("pactum");
const baseUrl = "https://jsonplaceholder.typicode.com";

describe("Delete post by ID test suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });
  it("delete post by id test", async () => {
    const postId = 1;
    await spec()
      .delete(`${baseUrl}/posts/${postId}`)
      .expectStatus(200)
      .expectResponseTime(10000);
  });
});
