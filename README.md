[![npm Version](https://img.shields.io/npm/v/@bikiran/button.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/button)
[![npm Downloads](https://img.shields.io/npm/dt/@bikiran/button.svg?style=flat-square)](https://www.npmjs.com/package/@bikiran/button)
[![GitHub License](https://img.shields.io/github/license/bikirandev/bikiran-buttons.svg?style=flat-square)](https://github.com/bikirandev/bikiran-buttons/blob/main/LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/bikirandev/bikiran-buttons.svg?style=flat-square)](https://github.com/bikirandev/bikiran-buttons/issues)
[![GitHub Stars](https://img.shields.io/github/stars/bikirandev/bikiran-buttons.svg?style=flat-square)](https://github.com/bikirandev/bikiran-buttons/stargazers)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/bikirandev/bikiran-buttons.svg?style=flat-square)](https://github.com/bikirandev/bikiran-buttons/commits/main)

# @bikiran/button

A reusable, customizable, and accessible button component library for React. Ships with 20+ style variants, loading states, and full TypeScript support.

## Installation

```bash
npm install @bikiran/button
# or
yarn add @bikiran/button
```

### Peer Dependencies

| Package     | Version            |
| ----------- | ------------------ |
| `react`     | `^18.0.0 \|\| ^19.0.0` |
| `react-dom` | `^18.0.0 \|\| ^19.0.0` |

> **Note:** This library uses [Tailwind CSS](https://tailwindcss.com/) utility classes internally. Your project must have Tailwind CSS configured for the styles to render correctly.

## Quick Start

```tsx
import { Button } from "@bikiran/button";

function App() {
  return (
    <Button variant="primary" onClick={() => console.log("clicked")}>
      Click Me
    </Button>
  );
}
```

## Components

### `<Button />`

The main button component.

```tsx
import { Button } from "@bikiran/button";
```

#### Props

| Prop        | Type                                      | Default     | Description                         |
| ----------- | ----------------------------------------- | ----------- | ----------------------------------- |
| `title`     | `string`                                  | —           | Button text (alternative to children) |
| `children`  | `ReactNode`                               | —           | Button content (takes priority over `title`) |
| `type`      | `"button" \| "submit" \| "reset"`         | `"button"`  | HTML button type                    |
| `variant`   | `Variant` (see below)                     | `"primary"` | Visual style variant                |
| `onClick`   | `(ev: MouseEvent<HTMLButtonElement>) => void` | —       | Click handler                       |
| `className` | `string`                                  | —           | Additional CSS classes              |
| `disabled`  | `boolean`                                 | `false`     | Disables the button                 |
| `loading`   | `boolean`                                 | `false`     | Shows a loading spinner overlay     |

#### Variants

| Variant                    | Description                                        |
| -------------------------- | -------------------------------------------------- |
| `primary`                  | Solid primary background, white text               |
| `primary-line`             | Bordered primary, fills on hover                   |
| `secondary`                | Solid purple (`#AE00B9`)                           |
| `secondary-line`           | Light purple bg, fills on hover                    |
| `secondary-line-bordered`  | Bordered purple, fills on hover                    |
| `blue`                     | Solid blue (`#4370FF`)                             |
| `blue-line`                | Light blue bg, fills on hover                      |
| `blue-line-bordered`       | Bordered blue, transparent bg, fills on hover      |
| `red`                      | Solid red (`#F50303`)                              |
| `red-line`                 | Light red bg, fills on hover                       |
| `red-line-bordered`        | Bordered red, fills on hover                       |
| `pink`                     | Solid pink                                         |
| `pink-outline`             | Light pink bg, fills on hover                      |
| `pink-outline-bordered`    | Bordered pink, fills on hover                      |
| `green`                    | Solid green (`#00A143`)                            |
| `green-outline`            | Light green bg, fills on hover                     |
| `yellow`                   | Yellow background                                  |
| `yellow-outline`           | Light yellow bg, fills on hover                    |
| `gray`                     | Gray background with muted text                    |

### `<ButtonRefresh />`

A 40×40 icon button with a refresh/sync SVG icon on a blue rounded rectangle.

```tsx
import { ButtonRefresh } from "@bikiran/button";

<ButtonRefresh onClick={() => refetch()} />
```

Accepts `onClick`, `className`, and `disabled` from `ButtonProps`.

### `<ButtonLoading />`

Standalone loading spinner overlay. Used internally by `<Button loading />`, but can be used independently.

```tsx
import { ButtonLoading } from "@bikiran/button";
```

### `ButtonProps` (TypeScript type)

The full props type is exported for use in wrapper components:

```tsx
import type { ButtonProps } from "@bikiran/button";

const MyButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} variant="blue" />
);
```

## Examples

### Variant Showcase

```tsx
<Button variant="primary">Primary</Button>
<Button variant="blue-line-bordered">Bordered</Button>
<Button variant="pink-outline">Outlined</Button>
<Button variant="green-outline">Green Outline</Button>
```

### Icon Button

```tsx
<Button variant="green">
  <span>🌱 Plant Tree</span>
</Button>
```

### Loading State

```tsx
<Button loading variant="red">
  Processing...
</Button>
```

### Disabled State

```tsx
<Button disabled>Cannot Click</Button>
```

### Custom Styling

```tsx
<Button
  className="px-8 py-3 rounded-full font-bold shadow-lg"
  variant="primary"
>
  Big Rounded Button
</Button>
```

## Preview

![Button Variants Preview](/example.png)

## Customization

### Style Overrides

Pass additional Tailwind classes via `className`:

```tsx
<Button className="px-8 py-3 rounded-full shadow-lg" variant="primary">
  Custom Button
</Button>
```

### Theming with CSS Variables

Override the primary color in your global CSS:

```css
:root {
  --primary: #8b5cf6;
}
```

## Development

```bash
# Clone the repo
git clone https://github.com/bikirandev/bikiran-buttons.git
cd bikiran-buttons

# Install dependencies
npm install

# Start the dev server (example app)
npm run dev

# Run tests
npm test

# Build the library
npm run build

# Create a local tarball for testing
npm run pack-local
```

### Project Structure

```
src/
  index.ts                   # Library entry point & exports
  components/
    Button/
      Button.tsx             # Button, ButtonRefresh, ButtonLoading components
  utils/
    cn.ts                    # clsx + tailwind-merge utility
example/
  src/
    App.tsx                  # Demo application
    main.tsx                 # React entry point
tests/
  Button.test.tsx            # Component tests (vitest)
```

## Contributing

1. Fork and clone the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Add new variants in the `cName()` function in `Button.tsx`
4. Update the `ButtonProps` variant union type to match
5. Add tests for new functionality
6. Submit a PR with TypeScript types for any new props

## License

MIT — see the [LICENSE](https://github.com/bikirandev/bikiran-buttons/blob/main/LICENSE) file for details.

## Author

**Developed by [Bikiran](https://bikiran.com/)**

- Website: [bikiran.com](https://bikiran.com/)
- Email: [Contact](https://bikiran.com/contact)
- GitHub: [@bikirandev](https://github.com/bikirandev)

---

<div align="center">

**Made with ❤️ for the React community**

[⭐ Star this repo](https://github.com/bikirandev/bikiran-buttons) · [🐛 Report Bug](https://github.com/bikirandev/bikiran-buttons/issues) · [💡 Request Feature](https://github.com/bikirandev/bikiran-buttons/issues/new)

</div>
