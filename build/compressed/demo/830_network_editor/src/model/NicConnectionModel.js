/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.NicConnectionModel=function(_559,_55a,id){draw2d.AbstractConnectionModel.call(this);this.sourceNodeId=_559;this.sourcePort="output";this.targetNodeId=_55a;this.targetPort="input";if(id!==undefined&&id!==null){this.id=id;draw2d.IdGenerator.reserve(this.id);}else{this.id=draw2d.IdGenerator.getNext();}this.nicModel=null;this.dbid="";};draw2d.NicConnectionModel.EVENT_SOURCE_CHANGED="source changed";draw2d.NicConnectionModel.EVENT_TARGET_CHANGED="target changed";draw2d.NicConnectionModel.EVENT_PROPERTY_CHANGED="property changed";draw2d.NicConnectionModel.prototype=new draw2d.AbstractConnectionModel();draw2d.NicConnectionModel.prototype.type="draw2d.NicConnectionModel";draw2d.NicConnectionModel.prototype.tag="<unused>";draw2d.NicConnectionModel.prototype.setIpAddress=function(ip){this.nicModel.setIpAddress(ip);};draw2d.NicConnectionModel.prototype.getIpAddress=function(){return this.nicModel.getIpAddress();};draw2d.NicConnectionModel.prototype.setSourceModel=function(_55d){var _55e=this.sourceNodeId;var _55f=this.sourcePort;this.sourceNodeId=_55d.getId();this.sourcePort="output";if(_55e===this.sourceNodeId&&_55f===this.sourcePort){return;}this.firePropertyChange(draw2d.MountModel.EVENT_SOURCE_CHANGED,null,_55d);};draw2d.NicConnectionModel.prototype.getSourceModel=function(){return this.getNetworkCloudModel().getCloudNodeModel(this.sourceNodeId);};draw2d.NicConnectionModel.prototype.setTargetModel=function(_560){var _561=this.targetNodeId;var _562=this.targetPort;this.targetNodeId=_560.getId();this.targetField="input";if(_561===this.targetNodeId&&_562===this.targetPort){return;}this.firePropertyChange(draw2d.MountModel.EVENT_TARGET_CHANGED,null,_560);};draw2d.NicConnectionModel.prototype.getTargetModel=function(){return this.getNetworkCloudModel().getCloudNodeModel(this.targetNodeId);};draw2d.NicConnectionModel.prototype.getSourcePortName=function(){return this.sourcePort;};draw2d.NicConnectionModel.prototype.getTargetPortName=function(){return this.targetPort;};draw2d.NicConnectionModel.prototype.getNetworkCloudModel=function(){return this.getModelParent().getNetworkCloudModel();};draw2d.NicConnectionModel.prototype.getPersistentAttributes=function(){var _563={attributes:{}};return _563;};