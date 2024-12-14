function Opinions() {
  const opinions = [
    {
      name: "Alex Skoglund",
      relation: "costudent at Noroff",
      feedback: "Weronika is a hard-working champ and a great team-player!",
    },
    {
      name: "Iveta Ivaylova",
      relation: "coworker at Bonita and Sommerro",
      feedback:
        "Weronika is very detail oriented and applies high analytical skills in absolutely everything she does. She is hardworking and knowledgeable and fun to work with.",
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent p-8">
      <h1 className="text-4xl font-thin mb-8">Opinions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {opinions.map((opinion, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded text-primary text-center"
          >
            <h2 className="text-lg font-semibold">{opinion.name}</h2>
            <p className="mt-2 text-light text-sm">{opinion.relation}</p>{" "}
            <p className="mt-4 text-primary">{opinion.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opinions;
