import { json } from "stream/consumers";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "AI Aplication" },
    { name: "description", content: "Welcome to AI App" },
  ];
}

export default function Home() {
  return <main className={"bg-[url('images/bg-main.svg')] bg-cover"}>
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Welcome to AI Aplication </h1>
        <h2>Start your app here , not wait more </h2>
      </div>
      {
      resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard resume={resume} />
          ))}
        </div>
      )
    }
    </section>
    
  </main>;
}


export function Vista() {
  return (
    <div>home</div>
  )
}
