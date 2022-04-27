import React,{useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'


function TinderCards() {
    const  [people,setPeople] = useState([
       {
            name:'Elon Musk',
            url:'https://i.imgur.com/Yew6e7q.jpg'
        },
        {
            name:'jeff Bezos',
            url:'https://i.imgur.com/6kaBEOB.jpg'
        },
        {
            name:'billie eilish',
            url:'https://i.imgur.com/CjXe6zz.jpg'
        },
    ]);
    const  Swiped=(nameToDelete)=>{
        console.log("removing"+nameToDelete);
   
    };
    const outOfFrame=(name)=>{
        console.log(name+"left the screen")
    }
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer '>
             {people.map((person) => 
           ( 
            <TinderCard className='swipe'
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=>Swiped(person.name)}
            onCardLeftScreen={() =>outOfFrame(person.name)} 
            >
                <div style={{backgroundImage:"url("+person.url+")"}}
                className="card">
          <h3>{person.name}</h3>
                </div>

            </TinderCard>

           )
        )}</div>

       
        
    </div>
  )
}

export default TinderCards