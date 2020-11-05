import axios from "axios";
import { TPostDocument } from "../src/models/Post";
import { TUserDocument } from "../src/models/User";

const randomApiToken = "52756d93b5eb0e50798dc1f93200f96f";

function randomInteger(min: number, max: number) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

async function getRandomName(): Promise<string> {
  const {
    data: { name },
  } = await axios.post(
    `https://random.api.randomkey.io/v1/name/full`,
    { gender: "0", region: "us", records: 1 },
    {
      headers: {
        auth: randomApiToken,
        "Content-Type": "application/json",
      },
    }
  );
  return name;
}

async function getRandomLocation(): Promise<string> {
  const {
    data: { location },
  } = await axios.post(
    `https://random.api.randomkey.io/v1/location`,
    { region: "ru", records: 1 },
    {
      headers: {
        auth: randomApiToken,
        "Content-Type": "application/json",
      },
    }
  );
  return location[2];
}

async function getRandomDescription(): Promise<string> {
  const { data } = await axios.get(`https://litipsum.com/api/1`);
  return data.slice(0, randomInteger(20, 500));
}

async function getRandomPhotoUrl(): Promise<string> {
  const { request } = await axios.get(`https://picsum.photos/1080/1080`);
  return request.res.responseUrl;
}

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
//users
describe("users", () => {
  it("create", async () => {
    await axios.post("http://localhost:5000/api/v1/users", {
      name: "Test1",
      avatar: "https://i.pravatar.cc/300",
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
      user: "5fa19050090509ee7c6eb330",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      location: "somewhere",
      photo: "https://i.pravatar.cc/300",
      likes: Math.round(Math.random() * 10 + 200),
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

//fill db
describe("fill db", () => {
  it("fill users", async () => {
    await Promise.all(
      Array.from({ length: 15 }, async () =>
        axios.post("http://localhost:5000/api/v1/users", {
          name: await getRandomName(),
          avatar: await getRandomPhotoUrl(),
        })
      )
    );
  }, 10000000);

  it("fill posts", async () => {
    const { data: users } = await axios.get("http://localhost:5000/api/v1/users");

    const createPost = async () => {
      const location = await getRandomLocation();
      const likes = Math.round(Math.random() * 10 + 200);
      const description = await getRandomDescription();
      const user = users[randomInteger(1, users.length)];
      const photo = await getRandomPhotoUrl();
      const comments = await Promise.all(
        Array.from({ length: randomInteger(5, 15) }, getRandomDescription)
      );
      return {
        location,
        likes,
        description,
        user,
        photo,
        comments,
      };
    };

    await Promise.all(
      Array.from(
        { length: 15 },
        async () => axios.post("http://localhost:5000/api/v1/posts", await createPost()),
        {}
      )
    );
  }, 10000000);
});

describe("delete data", () => {
  it("delete posts", async () => {
    const { data: posts } = await axios.get("http://localhost:5000/api/v1/posts");
    await Promise.all(
      posts.map(({ _id }: TPostDocument) =>
        axios.delete(`http://localhost:5000/api/v1/posts/${_id}`)
      )
    );
  });
  it("delete users", async () => {
    const { data: posts } = await axios.get("http://localhost:5000/api/v1/users");
    await Promise.all(
      posts.map(({ _id }: TUserDocument) =>
        axios.delete(`http://localhost:5000/api/v1/users/${_id}`)
      )
    );
  });
});
