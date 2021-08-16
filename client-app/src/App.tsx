import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities')
    .then(res=>{
      setActivities(res.data);
    })
  },[]);

  return (
    <div>
      <Header as="h2"  icon='user' content='Reactivities' />
      <List>
       {activities.map((act:any)=> (
         <List.Item key={act.id}>{act.title}</List.Item>
       ))}
       </List>
    </div>
  );
}

export default App;
