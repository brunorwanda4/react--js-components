import React, { Component } from 'react';

interface ProfileBioProps {
  bio: string;
}

class ProfileBio extends Component<ProfileBioProps> {
  render() {
    const { bio } = this.props;

    return <p className="text-purple-50 mt-2">{bio}</p>;
  }
}

export default ProfileBio;
