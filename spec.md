# Specification

## Summary
**Goal:** Add a handoff package to the Brainscribe project consisting of an organized `/images` folder, a `.env` configuration file, and a `README.md` documentation file.

**Planned changes:**
- Create `frontend/public/images` folder with placeholder images for the hero banner, 6 service sections, and the About page; update all image `src` attributes in pages to use relative paths pointing to this folder
- Create a `.env` file at the project root with descriptive placeholder values for `CONTACT_EMAIL`, `RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, and `SMTP_PASSWORD`
- Create a `README.md` at the project root documenting the project structure, all `.env` variables with their purpose, a note about the HubSpot form placeholder on the Contact Us page, and instructions for local setup and replacing placeholder images

**User-visible outcome:** The project is ready for handoff with all images organized in one folder for easy replacement, a `.env` file clearly showing what credentials need to be configured, and a README that guides recipients through setup.
