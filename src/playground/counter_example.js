class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
         count: 0
      };
   }

   componentDidMount() {
      const stringJson = localStorage.getItem('count');
      const count = parseInt(stringJson, 10);

      if (!isNaN(count)) {
         // const intCount = JSON.parse(count);
         this.setState(() => ({count}));   
      }
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
         const json = JSON.stringify(this.state.count);
         localStorage.setItem('count', json);
      }
   }

   handleAddOne () {
      this.setState((prevState) => {
         return {
            count: prevState.count + 1
         };
      });
   }

   handleMinusOne () {
      this.setState((prevState) => {
         return {
            count: prevState.count - 1
         };
      });
   }

   handleReset () {
      this.setState(() => {
         return {
            count: 0
         };
      })
      // this.setState((prevState) => {
      //    return {
      //       count: prevState.count + 1
      //    };
      // })
      // this.setState({
      //    count: 0
      // });

      // this.setState({
      //    count: this.state.count + 1
      // })

   }
   
   render (){
      return(
         <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
         </div>
      );
   }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/**
let count = 0;
const addOne = () => {
   count++;
   renderCounterApp();
};
const minusOne = () => {
   count--;
   renderCounterApp();
};
const reset = () => {
   count = 0;
   renderCounterApp();
}
const templateThree = (
   <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
   </div>
);

//Challenge
//Make button "-1" - setup minusOne function and register - log "minusOne"
//Make reset button "reset" - setup reset function - log "reset"

// console.log(templateThree);
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
   const templateThree = (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={addOne}>+1</button>
         <button onClick={minusOne}>-1</button>
         <button onClick={reset}>reset</button>
      </div>
   );

   ReactDOM.render(templateThree, appRoot);
}

renderCounterApp();
*/