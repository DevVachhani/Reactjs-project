import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "an error has occurred";
  let message = "something went wrong";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if ((error.status = 404)) {
    title = "not found";
    message = "could not find resource page";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
