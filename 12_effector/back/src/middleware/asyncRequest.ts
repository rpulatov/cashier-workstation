import { Request, Response, NextFunction } from "express";

type AsyncRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export function async(fn: AsyncRequest) {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}
