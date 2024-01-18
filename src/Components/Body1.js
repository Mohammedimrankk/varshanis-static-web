import React from 'react'
import "./body1.css"

const Body1=()=>{
    return (
        <div>
      {details.map((det)=>(
        <div className='body1'>
            <div className='divImageProduct'><img className='imageProduct' src={det.image}/></div>
            <div className='divDataProduct'>
                <tr className='data'>
                    <td>Name : </td>
                    <td>{det.name}</td>
                </tr>
                <tr className='data'>
                    <td>Price : </td>
                    <td>{det.Price}</td>
                </tr>
                <tr className='data'>
                    <td>Produced By : </td>
                    <td>{det.Produced_By}</td>
                </tr>
            </div>
        </div>
            
            
      ))}
        </div>
    );
}
export default Body1
const details=[
   {
    image:'./Assets/1.jpeg',
    name:'Gol Gappa Puri',
    Price:"Rs.5/-",
    Produced_By :"Varshanis Sms Namkeen"
   },
   {
    image:'./Assets/2.jpeg',
    name:'Jeera Papad',
    Price:"Rs.5/-",
    Produced_By :"Varshanis Sms Namkeen"
   },
   {
    image:'./Assets/3.jpeg',
    name:'Chawmin',
    Price:"Rs.5/-",
    Produced_By :"Varshanis Sms Namkeen"
   },
   {
    image:'./Assets/4.jpeg',
    name:'Lucky Pack',
    Price:"Rs.5/-",
    Produced_By :"Varshanis Sms Namkeen"
   },
   {
    image:'./Assets/5.jpeg',
    name:'Masala Sev Puri',
    Price:"Rs.5/-",
    Produced_By :"Varshanis Sms Namkeen"
   },
   {
    image:'./Assets/6.jpeg',
    name:'Besand pappdi',
    Price:"Rs.5/-",
    Produced_By :"Varshanis Sms Namkeen"
   },
   {
    image:'./Assets/7.jpeg',
    name:'Candy Party',
    Price:"Rs.5/-",
    Produced_By :"Varshanis Sms Namkeen"
   },
   {
    image:'./Assets/8.jpeg',
    name:'Beauty Box',
    Price:"Rs.5/-",
    Produced_By :"Varshanis Sms Namkeen"
   }    
]
