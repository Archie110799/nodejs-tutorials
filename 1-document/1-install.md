# https://www.npmjs.com/package/express
# https://expressjs.com/en/starter/hello-world.html

# VSCode Extension
node-snippets : https://marketplace.visualstudio.com/items?itemName=chris-noring.node-snippets

# Step
- npm init : Tạo file package.json
- npm install express : 
- Tạo index.js -> run app: node index.js


# Nodemon https://www.npmjs.com/package/nodemon
nodemon is a tool that helps develop Node.js based applications by automatically restarting 
the node application when file changes in the directory are detected.
## install 
install :   npm install --save-dev nodemon
config  :   "start" : "nodemon --inspect index.js"
## open devtool
chrome://inspect

# Morgan https://www.npmjs.com/package/morgan
HTTP request logger middleware for node.js
## install 
install :   npm install --save-dev morgan

# Template engine (handlebars) https://www.npmjs.com/package/express-handlebars

## install
npm install express-handlebars --save-dev

# CORS - Cross-origin resource sharing
- Chia sẻ tài nguyên của các domain khác nhau cho nhau

Cors là 1 pakage hết sức tiện lợi, 
cung cấp các middleware cho phép ta enable cors với nhiều option 
để tùy chỉnh và ngắn gọn cho express.

# Environment Variables
- Setting các giá trị cho từng môi trường mà bạn mong muốn.
+ HTTP port to listen on
+ Đường dẫn và thư mục tệp của bạn
+ Chỉ định vào các môi trường development, staging, test, or production database
+ Các ví dụ khác có thể là URL tới server resources
- Install: https://www.npmjs.com/package/dotenv

# Lưu ý
## NodeJS phiên bản < v12.0.0: chưa có hỗ trợ cú pháp import/export của ECMAScript modules (ES Modules)
const jwt = require('jsonwebtoken')
## NodeJS phiên bản v12.0.0 trở lên, NodeJS đã support ES Modules đầy đủ import/export
import jwt from 'jsonwebtoken'
## Recomend dùng NodeJS > v12
Khai báo tại file package.json: "type": "module"

