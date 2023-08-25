const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.listen(8080);

const rootRoute = require("./routes/rootRouter");
app.use("/api", rootRoute);

// file system
const fs = require("fs");
console.log(__dirname); // trả về đường dẫn file đang đứng
console.log(process.cwd()); //(đa số dùng thằng này) trả về đường dẫn gốc của project

// tạo một file
fs.writeFile(process.cwd() + "/text.txt", "node 28", (err) => {}); // muốn ko có tham số thứ 3 err thì sử dụng hàm dưới
// fs.writeFileSync(process.cwd() + "/text.txt", "node 28", (err) => {});

// đọc file
fs.readFile(process.cwd() + "/text.txt", "utf-8", (err, data) => {
  console.log(data);
});

// xóa file
// fs.unlink(process.cwd() + "/text.txt", (err) => {});
