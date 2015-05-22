/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandDelete=function(_511){draw2d.Command.call(this,"delete figure");this.parent=_511.parent;this.figure=_511;this.workflow=_511.workflow;this.connections=null;this.compartmentDeleteCommands=null;};draw2d.CommandDelete.prototype=new draw2d.Command();draw2d.CommandDelete.prototype.type="draw2d.CommandDelete";draw2d.CommandDelete.prototype.execute=function(){this.redo();};draw2d.CommandDelete.prototype.undo=function(){if(this.figure instanceof draw2d.CompartmentFigure){for(var i=0;i<this.compartmentDeleteCommands.getSize();i++){var _513=this.compartmentDeleteCommands.get(i);this.figure.addChild(_513.figure);this.workflow.getCommandStack().undo();}}this.workflow.addFigure(this.figure);if(this.figure instanceof draw2d.Connection){this.figure.reconnect();}this.workflow.setCurrentSelection(this.figure);if(this.parent!==null){this.parent.addChild(this.figure);}for(var i=0;i<this.connections.getSize();++i){this.workflow.addFigure(this.connections.get(i));this.connections.get(i).reconnect();}};draw2d.CommandDelete.prototype.redo=function(){if(this.figure instanceof draw2d.CompartmentFigure){if(this.compartmentDeleteCommands===null){this.compartmentDeleteCommands=new draw2d.ArrayList();var _514=this.figure.getChildren().clone();for(var i=0;i<_514.getSize();i++){var _516=_514.get(i);this.figure.removeChild(_516);var _517=new draw2d.CommandDelete(_516);this.compartmentDeleteCommands.add(_517);this.workflow.getCommandStack().execute(_517);}}else{for(var i=0;i<this.compartmentDeleteCommands.getSize();i++){this.workflow.redo();}}}this.workflow.removeFigure(this.figure);this.workflow.setCurrentSelection(null);if(this.figure instanceof draw2d.Node&&this.connections===null){this.connections=new draw2d.ArrayList();var _518=this.figure.getPorts();for(var i=0;i<_518.getSize();i++){var port=_518.get(i);for(var c=0,c_size=port.getConnections().getSize();c<c_size;c++){if(!this.connections.contains(port.getConnections().get(c))){this.connections.add(port.getConnections().get(c));}}}}if(this.connections===null){this.connections=new draw2d.ArrayList();}if(this.parent!==null){this.parent.removeChild(this.figure);}for(var i=0;i<this.connections.getSize();++i){this.workflow.removeFigure(this.connections.get(i));}};