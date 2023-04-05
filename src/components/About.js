function About() {
  return (
    <div
      id="about"
      className="flex flex-col  bg-opacity-100  py-24 bg-[#01161E] space-y-6 bg-[url('./about-bg.jpg')] bg-blend-overlay bg-cover text-[#eff6e0] "
    >
      <h2 className="text-3xl font-extrabold md:text-4xl ">About</h2>
      <div className="max-w-md space-y-4 px-4 lg:max-w-xl  mx-auto text-center lg:text-left ">
        <p>
          Here at DevTails, we pride ourselves on our attention to detail,
          passion for aesthetic and functional beauty, and clear and open
          communication. We believe that developing successful websites is all
          about understanding our clients' vision and how we can leverage our
          experience in tech to bring that vision to life.
        </p>
        <p>
          DevTails was founded in 2022 by our Lead Engineer, Elias. He noticed
          an interesting trend in the web development industry where only large
          companies with large budgets are able to create highly customized and
          brand-consistent websites. Smaller companies are forced to rely on CMS
          applications with prefabricated components. While CMS can be useful,
          we believe that giving smaller companies and individuals the freedom
          to customize their sites can make a huge difference in terms of
          audience engagement and web proliferation. We believe everyone
          deserves access to modern web tools and services.
        </p>
        <p>
          Working with DevTails means getting a professional product delivered
          with a personal touch. We take pride in delivering products that suit
          your brand, exceed your expectations, and engage your users.
        </p>
      </div>
    </div>
  );
}

export default About;
