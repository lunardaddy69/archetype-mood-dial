import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const quoteRes = await fetch(
      'https://archetype-mood-dial.vercel.app/random-quote.json',
      { cache: 'no-store' }
    );
    const { archetype, quote, author } = await quoteRes.json();

    const html = `
<div class="view view--full">
  <div class="layout">
    <div class="columns">
      <div class="column">
        <div class="markdown gap--large">
          <span class="title">${archetype}</span>
          <div class="content-element content content--center">“${quote}”</div>
          <span class="label mt-4" style="font-style:italic">— ${author}</span>
        </div>
      </div>
    </div>
  </div>
</div>`;

    res.status(200).json({
      markup: html,
      markup_half_vertical: html,
      markup_half_horizontal: html,
      markup_quadrant: html
    });
  } catch (error) {
    console.error('Failed to generate TRMNL markup:', error);
    res.status(500).json({ error: 'Could not fetch quote' });
  }
}
