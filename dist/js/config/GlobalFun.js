GlobalFun.fixedBugs=function(){if(Ext.firefoxVersion>=18){var noArgs=[];Ext.override(Ext.Base,{callParent:function(args){var method,superMethod=(method=this.callParent.caller)&&(method.$previous||(method=method.$owner?method:method.caller)&&method.$owner.superclass[method.$name]);try{if(!superMethod){method=this.callParent.caller;var parentClass,methodName;if(!method.$owner){if(!method.caller)throw new Error("Attempting to call a protected method from the public scope, which is not allowed");method=method.caller}if(parentClass=method.$owner.superclass,methodName=method.$name,!(methodName in parentClass))throw new Error("this.callParent() was called but there's no such method ("+methodName+") found in the parent class ("+(Ext.getClassName(parentClass)||"Object")+")")}}catch(e){}return superMethod.apply(this,args||noArgs)}})}Ext.isIE&&Ext.override(Ext.dd.DragDropManager,{getLocation:function(oDD){if(!this.isTypeOfDD(oDD))return null;if(oDD.getRegion)return oDD.getRegion();var pos,x1,x2,y1,y2,t,r,b,l,el=oDD.el;try{pos=Ext.Element.getXY(el)}catch(e){}return pos?(x1=pos[0],x2=x1+77,y1=pos[1],y2=y1+60,t=y1-oDD.padding[0],r=x2+oDD.padding[1],b=y2+oDD.padding[2],l=x1-oDD.padding[3],new Ext.util.Region(t,r,b,l)):null}}),Ext.ouveride,Ext.override(Ext.view.AbstractView,{onRender:function(){var me=this;me.callParent(arguments),me.loadMask&&Ext.isObject(me.store)&&me.setMaskBind(me.store)}}),GlobalConfig.newMessageBox.buttonText.yes="是",GlobalConfig.newMessageBox.buttonText.no="否",GlobalConfig.newMessageBox.buttonText.ok="确定",GlobalConfig.newMessageBox.buttonText.cancel="取消",Ext.override(Ext.window.MessageBox,{alert:function(cfg,msg,fn,scope){return Ext.isString(cfg)&&(cfg={title:cfg,msg:msg,buttons:this.OK,fn:fn,scope:scope,minWidth:this.minWidth<330?330:this.minWidth}),this.show(cfg)}}),Ext.apply(Ext.form.field.VTypes,{daterange:function(val,field){var date=field.parseDate(val);if(!date)return!1;if(!field.startDateField||field.dateRangeMax&&date.getTime()==field.dateRangeMax.getTime()){if(field.endDateField&&(!field.dateRangeMin||date.getTime()!=field.dateRangeMin.getTime())){var end=field.up("panel").down("#"+field.endDateField);end.setMinValue(date),end.validate(),field.dateRangeMin=date}}else{var start=field.up("panel").down("#"+field.startDateField);start.setMaxValue(date),start.validate(),field.dateRangeMax=date}return!0},daterangeText:"日期格式错误"})},GlobalFun.ReDirectUrl=function(url){var protocol=window.location.protocol,host=window.location.host;window.location.href=protocol+"//"+host+"/"+url},GlobalFun.getSeesionToken=function(){return Ext.util.Cookies.get("login_sessiontoken")},GlobalFun.setSeesionToken=function(sessiontoken,day){var myday=30;day&&(myday=day),Ext.util.Cookies.set("login_sessiontoken",sessiontoken,new Date((new Date).getTime()+864e5*myday))},GlobalFun.UpdateRecord=function(value,metaData,record,rowIndex,colIndex,store,view){return value},GlobalFun.UpdateRecordForShortDate=function(value,metaData,record,rowIndex,colIndex,store,view){var date=new Date(value.replace(/-/g,"/"));return Ext.util.Format.date(date,"Y-m-d")},GlobalFun.UpdateRecordForEntity=function(value,metaData,record,rowIndex,colIndex,store,view,disName){return value&&null!=value?disName?GlobalFun.UpdateRecord(value[disName],metaData,record):GlobalFun.UpdateRecord(value.Name,metaData,record):GlobalFun.UpdateRecord("",metaData,record)},GlobalFun.UTCtoLocal=function(dateString){var date=Ext.Date.parse(dateString+"+0000","Y-m-d H:i:sO"),m=Ext.util.Format.date(date,"Y-m-d H:i:s");return m},GlobalFun.LocalToUTCTime=function(i,endTime){var now=new Date,nowStr=Ext.util.Format.date(now,"Y-m-d"),offset=60*now.getTimezoneOffset()*1e3,resDate=new Date;if(endTime){var nowDay=Ext.Date.parse(nowStr+" 23:59:59","Y-m-d H:i:s");resDate.setTime(nowDay.getTime()+offset)}else{var nowDay=Ext.Date.parse(nowStr+" 00:00:00","Y-m-d H:i:s");resDate.setTime(nowDay.getTime()+offset-24*i*3600*1e3)}return Ext.util.Format.date(resDate,"Y-m-d H:i:s")},GlobalFun.GetNextDate=function(day){var today=new Date,newDate=new Date;return newDate.setTime(today.getTime()+24*day*3600*1e3),Ext.util.Format.date(newDate,"Y-m-d")},GridManager.BaseGridCfg=function(itemId,stateId,columns){var config={itemId:itemId,columnLines:!0,multiSelect:!0,frame:!1,stateful:stateId?!0:!1,border:!1};return stateId&&(config.stateId=stateId),columns&&(config.columns=columns),config},GlobalFun.errorProcess=function(code,swfokfun){return code==GlobalConfig.ErrorCode.LoginFail?(Ext.Msg.alert("登录失败","登录失败！无效用户名或密码",function(){swfokfun&&swfokfun()}),!0):code==GlobalConfig.ErrorCode.SeesionTimeOut?(Ext.getBody().unmask(),Ext.Msg.alert("登录信息失效","登录信息失效！请重新登录",function(){Ext.getBody().mask("请稍候..."),GlobalFun.ReDirectUrl("login.html")}),!0):!1},GlobalFun.isDropTarget=function(record,treeComponent){var treeSel=treeComponent.getSelectionModel().getSelection()[0];return treeSel.data.id==record.data.id?!1:-1!=treeSel.data.id.toString().indexOf("trwr")?!1:!0},GlobalFun.treeInternational=function(treeId){return"gr"==treeId?"个人":"tr"==treeId?"他人":""},GlobalFun.owerInternational=function(srcStr){return srcStr=srcStr.replace("@shoujianxiang@","收件箱").replace("@gxsjx@","共享收件箱").replace("@gr@","个人").replace("@gxwjj@","共享文件夹").replace("@gx@","共享")},GlobalFun.comboSelectFirstOrDefaultVal=function(com,defaultVal){var store=com.getStore();defaultVal?(new Ext.util.DelayedTask).delay(50,function(){com.setValue(parseInt(defaultVal))}):com.setValue(store.getRange()[0].data.Id)},GridManager.GridFilterMenuCheckItemInit=function(param){var menuCheckItem={group:param.group,text:param.text,myVal:param.myVal};return param.checked&&(menuCheckItem.checked=!0),param.firstClear?menuCheckItem.handler=function(btn,eve,suppressLoad){var panel=param.target,menu=param.componet;return menu.setText(param.text),menu.setTooltip(param.text),panel.getStore().filterMap.removeAtKey(param.filterKey),suppressLoad?void this.setChecked(suppressLoad):void panel.loadGrid()}:menuCheckItem.handler=function(btn,eve,suppressLoad){var panel=param.target,menu=param.componet;return menu.setText(param.text),menu.setTooltip(param.text),panel.getStore().filterMap.containsKey(param.filterKey)?panel.getStore().filterMap.replace(param.filterKey,param.myVal):panel.getStore().filterMap.add(param.filterKey,param.myVal),suppressLoad?void this.setChecked(suppressLoad):void panel.loadGrid()},menuCheckItem},GridManager.CreateGridFilterMenu=function(componet,store,param){componet.menu.add(GridManager.GridFilterMenuCheckItemInit({group:param.group,checked:!0,text:param.text,myVal:0,target:param.target,componet:param.componet,firstClear:!0,filterKey:param.filterKey})),store.each(function(record,index,total){componet.menu.add(GridManager.GridFilterMenuCheckItemInit({group:param.group,text:record.data.Name,myVal:record.data.Id,target:param.target,componet:param.componet,filterKey:param.filterKey}))})},GridManager.CreateGridFilterDateMenu=function(componet,param){componet.menu.add(GridManager.GridFilterMenuCheckItemInit({group:param.group,checked:!0,text:param.text,myVal:0,target:param.target,componet:param.componet,firstClear:!0,filterKey:param.filterKey}));var now=new Date,week=GlobalFun.GetNextDate(-7),mouth=GlobalFun.GetNextDate(-30),year=GlobalFun.GetNextDate(-365),obj=[{text:"一周",value:week+","+Ext.util.Format.date(now,"Y-m-d")},{text:"一月",value:mouth+","+Ext.util.Format.date(now,"Y-m-d")},{text:"一年",value:year+","+Ext.util.Format.date(now,"Y-m-d")}];Ext.Array.each(obj,function(item,index){componet.menu.add(GridManager.GridFilterMenuCheckItemInit({group:param.group,text:item.text,myVal:item.value,target:param.target,componet:param.componet,filterKey:param.filterKey}))}),componet.menu.add({group:param.group,text:"自定义时间段",handler:function(btn,eve,suppressLoad){var panel=param.target,menu=param.componet,win=Ext.create("Ext.window.Window",{modal:!0,width:500,height:120,resizable:!1,items:[{xtype:"form",itemId:"formId",autoScroll:!0,height:110,width:500,border:!1,bodyPadding:15,defaultType:"textfield",layout:{type:"table",columns:1},defaults:{labelAlign:"right",labelPad:15,width:340,labelWidth:125,maxLength:100,enableKeyEvents:!0,listeners:{keydown:function(field,e,opts){var me=this;if(e.getKey()==e.ENTER){var win=me.up("window");win.down("#submit").fireHandler(e)}}}},items:[{xtype:"fieldcontainer",colspan:2,width:490,fieldLabel:"使用时间",defaultType:"datetimefield",layout:{type:"hbox"},defaults:{labelAlign:"right",width:100},items:[{xtype:"datefield",format:"Y-m-d",itemId:"dateStar",vtype:"daterange",endDateField:"dateEnd"},{xtype:"label",margin:"0 0 0 5",width:20,text:"至"},{xtype:"datefield",format:"Y-m-d",itemId:"dateEnd",vtype:"daterange",startDateField:"dateStar"}]}]}],buttons:[{text:"确定",handler:function(){var form=win.down("#formId").getForm();if(form.isValid()){var searchFlag=!1,dateStarField=win.down("#dateStar"),dateEndField=win.down("#dateEnd"),dateStar=dateStarField.getValue(),dateEnd=dateEndField.getValue();(dateStar||dateEnd)&&(dateStar=Ext.util.Format.date(dateStar,"Y-m-d"),dateEnd=Ext.util.Format.date(dateEnd,"Y-m-d"),panel.getStore().filterMap.containsKey(param.filterKey)?panel.getStore().filterMap.replace(param.filterKey,dateStar+","+dateEnd):panel.getStore().filterMap.add(param.filterKey,dateStar+","+dateEnd),searchFlag=!0),searchFlag?(win.close(),panel.loadGrid()):win.close()}}},{text:"关闭",handler:function(){win.close()}}]});win.show(),menu.setText("自定义时间段"),menu.setTooltip("自定义时间段")}})},GridManager.CreateGridSelectCancelMenu=function(componet,grid){componet.menu.add([{text:"全选/取消",handler:function(btn,eve,suppressLoad){var sm=grid.getSelectionModel();sm.hasSelection()?sm.deselectAll(!0):sm.selectAll(!0)}},{text:"反选",handler:function(btn,eve,suppressLoad){for(var sm=grid.getSelectionModel(),i=0;i<grid.getStore().getCount();i++)sm.isSelected(i)?sm.deselect(i,!0):sm.select(i,!0)}}])};var stopClick=!1;DropDragControl.initializePatientDragZone=function(v,window){v.dragZone=Ext.create("Ext.dd.DragZone",v.getEl(),{ddGroup:window.groupName,isTarget:!1,getDragData:function(e){var sourceEl=e.getTarget();if(sourceEl){var selCount;selCount=window.pngClass.getPngSels().getCount();var oNewNode=document.createElement("div");return oNewNode.innerHTML="<span><img src='../../Content/images/pub/docDrag.png'/>x"+selCount+"</span>",oNewNode.id=Ext.id(),v.dragData={sourceEl:sourceEl,repairXY:Ext.fly(sourceEl).getXY(),ddel:oNewNode,patientData:""}}},getRepairXY:function(){return this.dragData.repairXY},endDrag:function(){stopClick=!0,new Ext.util.DelayedTask(function(){stopClick=!1}).delay(50)},onInvalidDrop:function(target,e,id){this.beforeInvalidDrop(target,e,id),this.cachedTarget&&(this.cachedTarget.isNotifyTarget&&this.cachedTarget.notifyOut(this,e,this.dragData),this.cacheTarget=null),this.proxy.repair(this.getRepairXY(e,this.dragData),this.afterRepair,this),this.afterInvalidDrop&&this.afterInvalidDrop(e,id)}})},DropDragControl.uninitPatientDragZone=function(v){v.dragZone&&v.dragZone.destroy()},DropDragControl.uninitHospitalDropZone=function(v){v.dropZone&&v.dropZone.destroy()},DropDragControl.initializeHospitalDropZone=function(v,window){v.dropZone=Ext.create("Ext.dd.DropZone",v.el,{ddGroup:window.groupName,getTargetFromEvent:function(e){return e.getTarget(".hospital-target")},onNodeOver:function(target,dd,e,data){return Ext.dd.DropZone.prototype.dropAllowed},onNodeDrop:function(target,dd,e,data){var curImg,pngClass=window.pngClass;pngClass.getPngAllMini().each(function(item,index,allItems){return item.getEl()&&item.getEl().id==target.id?void(curImg=item):void 0});var sortNum=curImg.sortNum,insertImgs=(curImg.tombstoneId,[]),moveFrontImg=[],moveBehindImgs=[],insertCount=parseInt(sortNum),imageList=window.down("MiniPngDDSortPanel").query("image");e.getPoint()[0]-curImg.getEl().getXY()[0]<=target.offsetWidth/2?(pngClass.getPngSels().each(function(item,index,allItems){insertImgs.push(item.tombstoneId)}),Ext.Array.each(imageList,function(item,index,allItems){item.sortNum<insertCount&&(Ext.Array.contains(insertImgs,item.tombstoneId)||moveFrontImg.push(item.tombstoneId))}),Ext.Array.each(imageList,function(item,index,allItems){item.sortNum>=insertCount&&(Ext.Array.contains(insertImgs,item.tombstoneId)||moveBehindImgs.push(item.tombstoneId))})):(pngClass.getPngSels().each(function(item,index,allItems){insertImgs.push(item.tombstoneId)}),Ext.Array.each(imageList,function(item,index,allItems){item.sortNum<=insertCount&&(Ext.Array.contains(insertImgs,item.tombstoneId)||moveFrontImg.push(item.tombstoneId))}),Ext.Array.each(imageList,function(item,index,allItems){item.sortNum>insertCount&&(Ext.Array.contains(insertImgs,item.tombstoneId)||moveBehindImgs.push(item.tombstoneId))}));var tombstoneIdList=moveFrontImg.concat(insertImgs,moveBehindImgs),param={};return param.tombstoneIdList=tombstoneIdList.join(),param.sessiontoken=Ext.util.Cookies.get("sessiontoken"),WsCall.call(GlobalConfig.Controllers.TombstoneGrid.SortTombstonePng,"SortTombstonePng",param,function(response,opts){var area=window.down("#AreaIdItemId"),row=window.down("#RowIdItemId");if(area.isValid()&&row.isValid()){pngClass.setAreaId(area.getValue()),pngClass.setRowId(row.getValue());var miniPngDDSortPanel=window.down("MiniPngDDSortPanel");miniPngDDSortPanel.removeAll(),pngClass.initPngPanel(miniPngDDSortPanel)}},function(response,opts){GlobalFun.errorProcess(response.code)||Ext.Msg.alert("失败",response.msg)},!0,"请稍候...",window.el),!0}})},GlobalFun.SetGridTitle=function(cardPanel,store,title){store.filterMap.getCount()>0||store.getProxy().extraParams.DateFilter?cardPanel.setTitle("查找结果 { "+title+" }"):cardPanel.setTitle(""+title)},GlobalFun.TreeSelChangeGrid=function(activeNum,gridPanel,title,isDfGrid){var cardPanel=GlobalConfig.ViewPort.down("#centerGridDisplayContainer");return cardPanel.getLayout().setActiveItem(activeNum),isDfGrid?void cardPanel.setTitle(""+title):(gridPanel.FirstLoad?GlobalFun.SetGridTitle(cardPanel,gridPanel.getStore(),title):(gridPanel.loadGrid(),gridPanel.FirstLoad=!0,GlobalFun.SetGridTitle(cardPanel,gridPanel.getStore(),title)),void gridPanel.fireEvent("selectionchange",gridPanel.getView(),gridPanel.getSelectionModel().getSelection()))},GlobalFun.ValidDateStartEnd=function(dateStarField,dateEndField){var sVal=dateStarField.getValue(),eVal=dateEndField.getValue();sVal&&!eVal?(dateEndField.allowBlank=!1,dateEndField.blankText="日期区间必须完整"):eVal&&!sVal?(dateStarField.allowBlank=!1,dateStarField.blankText="日期区间必须完整"):(dateEndField.allowBlank=!0,dateStarField.allowBlank=!0)},GlobalFun.onCheckChange=function(cmp,checked){var fieldset=cmp.up("fieldset");if(!fieldset.fistCheck){var cblist=fieldset.query("checkbox");Ext.Array.each(cblist,function(item){item.setValue(checked)})}},GlobalFun.createCheckboxCmp=function(){var me=this,suffix="-checkbox";return me.checkboxCmp=Ext.widget({xtype:"checkbox",hideEmptyLabel:!0,name:me.checkboxName||me.id+suffix,cls:me.baseCls+"-header"+suffix,itemId:me.myItemId,id:me.id+"-legendChk",listeners:{change:me.onCheckChange,scope:me}}),me.checkboxCmp},GlobalFun.Heartbeat=function(){new Ext.util.DelayedTask(function(){GlobalConfig.HeartbeatRunner.stopAll(),GlobalConfig.HeartbeatRunner.start({run:function(){var param={sessiontoken:GlobalFun.getSeesionToken()};WsCall.call(GlobalConfig.Controllers.Heartbeat,"Heartbeat",param,function(response,opts){},function(response,opts){},!1)},interval:6e5})}).delay(50)},GlobalFun.IsAllowFun=function(funName){var flag=!1;return flag=!0},GlobalFun.GridSearchInitFun=function(keyName,isDel,store,value){isDel?store.filterMap.removeAtKey(keyName):store.filterMap.containsKey(keyName)?store.filterMap.replace(keyName,value):store.filterMap.add(keyName,value)},GlobalFun.GetTomestoneImageSrc=function(state,tombstoneId,typeId){var imgaeName="alone";return 2==typeId?imgaeName="double":3==typeId&&(imgaeName="specil"),imgaeName+=1==state?"-empty":2==state?"-order":3==state?"-sale":4==state?"-zbury1":5==state?2==typeId?"-zbury3":"-zbury":"-empty","../../Content/images/tombstone/gif/"+imgaeName+".gif?currpage="+tombstoneId+"&randomTime="+(new Date).getTime()},GlobalFun.RefreshDetailCollapseState=function(){if(GlobalConfig.DetailAutoCollapse){var detailPanel=GlobalConfig.ViewPort.down("#centerGridDetailContainer");detailPanel.expand(),GlobalConfig.DetailAutoCollapse=!1}},GlobalFun.DetailCollapse=function(){var detailPanel=GlobalConfig.ViewPort.down("#centerGridDetailContainer");detailPanel.collapsed||(detailPanel.collapse(),GlobalConfig.DetailAutoCollapse=!0)},GlobalFun.JsonToArray=function(json){var arr=[];for(key in json){var obj={Id:key,Name:json[key]};arr.push(obj)}return arr},GlobalFun.isEmptyObject=function(obj){for(var n in obj)return!1;return!0};
//# sourceMappingURL=GlobalFun.js.map