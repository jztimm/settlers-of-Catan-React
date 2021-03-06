from random import randrange, shuffle
from tile import Tile, TileType
from board_data import BoardData, MaximumTileCnt, BoardType

class Board(object):
   _BOARD_DATA = {
      # The base set fixed data
      BoardType.BASE: BoardData(
         tile_cnt = 19,
         rows = [3, 4, 5, 4, 3],
         ends = [2, 6, 11, 15, 18],
         starts = [0, 3, 7, 12, 16],
         corners = [0, 2, 7, 11, 16, 18],
         edges = [1, 3, 6, 12, 15],
         tabs = [3, 2, 0, 2, 3],
         maximum_tile_cnt = MaximumTileCnt(
            ore=3,
            sheep=4,
            wheat=4,
            wood=4,
            brick=3,
            desert=1,
            gold=0,
            sea=0,
            fishing=0,
         )
      ),
      BoardType.BASE_EXP: BoardData(
         tile_cnt = 30,
         rows = [3, 4, 5, 6, 5, 4, 3],
         ends = [2, 6, 11, 17, 22, 26, 29],
         starts = [0, 3, 7, 12, 18, 23, 27],
         corners = [0, 2, 12, 17, 27, 29],
         edges = [1, 3, 6, 7, 11, 18, 22, 23, 26, 28],
         tabs = [5, 3, 2, 0, 2, 3, 5],
         maximum_tile_cnt = MaximumTileCnt(
            ore=5,
            sheep=6,
            wheat=6,
            wood=6,
            brick=5,
            desert=2,
            gold=0,
            sea=0,
            fishing=0,
         )
      )
   }

   def __init__(self, board_type : BoardType):
      tile_cnt = Board._BOARD_DATA[board_type][0]
      self.board_type = board_type
      self.tiles = [ Tile(i, TileType.NONE, 0) for i in range(0, tile_cnt) ]
      self._rows = Board._BOARD_DATA[board_type][1]
      self._ends = Board._BOARD_DATA[board_type][2]
      self._starts = Board._BOARD_DATA[board_type][3]
      self._corners = Board._BOARD_DATA[board_type][4]
      self._edges = Board._BOARD_DATA[board_type][5]

      self._mark_edges()
      self._mark_corners()
      for tile in self.tiles:
         self._add_neighbors(tile)

      self._generate_board()

   def _generate_board(self):
      # Get all the applicable tile types and remove NONE
      possible_types = list(map(int, TileType))
      possible_types.remove(TileType.NONE)
      init_type = possible_types[randrange(0, 5)]
      if not set_type(self, self.tiles[0], init_type, possible_types):
         print("Failed to converge.")
         return

   def _add_neighbors(self, node: Tile):
      row = find_row(self, node.index)
      # Over or on the mid line
      if row != 0:
         if row <= len(self._rows) / 2:
            # Top Left
            if node.index != self._starts[row]:
               node.addNeighbor(self.tiles[node.index - self._rows[row]])
            # Top Right
            if node.index != self._ends[row]:
               node.addNeighbor(self.tiles[node.index - self._rows[row] + 1])
         else:
            # Top Left
            node.addNeighbor(self.tiles[node.index - self._rows[row] - 1])
            # Top Right
            node.addNeighbor(self.tiles[node.index - self._rows[row]])
      # Left
      if node.index - 1 >= self._starts[row]:
         node.addNeighbor(self.tiles[node.index - 1])
      # Right
      if node.index + 1 <= self._ends[row]:
         node.addNeighbor(self.tiles[node.index + 1])
      # Under or on the mid line
      if row != len(self._rows) - 1:
         if row >= int(len(self._rows) / 2):
            # Bottom Right
            if node.index != self._ends[row]:
               node.addNeighbor(self.tiles[node.index + self._rows[row]])
            # Bottom Left
            if node.index != self._starts[row]:
               node.addNeighbor(self.tiles[node.index + self._rows[row] - 1])
         else:
            # Bottom Right
            node.addNeighbor(self.tiles[node.index + self._rows[row] + 1])
            # Bottom Left
            node.addNeighbor(self.tiles[node.index + self._rows[row]])

   # For the base set
   def _mark_corners(self):
      for corner in self._corners:
         self.tiles[corner].markAsCorner()

   # For the base set
   def _mark_edges(self):
      for edge in self._edges:
         self.tiles[edge].markAsEdge()

   def _get_type_count(self, t: TileType):
      cnt = 0
      for tile in self.tiles:
         if tile.type == t:
            cnt += 1
      return cnt

def print_board(board : Board):
   for i, tile in enumerate(board.tiles):
      endchar = ''
      if i in board._ends:
         endchar = '\n'
      if i in board._starts:
         tab = Board._BOARD_DATA[board.board_type].tabs.pop(0)
         print(" "*tab, end='')
      print(" " + str(tile.type) + " ", end=endchar)

def find_row(board : Board, index : int):
   row_index = 0
   for i, row_cnt in enumerate(board._rows):
      row_index += row_cnt
      if index < row_index:
         return i

def set_type(board : Board, curr_tile : Tile, curr_type : TileType, types : list):
   # Check to see if the current placement is valid.
   # Current rules being applied:
   #  - Ensure none of the tile types are touching the same time type
   #  - Ensure that there are only a set number of tiles
   if (not curr_type in [ t.type for t in curr_tile.neighbors ] and
      board._get_type_count(curr_type) < Board._BOARD_DATA[board.board_type].maximum_tile_cnt[curr_type]
   ):
      curr_tile.type = curr_type

      # If the next index matches the length of the board, we are done
      if curr_tile.index + 1 == len(board.tiles):
         return True

      # Iterate through all the possible tile types until a solution is found
      temp_types = types.copy()
      while len(temp_types) > 0:
         if set_type(board, board.tiles[curr_tile.index + 1], temp_types.pop(randrange(0, len(temp_types))), types):
            return True
      
      # If no solution is found, unset this tile and backtrack
      curr_tile.type = TileType.NONE
      return False
   return False
