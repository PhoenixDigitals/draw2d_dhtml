draw2d.MyDoubleClickFigure=function(){
draw2d.Rectangle.call(this);
this.setDimension(50,50);
this.setBackgroundColor(new draw2d.Color(220,255,255));
};
draw2d.MyDoubleClickFigure.prototype=new draw2d.Rectangle();
draw2d.MyDoubleClickFigure.prototype.type="MyDoubleClickFigure";
draw2d.MyDoubleClickFigure.prototype.onDoubleClick=function(){
var w=parseInt(prompt("Enter border line width",this.getLineWidth()));
if(w>0){
this.setLineWidth(w);
}
};
