export default function handler(req, res) {
  const { archetype = 'King', quote = 'Default quote', author = 'Anonymous' } = req.query;

  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <style>
      html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
      }
      .trmnl-fullscreen {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #000;
      }
      .trmnl-card {
        padding: 2em;
        border: 1px solid #fff;
        max-width: 80%;
        box-sizing: border-box;
      }
      .trmnl-title {
        margin-bottom: 1em;
        color: #fff;
        text-align: center;
        font-size: 1.8rem;
      }
      .trmnl-desc {
        margin-bottom: 1em;
        color: #fff;
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .trmnl-label {
        margin-top: 2em;
        color: #fff;
        text-align: center;
        font-size: 0.85rem;
        font-style: italic;
      }
    </style>
    <div class="trmnl-fullscreen">
      <div class="trmnl-card">
        <p class="trmnl-title">${archetype}</p>
        <p class="trmnl-desc">“${quote}”</p>
        <p class="trmnl-label">— ${author}</p>
      </div>
    </div>
  `);
}
