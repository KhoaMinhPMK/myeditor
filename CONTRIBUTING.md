# Contributing to Pixie Image Editor

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.0.0
- npm or yarn
- Git
- Basic knowledge of AngularJS, Fabric.js, and LESS

### Setting Up Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/pixie-image-editor.git
   cd pixie-image-editor
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/pixie-image-editor.git
   ```

4. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

5. **Compile LESS**
   ```bash
   npx lessc assets/less/main.less assets/css/main.css
   ```

6. **Run the application**
   ```bash
   npx http-server -p 8080
   ```

## 🔄 Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent fixes

### Creating a Feature Branch

```bash
git checkout develop
git pull upstream develop
git checkout -b feature/your-feature-name
```

### Making Changes

1. **Make your changes** in the appropriate files
2. **Test thoroughly** - ensure nothing breaks
3. **Compile LESS** if you modified styles:
   ```bash
   cd frontend
   npx lessc assets/less/main.less assets/css/main.css
   ```
4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add: Description of your changes"
   ```

### Commit Message Format

Use conventional commits:

- `Add:` New feature
- `Fix:` Bug fix
- `Update:` Update existing feature
- `Refactor:` Code refactoring
- `Style:` CSS/styling changes
- `Docs:` Documentation changes
- `Test:` Adding tests
- `Chore:` Maintenance tasks

Example:
```
Add: Image flip tool with horizontal and vertical options
```

## 📏 Coding Standards

### JavaScript

- Use **ES5** syntax (project uses AngularJS 1.x)
- Use semicolons
- Use single quotes for strings
- Use camelCase for variables and functions
- Add comments for complex logic
- Follow existing code style

Example:
```javascript
angular.module('ImageEditor').service('YourService', function() {
    'use strict';
    
    this.yourMethod = function(param) {
        // Your logic here
        return result;
    };
});
```

### LESS/CSS

- Follow BEM naming convention when possible
- Use variables for colors and dimensions
- Keep selectors specific but not overly nested
- Add comments for complex styles
- Maintain Photoshop theme consistency

Example:
```less
.your-component {
    background-color: @secondary-bg;
    color: @text-primary;
    
    &:hover {
        background-color: @hover-color;
    }
    
    .your-component__element {
        color: @accent-color;
    }
}
```

### HTML

- Use proper indentation (4 spaces)
- Keep AngularJS directives readable
- Add comments for complex sections
- Use semantic HTML

## 🎨 Theme Guidelines

When adding new UI components, follow the Photoshop-inspired theme:

### Colors

```less
@primary-color: #1E1E1E;     // Panel headers
@secondary-bg: #2C2C2C;      // Panel bodies
@tertiary-bg: #383838;       // Tabs, toolbar
@accent-color: #31C5F0;      // Active states, highlights
@hover-color: #474747;       // Hover states
@text-primary: #E8E8E8;      // Main text
@text-secondary: #999999;    // Secondary text
@text-disabled: #666666;     // Disabled text
```

### Shadows

```css
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);  /* Standard */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7); /* Elevated */
```

### Transitions

```css
transition: all 0.2s ease;  /* Standard */
transition: all 0.3s ease;  /* Slower */
```

## 📤 Submitting Changes

### Pull Request Process

1. **Update your branch** with latest changes:
   ```bash
   git checkout develop
   git pull upstream develop
   git checkout feature/your-feature-name
   git rebase develop
   ```

2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub:
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select `develop` as the base branch
   - Provide a clear title and description
   - Link any related issues

### Pull Request Guidelines

- **Title**: Clear and descriptive (e.g., "Add image flip tool")
- **Description**: 
  - What changes were made
  - Why these changes were needed
  - How to test the changes
  - Screenshots (if UI changes)
- **Testing**: Ensure all features work
- **Documentation**: Update README if needed
- **Code Quality**: Follow coding standards

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test these changes

## Screenshots (if applicable)
Before/After screenshots

## Checklist
- [ ] Code follows project style
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings/errors
- [ ] Tested in multiple browsers
```

## 🐛 Reporting Bugs

### Before Submitting

1. Check if the bug has already been reported
2. Try to reproduce the bug
3. Gather relevant information

### Bug Report Template

```markdown
**Description**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Version: [e.g., 1.0.0]

**Additional Context**
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature

**Use Case**
Why this feature would be useful

**Proposed Solution**
How you envision this working

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other relevant information
```

## 📚 Resources

- [AngularJS Documentation](https://docs.angularjs.org/)
- [Fabric.js Documentation](http://fabricjs.com/docs/)
- [LESS Documentation](https://lesscss.org/)
- [Material Design Icons](https://materialdesignicons.com/)

## 🙏 Thank You!

Your contributions make this project better. We appreciate your time and effort!

## 📞 Contact

**Project Maintainer**: Le Thi Nha My  
**Email**: my.le2412138@hcmut.edu.vn  
**University**: Ho Chi Minh City University of Technology (HCMUT)

---

**Happy Coding! 🎨✨**
