<h1 align="center">Asha Suresh — Developer Portfolio</h1>

<p align="center">
  <b>Backend Engineer · Java · Spring Boot · Microservices · AWS</b><br />
  MSc Software Engineering (Distinction)
</p>

<p align="center">
  <a href="https://asha-suresh.github.io/asha-portfolio/"><b>🔗 View the live site</b></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages" />
</p>

![Portfolio home page](docs/screenshots/hero-dark.png)

My personal portfolio website. It presents my expertise, career history, education and projects
in a single scrolling page, with dark and light themes, scroll animations and a fully responsive layout.

---

## 📑 Contents

1. [Home](#-home)
2. [Expertise](#-expertise)
3. [Career History](#-career-history)
4. [Education](#-education)
5. [Projects](#-projects)
6. [Contact](#-contact)
7. [Mobile view](#-mobile-view)
8. [Features](#-features)
9. [Tech stack](#-tech-stack)
10. [Getting started](#-getting-started)

---

## 🏠 Home

The first page introduces me as a **backend engineer** building reliable, scalable applications with
Java, Spring Boot and modern web technologies.

- A large headline with my portrait behind it. The portrait moves as you scroll.
- **About me:** a short summary with a link to my expertise.
- **My work:** a summary of my projects with a link to browse them.
- **Follow me:** links to LinkedIn, GitHub and email.
- A theme toggle (top left) switches between dark and light mode.

| Dark theme | Light theme |
|:---:|:---:|
| ![Home, dark](docs/screenshots/hero-dark.png) | ![Home, light](docs/screenshots/hero-light.png) |

---

## 💡 Expertise

Three interactive cards that tilt in 3D and follow the cursor with a spotlight.

| Area | Highlights |
|---|---|
| **Backend Development** | Java, Spring Boot, Spring Security, Spring Cloud, REST APIs, JWT, Kafka, Microservices |
| **Database & API Development** | PostgreSQL, MySQL, Spring Data JPA, Hibernate, Swagger / OpenAPI |
| **DevOps, Cloud & Testing** | Docker, AWS (EC2, S3, IAM), GitHub Actions, Maven, Gradle, JUnit, Mockito, Prometheus, Grafana |

| Dark theme | Light theme |
|:---:|:---:|
| ![Expertise, dark](docs/screenshots/expertise-dark.png) | ![Expertise, light](docs/screenshots/expertise-light.png) |

---

## 💼 Career History

A vertical timeline of my experience, with the current role clearly marked.

| Dates | Role |
|---|---|
| 2025 – Present | **Career Development & Independent Project Work** (current) |
| Dec 2022 – Mar 2024 | **Data Specialist**, United Kingdom |
| Mar 2022 – Sep 2022 | **Software Engineer Trainee**, Nkorr Technologies |
| Sep 2021 – Jan 2022 | **Software Engineer Intern**, Ionaught Technologies, Kerala |

| Dark theme | Light theme |
|:---:|:---:|
| ![Career history, dark](docs/screenshots/history-dark.png) | ![Career history, light](docs/screenshots/history-light.png) |

---

## 🎓 Education

A horizontal timeline from diploma to master's degree, with a result badge on each card.

| Years | Qualification | Result |
|---|---|---|
| 2022 – 2023 | **MSc Software Engineering**, De Montfort University | 🥇 Distinction |
| 2018 – 2021 | **B.Tech Computer Science**, APJ Abdul Kalam Technological University | First Class |
| 2015 – 2018 | **Diploma in Computer Engineering**, Kerala State Board of Technical Education | First Class |

| Dark theme | Light theme |
|:---:|:---:|
| ![Education, dark](docs/screenshots/education-dark.png) | ![Education, light](docs/screenshots/education-light.png) |

---

## 🚀 Projects

A featured project followed by a grid of project cards, each with highlights and a tech stack.

- ⭐ **Full-Stack E-commerce Microservices** (featured): Spring Boot and Spring Cloud microservices with
  Eureka and an API Gateway, JWT security, Stripe payments, Kafka events, Docker Compose,
  Prometheus and Grafana monitoring, a React frontend, and deployment on AWS.
- 🚗 **Vehicle Rental Management:** a Spring Boot backend with JWT and role-based access, Stripe payments
  and Swagger / OpenAPI docs.
- 🌱 **Food Waste Reduction Management** (MSc project): a web app to track and reduce food waste,
  containerised with Docker and built by a CI/CD pipeline in GitHub Actions.
- 🎨 **Colorizer** (bachelor's project).

| Dark theme | Light theme |
|:---:|:---:|
| ![Projects, dark](docs/screenshots/projects-dark.png) | ![Projects, light](docs/screenshots/projects-light.png) |

---

## 📬 Contact

A contact form with validation for name, email or phone, and message.

| Dark theme | Light theme |
|:---:|:---:|
| ![Contact, dark](docs/screenshots/contact-dark.png) | ![Contact, light](docs/screenshots/contact-light.png) |

---

## 📱 Mobile view

Every section adapts to phones and tablets, and the navigation turns into a slide-out drawer.

<p align="center">
  <img src="docs/screenshots/mobile.png" alt="Mobile view, dark and light themes" width="520" />
</p>

---

## ✨ Features

- **Dark and light themes.** Dark mode is black and blue; light mode is colourful (indigo, pink and amber).
- **Responsive design** for desktop, tablet and mobile.
- **Scroll animations.** The hero moves with the scroll, and sections reveal as they come into view.
- **Interactive cards** with a 3D tilt and a cursor-following spotlight.
- **Accessible.** It respects the reduced-motion setting and uses semantic markup.

---

## 🧰 Tech stack

| Area | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | SCSS, CSS custom properties for theming |
| UI | Material UI (navigation), Font Awesome icons |
| Animations | CSS keyframes, IntersectionObserver |
| Tooling | Create React App |
| Hosting | GitHub Pages (`gh-pages`) |

---

## 🧑‍💻 Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 16 or newer.

```bash
git clone https://github.com/asha-suresh/asha-portfolio.git
cd asha-portfolio
npm install
npm start
```

Then open http://localhost:3000 in your browser.

To build for production, run `npm run build`. The site is written to the `build/` folder.

### Deploying to GitHub Pages

1. Install the deploy tool once: `npm install --save-dev gh-pages`
2. Build and publish: `npm run deploy`. This pushes the `build/` folder to a `gh-pages` branch.
3. On GitHub, go to **Settings → Pages**, set **Source: Deploy from a branch**, then choose
   branch **gh-pages** and folder **/ (root)**.

`"homepage": "."` in `package.json` makes all asset paths relative, so the site works under any repository name.

### Project structure

```
src/
├── App.tsx                 ← page layout and theme state
├── index.scss              ← global styles and theme colours
├── components/
│   ├── Navigation.tsx      ← top bar, mobile drawer, theme toggle
│   ├── Main.tsx            ← home (hero) section
│   ├── Expertise.tsx       ← skills cards
│   ├── Timeline.tsx        ← career history
│   ├── Education.tsx       ← education timeline
│   ├── Project.tsx         ← projects
│   ├── Contact.tsx         ← contact form
│   ├── Footer.tsx
│   └── useInView.ts        ← scroll-reveal hook
└── assets/
    ├── images/             ← profile photo
    └── styles/             ← one SCSS file per section
```

### Customising

- **Content:** each section's text and data is at the top of its component in `src/components/`.
- **Theme colours:** edit `--c1`, `--c2` and `--c3` in `src/index.scss`
  (`:root` is the dark theme, `.light-mode` is the light theme).
- **Profile photo:** replace `src/assets/images/screenshot.png`.
- **Contact form:** to send emails, set up [EmailJS](https://www.emailjs.com) and uncomment the code in `Contact.tsx`.

---

## 🤝 Get in touch

- **Email:** [ashasureshdev01@gmail.com](mailto:ashasureshdev01@gmail.com)
- **LinkedIn:** [linkedin.com/in/ashasuresh01](https://www.linkedin.com/in/ashasuresh01)
- **GitHub:** [github.com/asha-suresh](https://github.com/asha-suresh)

---

## 📄 License & credits

Released under the [MIT License](LICENSE).
Built on top of [react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) by Yuji Sato,
then redesigned and extended.
