import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import logo from "../../assets/images/logo.jpg";
// import { Shadows } from "@mui/material/styles/shadows";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/timeline";
import resumeData from "../../utils/resumeDate.js";

import GetAppIcon from "@material-ui/icons/GetApp";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { TimelineContent, TimelineItem } from "@material-ui/lab";
// import { keys } from "@mui/system";

import CustomButton from "../Button/Button";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem style={{ minHeight: "0px" }}>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {""}
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow" style={{ boxShadow: 0 }}>
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        {" "}
        <img src={logo} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        
        <div className='button_container'>
          <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
      
    </div>
  );
};

export default Profile;
