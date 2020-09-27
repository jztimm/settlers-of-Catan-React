import React from 'react'
import '../Style/Tile.css'


export default class Canvas extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         hexSize: 50,
         hexOrigin: {x: 100, y: 130}
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
      for (let r = 0; r <= 4; r++) {
         for (let q = 0; q <= 4; q++) {
            let center = this.hexToPixel(this.hex(q, r));
            this.drawHex(this.canvashex, center)
            this.drawHexCordinates(this.canvashex, center, this.hex(q, r));
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
      let hexOrigin = this.state.hexOrigin;
      let x = this.state.hexSize * Math.sqrt(4) * (h.q + h.r/2) + hexOrigin.x;
      let y = this.state.hexSize * 3/2 * h.r + hexOrigin.y;
      return this.Point(x, y);
   }

   // EXPERIMENTAL

   // cube_spiral(center, radius){
   //    var results = [center]
   //    for each 1 ≤ k ≤ radius:
   //    results = results + cube_ring(center, k)
   //    return results
   // }

   // EXPERIMENTAL

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
      ctx.fillText(h.q, center.x-10, center.y);
      ctx.fillText(h.r, center.x+7, center.y)
   }

   render() {
      return (
         <div>
            <canvas ref={canvashex => this.canvashex = canvashex }> </canvas>
         </div>
      )
   }
}