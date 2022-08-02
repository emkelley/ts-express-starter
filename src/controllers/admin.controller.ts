import { Request, Response, NextFunction } from "express";

const pong = async (req: Request, res: Response, _next: NextFunction) => {
  return res.status(200).json({
    ping: "pong",
  });
};

export default {
  pong,
};
