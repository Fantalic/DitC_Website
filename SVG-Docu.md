The `<svg>` tag is a versatile container for defining vector graphics in XML format. Within an SVG, there are several tags available that allow you to create various shapes, paths, and other graphical elements. Here’s a breakdown of some commonly used tags that can be included within the `<svg>` tag:

## Common SVG Tags

### 1. **Basic Shapes**
- **`<rect>`**: Defines a rectangle.
  ```xml
  <rect x="10" y="10" width="100" height="50" fill="blue"/>
  ```

- **`<circle>`**: Defines a circle.
  ```xml
  <circle cx="50" cy="50" r="40" fill="red"/>
  ```

- **`<ellipse>`**: Defines an ellipse.
  ```xml
  <ellipse cx="50" cy="50" rx="30" ry="20" fill="green"/>
  ```

- **`<line>`**: Defines a straight line.
  ```xml
  <line x1="10" y1="10" x2="100" y2="100" stroke="black"/>
  ```

- **`<polyline>`**: Defines a series of connected lines.
  ```xml
  <polyline points="0,0 50,25 100,0" fill="none" stroke="purple"/>
  ```

- **`<polygon>`**: Defines a closed shape with multiple sides.
  ```xml
  <polygon points="200,10 250,190 160,210" fill="lime"/>
  ```

### 2. **Paths**
- **`<path>`**: Defines complex shapes using a series of commands and parameters.
  ```xml
  <path d="M10 10 H 90 V 90 H 10 L 10 10" fill="none" stroke="black"/>
  ```

### 3. **Text**
- **`<text>`**: Renders text within the SVG.
  ```xml
  <text x="10" y="20" fill="black">Hello SVG</text>
  ```

### 4. **Gradients and Patterns**
- **`<linearGradient>`**: Defines a linear gradient.
- **`<radialGradient>`**: Defines a radial gradient.
- **`<pattern>`**: Creates a pattern that can be used to fill shapes.

### Example of Using Gradients
```xml
<defs>
    <linearGradient id="grad1">
        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
</defs>
<rect width="100%" height="100%" fill="url(#grad1)" />
```

### 5. **Clipping and Masking**
- **`<clipPath>`**: Defines a clipping path to restrict the rendering of graphics.
- **`<mask>`**: Creates a mask to control the visibility of graphics.

## Conclusion

These tags can be combined and styled using attributes like `fill`, `stroke`, and `transform`, among others. The flexibility of SVG allows for creating intricate designs suitable for web graphics, icons, and illustrations. For more advanced usage, you can also explore animations with `<animate>`, `<animateTransform>`, and other related tags.

Feel free to experiment with these tags to create your own unique SVG graphics!