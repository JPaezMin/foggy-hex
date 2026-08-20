# Foggy Hex Project Notes

## Project

Foggy Hex is a Nuxt site for a Barcelona-based music and events collective.

Repository:
- GitHub: `JPaezMin/foggy-hex`
- Local path: `C:\Users\lowtr\Documents\FoggyHex\web\foggy-hex`
- Production site is deployed from the `deploy` branch through cPanel.

## Stack

- Nuxt 4
- Vue 3
- Nuxt Content
- Tailwind CSS
- Sass
- Nuxt Image
- Nuxt Icon

## Important Branches

- `main`: source code branch. Make normal code/content changes here.
- `deploy`: generated static production branch. Do not edit source code here manually.

## Common Commands

Use Corepack for Yarn instead of relying on a global `yarn` executable.

```powershell
corepack yarn install
corepack yarn dev
corepack yarn generate
corepack yarn preview
```

The static output is generated at:

```text
.output/public
```

## Deployment Flow

Production is managed through cPanel using `.cpanel.yml`.

The intended deploy flow is:

1. Work on `main`.
2. Generate the static site with `corepack yarn generate`.
3. Copy `.output/public` contents to the `deploy` branch.
4. Keep `.cpanel.yml` in the `deploy` branch.
5. Push `deploy` to GitHub.
6. cPanel pulls `origin/deploy` and syncs files to `/home/foggyhex/public_html/`.

Do not create duplicate local copies of this repository. Work only in:

```text
C:\Users\lowtr\Documents\FoggyHex\web\foggy-hex
```

## Codex Operating Rules

- Inspect relevant files before editing.
- Check for existing local changes before modifying files when Git is usable.
- Never overwrite user changes.
- Ask for explicit authorization before commits, pushes, PRs, or production deploys.
- Use the GitHub plugin for remote GitHub writes when local Git credentials are unavailable.
- Prefer small, focused changes.
- Verify user-facing changes with `corepack yarn generate` when feasible.

## Content Structure

- `content/future`: future event cards/listing data.
- `content/past`: past event cards/listing data.
- `content/shows`: detailed event pages.
- `content/agenda`: agenda entries.
- `public/images`: static public images.
- `app/assets`: bundled assets and SCSS.
- `app/pages`: route pages.
- `app/components`: reusable Vue components.
- `app/layouts`: page layouts.
