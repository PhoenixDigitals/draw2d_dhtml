/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.DefaultPropertyPage=function(){draw2d.PropertyPage.call(this);this.html=document.createElement("div");this.html.style.width="100%";this.html.style.height="100%";this.header=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_DEFAULT,0,0);this.header.className="panel_header";this.html.appendChild(this.header);this.nameLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_NAME,10,45);this.nameLabel.style.color="gray";this.html.appendChild(this.nameLabel);this.nameText=document.createElement("input");this.nameText.type="text";var _94f=this;if(editor.isReadonly()){this.nameText.disabled="true";}else{Event.observe(this.nameText,"keyup",function(e){var func=_94f.currentModel.setName.bind(_94f.currentModel);var _952=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,_94f.currentModel.getName(),_94f.nameText.value);editor.executeCommand(_952);});}this.nameText.style.position="absolute";this.nameText.style.width="110px";this.nameText.style.top="65px";this.nameText.style.left="10px";this.html.appendChild(this.nameText);if(draw2d.Configuration.DEBUG===true){var _953=this.createLabelElement("Debug Information",10,125);this.html.appendChild(_953);this.dbidLabel=this.createLabelElement("DBID",15,145);this.html.appendChild(this.dbidLabel);this.idLabel=this.createLabelElement("ID",15,165);this.html.appendChild(this.idLabel);}};draw2d.DefaultPropertyPage.prototype=new draw2d.PropertyPage();draw2d.DefaultPropertyPage.prototype.type="draw2d.DefaultPropertyPage";draw2d.DefaultPropertyPage.prototype.init=function(_954){this.currentModel=_954;this.nameText.value=_954.getName();if(draw2d.Configuration.DEBUG===true){if(_954.getDbId()===""){this.dbidLabel.firstChild.data="DBID: -keine-";}else{this.dbidLabel.firstChild.data="DBID: "+_954.getDbId();}if(_954.getId()===""){this.idLabel.firstChild.data="ID: -keine-";}else{this.idLabel.firstChild.data="ID: "+_954.getId();}}};draw2d.DefaultPropertyPage.prototype.deinit=function(){};draw2d.DefaultPropertyPage.prototype.getHTMLElement=function(){return this.html;};