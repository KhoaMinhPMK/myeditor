# Pixie Image Editor - Project Structure

```
myeditor/
│
├── 📂 frontend/                        # Frontend Application
│   ├── 📄 index.html                  # Main application file
│   ├── 📄 gulpfile.js                 # Gulp build tasks
│   ├── 📄 package.json                # Frontend dependencies
│   ├── 📄 config.json                 # App configuration
│   │
│   ├── 📂 assets/                     # Static assets
│   │   │
│   │   ├── 📂 css/                    # Compiled CSS
│   │   │   ├── 📄 main.css           # Main stylesheet (Photoshop theme)
│   │   │   └── 📄 integrate.css      # Integration styles
│   │   │
│   │   ├── 📂 less/                   # LESS source files
│   │   │   ├── 📄 main.less          # Main styles (Photoshop dark theme)
│   │   │   ├── 📄 integrate.less     # Integration styles
│   │   │   └── 📂 vendor/            # Third-party LESS
│   │   │       ├── bootstrap/        # Bootstrap 3
│   │   │       ├── material-icons/   # Material Design Icons
│   │   │       ├── angular-material.less
│   │   │       ├── animate.less
│   │   │       ├── pagination.less
│   │   │       ├── scrollbar.less
│   │   │       └── spectrum.less
│   │   │
│   │   ├── 📂 js/                     # JavaScript files
│   │   │   ├── 📄 scripts.min.js     # Compiled/minified JS
│   │   │   │
│   │   │   ├── 📂 editor/            # Editor modules
│   │   │   │   ├── 📄 App.js         # Main AngularJS app
│   │   │   │   ├── 📄 Canvas.js      # Canvas management
│   │   │   │   ├── 📄 History.js     # Undo/redo system
│   │   │   │   ├── 📄 Saver.js       # Export functionality
│   │   │   │   ├── 📄 Settings.js    # App settings
│   │   │   │   ├── 📄 Keybinds.js    # Keyboard shortcuts
│   │   │   │   ├── 📄 LocalStorage.js# Local storage handler
│   │   │   │   ├── 📄 EditorController.js
│   │   │   │   ├── 📄 TopPanelController.js
│   │   │   │   ├── 📄 zoomController.js
│   │   │   │   │
│   │   │   │   ├── 📂 basics/        # Basic editing tools
│   │   │   │   │   ├── 📄 CanvasBackgroundController.js
│   │   │   │   │   ├── 📄 ResizeController.js
│   │   │   │   │   ├── 📄 RotateController.js
│   │   │   │   │   └── 📄 RoundedCornersController.js
│   │   │   │   │
│   │   │   │   ├── 📂 crop/          # Crop tool
│   │   │   │   │   ├── 📄 cropper.js
│   │   │   │   │   ├── 📄 cropzone.js
│   │   │   │   │   └── 📄 cropController.js
│   │   │   │   │
│   │   │   │   ├── 📂 text/          # Text tools
│   │   │   │   │   ├── 📄 Text.js
│   │   │   │   │   ├── 📄 TextController.js
│   │   │   │   │   ├── 📄 Fonts.js
│   │   │   │   │   ├── 📄 TextAlignButtons.js
│   │   │   │   │   └── 📄 TextDecorationButtons.js
│   │   │   │   │
│   │   │   │   ├── 📂 drawing/       # Drawing tools
│   │   │   │   │   ├── 📄 Drawing.js
│   │   │   │   │   ├── 📄 DrawingController.js
│   │   │   │   │   └── 📄 RenderBrushesDirective.js
│   │   │   │   │
│   │   │   │   ├── 📂 filters/       # Image filters
│   │   │   │   │   ├── 📄 Filters.js
│   │   │   │   │   └── 📄 FiltersController.js
│   │   │   │   │
│   │   │   │   ├── 📂 shapes/        # Shapes & stickers
│   │   │   │   │   ├── 📄 SimpleShapes.js
│   │   │   │   │   ├── 📄 SimpleShapesController.js
│   │   │   │   │   ├── 📄 StickersController.js
│   │   │   │   │   ├── 📄 StickersCategories.js
│   │   │   │   │   └── 📄 Polygon.js
│   │   │   │   │
│   │   │   │   ├── 📂 objects/       # Layer management
│   │   │   │   │   └── 📄 ObjectsPanelController.js
│   │   │   │   │
│   │   │   │   ├── 📂 directives/    # AngularJS directives
│   │   │   │   │   ├── 📄 Tabs.js
│   │   │   │   │   ├── 📄 PrettyScrollbar.js
│   │   │   │   │   ├── 📄 ColorPicker.js
│   │   │   │   │   ├── 📄 FileUploader.js
│   │   │   │   │   ├── 📄 TogglePanelVisibility.js
│   │   │   │   │   └── 📄 ToggleSidebar.js
│   │   │   │   │
│   │   │   │   └── 📂 resources/     # Static resources
│   │   │   │       ├── 📄 colors.js  # Color palettes
│   │   │   │       └── 📄 gradients.js # Gradient presets
│   │   │   │
│   │   │   └── 📂 vendor/            # Third-party libraries
│   │   │       ├── 📄 angular.min.js
│   │   │       ├── 📄 angular-animate.js
│   │   │       ├── 📄 angular-aria.js
│   │   │       ├── 📄 angular-material.js
│   │   │       ├── 📄 angular-sortable.js
│   │   │       ├── 📄 fabric.js      # Canvas library
│   │   │       ├── 📄 jquery.js
│   │   │       ├── 📄 jquery-ui.js
│   │   │       ├── 📄 file-saver.js
│   │   │       ├── 📄 pagination.js
│   │   │       ├── 📄 spectrum.js    # Color picker
│   │   │       ├── 📄 hammer.js      # Touch gestures
│   │   │       └── 📄 scrollbar.js
│   │   │
│   │   ├── 📂 images/                 # Image assets
│   │   │   ├── 📄 canvas-bg.png      # Canvas background
│   │   │   ├── 📄 viewport-bg.png    # Viewport background
│   │   │   ├── 📄 edge.jpg
│   │   │   ├── 📄 lotus.jpg          # Sample image
│   │   │   │
│   │   │   ├── 📂 brushes/           # Brush presets
│   │   │   │   ├── circle.png
│   │   │   │   ├── diamond.png
│   │   │   │   ├── pencil.png
│   │   │   │   ├── spray.png
│   │   │   │   ├── square.png
│   │   │   │   ├── hLine.png
│   │   │   │   └── vLine.png
│   │   │   │
│   │   │   ├── 📂 filters/           # Filter previews
│   │   │   │   ├── blur.png
│   │   │   │   ├── brightness.png
│   │   │   │   ├── grayscale.png
│   │   │   │   ├── sepia.png
│   │   │   │   └── ... (15+ filters)
│   │   │   │
│   │   │   ├── 📂 gradients/         # Gradient presets (1-13)
│   │   │   │
│   │   │   ├── 📂 shapes/            # Shape icons
│   │   │   │   ├── circle.png
│   │   │   │   ├── ellipse.png
│   │   │   │   ├── rect.png
│   │   │   │   └── triangle.png
│   │   │   │
│   │   │   ├── 📂 stickers/          # Sticker collection
│   │   │   │   ├── 📂 animals/       # 10 stickers
│   │   │   │   ├── 📂 beach/         # 22 SVG stickers
│   │   │   │   ├── 📂 bubbles/       # 105 stickers
│   │   │   │   ├── 📂 clouds/        # 15 stickers
│   │   │   │   ├── 📂 doodles/       # 100 SVG stickers
│   │   │   │   ├── 📂 landmarks/     # 100 SVG stickers
│   │   │   │   ├── 📂 stars/         # 6 stickers
│   │   │   │   └── 📂 transportation/ # 22 SVG stickers
│   │   │   │
│   │   │   └── 📂 textures/          # Texture patterns (0-28)
│   │   │
│   │   └── 📂 fonts/                  # Font files
│   │       ├── Material-Design-Iconic-Font.eot
│   │       ├── Material-Design-Iconic-Font.svg
│   │       ├── Material-Design-Iconic-Font.ttf
│   │       └── Material-Design-Iconic-Font.woff
│   │
│   └── 📄 launderer.php               # PHP helper (if needed)
│
├── 📄 README.md                       # Project documentation
├── 📄 LICENSE                         # MIT License
├── 📄 CHANGELOG.md                    # Version history
├── 📄 CONTRIBUTING.md                 # Contribution guidelines
├── 📄 STRUCTURE.md                    # This file
├── 📄 .gitignore                      # Git ignore rules
└── 📄 package.json                    # Root package.json
```

## 📝 Key Components Description

### Core Editor Files

#### `index.html`
- Main application entry point
- AngularJS app initialization
- Layout structure with Photoshop-style dark theme
- Canvas viewport and editor panels

#### `config.json`
- Application configuration
- Default canvas settings
- Image dimensions and quality
- Available tools and features

#### `gulpfile.js`
- Build automation tasks
- LESS compilation to CSS
- JavaScript minification
- Watch mode for development

---

### 🎨 Styling (LESS/CSS)

#### `assets/less/main.less`
- **Photoshop-Inspired Dark Theme**
- Color variables:
  - `@primary-color: #1E1E1E` - Panel headers
  - `@secondary-bg: #2C2C2C` - Panel bodies
  - `@accent-color: #31C5F0` - Photoshop blue
- Layout components:
  - Navigation bar (60px icon-only)
  - Fixed top toolbar
  - Left sidebar (350px)
  - Right panels (layers, history)
  - Viewport with zoom controls
- Button and input styles
- Animations and transitions

#### `assets/css/main.css`
- Compiled CSS from LESS
- Minified for production
- Includes all vendor styles (Bootstrap, Material Design)

---

### 🔧 JavaScript Modules

#### Core Modules (`assets/js/editor/`)

**`App.js`**
- Main AngularJS application
- Dependency injection
- Route configuration
- Global settings

**`Canvas.js`**
- Fabric.js canvas initialization
- Canvas rendering and management
- Object manipulation
- Canvas events

**`History.js`**
- Undo/redo functionality
- State management
- History stack
- Canvas snapshots

**`Saver.js`**
- Export to JPEG/PNG
- Save as JSON (editor state)
- Download functionality
- Image quality settings

**`Settings.js`**
- Application settings
- User preferences
- Tool configurations
- Canvas defaults

**`Keybinds.js`**
- Keyboard shortcuts
- Hotkey management
- Ctrl+Z (undo), Ctrl+Y (redo)
- Delete, Copy, Paste

**`LocalStorage.js`**
- Browser storage
- Save/load editor state
- User preferences persistence

---

#### Editing Tools

**Basics (`basics/`)**
- `CanvasBackgroundController.js` - Change canvas background color
- `ResizeController.js` - Resize canvas and images
- `RotateController.js` - Rotate images (90° or custom angle)
- `RoundedCornersController.js` - Add rounded corners

**Crop (`crop/`)**
- `cropper.js` - Crop tool logic
- `cropzone.js` - Crop zone UI
- `cropController.js` - Crop panel controller

**Text (`text/`)**
- `Text.js` - Text object management
- `TextController.js` - Text tool controller
- `Fonts.js` - Font list and loading
- `TextAlignButtons.js` - Text alignment
- `TextDecorationButtons.js` - Bold, italic, underline

**Drawing (`drawing/`)**
- `Drawing.js` - Drawing logic (Fabric.js integration)
- `DrawingController.js` - Drawing tool panel
- `RenderBrushesDirective.js` - Brush preview directive

**Filters (`filters/`)**
- `Filters.js` - 15+ filters (blur, brightness, sepia, etc.)
- `FiltersController.js` - Filter panel controller

**Shapes (`shapes/`)**
- `SimpleShapes.js` - Rectangle, circle, ellipse, triangle
- `SimpleShapesController.js` - Shape tool panel
- `StickersController.js` - Sticker library
- `StickersCategories.js` - Sticker organization
- `Polygon.js` - Custom polygon tool

**Objects/Layers (`objects/`)**
- `ObjectsPanelController.js` - Layer management panel
- Layer reordering, hide/show, lock/unlock
- Delete and duplicate layers

---

#### Directives (`directives/`)

**`Tabs.js`**
- Tab navigation component
- Active tab management

**`PrettyScrollbar.js`**
- Custom scrollbar styling
- Photoshop-style dark scrollbars

**`ColorPicker.js`**
- Spectrum.js integration
- Color selection UI

**`FileUploader.js`**
- Drag-and-drop file upload
- Image loading

**`TogglePanelVisibility.js`**
- Show/hide panels
- Panel state management

**`ToggleSidebar.js`**
- Collapse/expand sidebar
- Responsive layout

---

#### Resources (`resources/`)

**`colors.js`**
- Color palettes
- Predefined color schemes

**`gradients.js`**
- Gradient presets
- Gradient library

---

### 🖼️ Assets

#### Images
- **Brushes** - 7 brush types (circle, diamond, pencil, spray, square, hLine, vLine)
- **Filters** - Preview images for 15+ filters
- **Gradients** - 13 gradient presets
- **Shapes** - Icon previews (circle, ellipse, rect, triangle)
- **Stickers** - 400+ stickers in 8 categories
- **Textures** - 29 texture patterns

#### Fonts
- Material Design Iconic Font (EOT, SVG, TTF, WOFF)

---

## 🔄 Application Flow

1. **User opens app** → `index.html` loads
2. **AngularJS initializes** → `App.js` boots up
3. **Canvas created** → `Canvas.js` + Fabric.js
4. **User loads image** → `FileUploader.js` directive
5. **User selects tool** → Navigation bar click
6. **Tool panel opens** → Corresponding controller
7. **User makes edit** → Canvas updates + History saves state
8. **User exports** → `Saver.js` generates download

---

## 🎯 Getting Started Guide

### Building the Application

```bash
cd frontend

# Install dependencies
npm install

# Compile LESS to CSS
npm run build

# Or use watch mode (auto-compile on changes)
npm run build:watch

# Or manually
npx lessc assets/less/main.less assets/css/main.css
```

### Running the Application

```bash
# Option 1: Open directly
# Open frontend/index.html in browser

# Option 2: Use local server (recommended)
npm run serve
# Visit http://localhost:8080
```

### Customizing the Theme

Edit `frontend/assets/less/main.less`:

```less
// Change colors
@primary-color: #1E1E1E;    // Panel headers
@secondary-bg: #2C2C2C;     // Panel bodies
@accent-color: #31C5F0;     // Highlights

// Change dimensions
@left-sidebar-width: 350px;
@navigation-bar-width: 60px;
@top-panel-height: 40px;
```

Then recompile:
```bash
npm run build
```

---

## 💡 Development Tips

### LESS Development
- Use `npm run build:watch` for auto-compilation
- Test changes in multiple browsers
- Use browser DevTools to inspect styles

### JavaScript Development
- Use AngularJS DevTools extension
- Console.log for debugging
- Check Fabric.js documentation for canvas methods

### Adding New Features
1. Create controller in appropriate folder
2. Add route/directive in `App.js`
3. Create corresponding LESS file if needed
4. Test thoroughly
5. Commit changes

### Performance Optimization
- Use minified CSS/JS in production
- Optimize large images before loading
- Limit history stack size
- Use canvas caching where possible

---

## 🚀 Deployment

### Production Build

```bash
cd frontend

# Minify CSS
npm run compile:css:minify

# Minify JS (if using gulp)
npx gulp scripts

# Test production build
npm run serve
```

### Hosting Options
- **Static hosting**: GitHub Pages, Netlify, Vercel
- **Web server**: Apache, Nginx
- **CDN**: CloudFlare, Amazon CloudFront

---

## 📚 Technology Stack

- **AngularJS 1.x** - Frontend framework
- **Fabric.js** - Canvas manipulation
- **jQuery** - DOM manipulation
- **Angular Material** - UI components
- **Spectrum.js** - Color picker
- **LESS** - CSS preprocessing
- **Bootstrap 3** - Grid system and utilities
- **Material Design Icons** - Icon set
- **Gulp** - Build automation

---

**Made with ❤️ by Le Thi Nha My**

*For educational purposes at HCMUT*

