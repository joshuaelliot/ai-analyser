import { useEffect } from "react";
import { usePuterStore } from "~/lib/puter";
import { useLocation,useNavigate } from "react-router";
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
  
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  console.log(navigate,"color: #8ab4f8;" );
  
  useEffect(()=>{
    if(auth.isAuthenticated){
      navigate('/auth?next=/');
    }

  },[auth.isAuthenticated])
  
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
