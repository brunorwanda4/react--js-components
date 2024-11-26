import  { Component } from 'react';

interface ProfilePictureProps {
  image: string;
}

class ProfilePicture extends Component<ProfilePictureProps> {
  render() {
    const { image } = this.props;

    return (
      <img
        src={image}
        alt="Profile"
        className="w-full h-72 rounded-t-xl mx-auto mb-4 object-cover"
      />
    );
  }
}

export default ProfilePicture;
