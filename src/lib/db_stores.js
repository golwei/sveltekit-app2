import { writable } from 'svelte/store';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('path/to/your/database.sqlite');

// 创建可写的Svelte存储，用于在组件之间共享商品列表
export const products = writable([]);

// 从SQLite数据库中获取商品列表
export function getProducts() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM products', (error, rows) => {
      if (error) {
        reject(error);
      } else {
        products.set(rows);
        resolve(rows);
      }
    });
  });
}

// 向SQLite数据库中添加新商品
export function addProduct(product) {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO products (id, name, description, price, image) 
      VALUES (?, ?, ?, ?, ?)`, 
      [product.id, product.name, product.description, product.price, product.image],
      (error) => {
        if (error) {
          reject(error);
        } else {
          getProducts();
          resolve('Product added successfully.');
        }
      });
  });
}

// 从SQLite数据库中删除指定的商品
/**
 * @param {any} id
 */
export function deleteProduct(id) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM products WHERE id = ?', id, (error) => {
      if (error) {
        reject(error);
      } else {
        getProducts();
        resolve('Product deleted successfully.');
      }
    });
  });
}

// 更新指定的商品信息
/**
 * @param {{ name: any; description: any; price: any; image: any; id: any; }} product
 */
export function updateProduct(product) {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?`,
      [product.name, product.description, product.price, product.image, product.id],
      (error) => {
        if (error) {
          reject(error);
        } else {
          getProducts();
          resolve('Product updated successfully.');
        }
      });
  });
}

// 关闭SQLite数据库连接
export function closeDB() {
  db.close((error) => {
    if (error) {
      console.error(error.message);
    } else {
      console.log('Database connection closed.');
    }
  });
}
