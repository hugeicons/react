![31c9262e-aeea-4403-9086-3c8b88885cab](https://github.com/hugeicons/hugeicons-react/assets/130147052/ff91f2f0-095a-4c6d-8942-3af4759f9021)

# @hugeicons/react

> HugeIcons Pro React Component Library - Beautiful and customizable icons for your React applications

## What is HugeIcons?

HugeIcons is a comprehensive icon library designed for modern web and mobile applications. The free package includes 4,000+ carefully crafted icons in the Stroke Rounded style, while the pro version offers over 36,000 icons across 9 unique styles.

### Key Highlights
- **4,000+ Free Icons**: Extensive collection of Stroke Rounded icons covering essential UI elements, actions, and concepts
- **Pixel Perfect**: Every icon is crafted on a 24x24 pixel grid ensuring crisp, clear display at any size
- **Customizable**: Easily adjust colors, sizes, and styles to match your design needs
- **Regular Updates**: New icons added regularly to keep up with evolving design trends

> 📚 **Looking for Pro Icons?** Check out our comprehensive documentation at [docs.hugeicons.com](https://docs.hugeicons.com) for detailed information about pro icons, styles, and advanced usage.

![a40aa766-1b04-4a2a-a2e6-0ec3c492b96a](https://github.com/hugeicons/hugeicons-react/assets/130147052/f82c0e0e-60ae-4617-802f-812cdc7a58da)

## Table of Contents
- [What is HugeIcons?](#what-is-hugeicons)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
  - [Basic Usage](#basic-usage)
  - [Custom Size and Color](#custom-size-and-color)
  - [Interactive Examples](#interactive-examples)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)
- [Browser Support](#browser-support)
- [Related Packages](#related-packages)
- [Pro Version](#pro-version)
- [License](#license)
- [Related](#related)

## Features

- 🎨 Customizable colors and sizes
- 💪 TypeScript support with full type definitions
- 🎯 Tree-shakeable for optimal bundle size
- 📦 Multiple bundle formats (ESM, CJS, UMD)
- ⚡ Lightweight and optimized
- 🔄 Alternate icon support for dynamic interactions

## Installation

```bash
# Using npm
npm install @hugeicons/react @hugeicons/core-free-icons

# Using yarn
yarn add @hugeicons/react @hugeicons/core-free-icons

# Using pnpm
pnpm add @hugeicons/react @hugeicons/core-free-icons

# Using bun
bun add @hugeicons/react @hugeicons/core-free-icons
```

## Usage

```jsx
import { HugeiconsIcon } from '@hugeicons/react';
import { SearchIcon } from '@hugeicons/core-free-icons';

function App() {
  return (
    <HugeiconsIcon
      icon={SearchIcon}
      size={24}
      color="currentColor"
      strokeWidth={1.5}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconType` | Required | The main icon to display |
| `altIcon` | `IconType` | - | Alternative icon that can be used for states, interactions, animations, or dynamic icon swapping |
| `showAlt` | `boolean` | `false` | When true, displays the altIcon instead of the main icon |
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `currentColor` | Icon color (CSS color value) |
| `strokeWidth` | `number` | `1.5` | Width of the icon strokes (works with stroke-style icons) |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Usage
```jsx
import { HugeiconsIcon } from '@hugeicons/react';
import { SearchIcon } from '@hugeicons/core-free-icons';

<HugeiconsIcon icon={SearchIcon} />
```

### Custom Size and Color
```jsx
import { NotificationIcon } from '@hugeicons/core-free-icons';

<HugeiconsIcon
  icon={NotificationIcon}
  size={32}
  color="#FF5733"
/>
```

### Interactive Examples

#### Search Bar with Clear Button
```jsx
import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { SearchIcon, CloseCircleIcon } from '@hugeicons/core-free-icons';

function SearchBar() {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
      />
      <HugeiconsIcon
        icon={SearchIcon}
        altIcon={CloseCircleIcon}
        showAlt={value.length > 0}
        onClick={() => value.length > 0 && setValue('')}
      />
    </div>
  );
}
```

#### Theme Toggle
```jsx
import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { SunIcon, MoonIcon } from '@hugeicons/core-free-icons';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      <HugeiconsIcon
        icon={SunIcon}
        altIcon={MoonIcon}
        showAlt={isDark}
      />
    </button>
  );
}
```

#### Menu Toggle
```jsx
import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { MenuIcon, CancelIcon } from '@hugeicons/core-free-icons';

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      <HugeiconsIcon
        icon={MenuIcon}
        altIcon={CancelIcon}
        showAlt={isOpen}
      />
    </button>
  );
}
```

## Performance

- **Tree-shaking**: The package is fully tree-shakeable, ensuring only the icons you use are included in your final bundle
- **Optimized SVGs**: All icons are optimized for size and performance
- **Code Splitting**: Icons can be easily code-split when using dynamic imports

## Troubleshooting

### Common Issues

1. **Icons not showing up?**
   - Make sure you've installed both `@hugeicons/react` and `@hugeicons/core-free-icons`
   - Check that the icon names are correctly imported

2. **TypeScript errors?**
   - Ensure your `tsconfig.json` includes the necessary type definitions
   - Check that you're using the latest version of the package

3. **Bundle size concerns?**
   - Use named imports instead of importing the entire icon set
   - Implement code splitting for different sections of your app

## Browser Support

The library supports all modern browsers.

## Related Packages

- [@hugeicons/vue](https://www.npmjs.com/package/@hugeicons/vue) - Vue component
- [@hugeicons/angular](https://www.npmjs.com/package/@hugeicons/angular) - Angular component
- [@hugeicons/svelte](https://www.npmjs.com/package/@hugeicons/svelte) - Svelte component
- [@hugeicons/react-native](https://www.npmjs.com/package/@hugeicons/react-native) - React Native component

## Pro Version

> 🌟 **Want access to 36,000+ icons and 9 unique styles?** 
> Check out our [Pro Version](https://hugeicons.com/pricing) and visit [docs.hugeicons.com](https://docs.hugeicons.com) for comprehensive documentation.

### Available Pro Styles
- **Stroke Styles**
  - Stroke Rounded (`@hugeicons-pro/core-stroke-rounded`)
  - Stroke Sharp (`@hugeicons-pro/core-stroke-sharp`)
  - Stroke Standard (`@hugeicons-pro/core-stroke-standard`)
- **Solid Styles**
  - Solid Rounded (`@hugeicons-pro/core-solid-rounded`)
  - Solid Sharp (`@hugeicons-pro/core-solid-sharp`)
  - Solid Standard (`@hugeicons-pro/core-solid-standard`)
- **Special Styles**
  - Bulk Rounded (`@hugeicons-pro/core-bulk-rounded`)
  - Duotone Rounded (`@hugeicons-pro/core-duotone-rounded`)
  - Twotone Rounded (`@hugeicons-pro/core-twotone-rounded`)

## License

This project is licensed under the [MIT License](LICENSE.md).

## Related

- [@hugeicons/core-free-icons](https://www.npmjs.com/package/@hugeicons/core-free-icons) - Free icon package
- [HugeIcons Website](https://hugeicons.com) - Browse all available icons
