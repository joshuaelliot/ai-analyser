import { useEffect } from "react";
import { usePuterStore } from "~/lib/puter";
import { useLocation,useNavigate } from "react-router";
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
  
const isAuthenticated = usePuterStore((state) => state.auth.isAuthenticated);  
const isLoading = usePuterStore((state) => state.isLoading);
console.log('esto es auth : ');

  const navigate = useNavigate();
 
  
  useEffect(()=>{

    if(isLoading) return;
    console.log("%c esto es effet", "color: #8ab4f8;");
//           ↑ %c indica que el siguiente argumento es CS
    if(!isAuthenticated){
      navigate('/auth?next=/');
    }

  },[isAuthenticated,isLoading])
  
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
            <ResumeCard key={resume.id} resume={resume} />
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
