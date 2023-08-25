const fs = require("fs");

const uploadSingle = (req, res) => {
  const file = req.file;

  fs.readFile(process.cwd() + "/public/img/" + file.filename, (err, data) => {
    if (err) {
      // Xử lý lỗi khi đọc file
      return res.status(500).send("An error occurred while reading the file.");
    }

    const base64Data = Buffer.from(data).toString("base64");
    const fileName = `data:${req.file.mimetype};base64,${base64Data}`;

    // Xóa hình
    fs.unlinkSync(process.cwd() + "/public/img/" + file.filename);

    res.send(fileName);
  });
};

module.exports = {
  uploadSingle,
};

// upload

// foodRoute.post("/upload", upload.single("data"), (req, res) => {
//   const file = req.file;

//   fs.readFile(process.cwd() + "/public/img/" + file.filename, (err, data) => {
//     //base 64 chỉ có thể giành cho hình, ko cho video & txt

//     const fileName = `data:${req.file.mimetype};base64,${Buffer.from(
//       data.toString("base64")
//     )}`;

//     // làm sao để nén

//     // xóa hình
//     fs.unlinkSync(process.cwd() + "/public/img/" + file.filename);
//     res.send(fileName);
//   });
// });
