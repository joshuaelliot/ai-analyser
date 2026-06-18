import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Aplication" },
    { name: "description", content: "Welcome to AI App" },
  ];
}

export default function Home() {
  return <main className="bg-[url('images/bg-main.svg')] bg-cover">
<h1>Welcome to AI Aplication </h1>
<section>
  <h2>Start your app here , not wait more </h2>
</section>
  </main>;
}
