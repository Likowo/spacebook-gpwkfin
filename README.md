<h1>SPACEBOOK</h1>
<p> Social Network of the Multiverse </p>
<p>SpaceBook is the Facebook of the intergalactic universe. Spacebook features a home page where users can interact with friends. There is a news feed to catch up on friends recent acitivies. You can even enter their profiles through the search bar at the top of the page. In each profile, you will find unique photos</p>

<h3>WIREFRAME</h3>
<p>Mobile, Tablet and Desktop based on Facebook Mobile, Tablet, and Desktop</p>

<h3>COMPONENT HIERACHY</h3>
1. App.js <br>
  2. Root.jsx <br>
    3. Desktop.jsx / Tablet.jsx / Mobile.jsx - state <br>
        4.Header - state
          5. Search - state
          5. Nav - state
          5. Stories - props and state
          5. CreatePost - props and state
          5. Contacts - state
          5. Feed - props and state
            6. FeedItem - props and state
        4.Profile.jsx - props and state
          5. Header - props and state
          5. Banner - state
          5. ProfileHead - props and state
          5. FriendsList - props and state
          6. PhotoList - state

<h3>MVP</h3>
<p>Functioning with home page, profiles, and search features</p>

<h3>POST MVP</h3>
<p>Root page floating spaceship</p>
<p>Clickable Stories</p>

<h3>HOOKS</h3>
<p>useState</p>
<p>useEffect</p>
<p>useContext</p>

<h3>DEPENDENCIES</h3>
<p>BrowserRouter</p>
<p>Axious</p>

<h3>APIs</h3>
<p>Rick and Morty API - https://rickandmortyapi.com/</p>
<p>NASA API - https://api.nasa.gov/</p>
<p>Quotes API - https://api.quotable.io/</p>
