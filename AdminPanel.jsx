import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/leaderboard').then(response => setLeaderboard(response.data));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={index}>{user.name}: {user.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
