# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# How to use the Sigma CMS to update the landing page

## Preparation 

1. Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

2. Change directory to vueschool

```bash
# npm
cd vueschool
```

3. In a separate terminal window start the development server on `http://localhost:3333`:

```bash
# npm
npm run dev
```

3. In a separate terminal window start the development server on `http://localhost:3333`:

```bash
# npm
npm run dev
```

# Working with CMS

Open the `http://localhost:3333` in a browser. Log in with a sanity account. 

On the left side you can find a "Content" block. There you can find sections for changing. 

1. In "Hero section" you can add dynamic content in the Hero section (H1, paragraph, CTA). You can find there such a fields:
- titleFirstPart - text before highlighted part,
- highlightedTitle - highlighted text in H1 tag,
- titleLastPart - text after highlighted part,
- paragraph - text in paragraph,
- buttonText text on the button.

![plot](./readme%20images/1.png)

On the screen below you can find how all fields will look on the UI.

![plot](./readme%20images/2.png)

When you update needed fields, you should click on the "Publish" button on the right bottom corner of the page.

2. In "Courses section" you can add dynamic content like lessons, courses and hours number. You can find there such a fields:
- video - number of videos,
- courses - number of courses,
- hours - number of hours.

![plot](./readme%20images/3.png)

On the screen below you can find how all fields will look on the UI.

![plot](./readme%20images/4.png)

When you update needed fields, you should click on the "Publish" button on the right bottom corner of the page.

3. In "Bundle access list" you can add dynamic content pricing card title, icon, bullet points, order of the cards. You can find there such a fields:
- title - title of the pricing card,
- icon - image near the title of the pricing card,
- showMasterclass - should show the masterclass block,
- order - order of the pricing list,
- data - pricing list bullet points. This field consists of:
  - name - text near the bullet points,
  - isIncluded - if this list option included to the bundle,
  - isBold - should this list option has a bold font.

When you update needed fields, you should click on the "Publish" button on the right bottom corner of the page.

![plot](./readme%20images/5.png)

On the screen below you can find how all fields will look on the UI.

![plot](./readme%20images/6.png)

## Results

To see the results, you should open a `http://localhost:3000` URL.