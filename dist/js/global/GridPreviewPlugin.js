function getContentByNType(ntype,data,bodyFields){var reStr="";if(0==ntype){reStr="你有一封新传真<br/>";for(var i=0;i<bodyFields.length;i++)"param2"!=bodyFields[i]?"param3"==bodyFields[i]&&(reStr+="传真位置:"+owerInternational(data[bodyFields[i]])):reStr+="发件人:"+data[bodyFields[i]]+"<br/>";return reStr}if(1==ntype)return reStr;if(2==ntype){reStr="你有一条新短信<br/>";for(var i=0;i<bodyFields.length;i++)"param2"!=bodyFields[i]?"param3"==bodyFields[i]&&(reStr+="短信位置:"+owerInternational(data[bodyFields[i]])):reStr+="发件人:"+data[bodyFields[i]]+"<br/>";return reStr}if(3==ntype){reStr="传真发送成功<br/>";for(var i=0;i<bodyFields.length;i++)"param2"!=bodyFields[i]?"param3"==bodyFields[i]&&(reStr+="主题:"+data[bodyFields[i]]):reStr+="收件人:"+data[bodyFields[i]]+"<br/>";return reStr}if(4==ntype){reStr="传真发送失败<br/>";for(var i=0;i<bodyFields.length;i++)"param2"!=bodyFields[i]?"param3"==bodyFields[i]&&(reStr+="主题:"+data[bodyFields[i]]):reStr+="收件人:"+data[bodyFields[i]]+"<br/>";return reStr}if(5==ntype){reStr="短信发送成功<br/>";for(var i=0;i<bodyFields.length;i++)if("param2"!=bodyFields[i])"param3"==bodyFields[i]&&(reStr+="主题:"+data[bodyFields[i]]);else{var myparam2=data[bodyFields[i]];-1==myparam2.indexOf("#")?reStr+="短信条数:"+myparam2+"<br/>":(myparam2=myparam2.substring(1,myparam2.length),reStr+="收件人:"+myparam2+"<br/>")}return reStr}if(6==ntype){reStr="短信发送失败<br/>";for(var i=0;i<bodyFields.length;i++)if("param2"!=bodyFields[i])"param3"==bodyFields[i]&&(reStr+="主题:"+data[bodyFields[i]]);else{var myparam2=data[bodyFields[i]];-1==myparam2.indexOf("#")?reStr+="短信条数:"+myparam2+"<br/>":(myparam2=myparam2.substring(1,myparam2.length),reStr+="收件人:"+myparam2+"<br/>")}return reStr}if(7==ntype){reStr="有新文档等待你的审批<br/>";for(var i=0;i<bodyFields.length;i++)"param2"!=bodyFields[i]||(reStr+="提交人:"+data[bodyFields[i]]+"<br/>");return reStr}if(8==ntype){reStr="通过审批<br/>";for(var i=0;i<bodyFields.length;i++)"param2"!=bodyFields[i]?"param3"==bodyFields[i]&&(reStr+="结束时间:"+data[bodyFields[i]]):reStr+="任务ID:"+data[bodyFields[i]]+"<br/>";return reStr}if(9==ntype){reStr="未通过审批<br/>";for(var i=0;i<bodyFields.length;i++)"param2"!=bodyFields[i]?"param3"==bodyFields[i]&&(reStr+="结束时间:"+data[bodyFields[i]]):reStr+="任务ID:"+data[bodyFields[i]]+"<br/>";return reStr}if(10==ntype){for(var i=0;i<bodyFields.length;i++)"param2"!=bodyFields[i]||(reStr+=""+data[bodyFields[i]]+"<br/>");return reStr}if(11==ntype){for(var i=0;i<bodyFields.length;i++)if("param3"!=bodyFields[i]);else{var msgSt="";if(0!=data[bodyFields[i]]){var wrStr="";(1&data[bodyFields[i]])>0&&(wrStr+="接收传真,"),(64&data[bodyFields[i]])>0&&(wrStr+="工作流审批,"),(32&data[bodyFields[i]])>0&&(wrStr+="管理员,"),wrStr=wrStr.substring(0,wrStr.length-1),msgSt="赋予您的职责是:"+wrStr}else msgSt="已经收回委任给你的职责";reStr+=""+msgSt+"<br/>"}return reStr}}Ext.define("Ext.ux.PreviewPlugin",{extend:"Ext.AbstractPlugin",alias:"plugin.preview",requires:["Ext.grid.feature.RowBody","Ext.grid.feature.RowWrap"],hideBodyCls:"x-grid-row-body-hidden",bodyField:"",bodyFields:[],previewExpanded:!0,constructor:function(config){this.callParent(arguments);var bodyField=this.bodyField,bodyFields=this.bodyFields,hideBodyCls=this.hideBodyCls,section=this.getCmp(),features=[{ftype:"rowbody",getAdditionalData:function(data,idx,record,orig,view){var o=Ext.grid.feature.RowBody.prototype.getAdditionalData.apply(this,arguments),type=data[bodyField],rowBodyStr=getContentByNType(type,data,bodyFields);return Ext.apply(o,{rowBody:rowBodyStr,rowBodyCls:section.previewExpanded?"":hideBodyCls}),o}},{ftype:"rowwrap"}];section.previewExpanded=this.previewExpanded,section.features||(section.features=[]),section.features=features.concat(section.features)},toggleExpanded:function(expanded){var view=this.getCmp();this.previewExpanded=view.previewExpanded=expanded,view.refresh()}});
//# sourceMappingURL=GridPreviewPlugin.js.map