import { useRouter } from "next/router";

export default function ClientProjects() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data...

    // router.replace("/clients/max/projecta");
    // router.push("/clients/max/projecta");

    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>ClientProjects Page</h1>
      <h2>The Projects of a Given Client</h2>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
