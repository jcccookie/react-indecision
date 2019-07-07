class VisibilityToggle extends React.Component {
   constructor(props) {
      super(props);
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
      this.state = {
         visibility: false,
      }
   }
   
   handleToggleVisibility() {
      this.setState((prevState) => {
         return {
            visibility: !prevState.visibility
         };
      });
   }

   render() {
      return(
         <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
            {this.state.visibility && (
               <div>
                  <p>This is some information</p>
               </div>
               )
            }
         </div>
      );
   }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


// const appRoot = document.getElementById('app');
/**
const app = {
   title: "Visibility Toggle",
   details: ['Show details', 'Hide details'],
   description: ['', 'This is some description'],
   direction: 0,
} */

/**
const onShowButtonClick = () => {
   if (app.direction === 0) {
      app.direction++;
   } else {
      app.direction--;
   }
   renderApp();
} */

// let visibility = false;

// const toggleVisibility = () => {
//    visibility = !visibility;
//    renderApp();
// }

// const renderApp = () => {
   /**
   const template = (
      <div>
         <h1>{app.title}</h1>
         <button onClick={onShowButtonClick}>{app.details[app.direction]}</button>
         <p>{app.description[app.direction]}</p>
      </div>
   );
    */

//    const template = (
//       <div>
//          <h1>Visibility Toggle</h1>
//          <button onClick={toggleVisibility}>{visibility ? <p>Hide details</p> : <p>Show details</p>}</button>
//          {visibility && (
//             <p>This is some description</p>
//          )}
//       </div>
//    );
//    ReactDOM.render(template, appRoot);
// }

// renderApp();