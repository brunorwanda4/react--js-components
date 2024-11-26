import React, { Component } from 'react';

interface ProfileNameProps {
  name: string;
}

class ProfileName extends Component<ProfileNameProps> {
  render() {
    const { name } = this.props;

    return (
      <h2 className="text-xl font-semibold text-purple-100">{name}</h2>
    );
  }
}

export default ProfileName;
