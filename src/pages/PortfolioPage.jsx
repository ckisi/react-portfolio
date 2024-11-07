import Card from "../components/UI/Card";

const projects = [
  {
    id: 1,
    title: "Film Fetcher",
    link: "https://ckisi.github.io/film-fetcher/",
    image: "filmfetcherSS.png",
  },
  {
    id: 2,
    title: "CookMate",
    link: "https://cookmate-755p.onrender.com",
    image: "cookmateSS1.png",
  },
  {
    id: 3,
    title: "Tech Blog",
    link: "https://tech-blog-ncr7.onrender.com/",
    image: "techblogSS1.png",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    link: "https://ckisi.github.io/weather-dashboard/",
    image: "weatherdashboardSS.png",
  },
  {
    id: 5,
    title: "Task Board",
    link: "https://ckisi.github.io/task-board/",
    image: "taskboardSS.png",
  },
  {
    id: 6,
    title: "Note Taker",
    link: "https://note-taker-nfk9.onrender.com/",
    image: "notetakerss2.png",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container">
      <div className="row mt-4">
        {projects.map((project) => (
          <div className="col-md-4 col-sm-6 mb-4" key={project.id}>
            <Card
              title={project.title}
              link={project.link}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
