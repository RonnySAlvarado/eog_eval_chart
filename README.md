## Create React App Visualization

This assessment was bespoke handcrafted for Ronny-Alvarado.
Read more about this assessment [here](https://react.eogresources.com)

# Who am I?

Ronny Alvarado, environmental geologist and full stack software engineer.  
GitHub: https://github.com/RonnySAlvarado  
LinkedIn: https://www.linkedin.com/in/ronnysalvarado  
Website: https://www.ronnyalvarado.dev  

# Deployed Project

_In progress_

# Tech Stack

1. React / React Hooks
2. React Router
3. Apollo Client / GraphQL-Tag / Momentjs
4. Styled-Components
5. Recharts
6. React Loader Spinner
7. React Testing Library / Jest

# Project Setup

In order to begin running this application, there are a few steps that must be taken.

### Step 1

Assuming you have this repository cloned and on your local machine, you must install the project dependencies at the root of the project.
You may install them with the following:

```
yarn install
```

or

```
npm install
```

### Step 2

Once dependencies have been installed, you will have to run the React client. Run the following:

```
yarn start
```

or

```
npm run start
```

### Step 3

Once the React client is finished loading, enjoy the content! See below for instructions on how to use the app.

# Functionality of the app and how to use it

### Landing page

Upon entering the site, the contents of the page will fade in (5 seconds) and will render a button that will allow you to access the `/dashboard` page. This page will consist of the application itself.

### Dashboard

Upon clicking the button, you will begin routing to the `/dashboard` route. At this time, a few queries will be running and while the incoming data has not been received, a `<Loader />` component will mount until the dataset comes in, in which our `loading` state will now be `false` and the `<Loader />` component will unmount and our `<Linegraph />` components will mount.

### Linegraph

This graph will show an X-axis that consists of timestamps from the current time to 30 minutes ago as well as the values associated with each of those times. The user of the application will then be able to view the graph being updated based on when a new piece of data value comes in through the `Subscriptions` that were setup by the API. While a data point comes in through the subscription, we had to mold the data so that it would essentially filter the prior data and pop off the ones where the current time - 1800000 (30 minutes ago) would only show so we make sure that it's only 30 minutes of data that is appearing on the graph.
