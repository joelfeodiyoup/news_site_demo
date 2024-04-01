`news_api` is the back end using `nest.js`. `news_ui` is the front end using `next.js`.

Usual thing:
- do an npm install inside each.
- back end: `npm run start:dev`
- front end: `npm run dev`
- navigate to `http://localhost:3001` in a browser

Front end will run on `http://localhost:3001`

Back end will run on `http://localhost:3000`

Let me know if something doesn't work!

# notes

There are a few things I'd improve here if I spent more time on it.

- Note that only the `news`, `shopping`, and `technology` sections at the top return a different set of data from each other. The other nav links all just return the same as `news`. I didn't want to add all the mock data on the back end for all the other categories.

![img](./news_site_final.gif)

![img](./screenshot.png)
