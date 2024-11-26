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
      </div>
    );
  }
}

export default App;
