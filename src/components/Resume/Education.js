import React, { useEffect } from "react"
import ResumeCard from "./ResumeCard"
import ResumeList from "./ResumeList"
import { education } from "../../constants"
import { v4 as uuid } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);
  return (
    <ResumeList data-aos="fade-left">
      {
        education.map(eduItem => (
          <ResumeCard
            key={uuid()}
            position={eduItem.major}
            organization={eduItem.organization}
            time={eduItem.time}
            descriptions=""
          />
        ))
      }
    </ResumeList>
  )
}

export default Education
