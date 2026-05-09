import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        setLoading(false);
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching leaderboard:', err);
      });
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="card">
      <div className="card-header"><h2 className="h4">Leaderboard</h2></div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={leader.id || idx}>
                <td>{idx + 1}</td>
                <td>{leader.user}</td>
                <td>{leader.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
