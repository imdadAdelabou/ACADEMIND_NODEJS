const fs = require("fs");
const path = require("path");

function getProductFromFile(cb) {
    let filePath = path.join(__dirname, '../', 'data', 'products.json');
    fs.readFile(filePath, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};
// const filePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');
class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        let filePath = path.join(__dirname, '../', 'data', 'products.json');
        getProductFromFile((products) => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductFromFile((products) => {
            cb(products);
        });
    }
};

module.exports = Product;