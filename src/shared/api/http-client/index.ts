import ky from "ky";

export const httpClient = ky.create({
  prefixUrl: "https://jsonplaceholder.typicode.com",
});
