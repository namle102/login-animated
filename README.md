# Login Animated

Animated, lightweight login form demo built with HTML, CSS and a small amount of JavaScript. This project demonstrates CSS transforms and transitions to create smooth, modern UI animations for a login component.

Live demo: https://namle102.github.io/login-animated/

---

## Table of contents

- [Demo](#demo)
- [Features](#features)
- [How it works](#how-it-works)
- [Built with](#built-with)
- [Getting started](#getting-started)
  - [Clone](#clone)
  - [Open locally](#open-locally)
  - [Serve with a local server](#serve-with-a-local-server)
- [Customisation](#customisation)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

---

## Demo

Live preview (GitHub Pages):  
https://namle102.github.io/login-animated/

Consider adding a short GIF or screenshot to show the animation in the README for quicker visual context.

---

## Features

- Smooth CSS-based animations using transforms and transitions
- Minimal, dependency-free implementation (single HTML/CSS/JS files)
- Easy to read and modify — great as a learning example

---

## How it works

The animation is implemented primarily with CSS:
- Transitions animate properties such as transform and opacity.
- Transformations (translate/scale/rotate) are used to create the motion effects.
- A small helper JavaScript file manages interaction state (opening/closing the login UI).

See `index.html`, `style.css` and `script.js` for the implementation.

---

## Built with

- HTML5
- CSS3 (transforms & transitions)
- JavaScript (minimal DOM interaction)

---

## Getting started

Clone the repository:

```bash
git clone https://github.com/namle102/login-animated.git
cd login-animated
```

Open the demo in your browser:

- Open `index.html` directly in your browser, or
- Serve the folder with a simple local server:

```bash
# Python 3
python -m http.server 8000

# Node (if you have http-server installed)
npx http-server -p 8000
```

Then open http://localhost:8000 in your browser.

---

## Customisation

- To change animation timing or easing, edit the relevant transition properties in `style.css`.
- To update text, layout or markup, edit `index.html`.
- To modify interactive behavior, see `script.js`.

If you'd like, I can annotate the CSS and JS with comments explaining the key animation blocks.

---

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-change`
3. Make your changes and commit
4. Open a Pull Request with a clear description of your change

Please include screenshots or a short GIF for any UI changes.

---

## License

This project is licensed under the MIT License — see the accompanying LICENSE file for details.

---

## Author

Nam Le — https://github.com/namle102

---

## Acknowledgements

- Inspired by UI/animation tutorials and experiments with CSS transforms and transitions.
- Thank you for trying out this small demo — feel free to reuse or adapt components for your projects.