Archetype Mood Dial

🧠⚔️🪄👑 Cycles through daily masculine archetype affirmations

This TRMNL plugin displays a rotating affirmation every 15 minutes, drawing from the four masculine archetypes described in Robert Moore & Douglas Gillette’s framework:
	•	👑 King — Order, blessing, responsibility
	•	⚔️ Warrior — Discipline, courage, clarity
	•	🪄 Magician — Insight, transformation, detachment
	•	🧠 Lover — Connection, beauty, feeling

⸻

🚀 Features

✅ Displays a new archetype and a related quote every 15 minutes
✅ Pulls quotes dynamically from the quotes.json file
✅ Plugin supports multiple endpoints:
	•	Dynamic HTML for the TRMNL display
	•	Polling JSON for quotes
	•	Webhooks for install and uninstall

⸻

🏗️ Deployment

This project is deployed via Vercel using a Next.js framework.
	•	Dynamic Routing:
	•	/api/markup – Plugin Markup HTML
	•	/api/random-quote – Polling JSON for quotes
	•	/api/success – Webhook for successful installation
	•	/api/uninstall – Webhook for uninstallation
	•	Frontend Pages:
	•	/ – Default landing page
	•	/install – Installation confirmation
	•	/manage – Plugin management interface
	•	/uninstall – User-facing uninstall confirmation (optional)

 ⸻

📦 Structure

/pages/
  index.js         – Landing page
  install.js       – Install confirmation page
  manage.js        – Plugin management page
  uninstall.js     – Uninstall confirmation page
/pages/api/
  markup.js        – Plugin markup for TRMNL display
  random-quote.js  – Provides random quotes
  success.js       – Webhook for install success
  uninstall.js     – Webhook for uninstallation
quotes.json        – Structured quote data

 ⸻

✨ Attribution

Selected quotes are drawn from:
	•	King, Warrior, Magician, Lover by Robert Moore & Douglas Gillette
	•	Classic and modern literature
	•	User-authored insights and affirmations

All quotes requiring attribution are credited inline in quotes.json.
If there is no attribution, it was a user-authored insight or affirmation.

⸻
