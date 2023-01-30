import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Loading() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

  return (
    <div className="Loading">
      Loading result:
      <div className="Result">
        {loading && 'Loading...'}
        {data && data.status}
      </div>
    </div>
  );
}
