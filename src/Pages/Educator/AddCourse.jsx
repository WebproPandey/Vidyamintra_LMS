import React, { useState } from "react";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    heading: "",
    price: "",
    video: null,
    thumbnail: null,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Data Submitted:", formData);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Course Title */}
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />

        {/* Course Description */}
        <textarea
          name="description"
          placeholder="Course Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded-md h-20"
          required
        ></textarea>

        {/* Course Heading */}
        <input
          type="text"
          name="heading"
          placeholder="Course Heading"
          value={formData.heading}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />

        {/* Course Price */}
        <input
          type="number"
          name="price"
          placeholder="Course Price ($)"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded-md"
          required
        />

        {/* Upload Course Video */}
        <label className="block">
          <span className="text-gray-700">Upload Course Video</span>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
            className="block w-full mt-1"
            required
          />
        </label>

        {/* Upload Thumbnail */}
        <label className="block">
          <span className="text-gray-700">Upload Thumbnail</span>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full mt-1"
            required
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
