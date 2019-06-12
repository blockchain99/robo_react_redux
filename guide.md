* I aleady installed (npm install -g create-react-app)
* create-react-app robofriends
* tachyons: Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.
  * similar to  Bootstrap, predefined class name to be added to a component.
  * [Docs](http://tachyons.io/docs/)
  * [tychyons](http://tachyons.io/)
  * in index.js, add,,,  import 'tachyons';
```
//Copy the line of code below and paste it in the head of the html file(s) you want to include tachyons in.
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

//or install via npm
npm install --save-dev tachyons@4.10.0

//or grab all the source files and build+develop locally
git clone git@github.com:tachyons-css/tachyons.git
cd tachyons
npm install && npm start
```
* If want to update create-react-app, In package.json, 
  * change version of "react-scripts" , run $ npm install 
```
"dependencies": {
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1"
  },
```
* In es6, template string : {..} for javaScript expression.
```
<img src={`https://robohash.org/${props.id}?200x200" alt="robots`}/>
```
* When input text in searchBox -> Uncaught TypeError: Cannot read property 'state' of undefined:
```
 onSearchChange(e){
    const fileredRobots = this.state.robots.filter(robots => {
 // changed asf:
  onSearchChange = (e) => {
    const fileredRobots = this.state.robots.filter(robots => {     
```
* [sega logo font](https://www.cufonfonts.com/font/sega-logo-font)
  * Download @font-face Kit

# [JSONPlaceholder](https://jsonplaceholder.typicode.com) 
* Instead of robots.js, onlie REST API for Testing & Prototyping
* [Jsonplaceholder-typicode-gql](https://github.com/nvs2394/jsonplaceholder-typicode-gql)
  
# [life cycle method](https://reactjs.org/docs/react-component.html)
* Mounting
  * These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

  1. **constructor**()
  2. static getDerivedStateFromProps()
  3. **render**()
  4. **componentDidMount**()

* Updating
  * An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

  1. static getDerivedStateFromProps()
  2. shouldComponentUpdate()
  3. **render**()
  4. getSnapshotBeforeUpdate()
  5. **componentDidUpdate**()

* Unmounting
  * This method is called when a component is being removed from the DOM:

  1. **componentWillUnmount**()
## The running sequence of Mounting is as follows:
* constructor() -> render() -> componentDidMount() : after state chagne -> render() again
* fetch(..) - request to server : `componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/user')`

* `<Scroll> </Scroll>` : Not self closing component - Its wrap `<CardList>`: Just to tell how to render inside, `<CardList robots={filterRobots} />` -> using children !!!
```
<Scroll>
  <CardList robots={fileredRobots} />
</Scroll>
// In Scroll.js
const Scroll = (props) => {
  console.log(props);
  return props.children
}
//Create scrollable component:{{}}-> javaScript expression, Object
const Scroll = (props) => {
  return(
    <div style={{}}>
      {props.children}
    </div>
  );
};

```
# higher-order component
* function that takes a component and returns a new component.
  * `connect(mapStateToProps, mapDispatchToProps)(App);`