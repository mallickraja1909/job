import Card from "./Card"
import Data from '../data';
import {useState} from 'react';



export default function Jobs() {

    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm);

    return ( 
        <>
       
        <input id="search" type="text" placeholder="search job..." onChange={event => setSearchTerm(event.target.value)}/>
    
        {Data.filter((job) => {
            if(job.position.toLowerCase() === "") return job;
            else if(job.position.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return job;
            else if(job.position.toLowerCase().includes(searchTerm.toLocaleLowerCase()))return 'ooops....job not found'
        }).map((job, index) => {
            return (
             <Card key={index} item={job} />
            )
        })}

        </>
        
     );

    
}
