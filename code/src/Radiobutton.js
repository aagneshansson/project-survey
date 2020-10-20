import React, { useState } from 'react'

const ageGroups = ["0-18", "19-30", "30+"];

export const Radiobutton = (props) => {
    const [ageGroup, setAgeGroup] = useState();

    return (
       <form>
           Age groups:
           {ageGroups.map(group => (
               <label key={group}>
                   <input 
                   type="radio"
                   value={group}
                   onChange={event => setAgeGroup(event.target.value)}
                   checked={ageGroup === group}
                   />
                   {group}
               </label>
           ))}
           </form>
    )
}
               
        