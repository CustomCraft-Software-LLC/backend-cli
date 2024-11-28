# ccs-backend-cli

CLI tool for generating backend API modules using Plop.js.

## Installation

To install globally:

```bash
npm install -g ccs-backend-cli
```

## Usage

To generate a new API module:

```bash
ccs-backend-cli generate <name> [options]
```

or

```bash
npx ccs-backend-cli generate <name> [options]
```

### Options

[dot] -s, --services Include a service layer
[dot] -h, --helpers Include helpers