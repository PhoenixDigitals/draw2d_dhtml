draw2d.shape.uml.InheritancePort=function(){
draw2d.Port.call(this,new draw2d.Rectangle());
this.setBackgroundColor(new draw2d.Color(255,255,190));
};
draw2d.shape.uml.InheritancePort.prototype=new draw2d.Port();
draw2d.shape.uml.InheritancePort.prototype.type="shape.uml.InheritancePort";
draw2d.shape.uml.InheritancePort.prototype.onDrop=function(port){
if(this.parentNode.id==port.parentNode.id){
}else{
var _2021=new draw2d.CommandConnect(this.parentNode.workflow,this,port);
_2021.setConnection(new draw2d.shape.uml.InheritanceConnection());
this.parentNode.workflow.getCommandStack().execute(_2021);
}
};
