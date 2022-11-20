// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const auth = req.headers.authorization;

  try {
    const portfolio = await prisma.data.findMany();
    res.status(200).json({ status: 200, data: portfolio });
  } catch (err) {
    res.status(500).json({ status: 500, error: (err as Error).message });
  }
}
