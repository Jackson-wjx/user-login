# uer-login
## 用户注册登录

### 1、要使用 Node.js 和 MySQL 实现一个用户注册和登录的模块，首先需要安装 Node.js 和 MySQL 的相关依赖库。以下是一个简单的示例来实现这个功能： 
安装必要的依赖库： 

在项目根目录下运行以下命令来安装必要的依赖库： 

```js
npm init -y  
npm install express mysql body-parser bcryptjs jsonwebtoken  

```

这将会安装以下依赖库： 
- express：用于构建 Web 服务器
- mysql：用于连接和操作 MySQL 数据库
- body-parser：用于解析 HTTP 请求体中的数据
- bcryptjs：用于对密码进行加密
- jsonwebtoken：用于生成和验证 JSON Web Tokens（JWT） 

### 2、创建数据库和表： 
在 MySQL 中创建一个名为 mydb 的数据库，以及一个名为 users 的表。表结构如下：

```sql
CREATE DATABASE mydb;  
  
USE mydb;  
  
CREATE TABLE users (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  username VARCHAR(255) UNIQUE NOT NULL,  
  email VARCHAR(255) UNIQUE NOT NULL,  
  password VARCHAR(255) NOT NULL  
);  

```

### 3. 创建一个名为 app.js 的文件，并输入文件中的代码：

在此代码中，我们创建了一个简单的 Express 服务器，并定义了两个路由：/register 和 /login。用户可以通过发送 POST 请求到这些路由来注册和登录。

### 4. 在命令行中输入以下命令以运行 app.js 文件：

```bash
node app.js  
```

如果一切正常，您将看到以下输出： 
```
Server is running on port 3000  
Connected to the MySQL server.  
```
现在，您的服务器已在端口 3000 上运行，您可以使用 Postman 或其他 API 测试工具向 /register 和 /login 端点发送请求。请确保您已正确配置 MySQL 数据库连接，以便与您的数据库进行通信。

### 5.调用接口入库
见根目录 注册数据入库.png 截图