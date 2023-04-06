import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An erroe occured</h1>
        <p>could not find the page</p>
      </main>
    </>
  );
}

export default ErrorPage;
