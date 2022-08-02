import { Request, Response, NextFunction } from "express";
import auth from "basic-auth";

/*
  ! Authorized Users:

  * abc123
*/

const superusers = ["abc123"];

const admin = (req: Request, res: Response, next: NextFunction) => {
  const credentials = auth(req);
  if (!credentials) res.status(401).json();
  else if (superusers.includes(credentials.pass)) next();
  else returnUnauthorized(res);
};

const returnUnauthorized = (res: Response) => {
  res.status(401).json({
    status: "Failed",
    message: "Unauthorized",
  });
};

export default {
  admin,
};
