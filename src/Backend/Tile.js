import React from 'react'

export default class Tile extends React.Component {
   /**
    * Contains the index, type, and number of the tile.
    */
   
   tileType = () =>{
      const Ore = 0,
      const Sheep = 1,
      const Wheat = 2,
      const Wood = 3,
      const Brick = 4,
      const Desert = 5,
      const Gold = 6,
      const Sea = 7,
      const Fishing = 8,
      const NONE = 99
   }

   Tile = (object) => {
      function __init__(self, i, t, n){
         self.index = i
         self.type = t
         self.number  = n
         self.neighbors = []
         self._max_neighbors = 6
      }
      function isCenter(self){
         return self._max_neighbors == 6
      }
   
      function isEdge(self){
         return self._max_neighbors == 4
      }
      
      function isCorner(self){
         return self._max_neighbors == 3
      }
   
      function addNeighbor(self, neigh){
         if (len(self.neighbors) < self._max_neighbors){
            self.neighbors.append(neigh)
         }
         else{
            print("ERROR: Attempting to add {} to {}. Node already has [{}] neighbors!".format(neigh.index, self.index, self.neighbors))
         }
      }
   
      function markAsCenter(self){
         self._max_neighbors = 6
      }
   
      function markAsEdge(self){
         self._max_neighbors = 4
      }
   
      function markAsCorner(self){
         self._max_neighbors = 3
      }
   
      function __str__(self){
         return str(self.index)
      }
   
      function __repr__(self){
         return str(self.index)
      }
   }

      




   render() {
      return(
         <h4>tile</h4>
      ) 
   }
}
