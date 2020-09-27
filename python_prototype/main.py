from tile import Tile, TileType
from board import Board, print_board
from board_data import BoardType

def main():
   board = Board(BoardType.BASE_EXP)
   print_board(board)

if __name__ == "__main__":
   main()
