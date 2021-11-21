import { Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Arkar Oo</Typography>
        <Typography className="title">React Developer</Typography>
      </div>

      <figure className="profile_image">
        <image src="" alt="" />
      </figure>

      <div className="profile_information">
        Insert Timeline
        <br />
        <button>my Button</button>
      </div>
    </div>
  );
};

export default Profile;
