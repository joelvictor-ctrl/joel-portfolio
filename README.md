# Joel Victor Portfolio

This portfolio was built for Web Development Assignment 2 at Ontario Tech University. It introduces me as an Information Technology student and showcases my coursework in networking, cybersecurity, programming, and web development.

## Pages

| Page | Route | Description |
| --- | --- | --- |
| Home | `/` | A short introduction and links to my projects and contact page |
| About Me | `/about` | My education, technical skills, work experience, and career goals |
| Projects | `/projects` | Six coursework projects covering networking, Python, LAN security, and web development |
| Contact Me | `/contact` | A message form and links to my GitHub and LinkedIn profiles |

## Run locally

Install Node.js and npm, then run these commands from the project folder:

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

- `app.js` configures Express, EJS, and static assets.
- `routes/index.js` defines the four portfolio routes.
- `views/` contains the EJS page templates and layout.
- `views/partials/` contains reusable header, footer, and stylesheet includes.
- `public/` contains the stylesheet and project images.

## Code and asset credits

- [Express Generator](https://github.com/expressjs/generator) by the Express project provided the initial application structure.
- [Bootstrap](https://getbootstrap.com/) by the Bootstrap team provides the responsive grid and utility classes.
- [Font Awesome](https://fontawesome.com/) by Fonticons, Inc. provides the icons.

