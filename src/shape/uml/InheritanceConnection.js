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

/**
 * Copy&Paste implementation of a Connection.
 * TODO: Change the standard "Connection" class to avoid stupid Copy&Paste
 *       e.g. Add method to set the visible representation of an connection.
 *
 * @version @VERSION@
 * @author Andreas Herz
 * @constructor
 */
draw2d.shape.uml.InheritanceConnection=function()
{
  draw2d.Connection.call(this);

  this.setTargetDecorator(new draw2d.shape.uml.InheritanceConnectionDecorator());

  this.setSourceAnchor(new draw2d.ChopboxConnectionAnchor());
  this.setTargetAnchor(new draw2d.ChopboxConnectionAnchor());
  this.setRouter(new draw2d.NullConnectionRouter());
};

draw2d.shape.uml.InheritanceConnection.prototype = new draw2d.Connection();

