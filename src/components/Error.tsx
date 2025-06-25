import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div>Something went wrong</div>
      {isRouteErrorResponse(err) ? (
        <div>
          <div>
            {err.status}: {err.statusText}
          </div>
        </div>
      ) : (
        <div>{(err as Error).message}</div>
      )}
    </>
  );
};

export default Error;
