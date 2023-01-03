# WeJob

An open job platform where everyone can contribute

## Project Structure

```
/
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── companies/
│       ├── devs/
│       └── index.astro
└── package.json
```

Create a page for your job listing or developer profile within the respective folder.
The file should be in the form of `<company-name>.astro` or `<github-handle>.astro` (for devs) and should contain the following frontmatter:

```astro

Any static assets, like images, can be placed in the `public/` directory.
```
