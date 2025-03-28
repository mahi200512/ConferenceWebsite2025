import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Upcoming Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image5.png'
              text='Hands-on technical sessions like Capture the Flag, hackathons, and workshops where participants solve cybersecurity challenges or create innovative solutions.'
              label='technology'
              path='/tech'
            />
            <CardItem
              src='images/image2.png'
              text='Engaging activities such as panel discussions, debates, and group talks on trending cybersecurity topics to foster learning and networking.'
              label='Interactive Sessions'
              path='/sessions'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.png'
              text='Specialized sessions like Ethical Hacking, Digital Forensics, or IoT Security, offering practical training and real-world applications.'
              label='Workshops'
              path='/workshops'
            />
            <CardItem
              src='images/image4.png'
              text='Fun and awareness-driven events such as poster design, short film contests, or infographic-making focused on cybersecurity themes.'
              label='Creative Competitions'
              path='/Competition'
            />
            <CardItem
              src='images/image3.png'
              text='Informal meetups, trivia nights, and cybersecurity-themed escape rooms to relax and build connections among participants.'
              label='Networking and Fun Activities'
              path='/Networking'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
