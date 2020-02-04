## Create React App Visualization

This assessment was bespoke handcrafted for Ronny-Alvarado.
Read more about this assessment [here](https://react.eogresources.com)

# Who am I?

Ronny Alvarado, environmental geologist and full stack software engineer.  
GitHub: https://github.com/RonnySAlvarado  
LinkedIn: https://www.linkedin.com/in/ronnysalvarado  
Website: https://www.ronnyalvarado.dev  

# Deployed Project

https://eog-eval-charts.netlify.com/  

# Images
![Graph1](https://i.imgur.com/KsacbQ2.png)
![Graph2](https://i.imgur.com/KcbnlRt.png)

# Tech Stack

1. React / React Hooks
2. React Router
3. Apollo Client / GraphQL-Tag / Momentjs
4. Styled-Components & Material UI
5. Recharts
6. React Loader Spinner

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

Upon clicking the button, you will begin routing to the `/dashboard` route. At this time, a query will be run (`getMultipleMeasurements`) and while the incoming data has not been received, a `<Loader />` component will mount until the dataset comes in, in which our `loading` state will now be `false` and the `<Loader />` component will unmount and our `<Linegraph />` components will mount.

### Performance
The dataset comes in with the following shape:  
![Incoming Data Shape from getMultipleMeasurements query](https://i.imgur.com/WgTcvMq.png)  

In order for us to use Recharts, we would have to shape the data in a way where we could have a single x-axis with multiple y-axis.
Once the dataset came in, we shaped it to the following:
![Shaped Dataset](https://i.imgur.com/zA3DnDd.png)  

If there was additional time, the run time of this program could be heavily improved/optimized as the constant shaping of the data on every subscription value coming in is taxing. 

### Linegraph & Metrics

This graph will show an X-axis that consists of timestamps from the current time to 30 minutes ago as well as the values associated with each of those times. The user of the application will then be able to toggle the graph views. Note: Although you can toggle the views, the data will still be loaded, but just not viewed. This can be further optimized at a later time.
