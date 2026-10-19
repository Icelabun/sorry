# A Note

A lightweight, single-page apology site built with plain HTML, CSS, and JavaScript. There is no framework or build step.

## Personalize the page

At the top of `script.js`, replace these four values:

- `HER_NAME` — her name
- `MY_NAME` — your name
- `HER_FAVORITE_COLOR_HEX` — her favorite color as a six-digit hex value such as `#c4a7ff`
- `HER_FAVORITE_SONG_OR_QUOTE` — her favorite song or quote; this appears as one small line near the hero

The site uses a soft lavender fallback accent until a valid six-digit hex color is entered. The story text is in `index.html` if you need to adjust any wording.

## Add the video message

Put the video at `assets/video.mp4`. The page uses a responsive player with controls; if the file is missing or unavailable, it displays a gentle fallback instead. The video never plays automatically. The current video is about 49 MB, which may take a while to load on mobile connections; consider compressing it before deployment if needed.

## Preview locally

Open `index.html` in a browser. To test the video, use a local static server or deploy the site so the browser can load the media file.

## Deploy to GitHub Pages

1. Add `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder (including `video.mp4`) to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select your branch and the `/ (root)` folder, then save.
4. Open the published Pages URL when GitHub Pages finishes deploying.

The page includes `noindex, nofollow` so search engines are asked not to index it. This is not access control: anyone with the URL can still visit it.
