//console.log("hello");

import http, { request } from "http";
import "dotenv/config";
import axios from "axios";
import fs from "fs";

const port = process.env.PORT;
const host = process.env.HOST;

//ES5
/*const apiCall =()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res => console.log(res)))
  .catch(err => console.log(err));

}
apiCall()*/

const fetchApiCall = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);
    fs.writeFile(
      "response.json",
      JSON.stringify(response.data),
      "utf-8",
      (err) => {
        if (err) throw err;
      }
    );
  } catch (err) {
    console.log(err);
  }
};

fetchApiCall();

const server = http.createServer(
  (request,
  (response) => {
    response.end("Hello");
  })
);

server.listen(port, host, () =>
  console.log(`Server is running on http://${host}:${port}`)
);
