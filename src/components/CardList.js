import React from 'react';
import Card from './Card';
import 'tachyons';
// const CardList = (props) => {
//   return (
//     <div>
//       <Card id={props.robots[0].id}  name={props.robots[0].name} email={props.robots[0].email} />
//       <Card id={props.robots[1].id}  name={props.robots[1].name} email={props.robots[1].email} />
//       <Card id={props.robots[2].id}  name={props.robots[2].name} email={props.robots[2].email} />
//     </div>
//   );
// }


// const CardList = ({ robots }) => {
//   return (
//     <div>
//       <Card id={robots[0].id}  name={robots[0].name} email={robots[0].email} />
//       <Card id={robots[1].id}  name={robots[1].name} email={robots[1].email} />
//       <Card id={robots[2].id}  name={robots[2].name} email={robots[2].email} />
//     </div>
//   );
// }


// const CardList = ({ robots }) => {
//   const cardComponent = robots.map((user, index) => {
//     return <Card key= {index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/> 
//   });
//   return (
//     <div>
//       {cardComponent} 
//     </div>
//   );
// }


const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, index) => {
        return (
          <Card 
            key= {index} 
            id={robots[index].id} 
            name={robots[index].name} 
            email={robots[index].email}
            /> 
          )
        })
      }
    </div>
  );
}

export default CardList
