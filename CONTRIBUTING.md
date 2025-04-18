# Contributing

## Setting up the environment

### Requirements

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (v10 or higher)

### Installing dependencies

After cloning the repository, install the dependencies:

```shell
pnpm install
```

## Development

To start the development server, run:

```shell
pnpm dev
```
This command will launch the documentation site locally at http://localhost:3000.
Any changes to the SASS files will automatically be reflected in the docs, making development seamless.

Each SCSS component has a corresponding React component located in [`site/src/components`](site/src/components), which
is used to visually preview and test style changes. These components are showcased in their respective documentation
pages under [`site/docs/components`](site/docs/components). Updating a style should ideally be reflected in both the
SCSS and the associated example component.

## Testing

Before commiting your changes, make sure everything runs smoothly by running a build:
```shell
pnpm build
```
It should complete without errors or warnings.

## Document your changes

If your contribution changes or adds new functionality:

- Update the documentation accordingly
- Ensure any examples or code snippets reflect your updates

## Commit message format

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to maintain clean and
consistent commit history. The configuration can be found in [`conventionalcommit.json`](./conventionalcommit.json).

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

- **type**: Describes the purpose of the change (e.g., `feat`, `fix`, `docs`, etc.)
- **scope**: Indicates the section of the codebase affected (e.g., `docs`)
- **subject**: A brief description of the change
  - use the imperative, present tense: "change" not "changed" nor "changes"
  - don't capitalize first letter
  - no dot (`.`) at the end
- **footer**: Optional additional metadata (e.g., breaking changes or linked issues)

### Allowed types

| Type       | Description                                               |
|------------|-----------------------------------------------------------|
| `feat`     | Introduces a new feature                                  |
| `fix`      | A bug fix                                                 |
| `perf`     | A code change that improves performance                   |
| `refactor` | A code change that neither fixes a bug nor adds a feature |
| `docs`     | Changes that affect documentation                         |
| `style`    | Changes that do not affect code meaning (formatting, etc) |
| `build`    | Changes to the build system or dependencies               |
| `chore`    | Non user-facing changes                                   |

> [!IMPORTANT]
> In this project, you're not just a **user** of a website using `discord.css` — you're also a **developer** using the
> `discord.css` library itself.
>
> That means changes to the SASS codebase (like adding new mixins, functions, or variables) are part of the public API
> of the design system.
>
> For example, introducing a new SASS mixin should be considered a `feat` as it represents a new capability for library
> consumers.


### Common scopes

- `docs` – for anything related to documentation website inside `/site` (not the actual documentation for the library)

### Examples

- `feat: add new button variant for dark mode`
- `fix: prevent overflow in card preview`
- `docs: improve installation guide and setup instructions`
- `refactor: simplify theme config loading`
- `perf: optimize variable usage in mixins`
- `style: format variables.scss for readability`
- `build: upgrade pnpm-lock and remove unused deps`
- `chore: add .gitignore rules for system files`

### Optional footers

You can add metadata at the end of your commit message:

- `BREAKING CHANGE`: Use this to highlight a breaking change in the API or styling structure
- `Closes`: Reference issues or pull requests this commit resolves
- `Co-authored-by`: Acknowledge contributors on shared commits

Following this structure helps streamline collaboration, automation, and changelog generation. Please ensure every
commit adheres to this format.

