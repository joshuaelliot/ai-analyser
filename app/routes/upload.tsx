import { useState } from "react"
import Navbar from "~/components/Navbar"

export default function upload() {
  const [isProcesing, setIsProcesing] = useState(true);
  const [statusText, setStatusText] = useState('');
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1> Smart feedback for your dream job</h1>
          {isProcesing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" alt="" />
            </>
          ) : (
            <h2>Drop your resume for an ATS sore and improvement</h2>
          )}
        </div>
      </section>
    </main>
  )
}
