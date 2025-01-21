import { Button } from 'react-bootstrap';

export const MainErrorFallback = () => {
  return (
    <div
      className="d-flex vh-100 vw-100 flex-column align-items-center justify-content-center text-danger"
      role="alert"
    >
      <h2 className="fs-1 fw-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};