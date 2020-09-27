import React from 'react'
import '../Style/Tile.css'


export default class Canvas extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         hexSize: 20
      }
   }

   componentWillMount() {
      this.setState({
         canvasSize: { canvasWidth: 800, canvasHeight: 600 }
      })
   }

   componentDidMount() {
      const { canvasWidth, canvasHeight } = this.state.canvasSize;
      this.canvashex.width = canvasWidth;
      this.canvashex.height = canvasHeight;
      this.drawHexes();
      // this.drawHex(this.canvashex, { x: 50, y: 50 });
   }

   drawHexes() {
      for (let r = 0; r <= 5; r++) {
         for (let q = 0; q <= 5; q++) {
            let center = this.hexToPixel(this.hex(q, r));
            this.drawHex(this.canvashex, center)
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

   hexToPixel(h) {
      let x = this.state.hexSize * Math.sqrt(3) * (h.q + h.r/2);
      let y = this.state.hexSize * 3/2 * h.r;
      return this.Point(x, y);
   }


   Point(x, y) {
      return {x: x, y: y};
   }

   hex(q, r) {
      return {q: q, r: r}
   }

   drawLine(canvasID, start, end) {
      const ctx = canvasID.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      ctx.closePath();
   }

   drawHexCordinates(canvasID, center, h) {
      const ctx = canvasID.getContext('2d');
      ctx.fillText(h.q, center.x, center.y);
      ctx.fillText(h.r, center.x, center.y)
   }

   render() {
      return (
         <div>
            <canvas ref={canvashex => this.canvashex = canvashex }> </canvas>
         </div>
      )
   }
}