# 🌍 TerraConnect - Website Officiel

Site web moderne et professionnel présentant TerraConnect, la startup qui rend l'intelligence géospatiale accessible à tous grâce à l'IA.

## 📋 Vue d'Ensemble

TerraConnect est une plateforme d'intelligence géospatiale nouvelle génération qui transforme les données satellites complexes en décisions simples et actionnables pour l'agriculture et les villes intelligentes.

Ce site web présente :
- Notre mission et vision
- Les défis que nous résolvons
- Notre solution technologique
- Des cas d'usage concrets
- L'impact de notre travail
- **Notre équipe fondatrice expérimentée**
- Opportunités de collaboration

## 🚀 Technologies Utilisées

- **HTML5** - Structure sémantique moderne
- **CSS3** - Design system complet avec animations
- **JavaScript (Vanilla)** - Interactivité et effets
- **Google Fonts** - Typographie professionnelle (Inter, Open Sans)

Pas de framework externe : déploiement simple et rapide !

## 📁 Structure du Projet

```
terraConnect website/
├── index.html          # Page principale avec toutes les sections
├── styles.css          # Design system complet
├── script.js           # Interactivité et animations
├── README.md           # Ce fichier
└── assets/             # Ressources (pour futures images)
    ├── icons/
    ├── team/
    └── usecases/
```

## 🎨 Sections du Site

1. **Hero** - Présentation principale avec statistiques clés
2. **Problème** - Les défis en agriculture, urbanisme et technologie
3. **Solution** - Comment TerraConnect fonctionne (3 étapes simples)
4. **Cas d'Usage** - Applications concrètes (inondations, irrigation, incendies)
5. **Impact** - Impact environnemental, social et économique
6. **Équipe** - 4 fondateurs avec profils détaillés 🆕
7. **Vision & CTA** - Mission et appels à l'action

## 💻 Développement Local

### Option 1 : Ouvrir directement
Le site utilise du HTML/CSS/JS pur, vous pouvez simplement :

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2 : Serveur local (recommandé)
Pour un environnement de développement optimal :

**Avec Python :**
```bash
# Python 3
python -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

**Avec Node.js :**
```bash
npx serve
```

**Avec PHP :**
```bash
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 🌐 Déploiement

### Netlify (Recommandé)

1. **Via l'interface web :**
   - Glisser-déposer le dossier sur netlify.com/drop
   - C'est tout !

2. **Via Netlify CLI :**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

1. Créer un repo GitHub
2. Pousser le code
3. Aller dans Settings > Pages
4. Sélectionner la branche `main` et le dossier `/root`
5. Cliquer sur Save

### Hébergement traditionnel (FTP)

Téléverser tous les fichiers via FTP vers votre hébergeur web.

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `styles.css` :

```css
:root {
    --color-primary: #0066FF;      /* Bleu principal */
    --color-secondary: #00C853;    /* Vert nature */
    --color-accent: #FF6B35;       /* Orange action */
    --color-dark: #263238;         /* Gris moderne */
}
```

### Contenu
Tout le contenu est dans `index.html`. Chaque élément avec l'attribut `data-lang-fr` et `data-lang-en` supporte le bilinguisme.

### Images de l'équipe
Remplacez les placeholders avatar dans la section Team :
1. Ajoutez des photos dans `assets/team/`
2. Remplacez `.avatar-placeholder` par `<img src="assets/team/nom.jpg">` dans `index.html`

## 🌍 Support Multilingue

Le site supporte le français (par défaut) et l'anglais.

Cliquez sur le bouton **EN/FR** dans la navigation pour basculer entre les langues.

Pour ajouter du nouveau contenu bilingue :
```html
<p data-lang-fr="Texte français" data-lang-en="English text">
    Texte français
</p>
```

## ✨ Fonctionnalités

- ✅ **Responsive Design** - Optimisé mobile, tablette, desktop
- ✅ **Animations Smooth** - Fade-in au scroll, transitions fluides
- ✅ **Navigation Sticky** - Barre de navigation fixe avec effet de scroll
- ✅ **Bilinguisme** - FR/EN avec toggle instantané
- ✅ **Accessibilité** - Markup sémantique, ARIA labels
- ✅ **Performance** - Chargement rapide (< 3s)
- ✅ **SEO Optimisé** - Meta tags, structure heading correcte

## 📱 Points de Rupture Responsive

- **Mobile** : < 768px (layout 1 colonne)
- **Tablette** : 768px - 1024px (layout 2 colonnes)
- **Desktop** : > 1024px (layout multi-colonnes complet)

## 🔗 Contacts et Liens

Pour intégrer vos vrais liens :

1. **Email** : Remplacez `contact@terraconnect.ai` par votre email
2. **LinkedIn** : Ajoutez les vrais profils LinkedIn dans les liens de l'équipe
3. **Réseaux sociaux** : Mettez à jour les liens dans le footer

## 🛠️ Optimisation

### Images
- Compressez les images avec [TinyPNG](https://tinypng.com/)
- Utilisez WebP pour de meilleures performances
- Ajoutez `loading="lazy"` aux images

### Performance
- Le site est déjà optimisé pour < 3s de chargement
- Aucune dépendance externe lourde
- CSS et JS minifiables pour production

### SEO
```html
<!-- Déjà inclus, personnalisez selon besoin -->
<title>TerraConnect - L'Intelligence Géospatiale pour Tous</title>
<meta name="description" content="...">
```

## 📄 Présentation PDF

Pour ajouter la présentation téléchargeable :
1. Créez votre PDF de présentation
2. Placez-le à la racine : `presentation.pdf`
3. Décommentez la ligne dans `script.js` :
   ```javascript
   window.open('presentation.pdf', '_blank');
   ```

## 🧪 Tests

### Validation HTML
```bash
npx html-validate index.html
```

### Lighthouse (Performance)
```bash
npx lighthouse https://votre-site.com --view
```

### Test Responsive
Utilisez les DevTools de Chrome :
- F12 > Toggle Device Toolbar
- Testez iPhone, iPad, Desktop

## 🤝 Contribution

Pour proposer des améliorations :
1. Fork le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Committez (`git commit -m 'Ajout fonctionnalité'`)
4. Push (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📞 Support

Pour toute question :
- **Email** : contact@terraconnect.ai
- **LinkedIn** : [Lien à ajouter]

## 📜 Licence

© 2026 TerraConnect - Tous droits réservés

---

**Fait avec 💚 pour rendre l'intelligence géospatiale accessible à tous**
