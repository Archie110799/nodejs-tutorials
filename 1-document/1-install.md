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

