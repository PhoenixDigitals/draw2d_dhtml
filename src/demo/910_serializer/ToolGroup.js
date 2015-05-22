/* This notice must be untouched at all times.

FreeGroup @APPLICATIONNAME@ @VERSION@
The latest version is available at
@APPLICATIONWEBSITE@

Copyright (c) 2006 Andreas Herz. All rights reserved.
Created 5. 11. 2006 by Andreas Herz (Web: http://www.freegroup.de )

LICENSE: LGPL

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License (LGPL) as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA,
or see http://www.gnu.org/copyleft/lesser.html
*/

draw2d.ToolGroup=function(/*:draw2d.PaletteWindow*/ palette)
{
  draw2d.ToolGeneric.call(this,palette);

  this.setDimension(25,25);
  this.setTooltip("Form Group");
};

draw2d.ToolGroup.prototype=new draw2d.ToolGeneric;
/** @private **/
draw2d.ToolGroup.prototype.type="ToolGroup";


draw2d.ToolGroup.prototype.execute=function(/*:int*/x, /*:int*/y)
{
  var figure= new draw2d.GroupFigure();
  figure.setDimension(100,60);
  this.palette.workflow.addFigure(figure,x,y);

  draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
