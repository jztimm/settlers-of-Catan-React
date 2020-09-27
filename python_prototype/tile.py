from enum import IntEnum

class TileType(IntEnum):
   Ore = 0
   Sheep = 1
   Wheat = 2
   Wood = 3
   Brick = 4
   Desert = 5
   Gold = 6
   Sea = 7
   Fishing = 8
   NONE = 99

class Tile(object):
   def __init__(self, i, t, n):
      self.index = i
      self.type = t
      self.number  = n
      self.neighbors = []
      self._max_neighbors = 6
   
   def isCenter(self):
      return self._max_neighbors == 6

   def isEdge(self):
      return self._max_neighbors == 4
   
   def isCorner(self):
      return self._max_neighbors == 3

   def addNeighbor(self, neigh):
      if len(self.neighbors) < self._max_neighbors:
         self.neighbors.append(neigh)
      else:
         print("ERROR: Attempting to add {} to {}. Node already has [{}] neighbors!".format(neigh.index, self.index, self.neighbors))

   def markAsCenter(self):
      self._max_neighbors = 6

   def markAsEdge(self):
      self._max_neighbors = 4

   def markAsCorner(self):
      self._max_neighbors = 3

   def __str__(self):
      return str(self.index)

   def __repr__(self):
      return str(self.index)
