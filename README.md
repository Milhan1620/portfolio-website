# Milhan Musharaf — Portfolio Website

A single-page personal portfolio site built with plain HTML, CSS, and JavaScript
(no build tools, no frameworks, no npm install needed).

## Files

```
portfolio-website/
├── index.html      → page content
├── style.css       → all styling
├── script.js       → nav toggle, typed animation, animated background
├── assets/
│   └── Milhan_Musharaf_CV.pdf   → downloadable CV (linked from the hero "Download CV" button)
└── README.md
```

## How to run it in VS Code

**Option A — Live Server extension (recommended, auto-refreshes on save)**
1. Open the `portfolio-website` folder in VS Code: `File → Open Folder…`
2. Go to the Extensions tab (left sidebar, or `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **"Live Server"** by Ritwick Dey and click **Install**
4. Right-click `index.html` in the file explorer → **"Open with Live Server"**
5. Your site opens at `http://127.0.0.1:5500` and refreshes automatically whenever you save a file

**Option B — No extension needed (Python's built-in server)**
1. Open the folder in VS Code and open a terminal: `Terminal → New Terminal`
2. Run:
   ```
   python -m http.server 8000
   ```
   (use `python3` instead of `python` on Mac/Linux if needed)
3. Open your browser to `http://localhost:8000`

**Option C — Just double-click it**
You can also just double-click `index.html` and it'll open directly in your browser.
This works fine for viewing, but Live Server (Option A) is better while you're editing.

## How to customize

- **Text/content**: edit `index.html` directly — every section (About, Skills, Projects, Education, Contact) is clearly labeled with HTML comments.
- **Colors**: all colors are defined once at the top of `style.css` under `:root { ... }` — change `--accent` to swap the teal highlight color, etc.
- **Projects**: each project is a `<article class="project-card">` block in `index.html` — copy/paste one to add a new project.
- **CV file**: replace `assets/Milhan_Musharaf_CV.pdf` with your latest resume, keeping the same filename (or update the `href` in the "Download CV" button in `index.html`).

## Deploying it for free (once you're happy with it)

- **GitHub Pages**: push this folder to a GitHub repo, then enable Pages in the repo Settings → Pages. Your site will be live at `https://<username>.github.io/<repo-name>`.
- **Netlify / Vercel**: drag-and-drop the folder onto netlify.com/drop for an instant live link — no account setup required for a quick preview.

Once it's live, add the link to your LinkedIn **Featured** section or your profile's **Contact info → Website** field.
