```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

This project is configured to deploy to GitHub Pages automatically.

### Automatic Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow handles the build and deployment process.

**Live URL:** https://GerritPotgieter.github.io/bug-hunt-pilot

### Manual Deployment

You can also deploy manually using:

```sh
npm run deploy
```

This will:

1. Build the production version of the site
2. Deploy the `dist` folder to the `gh-pages` branch

### Setup Instructions (First Time)

1. Go to your repository settings on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The site will be available at: `https://GerritPotgieter.github.io/bug-hunt-pilot`

### Local Preview

To preview the production build locally:

```sh
npm run build
npm run preview
```
