import React from 'react';
import GridItem from './GridItem';

function GridView(props) {
    return (
        <div className="grid-view">
            {props.characters.map(c => <GridItem key={c._id} name={c.name} race={c.race} gender={c.gender} spouse={c.spouse} dialog={c.dialog} wikiUrl={c.wikiUrl} />)}
        </div> 
    ); 
} 

export default GridView;