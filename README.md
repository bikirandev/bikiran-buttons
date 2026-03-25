[![npm Version](https://img.shields.io/npm/v/@bikiran/button.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/button)
[![npm Downloads](https://img.shields.io/npm/dt/@bikiran/button.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/button)
[![GitHub License](https://img.shields.io/github/license/bikirandev/bikiran-buttons.svg?style=flat-square)](https://github.com/bikirandev/bikiran-buttons/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/bikirandev/bikiran-buttons.svg?style=flat-square)](https://github.com/bikirandev/bikiran-buttons/issues)
[![GitHub Stars](https://img.shields.io/github/stars/bikirandev/bikiran-buttons.svg?style=flat-square)](https://github.com/bikirandev/bikiran-buttons/stargazers)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/bikirandev/bikiran-buttons.svg?style=flat-square)](https://github.com/bikirandev/bikiran-buttons/commits/main)

A reusable, customizable, and accessible button component for React applications. Supports multiple variants, loading states, and icons.

## 📦 Installation

```
npm install @bikiran/button
# or
yarn add @bikiran/button
```

## Compatibility:

- React 16.8+
- TypeScript (optional)

## 🚀 Usage

### Basic Example

```
import { Button } from "bik-button";

const App = () => (
  <Button
    title="Click Me"
    onClick={() => alert("Button Clicked")}
  />
);
```

### Key Features

- Variants: Primary, secondary, colored, and outlined styles.
- States: Loading spinner and disabled modes.
- Customizable: Extend with CSS classes or inline icons.

## 🎨 Examples with Code

### 1. Variants

```
<Button variant="primary">Solid</Button>
<Button variant="blue-line-bordered">Bordered</Button>
<Button variant="pink-outline">Outlined</Button>
```

### 2. Icon Button

```
   <Button variant="green">
      <span>🌱 Plant Tree</span>
   </Button>
```

### 3. Loading State

```
   <Button loading variant="red">
      Processing...
   </Button>
```

## Preview

![Button Variants Preview](/example.png)
_Caption: All available button styles._

## 📝 Props Reference

| Prop      | Type                 | Default   | Description          |
| --------- | -------------------- | --------- | -------------------- |
| variant   | TVariant (see below) | "primary" | Button style         |
| loading   | boolean              | false     | Shows spinner        |
| disabled  | boolean              | false     | Disables interaction |
| className | string               | ""        | Custom CSS classes   |

### All Variants

"primary", "primary-line", "secondary", "secondary-line", "secondary-line-bordered", "blue", "blue-line", "blue-line-bordered", "red", "red-line", "red-line-bordered", "pink", "pink-outline", "pink-outline-bordered", "green","green-outline" "gray", "yellow-outline"

## 🛠 Customization

### 1. Style Overrides

```
<Button
  className="px-8 py-3 rounded-full font-bold shadow-lg"
  variant="primary"
>
  Big Rounded Button
</Button>
```

### 2. Theming with CSS Variables

Override in your global CSS:

```
:root {
  --primary: #8b5cf6; /* Example: Change primary color */
}
```

## 🤝 Contribution Guide

1. Clone repo:

```
git clone https://github.com/your-repo/bik-button.git
```

2. Add new variants in cName() function

3. Test changes in Storybook (if available)

4. Submit PR with:
   - TypeScript types for new props

   - Storybook examples (if applicable)

## 📄 License

MIT License - see the [LICENSE](https://github.com/bikirandev/bikiran-buttons/blob/main/LICENSE) file for details.

## 👨‍💻 Author

**Developed by [Bikiran](https://bikiran.com/)**

- 🌐 Website: [bikiran.com](https://bikiran.com/)
- 📧 Email: [Contact](https://bikiran.com/contact)
- 🐙 GitHub: [@bikirandev](https://github.com/bikirandev)

---

<div align="center">

**Made with ❤️ for the React community**

[⭐ Star this repo](https://github.com/bikirandev/bikiran-buttons) • [🐛 Report Bug](https://github.com/bikirandev/bikiran-buttons/issues) • [💡 Request Feature](https://github.com/bikirandev/bikiran-buttons/issues/new)

</div>

---

## 🏢 About Bikiran

**[Bikiran](https://bikiran.com/)** is a software development and cloud infrastructure company founded in 2012, headquartered in Khulna, Bangladesh. With 15,000+ clients and over a decade of experience, Bikiran builds and operates a suite of products spanning domain services, cloud hosting, app deployment, workflow automation, and developer tools.

| SL  | Topic        | Product                                                              | Description                                             |
| --- | ------------ | -------------------------------------------------------------------- | ------------------------------------------------------- |
| 1   | Website      | [Bikiran](https://bikiran.com/)                                      | Main platform — Domain, hosting & cloud services        |
| 2   | Website      | [Edusoft](https://www.edusoft.com.bd/)                               | Education management software for institutions          |
| 3   | Website      | [n8n Clouds](https://n8nclouds.com/)                                 | Managed n8n workflow automation hosting                 |
| 4   | Website      | [Timestamp Zone](https://www.timestamp.zone/)                        | Unix timestamp converter & timezone tool                |
| 5   | Website      | [PDFpi](https://pdfpi.bikiran.com/)                                  | Online PDF processing & manipulation tool               |
| 6   | Website      | [Blog](https://blog.bikiran.com/)                                    | Technical articles, guides & tutorials                  |
| 7   | Website      | [Support](https://support.bikiran.com/)                              | 24/7 customer support portal                            |
| 8   | Website      | [Probackup](https://probackup.bikiran.com/)                          | Automated database backup for SQL, PostgreSQL & MongoDB |
| 9   | Service      | [Domain](https://www.bikiran.com/domain)                             | Domain registration, transfer & DNS management          |
| 10  | Service      | [Hosting](https://www.bikiran.com/services/hosting/web)              | Web, app & email hosting on NVMe SSD                    |
| 11  | Service      | Email & SMS                                                          | Bulk email & SMS notification service                   |
| 12  | npm          | [Chronopick](https://www.npmjs.com/package/@bikiran/chronopick)      | Date & time picker React component                      |
| 13  | npm          | [Rich Editor](https://www.npmjs.com/package/@bikiran/editor)         | WYSIWYG rich text editor for React                      |
| 15  | npm          | [Button](https://www.npmjs.com/package/@bikiran/button)              | Reusable React button component library                 |
| 16  | npm          | [Electron Boilerplate](https://www.npmjs.com/package/create-edx-app) | CLI to scaffold Electron.js project templates           |
| 17  | NuGet        | [Bkash](https://www.nuget.org/packages/Bikiran.Payment.Bkash)        | bKash payment gateway integration for .NET              |
| 18  | NuGet        | [Bikiran Engine](https://www.nuget.org/packages/Bikiran.Engine)      | Core .NET engine library for Bikiran services           |
| 19  | Open Source  | [PDFpi](https://github.com/bikirandev/pdfpi)                         | PDF processing tool — open source                       |
| 20  | Open Source  | [Bikiran Engine](https://github.com/bikirandev/Bikiran.Engine)       | Core .NET engine — open source                          |
| 21  | Open Source  | [Drive CLI](https://github.com/bikirandev/DriveCLI)                  | CLI tool to manage Google Drive from terminal           |
| 22  | Docker       | [Pgsql](https://github.com/bikirandev/docker-pgsql)                  | Docker setup for PostgreSQL                             |
| 23  | Docker       | [n8n](https://github.com/bikirandev/docker-n8n)                      | Docker setup for n8n automation                         |
| 24  | Docker       | [Pgadmin](https://github.com/bikirandev/docker-pgadmin)              | Docker setup for pgAdmin                                |
| 25  | Social Media | [LinkedIn](https://www.linkedin.com/company/bikiran12)               | Bikiran on LinkedIn                                     |
| 26  | Social Media | [Facebook](https://www.facebook.com/bikiran12)                       | Bikiran on Facebook                                     |
| 27  | Social Media | [YouTube](https://www.youtube.com/@bikiranofficial)                  | Bikiran on YouTube                                      |
| 28  | Social Media | [FB n8nClouds](https://www.facebook.com/n8nclouds)                   | n8n Clouds on Facebook                                  |
