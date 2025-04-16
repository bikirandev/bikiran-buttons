# Button Component

## A reusable, customizable, and accessible button component for React applications. Supports multiple variants, loading states, and icons.

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

## 📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Created by [Bikiran](https://www.bikiran.com/). Feel Free to contribute!
