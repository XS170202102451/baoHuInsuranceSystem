<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Common Page</h1>
	<p>每个人都能访问的页面.</p>
	<a href="/baoHuInsuranceSystem/main/admin.htm"> Go AdminPage </a>
	<br />
	<a href="/baoHuInsuranceSystem/auth/login.htm">退出登录</a>

</body>
</html>