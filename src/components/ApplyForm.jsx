import React, { useState } from "react";
import { X, Upload } from "lucide-react";

const ApplyForm = ({ selectedJob, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Job Applied:", selectedJob.title, form);
    alert(`Application submitted for ${selectedJob.title}`);
    onClose();
  };

  return (
    <div className="apply-modal" role="dialog" aria-modal="true" aria-labelledby="apply-form-title">
      <div className="apply-modal__backdrop" onClick={onClose} />
      <div className="apply-modal__card">
        <button className="apply-modal__close" onClick={onClose} aria-label="Close apply form">
          <X size={20} />
        </button>
        <header className="apply-modal__header">
          <span>Apply for</span>
          <h2 id="apply-form-title">{selectedJob.title}</h2>
          <p>
            {selectedJob.department} · {selectedJob.location}
          </p>
        </header>
        <form className="apply-modal__form" onSubmit={handleSubmit}>
          <label className="apply-modal__field">
            <span>Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Captain Alex Johnson"
            />
          </label>
          <label className="apply-modal__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="alex.johnson@maritime.com"
            />
          </label>
          <label className="apply-modal__field">
            <span>Phone</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
            />
          </label>
          <label className="apply-modal__field apply-modal__field--full">
            <span>Motivation</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us why you’re the right fit for this role."
            />
          </label>
          <label className="apply-modal__upload apply-modal__field--full">
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
            <Upload size={18} />
            <div>
              <strong>{form.resume?.name ?? "Upload your resume"}</strong>
              <span>PDF or DOC, max 5MB</span>
            </div>
          </label>
          <button type="submit" className="apply-modal__submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;

