import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : 'jaehyuk',
  'birthday' : '970708',
  'gender' : 'man',
  'job' : 'student'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : 'melody',
  'birthday' : '990201',
  'gender' : 'woman',
  'job' : 'student'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : 'redwolf',
  'birthday' : '930516',
  'gender' : 'man',
  'job' : 'student'
}
]
class App extends Component {
  render() {
    return (
      <div>
        { customers.map(c => {return( <Customer key={c.id} id={c.id} image={c.image}  name={c.name}  birthday={c.birthday}  gender={c.gender} job={c.job}/>);})}
      </div>
    );
  }
}


export default App;
