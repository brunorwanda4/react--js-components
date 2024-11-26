import { Component } from 'react';
import Button from './components/Button';
import Profile from './components/Profile';
import image1 from "./assets/p.jpg"
import image2 from "./assets/z.jpg"

class App extends Component {
  handlePrimaryClick = () => {
    alert('Primary Button Clicked!');
  };

  handleSecondaryClick = () => {
    alert('Secondary Button Clicked!');
  };

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-tr to-purple-900 from-gray-950 flex flex-col items-center justify-center space-y-8 p-4">
        <div className="space-x-4 ">
          <Button
            text="Primary Button"
            onClick={this.handlePrimaryClick}
            style="bg-purple-500 text-white"
          />
          <Button
            text="Secondary Button"
            onClick={this.handleSecondaryClick}
            style="bg-fuchsia-500 bg-purple-800 text-white"
          />
        </div>

        <div className=' flex gap-12 justify-center'>
          <Profile
            name="Cyubahiro Ndori"
            bio="A passionate software developer and technology in Burera 😁😁."
            image={image2}
          />
          <Profile
            name="MUgisha Bruno"
            bio="A passionate software developer and design software 🚘🚘."
            image={image1}
          />
        </div>
        <div className=' fixed bottom-4 right-4 flex  flex-col backdrop-blur-lg bg-black/30 p-4 rounded-full hover:text-purple-500'>
          <a target='blank' href='https://github.com/brunorwanda4/react--js-components' className=' flex gap-2 items-center text-white'>
            <svg height="32" viewBox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.68 7.68 0 0 1 4.01 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <div>
              <h2 className=' font-sans'>brunorwanda4</h2>
              <p className=' text-gray-300 text-sm font-sans'>source code</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
