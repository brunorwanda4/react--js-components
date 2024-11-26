import { Component } from "react";
import ProfileBio from "./ProfileBio";
import ProfileName from "./ProfileName";
import ProfilePicture from "./ProfilePicture";

interface ProfileProps {
  name: string;
  bio: string;
  image: string;
}

class Profile extends Component<ProfileProps> {
  render() {
    const { name, bio, image } = this.props;

    return (
      <div className="bg-gradient-to-bl from-fuchsia-500 to-purple-800 rounded-xl shadow-md max-w-md text-center">
        <ProfilePicture image={image} />
        <div className=" p-6">
          <ProfileName name={name} />
          <ProfileBio bio={bio} />
        </div>
      </div>
    );
  }
}

export default Profile;
