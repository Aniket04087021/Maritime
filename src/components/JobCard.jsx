import React from "react";
import { MapPin, Briefcase, Clock, Send } from "lucide-react";

const JobCard = ({ job, onApply }) => {
  return (
    <article className="job-card">
      <div className="job-card__header">
        <div>
          <h3>{job.title}</h3>
          <span className="job-card__department">{job.department}</span>
        </div>
        <span className={`job-card__badge job-card__badge--${job.type.toLowerCase().replace(" ", "-")}`}>
          {job.type}
        </span>
      </div>

      <p className="job-card__summary">{job.description}</p>

      <ul className="job-card__meta">
        <li>
          <MapPin size={18} />
          <span>{job.location}</span>
        </li>
        <li>
          <Briefcase size={18} />
          <span>{job.experience} experience</span>
        </li>
        <li>
          <Clock size={18} />
          <span>Posted {job.posted}</span>
        </li>
      </ul>

      <div className="job-card__highlights">
        {job.highlights.map((highlight) => (
          <span key={highlight}>{highlight}</span>
        ))}
      </div>

      <div className="job-card__footer">
        <div className="job-card__tags">
          {job.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button className="job-card__apply" onClick={() => onApply(job)}>
          <Send size={18} />
          Apply Now
        </button>
      </div>
    </article>
  );
};

export default JobCard;

