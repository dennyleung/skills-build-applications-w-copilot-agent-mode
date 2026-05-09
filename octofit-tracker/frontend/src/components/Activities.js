import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        setLoading(false);
        console.log('Fetched activities:', results);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching activities:', err);
      });
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="card">
      <div className="card-header"><h2 className="h4">Activities</h2></div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{activity.id}</td>
                <td>{activity.name}</td>
                <td>{activity.date}</td>
                <td>{activity.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
