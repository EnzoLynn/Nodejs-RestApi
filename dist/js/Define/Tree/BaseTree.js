Ext.define("chl.tree.BaseTree",{alias:"widget.BaseTree",extend:"Ext.tree.Panel",clearOnLoad:!1,alternateClassName:["BaseTree"],ddGroup:"FileDDGp",animate:!1,rootVisible:!1,frame:!1,frameHeader:!1,border:!1,initComponent:function(){var me=this;me.on({load:function(store,records,models,suc,opts){!models||models.length<=0||Ext.Array.each(models,function(item,index,alls){var interStr=GlobalFun.treeInternational(item.data.id);""!=interStr?item.data.text=interStr:item.data.text=GlobalFun.owerInternational(item.data.text)})},render:function(){}}),me.callParent(arguments)}});
//# sourceMappingURL=BaseTree.js.map