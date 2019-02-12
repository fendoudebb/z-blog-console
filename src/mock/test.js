const Mock = require("mockjs");

const baseUrl = process.env.BASE_URL;

const value = {roles: ['role_admin']};

const data = {"number":0,"numberOfElements":1,"size":1,"totalCount":19,"totalPages":19,"content":[{"id":19,"title":"aaaa","author":"msj","keywords":"aaaa","description":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","original":true,"originalLink":null,"updateTime":"2018-07-05","topic":"android","auditStatus":1}],"lastModifyTime":null};

Mock.mock(baseUrl+"/login?username=aaa&password=aaa", "post", {msg: 'login success', code: 0, data: value});
Mock.mock(baseUrl+"/logout", "post", {msg: 'logout success', code: 0});
Mock.mock(baseUrl+"/admin/post/list", "post", {msg: 'logout success', code: 0,data: data});
