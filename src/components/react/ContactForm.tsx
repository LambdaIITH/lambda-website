import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [popup, setPopup] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.PUBLIC_CONTACT_FORM_URL,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          maxRedirects: 5, // Optional; axios follows redirects by default
        },
      );

      if (response.data.status === "success") {
        setPopup({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setPopup({
          type: "error",
          message: "Error sending message. Try again later.",
        });
      }
    } catch (error) {
      setPopup({ type: "error", message: "Network error. Try again later." });
    }

    setTimeout(() => setPopup(null), 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-purple-100 dark:border-purple-900">
      <h2 className="text-2xl font-bold mb-6 text-violet-600 dark:text-violet-400">
        Send Us a Message
      </h2>
      {popup && (
        <div
          className={`mb-4 p-3 rounded-md text-white ${
            popup.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {popup.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
