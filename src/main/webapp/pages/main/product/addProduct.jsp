<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/styles/newStyle/normalize.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/styles/newStyle/bootstrap/bootstrap.min.css">
<%--<script type="text/javascript" src="${pageContext.request.contextPath}/styles/newStyle/bootstrap/jquery.min.js"></script>--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/styles/acbox/css/jquery.ajaxComboBox.3.7.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/styles/acbox/acbox.css" type="text/css">
<script type="text/javascript" src="${pageContext.request.contextPath}/styles/acbox/js/jquery.ajaxComboBox.3.7.js" charset="UTF-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/styles/acbox/acbox.js?ver=1" charset="UTF-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/styles/newStyle/bootstrap/bootstrap.min.js"></script>
<style>
    ul {overflow: hidden;margin-bottom:auto;}

    .ui_addUser ul li {width: 100%;}
    .ui_addUser ul li label {width: 150px;position: static;}
    input {border: 1px solid #bbb;}
    #template {display: none;}
    table td,table th {text-align: center;}
    .tab-block {padding: 8px;}
    .tab__tag-title {margin: 8px 0 12px;}
    .tab__tag-list {margin-bottom: 32px;}
    .tab__tag-btn input {width: 0;height: 0;opacity: 0;position: absolute;}
    .tab__tag-btn input:checked       ~.text {background-color: #ff756c;}
    .tab__tag-btn {display: inline-flex;position: relative;margin-right: 16px;}
    .tab__tag-btn .text {
        display: inline-block;
        /*width: 100%;*/
        height: 100%;
        line-height: 40px;
        text-align: center;
        white-space: nowrap;
        color: white;
        background-color: grey;
        border-radius: 4px;
        transition: all 0.3s ease;
        padding: 0px 20px;
    }
    .nav .nav-link {color: #343a40;}
    /*=====================*/
    .nav {height: auto;background: none;}
    input {width: auto;padding-left: initial;border: none;}
    .input-group-text input{
        height: auto;
    }
    .btn1{border: 1px solid transparent;}
    .bottom-panel{margin-top: 10px;}
    .bottom-panel .btn1{padding: .575rem .85rem;font-size: 1rem;border-radius: 4px;}
    .btn-block{
        font-size: 18px;
        font-weight: 600;
        color: black;
        background-color: transparent;
        border: 1px solid transparent;
        height: 24px;
        outline: none !important;
    }
    .btn-link:hover {
        color: black !important;
        text-decoration: none !important;
    }
    .modal-backdrop {
        position: initial !important;
    }
    .btn2{
        border: 1px solid transparent;
        padding: .375rem .75rem;
        border-radius: .25rem;
    }
    label.col-1.col-form-label.text-right {
        padding-left: initial;
    }
    .search_company{
        margin-bottom: 10px;
    }
    .search_company input{
        border: 1px solid #ced4da;border-radius: .25rem;padding: .375rem .75rem;width: 400px;
    }
    .btn-del-tag{
        color: #007bff !important;
        margin-left: 6px;
        padding-top: 17px;
    }
    *, ::after, ::before {
        box-sizing: inherit !important;
    }
    .content{
        box-sizing: border-box !important;
    }
</style>
<div class="content" id="app" >
    <form id="addform" method="post" enctype="multipart/form-data" autocomplete="off">
        <input type="hidden" name="fileid" id="fileid" />
        <div>
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            基础信息
                            <i class="icon el-icon-arrow-up"></i>
                        </button>
                    </h2>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
                    <div class="card-body">
                        <div class="tab-pane fade show active tab-info card p-3" id="pills-info">
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">*产品名称</label>
                                <div class="col-5">
                                    <input class="form-control" name="name" id="name" maxlength="50">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">保险类型</label>
                                <div class="col-5">
                                    <select class="form-control" name="insuranceTypeId" id="insuranceTypeId">
                                        <c:forEach items="${typeLs}" var="s">
                                            <option value="${s.id}" rules="${fn:replace(s.rules,'\"','\'')}" calculations="${fn:replace(s.calculations,'\"','\'')}">${s.content}</option>
                                        </c:forEach>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">承保公司 </label>
                                <div class="col-5">
                                    <input type="hidden" name="companyId" id="companyId">
                                    <input type="hidden" name="insuranceCompanyId" id="insuranceCompanyId">
                                    <input class="form-control" type="text" name="companyName" id="companyName" style="width: 80%;float: left;" disabled>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" style="margin-top: 3px;" onclick="addCompany()">添加</button>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">适用人群</label>
                                <div class="col-5">
                                    <select class="form-control" name="ageTypeId">
                                        <option value="">请选择</option>
                                        <c:forEach items="${suitableLs}" var="s">
                                            <option value="${s.id}">${s.content}</option>
                                        </c:forEach>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">发布时间</label>
                                <div class="col-5">
                                    <input name="publishTime" type="text" class="Wdate form-control" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" style="width:220px;" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">条款附件</label>
                                <div class="col-5">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input type="checkbox" name="clauseOr" id="clauseOr" value="2"> <span class="d-inline-block ml-2">启用</span>
                                            </div>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" name="file" id="inputGroupFile01"> <label class="custom-file-label" for="inputGroupFile01">选择文件，可上传多个附件，仅支持PDF格式</label><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">&nbsp</label>
                                <div class="col-5">
                                    <div class="input-group">
                                        <input type="hidden" name="deleteFileIds" id="deleteFileIds" value="">
                                        <div id="fileIdName"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="block pt-3 mt-3 mb-5 border-top">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">合作供应商</h5>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" id="btnAddVendor">添加</button>
                                </div>
                                <div class="table-list vendor-list" id="vendorListId">
                                    <div class="card bg-light my-3 vendor-item table-item" id="cooperationItemId0" name="cooperationItem">
                                        <div class="card-header d-flex align-items-center">
                                            <div>
                                                <input type="hidden" name="cooperationSupplierLs[0].recommendStatus" id="recommendStatusId0" value="1"/>
                                                <input class="d-inline-block mr-1" id="recommendStatusIdCP0" type="checkbox" onclick="clickCheckbox(0)" checked>
                                                <label class="text-center">推荐</label>
                                            </div>
                                            <button class="btn1 btn-sm btn-secondary ml-auto btn-del-item1">删除</button>
                                        </div>
                                        <div class="card-body">
                                            <div class="form-group row">
                                                <label class="col-1 col-form-label text-right">销售渠道</label>
                                                <div class="col-4">
                                                    <select class="form-control channel_required" name="cooperationSupplierLs[0].dictionaryContentId">
                                                        <option value="">请选择</option>
                                                        <c:forEach items="${saleChannelLSlist}" var="s">
                                                            <option value="${s.id}">${s.content}</option>
                                                        </c:forEach>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-1 col-form-label text-right"> *投保链接 </label>
                                                <div class="col-8">
                                                    <input class="form-control insure_required" name="cooperationSupplierLs[0].insureLink">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-1 col-form-label text-right"> *条款链接 </label>
                                                <div class="col-8">
                                                    <input class="form-control clause_required" name="cooperationSupplierLs[0].clauseLink">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button class="btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            产品保障
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo">
                    <div class="card-body">
                        <div class="tab-pane fade show tab-guarantee card p-3" id="pills-guarantee">
                            <div class="block mt-3 mb-5">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">保什么</h5>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" data-action="add" data-toggle="modal" id="addModalGuardWhat">添加</button>
                                    <%--                                    <button type="button" class="btn1 btn-sm btn-info ml-3" data-action="add" data-toggle="modal" data-target="#modalGuardWhat">添加</button>--%>

                                </div>
                                <div class="mt-3">
                                    <table class="table table-hover table-bordered">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th width="10%">推荐</th>
                                            <th width="15%">保障内容</th>
                                            <th width="10%">保额</th>
                                            <th width="50%">保障简介</th>
                                            <th>操作</th>
                                        </tr>
                                        </thead>
                                        <tbody class="table-list guard-what-list" id="modalGuardWhatItems">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="block mt-3 mb-5">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">增值服务</h5>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" data-toggle="modal" id="addModalGuardBuyService">添加</button>
                                    <%--                                    <button type="button" class="btn1 btn-sm btn-info ml-3" data-toggle="modal" data-target="#modalGuardBuyService" data-action="add">添加</button>--%>
                                </div>
                                <div class="mt-3">
                                    <table class="table table-hover table-bordered">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th width="35%">增值服务</th>
                                            <th width="50%">描述</th>
                                            <th>操作</th>
                                        </tr>
                                        </thead>
                                        <%--                                        <tbody class="table-list" id="modalGuardBuyServiceItems">--%>
                                        <tbody class="table-list guard-service-list" id="modalGuardBuyServiceItems">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="block mt-3 mb-5">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">续保规则</h5>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" data-toggle="modal"  id="addModalGuardRenewRule" data-action="add">添加</button>
                                    <%--                                    <button type="button" class="btn1 btn-sm btn-info ml-3" data-toggle="modal" data-target="#modalGuardRenewRule" data-action="add">添加</button>--%>
                                </div>
                                <div class="mt-3">
                                    <table class="table table-hover table-bordered">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th width="35%">续保规则</th>
                                            <th width="50%">描述</th>
                                            <th>操作</th>
                                        </tr>
                                        </thead>
                                        <tbody class="table-list guard-renew-rule-list" id="modalGuardRenewRuleItems">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="block mt-3 mb-5">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">不保什么</h5>
                                </div>
                                <div class="mt-3">
                                    <textarea class="form-control" name="notGuaranteedSituation" rows="10"></textarea>
                                </div>
                            </div>
                            <div class="block mt-3 mb-5">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">投保规则</h5>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" data-toggle="modal" id="addModalGuardBuyRule" data-action="add">添加</button>
                                    <%--                                    <button type="button" class="btn1 btn-sm btn-info ml-3" data-toggle="modal" data-target="#modalGuardBuyRule" data-action="add">添加</button>--%>
                                </div>
                                <div class="mt-3">
                                    <table class="table table-hover table-bordered">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th width="30%">规则类别</th>
                                            <th width="55%">规则内容</th>
                                            <th>操作</th>
                                        </tr>
                                        </thead>
                                        <tbody class="table-list guard-buy-rule-list" id="modalGuardBuyRuleItems">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                        <button class="btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            产品点评
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" class="collapse show" aria-labelledby="headingThree">
                    <div class="card-body">
                        <div class="tab-pane fade show tab-comment card p-3" id="pills-comment">
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">亮点</label>
                                <div class="col-10">
                                    <textarea class="form-control" name="brightspot" id="brightspot" rows="6" maxlength="500"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right"> 不足 </label>
                                <div class="col-10">
                                    <textarea class="form-control" name="insufficient" rows="6" maxlength="500"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">注意事项</label>
                                <div class="col-10">
                                    <textarea class="form-control" name="attention" rows="6" maxlength="500"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">适合人群</label>
                                <div class="col-10">
                                    <textarea class="form-control" name="suitable" rows="6" maxlength="500"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-2 col-form-label text-right">综合点评</label>
                                <div class="col-10">
                                    <textarea class="form-control" name="comment" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h2 class="mb-0">
                        <button class="btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            保费测算
                        </button>
                    </h2>
                </div>
                <div id="collapseFour" class="collapse show" aria-labelledby="headingFour">
                    <div class="card-body">
                        <div class="tab-pane fade show tab-caculate card p-3" id="pills-caculate">
                            <div class="block mt-3 mb-5">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">保费测算</h5>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" id="addCaculateItem">添加</button>
                                </div>
                                <div class="mt-3">
                                    <table class="table table-hover table-bordered caculate-list" id="caculateList">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th>年龄</th>
                                            <th>保额(万元)</th>
                                            <th>首年保费(元)</th>
                                            <th>操作</th>
                                        </tr>
                                        </thead>
                                        <tbody class="table-list">
                                        <tr class="table-item caculate-item">
                                            <td><select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select></td>
                                            <td><input type="text" class="form-control"></td>
                                            <td><input type="text" class="form-control"></td>
                                            <td>
                                                <button class="btn1 btn-sm btn-secondary mr-1 m-btn-del-cal btn-del-item">删除</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="form-group row border-top pt-3">
                                    <label class="col-1 col-form-label text-right">保费说明</label>
                                    <div class="col-11">
                                        <textarea class="form-control" name="premiumsExplain" rows="6" placeholder="本页面保费试算不含恶性肿瘤二次赔付、少儿/成人特定疾病、身故保障、重疾医疗津贴" maxlength="500"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFive">
                    <h2 class="mb-0">
                        <button class="btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            产品标签
                        </button>
                    </h2>
                </div>
                <div id="collapseFive" class="collapse show" aria-labelledby="headingFive">
                    <div class="card-body">
                        <div class="tab-pane fade show tab-tag card p-3" id="pills-tag">
                            <div class="block mt-3 mb-5">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">同类产品标签（必选，单选）</h5>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" onclick="addSimilarLabel()">添加</button>
                                </div>
                                <div class="tab__tag-list mt-3" id="similarLabelId">
                                </div>
                            </div>
                            <div class="block mt-3 mb-5">
                                <div class="block-title d-flex align-items-center">
                                    <h5 class="mb-0">产品特色标签（多选）</h5>
                                    <button type="button" class="btn1 btn-sm btn-info ml-3" onclick="addSpecialLabel()">添加</button>
                                </div>
                                <div class="tab__tag-list mt-3" id="specialLabelIds">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center pb-3 bottom-panel">
            <button type="button" id="addBtn"  class="btn1 btn-primary mr-5">保存</button>
            <button type="button" id="backBtn" class="btn1 btn-secondary">返回</button>
        </div>
    </form>
    <!-- 弹窗：承保公司选择 -->
    <div class="modal fade" id="chooseCompany" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width:700px;">
                <div class="modal-header">
                    <h5 class="modal-title">添加承保公司</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="searchCompanyForm" onkeydown="if(event.keyCode==13){return false;}">
                        <div class="block-title d-flex align-items-center search_company" width="800px">
                            <div><label>公司：</label> <input type="text" name="companyName" placeholder="输入公司名称关键字"></div>
                            <button type="button" class="btn1 btn-sm btn-info ml-3" onclick="doSearchCompany(true)">搜索</button>
                        </div>
                    </form>
                    <div class="mid" id="companyList"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn2 btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn2 btn-primary" id="companyConfirm">确定</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 弹窗:添加保什么 -->
    <%--<div class="modal fade" tabindex="-1" role="dialog"  id="modalGuardWhat">--%>
    <div class="modal fade" tabindex="-1" role="dialog" id="modalGuardWhat">
        <input type="hidden" name="modalGuardWhatIndex" valbrightspotue="-1" id="modalGuardWhatIndex">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">保什么</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <input type="hidden" class="form-control guard-what-type" name="modalGuardWhatType">
                        <div class="form-group row">
                            <label class="col-2 col-form-label text-right">保障类型</label>
                            <div class="col-10">
                                <div class="acbox_div showborder" id="_guaranteeTypeId" style="width: 500px;"></div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-2 col-form-label text-right">*保额</label>
                            <div class="col-10">
                                <div class="input-group">
                                    <input type="text" class="form-control guard-what-price" name="modalGuardWhatPrice">
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-2 col-form-label text-right">*保障简介</label>
                            <div class="col-10">
                                <textarea class="form-control guard-what-profile" name="modalGuardWhatProfile" rows="6" maxlength="500"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-2 col-form-label text-right">*保障详情</label>
                            <div class="col-10">
                                <textarea class="form-control guard-what-detail" name="modalGuardWhatDetail" rows="10" maxlength="800"></textarea>
                            </div>
                        </div>
                        <div class="block-title d-flex align-items-center">
                            <h6 class="mb-0" style="font-size: 18px;">子项目</h6>
                        </div>
                        <div class="mt-3">
                            <table class="table table-hover table-bordered">
                                <thead class="thead-dark">
                                <tr>
                                    <th>项目名称</th>
                                    <th>项目描述</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody class="table-list guard-what-sub-list" id="addGuardWhatSub">
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn2 btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn2 btn-primary" id="modalGuardWhatConfirm">确定</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 弹窗:增值服务 -->
    <div class="modal fade" id="modalGuardBuyService" tabindex="-1" role="dialog">
        <input type="hidden" name="modalGuardBuyServiceIndex" value="-1" id="modalGuardBuyServiceIndex">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">增值服务</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="col-form-label">*增值服务</label> <input type="text" class="form-control guard-service-content"  placeholder="最多输入100字" maxlength="100">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">*描述</label>
                            <textarea class="form-control guard-service-desc"  placeholder="最多输入500字" maxlength="500"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn2 btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn2 btn-primary" id="modalGuardBuyServiceConfirm">确定</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 续保规则 -->
    <div class="modal fade" id="modalGuardRenewRule" tabindex="-1" role="dialog">
        <input type="hidden" name="modalGuardRenewRuleIndex" value="-1" id="modalGuardRenewRuleIndex">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">续保规则</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="col-form-label">*续保规则</label> <input type="text" class="form-control guard-renew-rule-content"  placeholder="最多输入100字" maxlength="100">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">*描述</label>
                            <textarea class="form-control guard-renew-rule-desc" placeholder="最多输入500字" maxlength="500"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn2 btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn2 btn-primary" id="modalGuardRenewRuleConfirm">确定</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 弹窗:投保规则 -->
    <div class="modal fade" id="modalGuardBuyRule" tabindex="-1" role="dialog">
        <input type="hidden" name="modalGuardBuyRuleIndex" value="-1" id="modalGuardBuyRuleIndex">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">投保规则</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label class="col-form-label">规则类别</label>
                            <select class="form-control guard-buy-rule-title" name="rule" id="rule"></select>
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">规则内容</label>
                            <textarea class="form-control guard-buy-rule-content" placeholder="最多输入500字" maxlength="500"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn2 btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn2 btn-primary" id="modalGuardBuyRuleConfirm">确定</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 弹窗：同类产品标签选择 -->
    <div class="modal fade" id="chooseSimilarLabel" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width:700px;">
                <div class="modal-header">
                    <h5 class="modal-title">添加同类产品标签</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="searchSimilarLabelForm" onkeydown="if(event.keyCode==13){return false;}">
                        <input type="hidden" name="serviceDicIds">
                        <div class="block-title d-flex align-items-center search_company" width="800px">
                            <div><label>标签：</label> <input type="text" name="name" placeholder="输入标签关键字"></div>
                            <button type="button" class="btn1 btn-sm btn-info ml-3" onclick="doSearchSimilarLabel(true)">搜索</button>
                        </div>
                    </form>
                    <div class="mid" id="similarLabelList"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn2 btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn2 btn-primary" id="similarLabelConfirm">确定</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 弹窗：产品特色标签选择 -->
    <div class="modal fade" id="chooseSpecialLabel" tabindex="-1" role="dialog">

        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width:700px;">
                <div class="modal-header">
                    <h5 class="modal-title">添加产品特色标签</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="searchSpecialLabelForm" onkeydown="if(event.keyCode==13){return false;}">
                        <input type="hidden" name="serviceDicIds">
                        <div class="block-title d-flex align-items-center search_company" width="800px">
                            <div><label>标签：</label> <input type="text" name="content" placeholder="输入标签关键字"></div>
                            <button type="button" class="btn1 btn-sm btn-info ml-3" onclick="doSearchSpecialLabel(true)">搜索</button>
                        </div>
                    </form>
                    <div class="mid" id="specialLabelList"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn2 btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn2 btn-primary" id="specialLabelConfirm">确定</button>
                </div>
            </div>
        </div>
    </div>


    <div id="template">
        <%--增值服务--%>
        <table>
            <tbody>
            <tr class="table-item guard-service-item" indexItem="0">
                <input type="hidden" value="Mark" name="incrementRelationLs[0].title" class="guard-title">
                <input type="hidden" value="Otto" name="incrementRelationLs[0].content" class="guard-content">
                <td class="guard-service-content">Mark</td>
                <td class="guard-service-desc">Otto</td>
                <td>
                    <button class="btn1 btn-sm btn-secondary mr-1 btn-del-item">删除</button>
                    <button class="btn1 btn-sm btn-secondary btn-edit-item editModalGuardBuyService" data-action="edit" data-toggle="modal"
                            data-content="Mark" data-desc="Otto">编辑</button></td>
            </tr>
            </tbody>
        </table>
        <%--投保规则--%>
        <table>
            <tbody>
            <tr class="table-item guard-buy-rule-item" indexItem="0">
                <input type="hidden" value="Mark" name="guaranteedRuleLs[0].dictionaryContentId" class="guard-buy-dictionaryContentId">
                <input type="hidden" value="Otto" name="guaranteedRuleLs[0].content" class="guard-buy-content">
                <input type="hidden" class="guard-buy-rule-id" value="">
                <td class="guard-buy-rule-title">Mark</td>
                <td class="guard-buy-rule-content">Otto</td>
                <td>
                    <button class="btn1 btn-sm btn-secondary mr-1 btn-del-item">删除</button>
                    <button class="btn1 btn-sm btn-secondary btn-edit-item editModalGuardBuyRule" data-action="edit" data-toggle="modal"
                            data-title="id" data-title="Mark" data-content="Otto">编辑</button></td>
            </tr>
            </tbody>
        </table>
        <%--续保规则--%>
        <table>
            <tbody>
            <tr class="table-item guard-renew-rule-item" indexItem="0">
                <input type="hidden" value="Mark" name="renewRelationLs[0].title" class="guard-renew-title">
                <input type="hidden" value="Otto" name="renewRelationLs[0].content" class="guard-renew-content">
                <td class="guard-renew-rule-content">Mark</td>
                <td class="guard-renew-rule-desc">Otto</td>
                <td>
                    <button class="btn1 btn-sm btn-secondary mr-1 btn-del-item">删除</button>
                    <button class="btn1 btn-sm btn-secondary btn-edit-item editModalGuardRenewRule" data-action="edit" data-toggle="modal"
                            data-action="edit" data-content="Mark" data-desc="Otto">编辑</button></td>
            </tr>
            </tbody>
        </table>
        <%--保费测算--%>
        <table>
            <tbody>
            <input type="hidden" name="expands" value="" class="expands"/>
            <tr class="table-item caculate-item" indexItem="0"></tr>
            </tbody>
        </table>
    </div>
</div>

<script type="text/javascript">
    var saleChannelLSlistdata = '${saleChannelLSlistdata}';
</script>
<%--<script type="text/javascript" src="${pageContext.request.contextPath}/scripts/newScript/vue.js"></script>--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/scripts/unique/product/addProduct.js"></script>