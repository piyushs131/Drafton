import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Configuration, OpenAIApi } from 'openai';

const prisma = new PrismaClient();

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { companyId } = req.body;
    const company = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const prompt = `
    Generate a proposal for ${company.name}.
    Executive Summary:
    ${company.teamDetails}

    Pricing Section:
    ${company.testimonials}
    `;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 500,
    });

    const proposal = {
      executiveSummary: completion.data.choices[0].text,
      pricingSection: company.testimonials,
    };

    res.status(200).json(proposal);
  } else {
    res.status(405).end();
  }
};
