# use-observer

Easy to use hook for your React project to implementing dynamic animations based on element position on window

### Instalation

Run command inside your project terminal

``` 
npm install use-observer-hs 
```

### How to use observer

Import observer inside Component you want to make dynamic

```
import useObserver from "use-observer-hs"
```

### Example of useObserver

```JavaScript
import useObserver from "use-observer-hs";
import "./App.css";

function App() {
  // Use arguments inside useObserver function to get the desired result
  // 1st argument is element you target '.card-element' MUST USE . for class and # for id
  // 2nd argument is booleand so you can activare observer eact time when element  is observed or only first time
  // 3rd argument is new class that you want to add when element is observed 'new-class' DO NOT USE . in class name
  // if you dont want to add new class use Null as 3rd argument
  // 4th argument is treshold Number when element will be activated 0-1 1=100% of element visible 
  // 5th is callback function where you can implemented your own logic that will be activated 
  // you can leave out callback functon from useObserver

  useObserver(".card-element", true, "background-green", 1, () => {
    //Your logic
    console.log("Card element");
  });

  return (
    <div className="App">
      <div className="card-element"></div>
    </div>
  );
}

export default App;

```
#### Inside App.css
```CSS
.card-element {
  height: 200px;
  width: 200px;
  margin: 20px;
  background-color: blue;
  transition: all 1s ease-in;
}
.background-green {
  background-color: green;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
```
In this example when <div> with class name 'card-element' is 100% visible on site will also get class 'background-green' and will change color from blue to green over 1 second and start rotating.Combine classes to get amazing effects easily
