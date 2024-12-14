function Education() {
  const educationData = [
    {
      institution: "Viamoda University in Warsaw",
      degree: "Bachelor in Food Design",
      year: "2015 - 2018",
    },
    {
      institution: "University of Life Science in Warsaw",
      degree: "Bachelor in Nutrition ",
      year: "2016 - 2020",
    },
    {
      institution: "Noroff School of Technology and Digital Media in Oslo  ",
      degree: "Diploma in Frontend Development",
      year: "2022 - 2024",
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent text-center p-8">
      <h1 className="text-4xl font-thin mb-8">Education</h1>
      <div>
        {educationData.map((item, index) => (
          <div key={index} className="text-lg my-10">
            <h2 className="font-semibold my-2">{item.institution}</h2>
            <p className="text-sm my-2">{item.degree}</p>
            <p className="text-light">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
