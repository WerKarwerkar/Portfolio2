function Contact() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent text-center">
      <h1 className="text-4xl font-thin mb-6">Say Hello!</h1>
      <p className="mb-8 text-lg">
        Feel free to reach out to me via email:
        <a
          href="mailto:weronikakarczmarczyk@example.com"
          className="text-light hover:underline underline-offset-8 ml-2"
        >
          weronika.k.karczmarczyk@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
