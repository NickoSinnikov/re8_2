import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Error() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  return (
    <div className="Error">
      <div className="Result">
        {loading && 'Loading...'}
        {error && <span>Error</span>}
      </div>
    </div>
  );
}
