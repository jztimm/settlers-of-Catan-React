import React from 'react'
import '../Style/Tile.css'


export default class MapRenderer extends React.Component {

   constructor(props) {
      super(props);

      this.board = this.props.board
      this.state = {
         hexSize: 50,
         hexOrigin: {x: 100, y: 130},
         canvasSize: { canvasWidth: 800, canvasHeight: 600 }
      }
   }

   componentDidMount() {
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      this.canvashex.width = canvasWidth;
      this.canvashex.height = canvasHeight;
      // this.drawHex(this.canvashex, { x: 50, y: 50 });
      let centerline = 400;
      let top_row_x = 125;
      let rows = [3, 4, 5, 4, 3]
      for (let i = 0; i < rows.length; i++)
      {
         let is_centered = i % 2;
         if (is_centered === 0)
         {
            this.drawHex(this.canvashex, { x: centerline, y: top_row_x + i * 85}, "black", "gray")
         }
         let num_sides = Math.floor(rows[i] / 2)
         for (let j = 1; j < num_sides + 1; j++)
         {
            if (is_centered === 1)
            {
               this.drawHex(this.canvashex,
                  { 
                     x: centerline + this.state.hexSize * 2 * j - this.state.hexSize,
                     y: top_row_x + i * 85
                  }, "black", "gray"
               )
               this.drawHex(this.canvashex,
                  {
                     x: centerline + this.state.hexSize * 2 * -j + this.state.hexSize,
                     y: top_row_x + i * 85
                  }, "black", "gray"
               )
            }
            else
            {
               this.drawHex(this.canvashex,
                  {
                     x: centerline + this.state.hexSize * 2 * j,
                     y: top_row_x + i * 85
                  }, "black", "gray"
               )
               this.drawHex(this.canvashex,
                  {
                     x: centerline + this.state.hexSize * 2 * -j,
                     y: top_row_x + i * 85
                  }, "black", "gray"
               )
            }
         }
      }
   }

   
   drawHex(canvasID, center, lineColor, fillColor) {
      for (let i = 0; i <= 5; i++) {
         let start = this.getHexCornerCord(center, i);
         let end = this.getHexCornerCord(center, i + 1);
         this.fillHex(canvasID, center, fillColor);
         this.drawLine(canvasID, start, end, lineColor);
      }
   }
   
   fillHex = (canvasID, center, fillColor)=> {
      const c0 = this.getHexCornerCord(center, 0);
      const c1 = this.getHexCornerCord(center, 1);
      const c2 = this.getHexCornerCord(center, 2);
      const c3 = this.getHexCornerCord(center, 3);
      const c4 = this.getHexCornerCord(center, 4);
      const c5 = this.getHexCornerCord(center, 5);
      const ctx = canvasID.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = fillColor;
      ctx.moveTo(c0.x, c0.y);
      ctx.lineTo(c1.x, c1.y);
      ctx.lineTo(c2.x, c2.y);
      ctx.lineTo(c3.x, c3.y);
      ctx.lineTo(c4.x, c4.y);
      ctx.lineTo(c5.x, c5.y);
      ctx.closePath();
      ctx.fill();
   }

   getHexCornerCord(center, i){
      let angle_deg = 60 * i - 30;
      let angle_rad = Math.PI / 180 * angle_deg;
      let x = center.x + this.state.hexSize * Math.cos(angle_rad);
      let y = center.y + this.state.hexSize * Math.sin(angle_rad);
      return this.Point(x, y);
   }

   Point(x, y) {
      return {x: x, y: y};
   }

   drawLine(canvasID, start, end) {
      const ctx = canvasID.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      ctx.closePath();
   }

   render() {
      return (
         <div>
            <canvas ref={canvashex => this.canvashex = canvashex }> </canvas>
         </div>
      )
   }
}