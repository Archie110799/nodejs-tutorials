# Doc
- Validation: https://express-validator.github.io/docs/
Là một tập hợp các phần mềm trung gian express.js bao bọc các chức năng trình xác thực validator.js


- Middleware: https://expressjs.com/en/guide/writing-middleware.html
Các chức năng phần mềm trung gian là các chức năng có quyền truy cập vào đối tượng yêu cầu (req), 
đối tượng phản hồi (res) và chức năng tiếp theo trong chu kỳ phản hồi yêu cầu của ứng dụng. 
Chức năng tiếp theo là một chức năng trong bộ định tuyến Express, 
khi được gọi ra, sẽ thực thi phần mềm trung gian kế tiếp phần mềm trung gian hiện tại.

Install: npm install jsonwebtoken --save


- Cookie    : https://www.npmjs.com/package/cookie-parser
Phân tích cú pháp tiêu đề Cookie và điền req.cookies với một đối tượng được khóa bởi tên cookie. 
Theo tùy chọn, bạn có thể bật hỗ trợ cookie đã ký bằng cách chuyển một chuỗi bí mật, 
chuỗi này sẽ gán req.secret để nó có thể được phần mềm trung gian khác sử dụng. 