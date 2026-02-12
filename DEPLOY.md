# Deployment Guide for EasyPanel

Your project has been converted to a static website generator. 

## Local Usage

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Build the site:**
    ```bash
    node build.js
    ```
    This creates a `dist` folder with your static website.

## Deploying to EasyPanel

1.  **Upload to GitHub:**
    Commit all files (including `build.js`) to a GitHub repository.

2.  **Create Service in EasyPanel:**
    - Go to your Project.
    - Click **+ Service** > **App**.
    - Select your GitHub repository.

3.  **Configure Build:**
    - **Build Command:** `npm install && node build.js`
    - **Publish Directory:** `dist`
    - **Image:** `node:18` (or similar Node.js image)

4.  **Deploy:**
    Click **Create** or **Deploy**. EasyPanel will run the build script and serve the `dist` folder.
