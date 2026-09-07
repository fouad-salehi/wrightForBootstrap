# wrightForBootstrap

![Platform](https://img.shields.io/badge/platform-Node.js-green)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![Purpose](https://img.shields.io/badge/purpose-folder%20generator-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-blue)
![Status](https://img.shields.io/badge/Status-Active-success)
![Run](https://img.shields.io/badge/run-node%20wrightForBootstrap.js-important)

**WRIGHT for Bootstrap — A folder structure generator for web developers.**

## Description

WRIGHT for Bootstrap is a simple and practical project structure generator designed for web developers and designers working with HTML, CSS, JavaScript, PHP, Bootstrap, and related libraries and frameworks.

It automatically creates a clean and organized project structure, helping developers save time during project setup and avoid manually creating folders and files.

The generated structure includes:

* A ready-to-use `index.html` file
* Bootstrap 5.3.3 included through CDN
* A `dashboard/assets` directory
* Separate folders for CSS, JavaScript, images, and fonts
* A default `stylesheet.css`
* An empty `app.js`
* A `favicon.ico`
* A project `README.txt`

## Getting Started

Make sure [Node.js](https://nodejs.org/) is installed on your system.

Then run:

```bash
node wrightForBootstrap.js
```

WRIGHT for Bootstrap will ask you for a project name and create the project directory using the name you provide.

For example:

```text
› Project name: my-website
```

The generated project will have a structure similar to:

```text
my-website/
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
```

## Bootstrap

Bootstrap 5.3.3 is included through the jsDelivr CDN.

Bootstrap CSS is loaded automatically in `index.html`.

Bootstrap JavaScript is also loaded through the Bootstrap bundle.

## Project Structure

### CSS

Place stylesheets and CSS-related resources inside:

```text
dashboard/assets/css/
```

### JavaScript

Place JavaScript files and related resources inside:

```text
dashboard/assets/js/
```

### Images

Place project images, icons, and other visual assets inside:

```text
dashboard/assets/images/
```

### Fonts

Place custom fonts and font-related resources inside:

```text
dashboard/assets/fonts/
```

## Libraries & Frameworks

If your project uses additional libraries or frameworks, you can create an additional folder inside the appropriate technology directory.

For example:

```text
dashboard/assets/js/
├── libraries/
└── app.js
```

or:

```text
dashboard/assets/css/
├── libraries/
└── stylesheet.css
```

This keeps third-party resources separated from your own project files and helps maintain a clean project structure.

## Philosophy

> Create the structure once. Focus on building.

WRIGHT is designed to make the initial setup of a web project simple, fast, and organized.

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

## License

This project is proprietary software.

For the complete license terms, see the `LICENSE` file.

## WRIGHT Ecosystem

* WRIGHT: https://github.com/fouad-salehi/wright
* WRIGHT for Bootstrap: https://github.com/fouad-salehi/wrightForBootstrap
* WRIGHT for Tailwind: https://github.com/fouad-salehi/wrightForTailwind

## Author

**Fouad Salehi**
