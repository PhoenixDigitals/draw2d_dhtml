draw2d.MyPalette=function(){
draw2d.ToolPalette.call(this,"Tools");
this.tool1=new draw2d.ToolUseGrid10(this);
this.tool1.setPosition(10,10);
this.addChild(this.tool1);
this.tool2=new draw2d.ToolUseGrid20(this);
this.tool2.setPosition(50,10);
this.addChild(this.tool2);
this.setDimension(300,60);
};
draw2d.MyPalette.prototype=new draw2d.ToolPalette();
draw2d.MyPalette.prototype.type="MyPalette";
draw2d.MyPalette.prototype.onSetDocumentDirty=function(){
};
