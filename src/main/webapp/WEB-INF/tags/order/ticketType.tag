<%--
功能: 显示map里动态key值数据。
--%>
<%@ tag language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<%@ tag import="com.xiaobaozi.dataSystem.order.vo.AirBookVO"%>

<%@ attribute name="order"
	type="com.xiaobaozi.dataSystem.order.vo.AirBookVO" required="true"
	description="订单"%>

<c:if test="${not empty order}">
	<c:choose>
		<c:when test="${order.isET eq 'Y'}">BSP</c:when>
		<c:when test="${order.isET eq 'B'}">B2B</c:when>
		<c:when test="${order.isET eq 'A'}">本票</c:when>
		<c:when test="${order.isET eq 'C'}">B2C</c:when>
		<c:when test="${order.isET eq 'W'}">外购</c:when>
		<c:otherwise>未知</c:otherwise>
	</c:choose>
</c:if>