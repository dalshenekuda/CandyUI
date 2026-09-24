# Chromatic Storybook deploy

Public Storybook for CandyUI is published via [Chromatic](https://www.chromatic.com/) on every push to `main`.

## One-time setup (repository owner)

1. Sign in at [chromatic.com](https://www.chromatic.com/) and **Add project** → link GitHub repo `dalshenekuda/CandyUI`.
2. Copy the **Project token** from Chromatic project settings.
3. Locally, create `.env.local` (gitignored) with:

   ```bash
   CHROMATIC_PROJECT_TOKEN=your-token
   ```

4. In GitHub: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `CHROMATIC_PROJECT_TOKEN`
   - Value: the same token (never commit it).
5. Publish once locally:

   ```bash
   npm ci
   npm run chromatic
   ```

6. In Chromatic, open the build URL printed by the CLI and copy the **public Storybook URL**.
7. Update README **Live demo** with that URL.

## Workflow

[`.github/workflows/deploy-storybook.yml`](../.github/workflows/deploy-storybook.yml) publishes on every push to `main`. The token comes from the `CHROMATIC_PROJECT_TOKEN` secret, not the command line. `--only-changed` enables TurboSnap, and `--auto-accept-changes=main` updates the baseline on `main`.

If the secret is missing, the workflow fails until `CHROMATIC_PROJECT_TOKEN` is set.
