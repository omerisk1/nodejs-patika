const fs = require("fs");

const writeFile = () => {
  fs.writeFile(
    "employees.json",
    '{"name": "Employee 1 Name", "salary": 2000}',
    "utf8",
    (err) => {
      if (err) console.error(err);
      console.log("json dosya oluşturuldu.");
      readFile();
    }
  );
};

const readFile = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) console.error(err);
    console.log(data);
    console.log("json dosyası okundu");
    appendFile();
  });
};

const appendFile = () => {
  fs.appendFile(
    "employees.json",
    '\n{"name": "Employee 2 Name", "salary": 4000}',
    "utf8",
    (err) => {
      if (err) console.error(err);
      console.log("json dosyasındaki veri güncellendi");
      deleteFile();
    }
  );
};

const deleteFile = () => {
  fs.unlink("employees.json", (err) => {
    if (err) console.error(err);
    console.log("json dosyası silindi");
  });
};

writeFile();
