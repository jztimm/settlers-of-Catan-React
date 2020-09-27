from collections import namedtuple

BoardData = namedtuple("BoardData", [
      # The number of tiles on a board
      "tile_cnt",
      # The number of tiles on each row
      "rows",
      # The indicies of the tiles that are at the end of a row
      "ends",
      # The indicies of the tiles that are at the start of a row
      "starts",
      # The indicies of the tiles that are corner pieces
      "corners",
      # The indicies of the tiles that are edge pieces
      "edges",
      # The maximum number of resource types allowed on a board
      # 0: Ore
      # 1: Jimmies
      # 2: Wheat
      # 3: Wood
      # 4: Brick
      # 5: Desert
      "maximum_tile_cnt",
   ]
)

MaximumTileCnt = namedtuple("MaximumTileCnt", [
      "ore",
      "sheep",
      "wheat",
      "wood",
      "brick",
      "desert",
      "gold",
      "sea",
      "fishing",
   ]
)
