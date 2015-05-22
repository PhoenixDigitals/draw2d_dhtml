/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ServerModel=function(id){draw2d.AbstractCloudNodeModel.call(this,id);this.dbid="";this.name=draw2d.Configuration.DEFAULT_SERVER_NAME;this["cpu-units"]=draw2d.Configuration.DEFAULT_SERVER_CPUS;this["ram-in-mb"]=draw2d.Configuration.DEFAULT_SERVER_RAM;this.representation=new draw2d.RepresentationModel(42,42);this.images=new draw2d.ImagesModel();this.nics=new draw2d.NicsModel();};draw2d.ServerModel.prototype=new draw2d.AbstractCloudNodeModel();draw2d.ServerModel.prototype.type="draw2d.ServerModel";draw2d.ServerModel.prototype.tag="server";draw2d.ServerModel.prototype.createReferenceModel=function(){return new draw2d.ServerReferenceModel(this.id);};draw2d.ServerModel.prototype.setPosition=function(xPos,yPos){xPos=Math.max(0,xPos);yPos=Math.max(0,yPos);var save=this.representation;if(save.x===xPos&&save.y===yPos){return;}this.representation=new draw2d.RepresentationModel(xPos,yPos);this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED,save,this.representation);};draw2d.ServerModel.prototype.getPosition=function(){return new draw2d.Point(parseInt(this.representation.x,10),parseInt(this.representation.y,10));};draw2d.ServerModel.prototype.setName=function(name){var save=this["name"];if(save===name){return;}this["name"]=name;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,name);};draw2d.ServerModel.prototype.getName=function(){return this["name"];};draw2d.ServerModel.prototype.getNicsModel=function(){return this.nics;};draw2d.ServerModel.prototype.setCpuUnits=function(cpu){var save=this["cpu-units"];if(save===cpu){return;}this["cpu-units"]=cpu;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,cpu);};draw2d.ServerModel.prototype.getCpuUnits=function(){return this["cpu-units"];};draw2d.ServerModel.prototype.setRAM=function(ram){ram=""+parseInt(ram,10);var save=this["ram-in-mb"];if(save===ram){return;}this["ram-in-mb"]=ram;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,ram);};draw2d.ServerModel.prototype.getRAM=function(){return this["ram-in-mb"];};draw2d.ServerModel.prototype.getImagesModel=function(){return this.images;};draw2d.ServerModel.prototype.addImageModel=function(_1bd){this.images.addImageModel(_1bd);this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,null,_1bd);};draw2d.ServerModel.prototype.removeImageModel=function(_1be){this.images.removeImageModel(_1be);this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,_1be,null);};draw2d.ServerModel.prototype.getPersistentAttributes=function(){var _1bf=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);_1bf["name"]=this["name"];_1bf["cpu-units"]=this["cpu-units"];_1bf["ram-in-mb"]=this["ram-in-mb"];if(this.dbid.length>0){_1bf.dbid=this.dbid;}_1bf.images=this.images;_1bf.nics=this.nics;_1bf.representation=this.representation;_1bf.attributes.id=this.id;return _1bf;};