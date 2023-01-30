import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function Data() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  return (
    <div className="Data">
      <div className="Result">
        {loading && 'Loading...'}
        {data.status}
      </div>
    </div>
  );
}
