# Portfolio

The personal portfolio of **Budh Preay Gautam**, a QA automation engineer and full-stack developer. It is a small static site: plain HTML, CSS and JavaScript, with no build step and no dependencies.

## What's on the page

- **Hero:** name, a typing headline and links to GitHub, email and the CV.
- **About:** a short introduction, current role, education and earlier internships.
- **Skills:** test automation, frontend, backend and tools.
- **Projects:** [PulseFit](https://github.com/budhpreaygautam/PulseFit) (featured), a Netflix home-page clone, a registration form, and a React app that fetches users from an API.
- **Contact:** email and GitHub.

## Features

- Responsive layout that works from small phones to wide desktops, with a phone menu.
- Light and dark themes. The page follows the system setting, and the visitor's choice is remembered in the browser.
- Accessible by default: semantic landmarks, a skip link, visible keyboard focus, labelled icon buttons, and a typing headline that screen readers get as plain text.
- Respects reduced-motion settings: the typing and the animated portrait switch off.
- Fast: no frameworks, no icon fonts and no third-party scripts. Only the Poppins font is loaded from Google Fonts.

## Run it locally

There is nothing to install. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
index.html        page content
style.css         layout, themes and responsive rules (colours are CSS variables at the top)
script.js         theme toggle, phone menu, typing headline and footer year
components/       images and the CV (Resume.pdf)
```

## Customising

- **Colours and themes:** change the variables in the `:root` blocks at the top of `style.css`.
- **Typing headline:** edit the `roles` list in `script.js`.
- **Projects, skills and text:** edit the matching sections in `index.html`.
- **CV:** replace `components/Resume.pdf`.

## Deploying

The site is static, so any static host works. With GitHub Pages, choose **Settings → Pages**, select the `main` branch and the root folder, and the page is served at `https://budhpreaygautam.github.io/portfolio/`.

## Contact

[budhpreaygautam21@gmail.com](mailto:budhpreaygautam21@gmail.com) · [GitHub](https://github.com/budhpreaygautam)
