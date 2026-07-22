# Nurexa Website

This workspace now contains a modern React + Tailwind landing site for Nurexa Pvt Ltd with the following pages:

- Home
- About
- Services
- Insights
- Contact

## Run locally

```bash
cd frontend
npm install
npm run dev
```

## Backend

```bash
cd backend
npm install
npm start
```

Create a local environment file for secrets that is not committed:

```bash
cp backend/.env.example backend/.env
```

Then fill in your SMTP values in backend/.env. The server reads these values from the environment at runtime. If you want the assessment form to also forward submissions to the Google Form endpoint, set GOOGLE_FORM_ENDPOINT in backend/.env to the form response URL.

## Build

```bash
cd frontend
npm run build
```

## Deploy to GitHub Pages

The site is configured for GitHub Pages via the `homepage` field and a `gh-pages` deployment script.

```bash
cd frontend
npm run deploy
```
