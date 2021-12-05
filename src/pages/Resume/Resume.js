import React from 'react'
import './Resume.css'
import { Grid, Typography } from '@material-ui/core'
import resumeData from '../../utils/resumeDate'

import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/timeline';

import { Work, School } from '@material-ui/icons';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@material-ui/lab';

const Resume = () => {
    return (
        <>
            {/* about me */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <Typography className="section_title_text">About me</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className="about_text" variant='body2'>{resumeData.about}</Typography>
                </Grid>
            </Grid>
            {/* working and education */}
            <Grid container className="section">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <Typography className="section_title_text">Resume</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className=''>
                        {/* experience */}
                        <Grid className="resume_timeline" item sm={12} md={6}>
                            <CustomTimeline title={"Working History"} icon={<Work />}>
                                {resumeData.experiences.map(experience => (
                                    <TimelineItem >
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{experience.title}</Typography>
                                            <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>


                        </Grid>
                        {/* education */}
                        <Grid className="resume_timeline" item sm={12} md={6}>
                            <CustomTimeline title={"Education"} icon={<School />}>
                                {resumeData.education.map(education => (
                                    <TimelineItem >
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{education.title}</Typography>
                                            <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>


                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* skills */}
            <Grid container className=""></Grid>
            {/* contacts */}
            <Grid container className=""></Grid>
        </>
    );
}

export default Resume
