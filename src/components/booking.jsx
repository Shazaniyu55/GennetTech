import React, { useState } from "react";
import Layout from "./layout";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Solar Installation",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Solar Installation",
      date: "",
      message: "",
    });
  };

  return (
    <Layout showNavbar={true} showFooter={true}>
    <section className="bg-gradient-to-b from-[#F4F6F8] to-white py-28 px-6 md:px-16 mt-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#1E4E79] transition-transform transform hover:scale-105 duration-500">
          Book a <span className="text-[#F57C00]">Service</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg transition-opacity duration-700 opacity-90 hover:opacity-100">
          Schedule your solar or CCTV installation with our expert team. 
          Smooth, professional, and reliable service every time.
        </p>
        <div className="w-24 h-1 bg-[#F57C00] mx-auto mt-6 rounded-full transition-all duration-700 ease-in-out hover:w-32"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Floating Labels */}
          {["name", "email", "phone"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F57C00] placeholder-transparent transition duration-300"
              />
              <label className="absolute left-4 top-4 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#F57C00] peer-focus:text-sm transition-all duration-300">
                {field === "name" ? "Full Name" : field === "email" ? "Email Address" : "Phone Number"}
              </label>
            </div>
          ))}

          {/* Service Select */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F57C00] transition duration-300"
          >
            <option>Solar Installation</option>
            <option>CCTV Installation</option>
            <option>Both Services</option>
          </select>

          {/* Date Picker */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F57C00] transition duration-300"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F57C00] transition duration-300"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F57C00] to-[#FF9800] hover:from-[#E65100] hover:to-[#F57C00] text-white py-4 rounded-xl font-semibold shadow-lg transform transition duration-500 hover:scale-105"
          >
            Book Now
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-xl text-center transition-opacity duration-500 animate-fadeIn">
            Booking request submitted! Our team will contact you soon.
          </div>
        )}
      </div>
    </section>
    </Layout>
  );
};

export default BookingSection;