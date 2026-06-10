import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const CareersSection = () => {
  const jobs = [
    {
      title: "Frontend Developer Intern (React.js)",
      type: "Full-Time",
      location: "Remote",
      country: "India",
      desc: "Build modern logistics dashboards and scalable frontend experiences.",
    },

    {
      title: "Operations Intern",
      type: "Full-Time",
      location: "Singapore",
      country: "Singapore",
      desc: "Support logistics operations and fleet coordination.",
    },

    {
      title: "Business Development Intern",
      type: "Part-Time",
      location: "Singapore",
      country: "Singapore",
      desc: "Help grow partnerships and expand Welyft services.",
    },

    {
      title: "Backend Engineering Intern (.NET)",
      type: "Full-Time",
      location: "Jaipur, India",
      country: "India",
      desc: "Work on APIs, backend systems, and logistics infrastructure.",
    },
  ];
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All Types");
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTypes = type === "All Types" || job.type === type;
    const matchesCountry = country === "All" || job.country === country;

    return matchesSearch && matchesTypes && matchesCountry;
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [resumeUrl, setResumeUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const [uploadSuccess, setUploadSuccess] = useState(false);

  return (
    <section id="jobs" className="bg-[#F5F3EE] py-16 sm:py-24 lg:py-28">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center">
          <p className="inline-block bg-[#0A1F44] text-yellow-400 uppercase tracking-widest px-5 py-2 rounded-xl text-sm font-semibold">
            Open Positions
          </p>
          <h1 className="text-5xl md:text-3xl sm:text-5xl lg:text-3xl  lg:text-6xl font-bold mt-6 text-[#0A1F44]">
            Join the Welyft Team
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center mt-14">
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white px-5 py-4 rounded-2xl border border-gray-300 text-lg w-full md:w-[400px] shadow-sm focus:outline-none"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-white px-5 py-4 rounded-2xl border border-gray-300 text-lg shadow-sm focus:outline-none"
          >
            <option>All Types</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Remote</option>
          </select>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-white px-5 py-4 rounded-2xl border border-gray-300 text-lg shadow-sm focus:outline-none"
          >
            <option>All</option>
            <option>India</option>
            <option>Singapore</option>
          </select>
        </div>

        <div className="mt-16 space-y-6 max-h-[700px] overflow-y-auto pr-3">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white  border-l-4 border-yellow-400 rounded-xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1F44]">
                    {job.title}
                  </h2>
                  <p className="text-gray-500 text-lg mt-3">
                    {job.type} • {job.location}
                  </p>
                  <p className="text-gray-600 text-lg mt-2 leading-relaxed">
                    {job.desc}
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-6 bg-[#0A1F44] flex items-center gap-2 text-yellow-400 px-5 py-2 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  onClick={() => {
                    console.log("clicked");
                    setShowModal(true);
                  }}
                >
                  Apply Now
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center pt-24 items-start sm:items-center z-50 px-4 py-6 overflow-y-auto">
          <div className="bg-white rounded-3xl p-5 sm:p-8 w-full max-w-2xl relative shadow-2xl max-h-[85vh] overflow-y-auto mt-16 pb-6 sm:mt-0">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-3xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F44] leading-tight">
              Apply for Position
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Fill out the application Form below
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();

                setLoading(true);

                const formData = new FormData(e.target);

                formData.append(
                  "access_key",
                  "26ce4d0c-788c-427a-8b66-4196598ce40a",
                );

                formData.append("subject", "New Job Application - Welyft");

                formData.append("resume_link", resumeUrl);

                const response = await fetch(
                  "https://api.web3forms.com/submit",
                  {
                    method: "POST",
                    body: formData,
                  },
                );

                const data = await response.json();

                if (data.success) {
                  setSuccess(true);

                  e.target.reset();

                  setTimeout(() => {
                    setSuccess(false);
                    setShowModal(false);
                  }, 2000);
                }

                setLoading(false);
              }}
            >
              <div>
                <label className="block mb-2 font-semibold text-[#0A1F44]">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 sm:p-4 text-base sm:text-lg focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-[#0A1F44]">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 sm:p-4 text-base sm:text-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#0A1F44]">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 sm:p-4 text-base sm:text-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-[#0A1F44]">
                  LinkedIn Profile URL
                </label>

                <input
                  type="text"
                  name="linkedin"
                  placeholder="Paste LinkedIn profile link"
                  className="w-full border border-gray-300 rounded-xl p-3 sm:p-4 text-base sm:text-lg focus:outline-none"
                />
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-5 sm:p-8 text-center hover:border-yellow-400 transition-all duration-300">
                <p className="text-lg font-semibold text-[#0A1F44]">
                  Upload Resume
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  PDF or DOC files only
                </p>

                <label
                  htmlFor="resumeUpload"
                  className="inline-block mt-5 bg-[#0A1F44] text-yellow-400 px-6 py-3 rounded-xl cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Choose Resume
                </label>

                <input
                  id="resumeUpload"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files[0];

                    console.log(file);

                    if (!file) return;

                    setUploading(true);

                    const data = new FormData();

                    data.append("file", file);

                    data.append("upload_preset", "welyft_resume");
                    data.append("resource_type", "auto");

                    try {
                      const res = await axios.post(
                        "https://api.cloudinary.com/v1_1/dd48joo4o/raw/upload",
                        data,
                      );

                      console.log(res.data);

                      setResumeUrl(res.data.secure_url);
                      setUploadSuccess(true);
                    } catch (error) {
                      console.log(error);

                      setUploadSuccess(false);
                    }

                    setUploading(false);
                  }}
                />
                {uploading && (
                  <p className="text-blue-600 mt-3 font-medium">
                    Uploading Resume...
                  </p>
                )}

                {uploadSuccess && (
                  <p className="text-green-600 mt-3 font-medium">
                    Resume Uploaded Successfully ✓
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || uploading || !resumeUrl}
                className="
    w-full
    bg-[#0A1F44]
    text-yellow-400
    py-4
    rounded-2xl
    font-semibold
    hover:bg-yellow-400
    hover:text-black
    transition-all
    duration-300
    disabled:opacity-70
  "
              >
                {uploading
                  ? "Uploading Resume..."
                  : loading
                    ? "Submitting..."
                    : success
                      ? "Application Submitted ✓"
                      : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CareersSection;
