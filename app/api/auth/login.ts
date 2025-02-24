import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { serialize } from "cookie";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { email, password } = req.body;

  // Cari user berdasarkan email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: "Email atau password salah" });

  // Cek password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) return res.status(401).json({ message: "Email atau password salah" });

  // Buat cookie login
  const token = `${user.id}:${user.email}`;
  res.setHeader("Set-Cookie", serialize("adminToken", token, { path: "/", httpOnly: true }));

  res.status(200).json({ message: "Login berhasil" });
}
