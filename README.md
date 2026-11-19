# Axium Pharma — site statique

Reconstruction du site vitrine [www.axiumpharma.com](https://www.axiumpharma.com) (Wix) en site statique pur : HTML + CSS + JavaScript, aucune base de données, aucun abonnement.

## Structure

- `index.html` — page d'accueil
- `inst.html` — première installation (primo-installation)
- `honoraires.html` — honoraires d'agence
- `contact.html` — contact + formulaire
- `assets/css/style.css` — tous les styles
- `assets/js/main.js` — menu mobile, formulaire (mailto), année
- `assets/img/` — logo et favicon (SVG)

## Modifier le contenu

Tout le texte se trouve directement dans les fichiers `.html` : ouvrez la page concernée et modifiez le texte entre les balises. Les liens internes utilisent les mêmes chemins que l'ancien site (`inst.html`, `honoraires.html`, `contact.html`).

Pour tester en local : ouvrez simplement `index.html` dans un navigateur, ou lancez `python3 -m http.server 8000` dans ce dossier puis allez sur `http://127.0.0.1:8000`.

## Déployer gratuitement (et garder axiumpharma.com)

Le site étant 100 % statique, il peut être hébergé gratuitement. Seul le nom de domaine reste payant (~10 €/an chez votre registrar actuel).

### Option 1 — GitHub Pages (gratuit, domaine perso inclus)
1. Ce dépôt étant public : **Settings → Pages → Source : Deploy from a branch → `main` / dossier `/ (root)`**.
2. Le site est publié sur `https://<votre-pseudo>.github.io/axiumpharma/`.
3. Pour utiliser `www.axiumpharma.com` : ajoutez le domaine dans **Settings → Pages → Custom domain**, puis chez votre registrar, faites pointer le DNS du domaine vers GitHub Pages (enregistrements `A` vers les IP de GitHub Pages, ou `CNAME` `www` vers `<pseudo>.github.io`). GitHub fournit le certificat HTTPS automatiquement.
4. Une fois le nouveau site en ligne et vérifié, résiliez l'abonnement Wix.

### Option 2 — Netlify ou Cloudflare Pages (gratuit)
1. Connectez ce dépôt GitHub sur netlify.com ou pages.cloudflare.com — aucun build, « publish directory » : racine du dépôt.
2. Ajoutez `www.axiumpharma.com` comme domaine personnalisé dans les réglages du projet.
3. Suivez les instructions DNS affichées, puis résiliez Wix une fois le site vérifié en ligne.

## Formulaire de contact

Sans serveur, le formulaire de `contact.html` ouvre le client e-mail du visiteur avec le message pré-rempli (`mailto:` vers `contact@axiumpharma.com`).

## Référencement

- Chaque page a un `<title>` et une meta description dédiés.
- Les chemins d'URL d'origine (`/inst`, `/honoraires`, `/contact`) sont conservés : GitHub Pages sert `inst.html` à l'URL `/inst` automatiquement.
- Pour aller plus loin : ajoutez un `sitemap.xml` et un `robots.txt` à la racine, et soumettez le site à Google Search Console.
