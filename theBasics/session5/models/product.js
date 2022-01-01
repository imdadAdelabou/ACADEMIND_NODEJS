const fs = require("fs");
const path = require("path");


// const filePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');
class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        let filePath = path.join(__dirname, '../', 'data', 'products.json');
        fs.readFile(filePath, (err, content) => {
            let products = [];
            if (!err) {
                products = JSON.parse(content);
            }
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        let filePath = path.join(__dirname, '../', 'data', 'products.json');
        fs.readFile(filePath, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
};

module.exports = Product;