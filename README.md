# To Begin

In the project directory, run:

### `npm install`

Install node_modules named in package.json.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Project Tasks

## Creating the project

✅ I used the create-react-app to set up and create the initial project directory. 

✅ When reviewing you’ll need to set up a config.js file in your project that imports your API key into your application so that you can request data from the Flickr API. Something like this:
```
const apiKey = 'YOUR API KEY';
export default apiKey;
```
✅ Install node_modules with `npm install` and run the project with `npm run start`

## App components

✅ I used the index.html file and mockups as a general guide.

✅ I used the src/App.js file as the main container component, including for importing the .config file.

✅ I kept and managed as much of the state and functionality as possible in my src/App.js file, passing data down to reusable stateless components with props.

✅ I created the necessary stateless functional components that focus on the UI and receive data via props.

✅ Each Route has a Header component that could store things like an app title, logo, nav and search bar. 

✅ Each route has a Nav component for the navigation menu.

✅ Each route has a single Gallery component that is reused to display the sets of images for each of the three topic categories.

✅ Each Gallery Component reuses a single Gallery-item component with iteration to display multiple list items and images.

✅ There is a form component for the search. In my case it is a stateless component because I lifted the `handleQueryChange` function up to App.js.

## Flickr API

✅ Created a yahoo account/use tumblr account to sign in.

✅ Applied for a non-commercial API key.

✅ set up a config.js file

✅ Imported API key into application

## Routes

✅ Installed React Router and set up <Route> and <Link> or <NavLink> components.

✅ Included a "Search" link that includes a search field to let users search for photos.

✅ Clicking a nav link navigates the user to the correct route, displaying the appropriate info.

✅ The current route is reflected in the URL.

✅ Displays 3 default topic links that return a list of photos matching some criteria. You can change the default topics in the App.js state object. I used cats, dogs and computers.

✅ Requests and loads the photos for the three default topics when the app first loads. 

## Requesting the data

✅ Data is fetched from the Flickr API using the Fetch API.

✅ Data fetching and state is managed by a higher-level “container” component, src/App.js.

✅ User can enter a tag to search for, such as "cats.”

✅ Number of results limited to 24 using the per_page argument.

✅ JSON as the output.

## Search

✅  Search field feature included and a search route to search for new categories of images.

## Displaying the data

✅ each image gets a unique "key" prop.

✅ no console warnings regarding unique "key" props.

❌ The title of each page displaying images should be dynamically provided via "props".

✅ The current route should be reflected in the URL.

✅ There should be no more that 24 images displayed.

## CSS styles

✅ The mockups are just a general guide for how the elements should be arranged and positioned on the page. But other than general arrangement, spacing and positioning, you are free to experiment with things like color, background color, font, shadows, transitions, animations, etc..

## Extra Credit

✅ Added a loading indicator.

✅ If no matches are found by the search, a friendly user message displays to tell the user there are no matches.

✅ A 404-like error route displays a friendly 404 error page when a URL does not match an existing route.

## BONUS

✅ My app searches-as-you-type, which I thought was better functionality than having a seearch button.

✅ add this line to App.js `handleQueryChange()` Fn if you want the URL to reflect search params this.props.history.replace(`?search=${this.state.query}`)
