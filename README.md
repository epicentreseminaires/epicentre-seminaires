# Epicentre Séminaires

Site web de l'agence événementielle **Epicentre Séminaires**, deux territoires : Plaine de l'Ain (agence de production) et Épinac, en Bourgogne (domaine privatisé).

**En production** : [https://epicentre-seminaires.fr](https://epicentre-seminaires.fr)

## Stack

- **Astro 5** + **Tailwind CSS** : site statique, ultra-rapide, optimisé pour le SEO.
- **GitHub Pages** : hébergement gratuit, déploiement automatique à chaque push sur `main`.
- **Formspree** : gestion des soumissions de formulaires (contact, devis).

## Développement local

```bash
# Installer les dépendances (1ère fois uniquement)
npm install

# Lancer le serveur de dev (rechargement auto)
npm run dev
# Le site est ensuite disponible sur http://localhost:4321

# Build de production (génère le dossier dist/)
npm run build

# Prévisualiser le build localement
npm run preview
```

## Workflow de modification

1. **Lancer le dev** : `npm run dev` puis ouvrir [http://localhost:4321](http://localhost:4321)
2. **Modifier les fichiers** dans `src/` (les changements apparaissent en direct dans le navigateur)
3. **Commit + push** vers GitHub :
   - Via VSCode : panneau Source Control (Cmd+Shift+G), message de commit, "Commit", puis "Sync Changes"
   - Via terminal : `git add . && git commit -m "Description du changement" && git push`
4. **GitHub Actions** lance automatiquement le build et déploie sur GitHub Pages
5. Le site public est mis à jour en **30 à 60 secondes**

## Structure du projet

```
src/
├── pages/                  Routes du site (1 fichier .astro = 1 URL)
│   ├── index.astro         La home
│   ├── epinac/             Univers Épinac (Bourgogne)
│   │   ├── index.astro     /epinac/
│   │   ├── le-domaine.astro
│   │   ├── productions.astro
│   │   ├── contact.astro
│   │   └── [slug].astro    Pages géo dynamiques (depuis content/lieux)
│   ├── plaine-de-lain/     Univers Plaine de l'Ain
│   │   └── ...
│   ├── journal/
│   │   ├── index.astro     Liste des articles
│   │   └── [...slug].astro Article dynamique
│   ├── a-propos.astro
│   └── contact.astro
├── content/                Contenu Markdown (édition simple)
│   ├── journal/            Articles éditoriaux
│   └── lieux/              Pages géographiques par ville
├── layouts/Base.astro      Layout partagé (head, SEO, header, footer)
├── components/             Composants partagés
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Logo.astro
│   ├── LegalModals.astro   Mentions légales + RGPD (modales)
│   ├── TrustStrip.astro
│   ├── ClientsLogos.astro  Section secteurs servis
│   ├── Testimonials.astro
│   ├── FAQ.astro
│   ├── StickyCTA.astro
│   └── Prose.astro         Style des articles Markdown
├── styles/global.css       Styles globaux + Tailwind
└── content.config.ts       Schéma des collections de contenu
```

## Ajouter une page géographique (séminaire ville)

1. Créer un fichier dans `src/content/lieux/seminaire-NOMVILLE.md`
2. Copier le frontmatter d'un fichier existant
3. Choisir `zone: "epinac"` ou `zone: "plaine"`
4. Rédiger le contenu en Markdown
5. Commit + push, la page est en ligne 1 minute plus tard sur :
   - `/epinac/seminaire-NOMVILLE/` (si zone epinac)
   - `/plaine-de-lain/seminaire-NOMVILLE/` (si zone plaine)

## Ajouter un article au journal

1. Créer un fichier dans `src/content/journal/MON-SLUG.md`
2. Copier le frontmatter d'un article existant
3. Rédiger en Markdown
4. Commit + push, l'article est sur `/journal/MON-SLUG/` dans la minute

## Mises à jour de contenu fréquentes

Les fichiers les plus susceptibles d'être édités :
- **Numéro de téléphone** : `src/components/Header.astro` (variable `phone` et `phoneHref`)
- **Mentions légales (SIRET, adresse, etc.)** : `src/components/LegalModals.astro` (chercher `[À COMPLÉTER]`)
- **Logos / favicon** : dossier `public/images/`
- **Tarifs / formats** : dans les fichiers Markdown de `src/content/`

## Règles éditoriales

- **Pas de tiret long (cadratin "—")** dans les contenus. Remplacer par `:`, `,`, ou couper la phrase.
- **Pas de marques tierces** comme références client sans autorisation écrite.
- **Pas de témoignages inventés** : seulement des vrais avis avec accord écrit du client.
- **Photos uniquement libres de droit** (Unsplash, Pexels, Pixabay) ou propriétés d'Epicentre.

## Licence

© Epicentre Séminaires — tous droits réservés.
