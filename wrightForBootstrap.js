const https = require('https');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';

const success = (message) => {
    console.log(`  ${GREEN}✓${RESET} ${message}`);
};

const warning = (message) => {
    console.log(`  ${YELLOW}⚠${RESET} ${message}`);
};

const error = (message) => {
    console.log(`  ${RED}✕${RESET} ${message}`);
};

const info = (message) => {
    console.log(`  ${CYAN}›${RESET} ${message}`);
};

console.log('');
console.log(`  ${CYAN}${BOLD}W R I G H T${RESET}`);
console.log(`  ${DIM}Bootstrap Web Project Structure Generator${RESET}`);
console.log(`  ${DIM}Powered by Fouad Salehi${RESET}`);
console.log('');

rl.question(`  ${CYAN}›${RESET} Project name: `, (projectName) => {
    rl.close();

    const trimmedProjectName = projectName.trim();

    if (!trimmedProjectName) {
        console.log('');
        error('Project name cannot be empty.');
        console.log('');
        return;
    }

    if (trimmedProjectName.includes('/') || trimmedProjectName.includes('\\')) {
        console.log('');
        error('Project name cannot contain "/" or "\\".');
        console.log('');
        return;
    }

    const WRIGHT = path.join(__dirname, trimmedProjectName);

    const indexFile = path.join(WRIGHT, 'index.html');

    const indexFileContent = `<!DOCTYPE html>
<html lang="en">
    <head>
        <title>${trimmedProjectName} | Powered by WRIGHT</title>

        <meta charset="UTF-8">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="author" content="Fouad Salehi">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

        <link rel="stylesheet" href="dashboard/assets/css/stylesheet.css" type="text/css">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon">
    </head>

    <body>
        <header></header>

        <main>
            <article>
                <h1>${trimmedProjectName}</h1>
            </article>

            <aside></aside>
        </main>

        <footer></footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="dashboard/assets/js/app.js" type="text/javascript"></script>
    </body>
</html>`;

    const READMEFile = path.join(WRIGHT, 'README.txt');

    const READMEFileContent = `# ${trimmedProjectName}

**Powered by WRIGHT for Bootstrap**

This project was created using WRIGHT for Bootstrap, a simple and practical project structure generator designed for web developers and designers.

It provides a clean and organized foundation for Bootstrap-based web projects, helping developers spend less time creating folders and files manually and more time focusing on development.

## Features

* Clean and organized project structure
* Ready-to-use HTML entry file
* Bootstrap 5.3.3 included
* Separate folders for CSS, JavaScript, images, and fonts
* Basic stylesheet included
* JavaScript entry file included
* Favicon support
* Project README included automatically
* Suitable for HTML, CSS, JavaScript, PHP, Bootstrap, and related libraries and frameworks

## Project Structure

${trimmedProjectName}/
├── dashboard/
│   └── assets/
│       ├── css/
│       │   └── stylesheet.css
│       ├── js/
│       │   └── app.js
│       ├── images/
│       └── fonts/
├── index.html
├── favicon.ico
└── README.txt

## Getting Started

This project provides the initial structure required for a Bootstrap-based web project.

You can start developing directly inside the generated project directory and modify the structure according to your needs.

### CSS

Place stylesheets and CSS-related resources inside:

dashboard/assets/css/

### JavaScript

Place JavaScript files and related resources inside:

dashboard/assets/js/

### Images

Place project images, icons, and other visual assets inside:

dashboard/assets/images/

### Fonts

Place custom fonts and font-related resources inside:

dashboard/assets/fonts/

## Bootstrap

Bootstrap 5.3.3 is included through the official jsDelivr CDN.

Bootstrap CSS is loaded in:

index.html

Bootstrap JavaScript is also loaded automatically through the Bootstrap bundle.

## Libraries & Frameworks

If your project uses additional libraries or frameworks, you can create an additional folder inside the appropriate technology directory.

For example:

dashboard/assets/js/
├── libraries/
└── app.js

or:

dashboard/assets/css/
├── libraries/
└── stylesheet.css

This keeps third-party resources separated from your own project files and helps maintain a clean structure.

## Philosophy

WRIGHT is built around a simple idea:

**Create the structure once. Focus on building.**

A well-organized project structure makes development easier, improves maintainability, and helps prevent unnecessary confusion as a project grows.

## Compatibility

WRIGHT for Bootstrap can be used as a starting point for projects involving technologies such as:

* HTML
* CSS
* JavaScript
* PHP
* Bootstrap
* Front-end libraries
* JavaScript frameworks
* Other web development tools

## Notes

WRIGHT generates a starting structure rather than a complete application.

You are free to modify, remove, rename, or extend any generated file or directory according to your project's requirements.

For larger projects, additional directories can be added as the project grows.

## License

This project is proprietary software.

For the complete license terms, see the LICENSE file in the WRIGHT project repository:

https://github.com/fouad-salehi/wright`;

    const faviconURL = 'https://hellstate.web.app/favicon.ico';
    const favicon = path.join(WRIGHT, 'favicon.ico');

    const dashboardFolder = path.join(WRIGHT, 'dashboard');
    const assetsFolder = path.join(dashboardFolder, 'assets');

    const cssFolder = path.join(assetsFolder, 'css');
    const jsFolder = path.join(assetsFolder, 'js');
    const imagesFolder = path.join(assetsFolder, 'images');
    const fontsFolder = path.join(assetsFolder, 'fonts');

    const stylesheetFile = path.join(cssFolder, 'stylesheet.css');

    const stylesheetFileContent = `@charset "UTF-8";

:root {
    --background: #ffffff;
    --foreground: #111111;
    --muted: #666666;
}

* {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--background);
    color: var(--foreground);
    font-family: Arial, sans-serif;
}

main {
    width: 100%;
    max-width: 900px;
}

h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 600;
    letter-spacing: -0.04em;
}

p {
    color: var(--muted);
    line-height: 1.6;
}`;

    const appFile = path.join(jsFolder, 'app.js');
    const appFileContent = '';

    console.log('');

    if (!fs.existsSync(WRIGHT)) {
        fs.mkdirSync(WRIGHT);
        success(`${trimmedProjectName} directory created.`);

        if (!fs.existsSync(dashboardFolder)) {
            fs.mkdirSync(dashboardFolder);
            success('Dashboard directory created.');

            if (!fs.existsSync(assetsFolder)) {
                fs.mkdirSync(assetsFolder);
                success('Assets directory created.');

                if (!fs.existsSync(cssFolder)) {
                    fs.mkdirSync(cssFolder);

                    fs.writeFile(stylesheetFile, stylesheetFileContent, (err) => {
                        if (err) {
                            error(`Stylesheet.css could not be created: ${err.message}`);
                        } else {
                            success('stylesheet.css created.');
                        }
                    });
                } else {
                    warning('CSS directory already exists.');
                }

                if (!fs.existsSync(jsFolder)) {
                    fs.mkdirSync(jsFolder);

                    fs.writeFile(appFile, appFileContent, (err) => {
                        if (err) {
                            error(`App.js could not be created: ${err.message}`);
                        } else {
                            success('app.js created.');
                        }
                    });
                } else {
                    warning('JS directory already exists.');
                }

                if (!fs.existsSync(imagesFolder)) {
                    fs.mkdirSync(imagesFolder);
                    success('Images directory created.');
                } else {
                    warning('Images directory already exists.');
                }

                if (!fs.existsSync(fontsFolder)) {
                    fs.mkdirSync(fontsFolder);
                    success('Fonts directory created.');
                } else {
                    warning('Fonts directory already exists.');
                }
            } else {
                warning('Assets directory already exists.');
            }
        } else {
            warning('Dashboard directory already exists.');
        }

        fs.writeFile(indexFile, indexFileContent, (err) => {
            if (err) {
                error(`index.html could not be created: ${err.message}`);
            } else {
                success('index.html created.');
            }
        });

        https.get(faviconURL, (response) => {
            if (response.statusCode !== 200) {
                warning(`Favicon download failed (HTTP ${response.statusCode}).`);
                response.resume();
                return;
            }

            const faviconStream = fs.createWriteStream(favicon);

            response.pipe(faviconStream);

            faviconStream.on('finish', () => {
                faviconStream.close();
                success('Favicon downloaded.');
            });

            faviconStream.on('error', (err) => {
                error(`Favicon could not be saved: ${err.message}`);
            });
        }).on('error', (err) => {
            warning(`Favicon could not be downloaded: ${err.message}`);
            info('The project was created successfully without the favicon.');
        });

        fs.writeFile(READMEFile, READMEFileContent, (err) => {
            if (err) {
                error(`README.txt could not be created: ${err.message}`);
            } else {
                success('README.txt created.');
            }
        });

        console.log('');
        console.log(`  ${GREEN}${BOLD}${trimmedProjectName} project created successfully!${RESET}`);
        console.log('');
        console.log(`  ${DIM}Location:${RESET} ${path.relative(process.cwd(), WRIGHT)}`);
        console.log('');
    } else {
        warning(`A ${trimmedProjectName} directory already exists.`);
        info('Please remove or rename the existing directory and try again.');
        console.log('');
    }
});
