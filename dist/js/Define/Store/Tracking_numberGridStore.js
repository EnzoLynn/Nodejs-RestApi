Ext.create("Ext.data.Store",{model:"chl.Model.Tracking_numberGridModel",storeId:"Tracking_numberGridStoreId",filterMap:Ext.create("Ext.util.HashMap"),pageSize:GlobalConfig.GridPageSize,autoLoad:!1,remoteSort:!0,sorters:[{property:"tracking_number_id",direction:"DESC"}],autoSync:!1,proxy:{type:"ajax",api:GlobalConfig.Controllers.Tracking_numberGrid,filterParam:"filter",sortParam:"sort",directionParam:"dir",limitParam:"limit",startParam:"start",simpleSortMode:!0,extraParams:{req:"data",dataname:"traking_number",restype:"json",sessiontoken:GlobalFun.getSeesionToken(),folderid:-1,refresh:null,template:""},reader:{type:"json",root:"data",seccessProperty:"success",messageProperty:"msg",totalProperty:"total"},writer:{type:"json",writeAllFields:!1,allowSingle:!1},actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"},listeners:{exception:function(proxy,response,operation){var json=Ext.JSON.decode(response.responseText),code=json.code;GlobalFun.errorProcess(code),"read"!=operation.action}}},listeners:{load:function(store,records,suc,operation,opts){store.getTotalCount();suc||store.loadData([])}}});
//# sourceMappingURL=Tracking_numberGridStore.js.map