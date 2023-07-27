This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Project Onboarding and set up documentation

Visit our [confluence documentation](https://poc-acl.atlassian.net/wiki/spaces/AP/pages/4980740) with your browser for step-by-step project set up guidelines.


## Starting the Server

Starting the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

## Linter & Formatters
* `.eslintrc.json`- Linting Rules
  * JavaScrip Styles - [Airbnb](https://github.com/airbnb/javascript)
  * TypeScript Styles - [typescript-eslint](https://typescript-eslint.io/rules/)
* `.eslintignore` - Exclude files/folders to be checked by eslint
* `prettier.config.js`- Formatting rules
  * [Prettier Reference](https://prettier.io/docs/en/options.html)
* `.prettierignore` - Exclude files/folders to be checked by prettier
* `.editorconfig` - Editor configurations
  * [Specification](https://spec.editorconfig.org/)
* `.commitlint.config.js` - Commit message semantics
  * [Rules Reference](https://commitlint.js.org/#/reference-rules)
* `tsconfig.json` - TypeScript Compilation Rules

```bash
# Check for linting errors
npm run lint

# To fix violated lints
npm run lint --fix

# Check formatting errors
npm run format:check

# Fix formatting errors
npm run format:write
```

### Commit Hooks

```bash
synopsis:

# Project recommended commit message format is :
type(scope): subject (POC-****)

# supported types:
[ build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test ]

# your project prefix, in our case - POC
POC - the project prefix

#use 0000 as default jira ticket number if ticket not assigned
**** - the jira ticket number.

# eg.1
fix(server): send cors headers (POC-1011)

# eg.2
feat(blog): add comment section (POC-0011)

#git message format
git commit -m "fix(server-component): add query param validation (POC-1045)"


# Note for linux users:
While running "git commit" command,if you encountered errors such as : ".husky/pre-commit hook was ignored because it's not set as executable."
please give script the executable permission : chmod +x .husky/pre-commit

```
[For more details, follow Husky Documentation](https://typicode.github.io/husky/)

## Tailwind
Update configuration at `tailwind.config.js`

[Tailwind Documentation](https://tailwindcss.com/docs/installation)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
