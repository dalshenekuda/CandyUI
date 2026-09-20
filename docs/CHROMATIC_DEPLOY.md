# Chromatic Storybook deploy

Public Storybook for CandyUI is published via [Chromatic](https://www.chromatic.com/) on every push to `main`.

## One-time setup (repository owner)

1. Sign in at [chromatic.com](https://www.chromatic.com/) and **Add project** → link GitHub repo `dalshenekuda/CandyUI`.
2. Copy the **Project token** from Chromatic project settings.
3. In GitHub: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `CHROMATIC_PROJECT_TOKEN`
   - Value: paste the project token (never commit this to the repo).
4. Push to `main` or run locally:

   ```bash
   npm ci
   npm run build-storybook
   npx chromatic --project-token=YOUR_TOKEN_HERE
   ```

5. In Chromatic, open **Manage → Storybook** (or the latest build) and copy the **public Storybook URL**.
6. Update README **Live demo** with that URL.

## Workflow

[`.github/workflows/deploy-storybook.yml`](../.github/workflows/deploy-storybook.yml) runs `npx chromatic` with `--exit-zero-on-changes` so visual diffs do not fail the workflow on first runs.

If the secret is missing, the workflow fails until `CHROMATIC_PROJECT_TOKEN` is set.
