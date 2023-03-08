import { Link } from "react-router-dom";
import { PAGE_NAMES } from "router/paths";

const ErrorPage = () => {
    return (
        <>
            <h1> 404 page not found </h1>
            <Link to={PAGE_NAMES.homepage}> Go to home  </Link>
        </>
    )
}

export default ErrorPage;