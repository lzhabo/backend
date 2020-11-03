import axios from "axios";

describe("items", () => {
  it("create", async () => {
    await axios.post("http://localhost:5000/api/v1/items", {
      name: "Test",
      description: "test",
      isFragile: true,
      price: 1000,
    });
  });

  it("get", async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/items");
    console.log(data);
  });

  it("update", async () => {
    const id = "5fa15de43c0913e32134da51";
    await axios.put(`http://localhost:5000/api/v1/items/${id}`, {
      description: "Lorem Ipsum",
    });
  });

  it("delete", async () => {
    const id = "5fa15f123c0913e32134da52";
    await axios.delete(`http://localhost:5000/api/v1/items/${id}`);
  });
});

describe("users", () => {
  it("create", async () => {
    await axios.post("http://localhost:5000/api/v1/users", {
      name: "Test",
    });
  });

  it("get", async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/users");
    console.log(data);
  });

  it("update", async () => {
    const id = "5fa15de43c0913e32134da51";
    await axios.put(`http://localhost:5000/api/v1/users/${id}`, {
      description: "Lorem Ipsum",
    });
  });

  it("delete", async () => {
    const id = "5fa15de43c0913e32134da51";
    await axios.delete(`http://localhost:5000/api/v1/users/${id}`);
  });
});

//post tests
describe("posts", () => {
  it("create", async () => {
    await axios.post("http://localhost:5000/api/v1/posts", {
      name: "Test",
    });
  });

  it("get", async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/posts");
    console.log(data);
  });

  it("update", async () => {
    const id = "5fa15de43c0913e32134da51";
    await axios.put(`http://localhost:5000/api/v1/posts/${id}`, {
      description: "Lorem Ipsum",
    });
  });

  it("delete", async () => {
    const id = "5fa15de43c0913e32134da51";
    await axios.delete(`http://localhost:5000/api/v1/posts/${id}`);
  });
});
