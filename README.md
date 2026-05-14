# Blue Prince Guide

A static walkthrough site for Blue Prince. Built for GitHub Pages.

## Structure

```
blue-prince-guide/
├── index.html         Home + guide cards + tips + Featured Map + FAQ
├── beginner.html      Beginner's guide (draft, resources, tiers)
├── room-46.html       Room 46 walkthrough
├── puzzles.html       All major puzzle solutions
├── mansion-map.html   Mt. Holly grid + wing layout + Mine cross-section
├── all-rooms.html     Every room: rarity, doors, cost, effect
├── items-list.html    Day-bound / persistent / permanent item index
├── day-1-strategy.html  Reconnaissance route for day 1
├── endings.html       Standard / Forgotten Wing / True Ending
├── antechamber.html   Post-Room-46 room and Master Key
├── puzzle-vault-code.html  Vault code 4558 full derivation
├── css/style.css      Dark mansion theme
├── js/main.js         Nav + TOC scroll
└── zh/                Chinese mirror of all of the above
```

## Deploy to GitHub Pages

1. Create a new repo (suggested name: `blue-prince-guide`).
2. Push the contents of this folder to `main`:
   ```bash
   cd blue-prince-guide
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/blue-prince-guide.git
   git push -u origin main
   ```
3. Repo → Settings → Pages → Source: **Deploy from a branch**, Branch: `main` / `(root)` → Save.
4. Site goes live at `https://YOUR_USERNAME.github.io/blue-prince-guide/` in ~1 min.

For a custom domain (e.g. `blueprinceguide.com`):
- Settings → Pages → Custom domain → enter your domain.
- Add a `CNAME` record at your registrar pointing to `YOUR_USERNAME.github.io`.

## Wire up ads (AdSense)

1. Apply at https://www.google.com/adsense/ — your site needs ~10-20 real visits/day before approval.
2. Once approved, paste your publisher ID into the commented `<script>` tag at the top of every `*.html` file:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
3. Replace each `<div class="ad-slot">` placeholder with an AdSense ad unit:
   ```html
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="YOUR_SLOT_ID"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
   ```

Three slot positions per page: top banner, mid-article, sidebar.

## Next steps for traffic

- ✅ Submit `sitemap.xml` to Google Search Console (30 URLs, EN+ZH).
- ✅ JSON-LD structured data added (BreadcrumbList, Article, HowTo, FAQPage, VideoGame, WebSite).
- ✅ 12 inline SVG diagrams across pages (no external images, no copyright risk).
- Cross-post short tips to r/BluePrince and r/patientgamers.
- Continue adding 1-2 long-tail pages per month — current keyword targets covered: map, all rooms, items, day 1, endings, Antechamber, Vault code 4558.
- Replace inline SVGs with original screenshots if/when they become available — original photos rank in Google Images.

## License

Site code: MIT. Game content: fan-created walkthroughs, factual descriptions for guide purposes.
