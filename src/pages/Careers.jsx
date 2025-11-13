import React, { useMemo, useState } from "react";
import { jobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import ApplyForm from "../components/ApplyForm";
import "./Careers.css";

const filters = ["All", "Full-time", "Contract", "Part-time"];

const benefits = [
  {
    title: "Impactful Missions",
    description:
      "Partner with global fleets and maritime innovators to make shipping safer and more sustainable."
  },
  {
    title: "Crew-Centric Culture",
    description:
      "We blend deep sea expertise with startup agility—expect mentorship, openness, and a tight-knit team spirit."
  },
  {
    title: "Grow Without Limits",
    description:
      "Chart your course with personalized learning budgets, leadership programs, and rotations across disciplines."
  }
];

const lifeAtSea = [
  "Hybrid-first ways of working from our harbourside hubs in Mumbai, Chennai, Dubai, and Singapore.",
  "Wellness stipends, shore-leave sabbaticals, and family benefits tailored for maritime professionals.",
  "Quarterly hack voyages where squads prototype new navigation and sustainability initiatives."
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesFilter =
        activeFilter === "All" ||
        job.type.toLowerCase() === activeFilter.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const handleViewRoles = () => {
    const section = document.getElementById("open-roles");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <span className="careers-hero__eyebrow">Careers at Maritime Solutions</span>
        <h1>Set Sail on Your Next Mission</h1>
        <p>
          Join a crew of engineers, surveyors, and operators steering the future of ocean logistics.
          From shipboard breakthroughs to shore-side analytics, we tackle high-impact challenges
          that keep global trade moving.
        </p>
        <div className="careers-hero__stats">
          <div>
            <strong>32+</strong>
            <span>Countries we operate in</span>
          </div>
          <div>
            <strong>1800+</strong>
            <span>Vessels powered by our tech</span>
          </div>
          <div>
            <strong>94%</strong>
            <span>Team retention this year</span>
          </div>
        </div>
        <div className="careers-hero__actions">
          <button className="btn btn-primary" onClick={handleViewRoles}>
            View Open Roles
          </button>
          <a className="btn btn-secondary" href="mailto:talent@maritimesolutions.com">
            Talk to Talent
          </a>
        </div>
      </section>

      <section id="open-roles" className="roles-section">
        <header className="roles-section__header">
          <div>
            <h2>Open Roles</h2>
            <p>Search, filter, and find the role that fits your next voyage.</p>
          </div>
          <div className="roles-section__controls">
            <div className="search-field">
              <input
                type="search"
                placeholder="Search by title, location, or department"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search jobs"
              />
            </div>
            <div className="filter-chips" role="tablist" aria-label="Job type filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`chip ${filter === activeFilter ? "chip--active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                  role="tab"
                  aria-selected={filter === activeFilter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="roles-section__grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={setSelectedJob} />
            ))
          ) : (
            <div className="roles-section__empty" role="status">
              <h3>No roles match your search (for now).</h3>
              <p>
                Drop us a line at <a href="mailto:talent@maritimesolutionsltd.com">talent@maritimesolutionsltd.com</a>{" "}
                and we&apos;ll keep you updated when the perfect role opens.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="benefits-section">
        <header>
          <h2>Why Navigate with Maritime Solutions Ltd ?</h2>
          <p>We invest in the people behind the mission—on deck, on shore, and in the cloud.</p>
        </header>
        <div className="benefits-section__grid">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="life-section">
        <div className="life-section__content">
          <h2>Life at Maritime Solutions Ltd</h2>
          <p>
            We believe a motivated crew fuels extraordinary voyages. From innovation sprints to
            coastal clean-up days, you&apos;ll find energy, empathy, and purpose in equal measure.
          </p>
          <ul>
            {lifeAtSea.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {selectedJob && (
        <ApplyForm selectedJob={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default Careers;

