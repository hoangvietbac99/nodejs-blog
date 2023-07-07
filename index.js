const express = require("express"); //require() trả về tham chiếu tới 1 hàm cụ thể
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World")); //định nghĩa tuyến đường
app.listen(port, () =>
  console.log(`Example app listening at http:localhost:${port}`)
); //lắng nghe cổng http:localhost:${port}
