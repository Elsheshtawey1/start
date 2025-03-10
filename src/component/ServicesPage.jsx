import React from "react";

function Services() {
  const plans = [
    {
      name: "Basic",
      price: "$100",
      features: ["Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit"],
    },
    {
      name: "Plus",
      price: "$250",
      features: ["Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit"],
    },
    {
      name: "Pro",
      price: "$400",
      features: ["Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit"],
    },
  ];

  return (
    <section className="py-12 px-5  mx-auto">
      <div className="text-center mb-10">
        <p className="text-[var(--main-color)] font-semibold uppercase tracking-widest mb-5">Plans</p>
        <h2 className="text-5xl font-bold">Our Services</h2>
        <p className="text-[var(--opacity-color2)] mt-2">Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
      </div>

      <div className="grid gap-6 max-w-6xl mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 text-center">
            <h3 className="text-[var(--opacity-color2)] font-medium">{plan.name}</h3>
            <p className="text-3xl font-bold my-2">
              {plan.price} <span className="text-[var(--opacity-color2)] text-sm">/month</span>
            </p>
            <p className="text-[var(--opacity-color2)] text-sm mb-4">Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>

            <ul className="text-left space-y-2 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[var(--main-color)]">✔</span> {feature}
                </li>
              ))}
            </ul>

            <button className="bg-[var(--secondary-color)] my-5 w-40 items-center text-[var(--secondary2-color)] rounded-md py-3 px-6 mt-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm mx-auto">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
