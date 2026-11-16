# Portfolio

A static personal portfolio website. The page title is "Md. Musfiqur Rahman (Tuhin) - AI Researcher | Developer | Designer".

## What it does

`index.html` is a single page with a profile sidebar and these sections: About me, Resume (several timelines), Skills, Portfolio, Blog and Contact. It opens with a parallax hero. The Portfolio section is headed "Portfolio (Not Updated)" in the page itself. The repository also contains CV and resume PDFs under `assets/images/`.

`process_images.py` is a helper script that makes white image backgrounds transparent and writes the results into `assets/images/parallax/`. It is not needed to view the site.

## Tech stack

- HTML, CSS and vanilla JavaScript
- Poppins font from Google Fonts and Ionicons from unpkg, both loaded from a CDN
- Python with Pillow (`PIL`) for the image helper script

## Folder layout

```
index.html              the site
assets/css/style.css    styles
assets/js/script.js     page behaviour (sidebar, modal, navigation)
assets/images/          images, icons and CV/resume PDFs
process_images.py       image background-removal helper
```

## Run

There is no build step or package manifest. Open `index.html` in a browser, or serve the folder with any static file server. An internet connection is needed for the font and icon CDNs.

To use the image helper, install Pillow and pass four image paths:

```
python process_images.py <grid> <code_math> <projects> <profile>
```

## Environment variables

None.

## Status

A static site with no tests. Part of its own content is marked as not updated.
