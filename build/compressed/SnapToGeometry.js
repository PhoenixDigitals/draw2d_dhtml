/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.SnapToGeometry=function(_1dd){draw2d.SnapToHelper.call(this,_1dd);this.rows=null;this.cols=null;};draw2d.SnapToGeometry.prototype=new draw2d.SnapToHelper();draw2d.SnapToGeometry.THRESHOLD=5;draw2d.SnapToGeometry.prototype.snapPoint=function(_1de,_1df,_1e0){if(this.rows===null||this.cols===null){this.populateRowsAndCols();}if((_1de&draw2d.SnapToHelper.EAST)!==0){var _1e1=this.getCorrectionFor(this.cols,_1df.getX()-1,1);if(_1e1!==draw2d.SnapToGeometry.THRESHOLD){_1de&=~draw2d.SnapToHelper.EAST;_1e0.x+=_1e1;}}if((_1de&draw2d.SnapToHelper.WEST)!==0){var _1e2=this.getCorrectionFor(this.cols,_1df.getX(),-1);if(_1e2!==draw2d.SnapToGeometry.THRESHOLD){_1de&=~draw2d.SnapToHelper.WEST;_1e0.x+=_1e2;}}if((_1de&draw2d.SnapToHelper.SOUTH)!==0){var _1e3=this.getCorrectionFor(this.rows,_1df.getY()-1,1);if(_1e3!==draw2d.SnapToGeometry.THRESHOLD){_1de&=~draw2d.SnapToHelper.SOUTH;_1e0.y+=_1e3;}}if((_1de&draw2d.SnapToHelper.NORTH)!==0){var _1e4=this.getCorrectionFor(this.rows,_1df.getY(),-1);if(_1e4!==draw2d.SnapToGeometry.THRESHOLD){_1de&=~draw2d.SnapToHelper.NORTH;_1e0.y+=_1e4;}}return _1de;};draw2d.SnapToGeometry.prototype.snapRectangle=function(_1e5,_1e6){var _1e7=_1e5.getTopLeft();var _1e8=_1e5.getBottomRight();var _1e9=this.snapPoint(draw2d.SnapToHelper.NORTH_WEST,_1e5.getTopLeft(),_1e7);_1e6.x=_1e7.x;_1e6.y=_1e7.y;var _1ea=this.snapPoint(draw2d.SnapToHelper.SOUTH_EAST,_1e5.getBottomRight(),_1e8);if(_1e9&draw2d.SnapToHelper.WEST){_1e6.x=_1e8.x-_1e5.getWidth();}if(_1e9&draw2d.SnapToHelper.NORTH){_1e6.y=_1e8.y-_1e5.getHeight();}return _1e9|_1ea;};draw2d.SnapToGeometry.prototype.populateRowsAndCols=function(){this.rows=[];this.cols=[];var _1eb=this.workflow.getDocument().getFigures();var _1ec=0;for(var i=0;i<_1eb.getSize();i++){var _1ee=_1eb.get(i);if(_1ee!=this.workflow.getCurrentSelection()){var _1ef=_1ee.getBounds();this.cols[_1ec*3]=new draw2d.SnapToGeometryEntry(-1,_1ef.getX());this.rows[_1ec*3]=new draw2d.SnapToGeometryEntry(-1,_1ef.getY());this.cols[_1ec*3+1]=new draw2d.SnapToGeometryEntry(0,_1ef.x+(_1ef.getWidth()-1)/2);this.rows[_1ec*3+1]=new draw2d.SnapToGeometryEntry(0,_1ef.y+(_1ef.getHeight()-1)/2);this.cols[_1ec*3+2]=new draw2d.SnapToGeometryEntry(1,_1ef.getRight()-1);this.rows[_1ec*3+2]=new draw2d.SnapToGeometryEntry(1,_1ef.getBottom()-1);_1ec++;}}};draw2d.SnapToGeometry.prototype.getCorrectionFor=function(_1f0,_1f1,side){var _1f3=draw2d.SnapToGeometry.THRESHOLD;var _1f4=draw2d.SnapToGeometry.THRESHOLD;for(var i=0;i<_1f0.length;i++){var _1f6=_1f0[i];var _1f7;if(_1f6.type===-1&&side!==0){_1f7=Math.abs(_1f1-_1f6.location);if(_1f7<_1f3){_1f3=_1f7;_1f4=_1f6.location-_1f1;}}else{if(_1f6.type===0&&side===0){_1f7=Math.abs(_1f1-_1f6.location);if(_1f7<_1f3){_1f3=_1f7;_1f4=_1f6.location-_1f1;}}else{if(_1f6.type===1&&side!==0){_1f7=Math.abs(_1f1-_1f6.location);if(_1f7<_1f3){_1f3=_1f7;_1f4=_1f6.location-_1f1;}}}}}return _1f4;};draw2d.SnapToGeometry.prototype.onSetDocumentDirty=function(){this.rows=null;this.cols=null;};