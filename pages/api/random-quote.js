import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'quotes.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    // Random archetype
    const archetypeEntry = data[Math.floor(Math.random() * data.length)];
    const archetype = archetypeEntry.name;

    // Random quote within that archetype
    const quoteEntry = archetypeEntry.quotes[Math.floor(Math.random() * archetypeEntry.quotes.length)];

    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({
      archetype,
      quote: quoteEntry.text,
      author: quoteEntry.author || ''
    });
  } catch (err) {
    console.error('Error reading quotes.json:', err);
    res.status(500).json({ error: 'Could not load quotes' });
  }
}
