# BrandTruth Frontend

This is a [React.js](https://reactjs.org/) frontend using [Next.js](https://nextjs.org/) for SSR and routing.

It uses [Tailwind CSS](https://reactjs.org/) for styling.
It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs) for Next.js integration.

## Development

To run a hot-reloading development server run the following command in the `frontend` directory

```bash
    npm run dev
```

## Code Formatting

This project uses [Prettier](https://prettier.io/) to ensure code styling is consistent throughout the project and erroneous style changes do not muddy up commits.

You can install a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to run it using Format On Save, which should be enabled in this workshpace via the `.vscode/settings.json` file contained in this repo.

Additionally, [ESLint](https://eslint.org/) is installed, though it's rules will likely be modified as development continues.

Both of these tools are automatically run via [lint-staged](https://github.com/okonet/lint-staged) as a pre-commit hook to automatically fix style as well.

## Testing
[next-page-test](https://github.com/toomuchdesign/next-page-tester)
[jest](https://jestjs.io/)

## Storybook
[Storybook](https://storybook.js.org/) for the component library.

## SignalR
For real-time elements such as notifications we're using [SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr)
We use the library [react-signalr](https://github.com/known-as-bmf/react-signalr) for React+SignalR integration, this library leverages [rxjs](https://rxjs.dev/guide/overview)

## Backend API

## Deployment

This repo will automatically deploy to Azure. More details to follow.
