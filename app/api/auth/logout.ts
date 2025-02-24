import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Set-Cookie", serialize("adminToken", "", { path: "/", maxAge: 0 }));
  res.status(200).json({ message: "Logout berhasil" });
}
