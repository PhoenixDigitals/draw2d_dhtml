draw2d.ButtonMoveBack=function(_2930){
draw2d.Button.call(this,_2930,16,16);
};
draw2d.ButtonMoveBack.prototype=new draw2d.Button();
draw2d.ButtonMoveBack.prototype.type="ButtonMoveBack";
draw2d.ButtonMoveBack.prototype.execute=function(){
this.palette.workflow.moveBack(this.palette.workflow.getCurrentSelection());
draw2d.ToolGeneric.prototype.execute.call(this);
};
