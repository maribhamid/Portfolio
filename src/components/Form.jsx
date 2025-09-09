import { useState } from "react";
import{motion} from "framer-motion"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const [errors , setErrors] = useState({})

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    setErrors({
      name: !formData.name ? "Name is required" : "",
      email: !formData.email ? "Email is required" : "",
      message: !formData.message ? "Message is required" : "",
    });
    return;
  }

  setErrors({});

  try {
    const response = await fetch("https://formspree.io/f/meolnglp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Try again!");
    }
  } catch (err) {
    console.error(err);
    alert("Error sending message.");
  }
};


  return (
    <div className="flex flex-wrap my-20 text-center gap-10 px-10 lg:flex-nowrap">
      <div>
        <motion.h1
        whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5, delay:0.5}}
        className="my-10 text-center text-4xl">Let’s Build Something Amazing Together</motion.h1>
        <motion.p
         whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5, delay:0.5}}>
         Great things often begin with a simple idea and a willingness to share it. Whether you’re thinking about a new web app, need a polished online presence, or just want to brainstorm possibilities, this is the place to start.

I believe that technology should not only solve problems but also inspire people. That’s why I focus on creating solutions that combine clean code, intuitive design, and real-world impact. Every line I write is guided by one goal: to transform ideas into digital experiences that feel effortless and meaningful.

This isn’t just about building websites or apps—it’s about crafting tools that bring value, spark creativity, and help your vision grow.

So go ahead—drop a message. Let’s exchange ideas, collaborate, and turn imagination into something real. Your next project could be just a click away, and I’d be excited to be part of its journey.
        </motion.p>
      </div>

        <div>
            <motion.h1
        whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5, delay:0.5}}
        className="my-10 text-center text-4xl">Contact Form</motion.h1>


      <motion.form 
       whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1.5, delay:0.5}}
      onSubmit={handleSubmit} className="flex flex-col w-90 lg:w-180 gap-4 text-center justify-center">

        

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-2xl bg-stone-300 text-black px-3 py-2"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="text-red-600">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-2xl bg-stone-300 text-black px-3 py-2"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="text-red-600">{errors.email}</p>}


        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          className="rounded-2xl bg-stone-300 text-black px-3 py-2"
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.message && <p className="text-red-600">{errors.message}</p>}

        <button type="submit" onClick={handleSubmit} className="inline-block rounded-full bg-stone-500 px-6 py-3 text-lg font-semibold text-black shadow-md hover:bg-stone-700">
          SUBMIT
        </button>
      </motion.form>
        </div>
    </div>
  );
};

export default Form;
