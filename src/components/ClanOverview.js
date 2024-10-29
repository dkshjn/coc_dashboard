// src/components/ClanOverview.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClanOverview = () => {
  const [clanInfo, setClanInfo] = useState(null);

  useEffect(() => {
    const fetchClanInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.clashofclans.com/v1/clans/%232LG08L82Q`, // replace YOURCLANTAG with actual tag, URL encoded
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_COC_API_KEY}`,
            },
          }
        );
        setClanInfo(response.data);
      } catch (error) {
        console.error('Error fetching clan info:', error);
      }
    };
    fetchClanInfo();
  }, []);

  return (
    <div className="card">
      <h2>Clan Overview</h2>
      {clanInfo ? (
        <div>
          <p><strong>Name:</strong> {clanInfo.name}</p>
          <p><strong>Level:</strong> {clanInfo.clanLevel}</p>
          <p><strong>Members:</strong> {clanInfo.members}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ClanOverview;
