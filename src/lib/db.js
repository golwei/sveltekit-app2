import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('$lib/database.sqlite');

function create_db() {
    db.run(`CREATE TABLE products (
        id TEXT PRIMARY KEY,
        name TEXT,
        description TEXT,
        price REAL,
        image TEXT
      )`);
}
/**
 * @param {{ id: any; name: any; description: any; price: any; image: any; }} product
 */
function insert(product) {
    db.run(`INSERT INTO products (id, name, description, price, image) 
  VALUES (?, ?, ?, ?, ?)`,
        [product.id, product.name, product.description, product.price, product.image],
        (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Product added successfully.');
            }
        });

}

function close() {
    db.close((error) => {
        if (error) {
            console.error(error.message);
        } else {
            console.log('Database connection closed.');
        }
    });

}


// 获取所有商品
export async function getProducts() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM products', (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
}

// 获取单个商品
/**
 * @param {any} id
 */
export async function getProductById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM products WHERE id = ?', [id], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            }
        });
    });
}

// 添加商品
/**
 * @param {{ id: any; name: any; description: any; price: any; image: any; }} product
 */
export async function addProduct(product) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO products (id, name, description, price, image) VALUES (?, ?, ?, ?, ?)',
            [product.id, product.name, product.description, product.price, product.image],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    // @ts-ignore
                    resolve();
                }
            });
    });
}

// 更新商品
/**
 * @param {{ name: any; description: any; price: any; image: any; id: any; }} product
 */
export async function updateProduct(product) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?',
            [product.name, product.description, product.price, product.image, product.id],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
    });
}

// 删除商品
/**
 * @param {any} id
 */
export async function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM products WHERE id = ?', [id], (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}

// 关闭数据库连接
// db.close();