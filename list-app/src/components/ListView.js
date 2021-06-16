import React from 'react';
import ListItem from './ListItem';

function ListView(props) {
  return (
    <ul className="pb-4 list-group list-view">
      {props.characters.map(c => <ListItem key={c._id} name={c.name} race={c.race} gender={c.gender} spouse={c.spouse} dialog={c.dialog} wikiUrl={c.wikiUrl} />)}
    </ul> 
  ); 
} 

export default ListView;