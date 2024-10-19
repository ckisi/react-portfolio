import Card from "../components/UI/Card";

const projects = [
  {
    id: 1,
    title: "Film Fetcher",
    link: "https://ckisi.github.io/film-fetcher/",
    image: "",
  },
  {
    id: 2,
    title: "CookMate",
    link: "https://cookmate-755p.onrender.com",
    image: "",
  },
  {
    id: 3,
    title: "Tech Blog",
    link: "",
    image: "src/assets/filmfetcherSS.png",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    link: "https://ckisi.github.io/weather-dashboard/",
    image: "weatherdashboardSS.png",
  },
  { id: 5, title: "Task Board", link: "", image: "" },
  { id: 6, title: "Note Taker", link: "", image: "" },
];

export default function PortfolioPage() {
  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project.id}>
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
