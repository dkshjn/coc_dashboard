// src/components/MemberList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
console.log("API Key:", process.env.REACT_APP_COC_API_KEY);

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `https://api.clashofclans.com/v1/clans/%232LG08L82Q/members`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_COC_API_KEY}`,
            },
          }
        );
        
        setMembers(response.data.items);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="card">
      <h2>Member List</h2>
      {members.length > 0 ? (
        <ul>
          {members.map((member) => (
            <li key={member.tag} style={{ marginBottom: '20px' }}>
              <strong>Name:</strong> {member.name} <br />
              <strong>Role:</strong> {member.role} <br />
              <strong>Town Hall Level:</strong> {member.townHallLevel} <br />
              <strong>Experience Level:</strong> {member.expLevel} <br />
              <strong>Trophies:</strong> {member.trophies} <br />
              <strong>Builder Base Trophies:</strong> {member.builderBaseTrophies} <br />
              <strong>Clan Rank:</strong> {member.clanRank} <br />
              <strong>Previous Clan Rank:</strong> {member.previousClanRank} <br />
              <strong>Donations:</strong> {member.donations} <br />
              <strong>Donations Received:</strong> {member.donationsReceived} <br />
              <strong>League:</strong> {member.league ? (
                <>
                  {member.league.name}
                  <img 
                    src={member.league.iconUrls.small} 
                    alt={`${member.league.name} icon`} 
                    style={{ width: '20px', marginLeft: '5px' }}
                  />
                </>
              ) : 'No League'} <br />
              <strong>Builder Base League:</strong> {member.builderBaseLeague ? (
                member.builderBaseLeague.name
              ) : 'No Builder Base League'} <br />
              
              {member.playerHouse && (
                <>
                  <strong>Player House Elements:</strong>
                  <ul>
                    {member.playerHouse.elements.map((element, index) => (
                      <li key={index}>
                        Type: {element.type}, ID: {element.id}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No members found.</p>
      )}
    </div>
  );
};

export default MemberList;
