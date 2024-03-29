import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
   state = {
      options: [],
      selectedOption: undefined,
   };

   handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => ({ selectedOption: option }));
   };

   handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
   };

   handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
         options: prevState.options.filter((option) => optionToRemove !== option)
      }))
   };

   handleAddOption = (option) => {
      if (!option) {
         return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
         return 'This option already exists';
      }
      this.setState((prevState) => ({options: prevState.options.concat(option)}));
   };

   handleClearModal = () => {
      this.setState(() => ({ selectedOption: undefined }));
   };

   //fetching data from local storage
   componentDidMount() {
      try {
         const json = localStorage.getItem('options');
         const options = JSON.parse(json);

         if (options) {
            this.setState(() => ({ options }));
      }
      } catch (e) {
         // Do nothing at all
      }
      
   };

   //update to local storage
   componentDidUpdate(prevProps, prevState) {
      //Prevent inefficient triggers when button clicked with no update
      if (prevState.options.length !== this.state.options.length) {
         const json = JSON.stringify(this.state.options);
         localStorage.setItem('options', json);
      }
   };
   
   render () {
      const subtitle = 'Put your life in the hands of a computer.';
      return (
         <div>
            <Header subtitle={subtitle}/>
            <div className="container">
               <Action 
                  handlePick={this.handlePick}
                  hasOptions={this.state.options.length > 0}
               />
               <div className="widget">
                  <Options 
                     options={this.state.options}
                     handleDeleteOptions={this.handleDeleteOptions}
                     handleDeleteOption={this.handleDeleteOption}
                  />
                  <AddOption 
                     handleAddOption={this.handleAddOption}
                  />
               </div>
             </div>
            <OptionModal 
               selectedOption={this.state.selectedOption}
               handleClearModal={this.handleClearModal}
            />
         </div>
      );
   };
}

export default IndecisionApp;