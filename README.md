# Archetype Mood Dial

🧠⚔️🪄👑 Cycles through daily masculine archetype affirmations.

This TRMNL plugin displays a rotating affirmation every 15 minutes based on the four masculine archetypes from Robert Moore & Douglas Gillette's framework:

- 👑 **King** — Order, blessing, responsibility  
- ⚔️ **Warrior** — Discipline, courage, clarity  
- 🪄 **Magician** — Insight, transformation, detachment  
- 🧠 **Lover** — Connection, beauty, feeling

## Features

- Displays a new archetype and related quote every 15 minutes
- Pulls quotes from an external `quotes.json` file
- Cycles in the following order: **King → Warrior → Magician → Lover**

## Deployment

This project is deployed via [Vercel](https://vercel.com), and served as static assets:
- `index.html` handles display and archetype rotation
- `quotes.json` provides structured quote content
- `install.html` confirms installation
- `success` and `uninstall` URLs are included for webhook handling

## Attribution

Select quotes are drawn from:
- *King, Warrior, Magician, Lover* by Moore & Gillette
- Classic and modern literature
- User-authored insights and affirmations

All quotes are credited inline in `quotes.json`.

---
