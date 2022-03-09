import React, { useEffect } from "react"
import ResumeCard from "./ResumeCard"
import ResumeList from "./ResumeList"
import { experiment } from "../../constants"
import { v4 as uuid } from 'uuid'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ResumeList data-aos="fade-left">
      {
        experiment.map(ex => (
          <ResumeCard
            key={uuid()}
            position={ex.position}
            organization={ex.organization}
            subtitle={ex.subtitle}
            time={ex.time}
            descriptions={ex.descriptions}
          />
        ))
      }
    </ResumeList>
  )
}

export default Experience
