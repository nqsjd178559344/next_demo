// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../data";
import { ResponseError } from "../../interfaces";

export type Data = {
  data: Record<string, unknown>[];
  total: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ResponseError>
) {
  const status = Math.random() >= 0.5;
  console.log("status", status);
  return status
    ? res.status(200).json(data)
    : res.status(500).json({ message: "接口错误" });
}
