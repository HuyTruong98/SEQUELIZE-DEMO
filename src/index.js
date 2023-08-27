const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static(".")); // => định vị thư mục để lấy tài nguyên

const cors = require("cors");
app.use(cors());

app.listen(8080);

const rootRoute = require("./routes/rootRouter");

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

app.use("/api", rootRoute);

const options = {
  definition: {
    info: {
      title: "api",
      version: "1.0.0",
    },
  },
  apis: ["src/swagger/index.js"],
};

const specs = swaggerJsDoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

// file system
// const fs = require("fs");
// console.log(__dirname); // trả về đường dẫn file đang đứng
// console.log(process.cwd()); //(đa số dùng thằng này) trả về đường dẫn gốc của project

// // tạo một file
// fs.writeFile(process.cwd() + "/text.txt", "node 28", (err) => {}); // muốn ko có tham số thứ 3 err thì sử dụng hàm dưới
// // fs.writeFileSync(process.cwd() + "/text.txt", "node 28", (err) => {});

// // đọc file
// fs.readFile(process.cwd() + "/text.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// xóa file
// fs.unlink(process.cwd() + "/text.txt", (err) => {});
