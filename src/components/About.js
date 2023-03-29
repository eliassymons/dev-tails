function About() {
  return (
    <div
      id="about"
      className="flex flex-col  bg-opacity-100  py-24 bg-[#01161E] space-y-6 bg-[url('./about-bg.jpg')] bg-blend-overlay bg-cover text-[#eff6e0] "
    >
      <h2 className="text-3xl font-extrabold md:text-4xl ">About</h2>
      <div className="max-w-md space-y-4 px-4 lg:max-w-xl  mx-auto">
        <p>
          Developing writers can often benefit from examining an essay, a
          paragraph, or even a sentence to determine what makes it effective. On
          the following pages are several paragraphs for you to evaluate on your
          own, along with the Writing Center's explanation.
        </p>
        <p>
          Note: These <strong>passages</strong> are excerpted from actual
          student papers and retain the original wording. Some of the sentences
          are imperfect, but we have chosen these passages to highlight areas in
          which the author was successful.
        </p>
        <p>
          Thanks to the students who provided their writing for this page of our
          website. Do you have a discussion post, paper, or other writing
          assignment that you are particularly proud of? We would love to use it
          as a sample. Contact us at writingsupport@mail.waldenu.edu if you
          would like to share.
        </p>
      </div>
    </div>
  );
}

export default About;
