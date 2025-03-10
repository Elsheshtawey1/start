import React from "react";

function ContactPage() {
  return (
    <section className="py-12 px-25 max-[700px]:px-2  mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl text[var(--secondary-color)] font-bold">Contact Us</h2>
        <p className="text-lg text-[var(--opacity-color2)] mt-2">Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <form className="space-y-4">
            <div>
              <label className="block text-[var(--opacity-color2)] font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:text-[var(--main-color)] focus:outline-none transition"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-[var(--opacity-color2)] font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:text-[var(--main-color)] focus:outline-none transition"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-[var(--opacity-color2)]font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:text-[var(--main-color)] focus:outline-none transition"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className="bg-[var(--secondary-color)] w-35 items-center mx-auto flex justify-center text-[var(--secondary2-color)] rounded-md py-3 px-4 my-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm max-[700px]:mx-auto max-[800px]:mx-auto max-[800px]:mb-2 ">
              Submit
            </button>
          </form>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 select-none">
          <iframe
            title="Google Maps"
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531531592!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df7f63f7d%3A0xa1b79c7aaf1fdf3!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632356601235!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
