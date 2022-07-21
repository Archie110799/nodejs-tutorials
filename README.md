# nodejs-tutorials
> Documents of course will be move to (https://documents.aptech.io/docs/category/c-backend-with-nodejs)

# ⭐ A. SETUP DEVELOPMENT ENVIROMENT

1. Nodejs: https://nodejs.org/en/ (Cài bản LTS)
2. Yarn (https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. Git SCM: https://git-scm.com/download/
4. Visual Studio Code: https://code.visualstudio.com/Download
5. Cài đặt các Extensions cho Visual Studio Code
   - Auto Rename (Jun Han)
   - Auto Close Tag (Jun Han)
   - ESLint (Microsoft)
   - IntelliCode (Microsoft)
   - JavaScript (ES6) code snippets (charalampos karypidis)
   - ES7+ React/Redux/React-Native snippets (dsznajder)
   - npm (Microsoft)
   - npm Intellisense (Christian Kohler)
   - Prettier - Code formatter (Prettier)
   - TSLint (Microsoft)
   - Typescript React code snippets (infeng)
   - Vscode-styled-components (Julien Poissonnier)
6. Cài đặt các tiện ích cho Visual Studio Code:

   - Better Comments (Aaron Bond)
   - Color Highlight (Sergii N)
   - Icon: Material Icon Theme (Philipp Kief)
   - Theme: Dracula Official (Dracula Theme)

# ⭐ B. REACT BASIC

## 1. Javascript ESNext

# GIT

## Add repo exist
git init
git remote add origin <HTTPS>
git checkout -b  master
git add .
git commit -m 'init code'
git push
## git add .
Thêm toàn bộ những file thay đổi
## git commit -m 'text'
Tạo commit
## git push
Đẩy code lên github
## git log --oneline
Check lịch sử commit ở local
## git reset 
Reset lại commit trước đó
## JSON SERVER
install : npm install json-server axios -- save-dev
config  : "mock-server": "json-server ./mock-db/db.json",
run     : npm run mock-server
