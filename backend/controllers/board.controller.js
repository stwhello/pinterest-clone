import Board from "../models/board.model.js"

export const getUserBoards = async (req, res) => {
  const { userId } = req.params
  
  const boards = await Board.find({user:userId})
};
