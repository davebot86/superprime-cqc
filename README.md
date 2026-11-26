# SuperPrime Critical Quality Check (CQC) app, v1.1

MULTIPLEX · Built to Outperform · Product of DaveBot

This is an offline iPhone web app for Critical Quality Checks on St John's Wood Square. The first module is Riser & Core: v0.1 draft, 15 stages, 54 checks.

## Put it live from your iPhone (GitHub Pages)

All the files sit in one folder with no subfolders, so you can upload them straight from the Files app.

1. Tap the zip in Files and it unzips into a folder called `superprime-cqc`.
2. In Safari, go to github.com and sign in. Tap **+ → New repository**, name it `superprime-cqc`, tick **Add a README** and tap Create.
3. Tap **Add file → Upload files**. Choose the files and select every file in the `superprime-cqc` folder, then tap **Commit changes**.
4. Go to **Settings → Pages**. Under Source, pick *Deploy from a branch*, choose `main` and `/ (root)`, then Save.
5. Wait about a minute. The app is at `https://davebot86.github.io/superprime-cqc/`.
6. Open that link in Safari, tap Share and choose **Add to Home Screen**. Open it once with signal. After that it works offline.

Send the same link to the construction managers so they can do step 6.

No check data goes to GitHub. Photos and answers stay on each phone until the manager exports them.

**Updating:** upload the new `index.html` and `sw.js` over the old ones. Phones pick up the change the next time they have signal.

## Brand font and colours

- **Font:** the app uses Kamerik 105 when `Kamerik105-Book.woff2` and `Kamerik105-Bold.woff2` are uploaded next to `index.html`. Until then it falls back to Avenir Next.
- **Colours:** the brand colours are set at the top of the `<style>` block in `index.html`.

## Adding more quality checks

Each check is a `.json` module in the same format as `riser-core.json`. You can add it on the phone (**Modules → + Add module**) or have DaveBot build it into the app.

Each question supports these fields:

- `ref`, `q`, `trade`, `source`
- `evidence`: `photo`, `cert` or `none`
- `good` and `goodImg` (optional): text and a reference photo for the "What good looks like" panel
