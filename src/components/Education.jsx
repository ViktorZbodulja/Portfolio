import React from 'react';
//import coledgeLogo from "../img/coledge.svg";
import timelineElements from "./timelineElements";
import circle from "../img/circle.svg"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
  return (
    <div className='vertical_container'>
      <div className='education_header'>Education</div>
      <VerticalTimeline>
        {timelineElements.map(element => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName='date'
            iconStyle={{ background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
            icon={<img src={circle} alt="Education Icon" />}
          >
            <h1 className="vertical-timeline-element-title">{element.name}</h1>
            <h4 className="vertical-timeline-element-subtitle">{element.title}</h4>
            <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
            {/*<h4 className="vertical-timeline-element-subtitle_date">{element.date}</h4>*/}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;