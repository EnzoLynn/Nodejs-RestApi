Ext.define("chl.grid.BaseGrid",{alternateClassName:["BaseGrid"],alias:"widget.BaseGrid",extend:"Ext.grid.Panel",columnLines:!0,multiSelect:!0,features:[{ftype:"grouping",groupHeaderTpl:"{columnName}: {name} ({rows.length})项",disabled:!0,groupByText:"按当前列分组",showGroupsText:"显示分组"}],viewConfig:{loadingText:"<b>正在加载数据...</b>"},initComponent:function(){var me=this;me.on({itemclick:function(grid,record,hitem,index,e,opts){if(!e.ctrlKey&&!e.shiftKey){var sm=grid.getSelectionModel();sm.deselectAll(!0),sm.select(record,!0,!1)}},beforeitemmousedown:function(view,record,item,index,e,options){if(2==e.button){var sm=view.getSelectionModel();if(sm.hasSelection()){var sels=sm.getSelection();Ext.Array.contains(sels,record)||(sm.deselectAll(!0),sm.select(record,!0,!1))}else sm.select(record,!0,!1);return!1}return!0},itemmouseenter:function(me,record,item){item.style.cursor="pointer"},itemmouseleave:function(me,record,item){item.style.cursor="auto"}}),me.callParent(arguments)}});
//# sourceMappingURL=BaseGrid.js.map