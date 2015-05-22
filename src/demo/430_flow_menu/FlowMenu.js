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
draw2d.FlowMenu=function(/*:draw2d.Workflow*/ workflow)
{
  this.actionDelete = new draw2d.ButtonDelete(this);
  this.actionFront = new draw2d.ButtonMoveFront(this);
  this.actionBack = new draw2d.ButtonMoveBack(this);

  draw2d.ToolPalette.call(this);
  
  this.setDropShadow(0);
  this.setDimension(20,60);
  this.setBackgroundColor(new  draw2d.Color(220,255,255));
  this.currentFigure = null;
  this.myworkflow = workflow;
  this.added = false;
  this.setDeleteable(false);
  this.setCanDrag(false);
  this.setResizeable(false);
  this.setSelectable(false);
  this.setBackgroundColor(null);
  this.setColor(null);
  this.scrollarea.style.borderBottom="0px";

  this.actionDelete.setPosition(0,0);
  this.actionFront.setPosition(0,18);
  this.actionBack.setPosition(0,36);

  this.addChild(this.actionDelete);
  this.addChild(this.actionFront);
  this.addChild(this.actionBack);
};

/** base class of my example double click figure 
 * You can use circle, oval,.....too
 **/
draw2d.FlowMenu.prototype = new draw2d.ToolPalette();


/**
 * Reenable the setAlpha method. This has been disabled in the Window class.
 *
 **/
draw2d.FlowMenu.prototype.setAlpha=function(/*:float 0-1*/ percent)
{
   draw2d.Figure.prototype.setAlpha.call(this,percent);
};

/**
 * The FlowMenu has no title bar => return false.
 *
 * @returns Returns [true] if the window has a title bar
 * @type boolean
 **/
draw2d.FlowMenu.prototype.hasTitleBar=function()
{
  return false;
};

/**
 * Call back method of the framework if the selected object has been changed.
 *
 * @param {draw2d.Figure} figure the object which has been selected.
 **/
draw2d.FlowMenu.prototype.onSelectionChanged=function(/*:draw2d.Figure*/ figure)
{
  if(figure==this.currentFigure)
     return;

  if(figure instanceof draw2d.Line)
     return;

  if(this.added==true)
  {
     this.myworkflow.removeFigure(this);
     this.added=false;
  }

  if(figure!==null && this.added==false)
  {
     // The figure has been changed. Hide the FlowMenu. The addFigure(..) will increase the alpha 
     // with an internal timer. But only if the the smooth handling is enabled.
     //
     if(this.myworkflow.getEnableSmoothFigureHandling()==true)
         this.setAlpha(0.01);

     this.myworkflow.addFigure(this,100,100);
     this.added=true;
  }

  // deregister the moveListener from the old figure
  //
  if(this.currentFigure!==null)
  {
     this.currentFigure.detachMoveListener(this);
  }

  this.currentFigure = figure;
  // deregister the moveListener from the old figure
  //
  if(this.currentFigure!==null)
  {
     this.currentFigure.attachMoveListener(this);
     this.onOtherFigureMoved(this.currentFigure);
  }
};


draw2d.FlowMenu.prototype.setWorkflow= function( /*:draw2d.Workflow*/ workflow)
{
  // Call the Figure.setWorkflow(...) and NOT the ToolPalette!
  // Reson: the ToolPalette deregister the selectionListener from the workflow. But we need 
  // the selection listener event.
  draw2d.Figure.prototype.setWorkflow.call(this,workflow);
};


/**
 * Move the FlowMenu in synch with the corresponding figure.
 *
 * @param {draw2d.Figure} figure The figure which has changed its position
 * @private
 */
draw2d.FlowMenu.prototype.onOtherFigureMoved=function(/*:draw2d.Figure*/ figure)
{
    var pos = figure.getPosition();
    this.setPosition(pos.x+figure.getWidth()+7,pos.y-16);
};

