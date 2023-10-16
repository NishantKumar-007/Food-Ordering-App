import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops , You have reached an unknown destination.</h1>
      <p>
        {err.status} : {err.statusText}
      </p>
    </div>
  );
};
export default Error;
