import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, logoUrl, teamDetails, testimonials, projects } = req.body;
    const company = await prisma.company.create({
      data: {
        name,
        logoUrl,
        teamDetails,
        testimonials,
        projects,
      },
    });
    res.status(201).json(company);
  } else {
    res.status(405).end();
  }
};
