## Code Quality & Standards

This project uses some code quality tools to ensure consistent code:

### Tools

- **ESLint** - Linting with Next.js recommended rules + TypeScript support
- **Prettier** - Automatic code formatting
- **Husky** - Git hooks for automated quality checks
- **lint-staged** - Run linters on staged files only (faster commits)
- **simple-import-sort** - Automatic import organization

### Available Commands

```bash
# Linting
npm run lint         # Check for linting errors
npm run lint:fix     # Auto-fix linting errors

# Formatting
npm run format       # Format all files with Prettier
npm run format:check # Check if files are formatted correctly
```

### How It Works

1. **While coding**: The editor will show ESLint errors in real-time
2. **On commit**: Pre-commit hooks automatically:
   - Run ESLint and auto-fix issues on staged files
   - Format code with Prettier
   - Block commits if errors remain
3. **Manual checks**: Run `npm run lint` and `npm run format:check` anytime

### Configuration Files

- `.prettierrc` - Prettier formatting rules
- `.editorconfig` - Editor settings for consistency
- `eslint.config.mjs` - ESLint rules and plugins
- `.husky/pre-commit` - Git pre-commit hook configuration
