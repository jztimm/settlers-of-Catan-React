import React from 'react'
import '../Style/Tile.css'


export default class Canvas extends React.Component {

   constructor(props) {
      super(props);
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
            this.drawHex(this.canvashex, { x: centerline, y: top_row_x + i * 85})
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
                  }
               )
               this.drawHex(this.canvashex,
                  {
                     x: centerline + this.state.hexSize * 2 * -j + this.state.hexSize,
                     y: top_row_x + i * 85
                  }
               )
            }
            else
            {
               this.drawHex(this.canvashex,
                  {
                     x: centerline + this.state.hexSize * 2 * j,
                     y: top_row_x + i * 85
                  }
               )
               this.drawHex(this.canvashex,
                  {
                     x: centerline + this.state.hexSize * 2 * -j,
                     y: top_row_x + i * 85
                  }
               )
            }
         }
      }
   }

   drawHex(canvasID, center) {
      for (let i = 0; i <= 5; i++) {
         let start = this.getHexCornerCord(center, i);
         let end = this.getHexCornerCord(center, i + 1);
         this.drawLine(canvasID, { x: start.x, y: start.y }, { x: end.x, y: end.y })
      }
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