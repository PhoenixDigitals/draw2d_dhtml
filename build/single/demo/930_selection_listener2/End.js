draw2d.End=function(){
draw2d.ImageFigure.call(this,this.type+".png");
this.inputPort=null;
this.setDimension(50,50);
};
draw2d.End.prototype=new draw2d.ImageFigure();
draw2d.End.prototype.type="End";
draw2d.End.prototype.setWorkflow=function(_1be9){
draw2d.ImageFigure.prototype.setWorkflow.call(this,_1be9);
if(_1be9!==null&&this.inputPort===null){
this.inputPort1=new draw2d.InputPort();
this.inputPort1.setWorkflow(_1be9);
this.inputPort1.setBackgroundColor(new draw2d.Color(115,115,245));
this.inputPort1.setColor(null);
this.inputPort1.setName("input1");
this.addPort(this.inputPort1,0,this.height/2);
this.inputPort2=new draw2d.InputPort();
this.inputPort2.setWorkflow(_1be9);
this.inputPort2.setBackgroundColor(new draw2d.Color(115,115,245));
this.inputPort2.setColor(null);
this.inputPort2.setName("input2");
this.addPort(this.inputPort2,this.width/2,0);
this.inputPort3=new draw2d.InputPort();
this.inputPort3.setWorkflow(_1be9);
this.inputPort3.setBackgroundColor(new draw2d.Color(115,115,245));
this.inputPort3.setColor(null);
this.inputPort3.setName("input3");
this.addPort(this.inputPort3,this.width,this.height/2);
this.inputPort4=new draw2d.InputPort();
this.inputPort4.setWorkflow(_1be9);
this.inputPort4.setBackgroundColor(new draw2d.Color(115,115,245));
this.inputPort4.setColor(null);
this.inputPort4.setName("input4");
this.addPort(this.inputPort4,this.width/2,this.height);
}
};
