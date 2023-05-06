import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body;
  res.json({ data: `${body.one} ${body.two}` });
}
