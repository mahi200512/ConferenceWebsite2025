import { useState, useEffect } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import "../../App.css"; // Ensure this is correctly linked or use Committee.css if separate
const bannerImages = [
  '/images/IIITNRRR.png',
  '/images/IIITNRTTopView.png',
  '/images/IIITNRFrontDroneView.png',
  '/images/IIITNRNightImage.jpeg'
];
const Committee = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % bannerImages.length);
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="committee-container">
        <div
        className="mainTitle-banner-section"
        style={{
          backgroundImage: `url(${bannerImages[currentImage]})`
        }}
      >
      
<div className="logo-left">
  <Link to="/">
    <img src="/images/IIITNRlogo.png" alt="Logo1" className="logo" />
  </Link>
</div>

<div className="logo-right">
  <Link to="/">
    <img src="/images/ICISS logo.png" alt="Logo2" className="logo" />
  </Link>
</div>
        <h1 className="mainTitle-banner-title">
        Second International Conference on Intelligent Systems and Security
         <h1 className="mainTitle-banner-title">(ICISS 2026)</h1>
        </h1>
        
      </div>
      <div className="scrolling-strip">
        <ul className="scrolling-list">
        <li><a href="/Schedule">📅 Conference Date: 14-16 January, 2026</a></li>
        <li><a href="/Schedule">📅 Deadline:14th August, 2025</a></li>
        <li><a href="https://link.springer.com/book/9789819642724">Proceeding of ICISS 2024</a></li> 
        <li><a href="/Schedule">📅 Conference Schedule</a></li>
          <li><a href="/news">📰 Latest News</a></li>
          <li><a href="/venue">📍 Venue Details</a></li>
          <li><a href="/footer">📍 Quick Link</a></li> 
        </ul>
      </div>
      
      
      <h2 className="committee-heading"> Committee</h2>
      <div className='Committees'>
      
        <div className='com1'><h3>Chief-Patron</h3><p>Prof. Om Prakash Vyas, Director, IIIT-Naya Raipur, India</p>
        <h3>Patron(s)</h3><p>Dr. Srinivasa K.G. IIIT Naya Raipur, India</p>
        <p>Dr. Mithilesh K. Choube, IIIT Naya Raipur, India</p>
        
        <h3>General Chair</h3>
        <p>Satyanarayana Vollala, IIIT Naya Raipur, India</p>
        <p>Santosh Kumar, IIIT Naya Raipur, India</p>
        <p>Arup Kumar Pal, IIT(ISM) Dhanbad, India</p>

       
        <h3>Program Chair(s)</h3>
<p><a href="https://www.umu.se/en/staff/frank-dignum/" target="_blank" rel="noopener noreferrer">Frank Dignum</a>, Umea University, Umea, Sweden</p>
<p><a href="https://debasisgiri.in/" target="_blank" rel="noopener noreferrer">Debasis Giri</a>, MAKAUT, WB, India</p>
<p><a href="https://nitsikkim.ac.in/cse/profile.php?sn=62" target="_blank" rel="noopener noreferrer">Sangram Ray</a>, NIT Sikkim, India</p>
 <p><a href="https://fac.iitg.ac.in/ranbir/" target="_blank" rel="noopener noreferrer">Sanasam Ranbir Singh</a>, IIT Guwahati, India</p>
        
        

        <h3>Publication  Chair</h3>
<p><a href="https://www.iiests.ac.in/IIEST/Faculty/it-shyamalenduk" target="_blank" rel="noopener noreferrer">Shyamalendu Kandar</a>, IIEST Shibpur, India</p>


        <h3>Organizing Chair</h3>
        <p>Ruhul Amin, IIIT Naya Raipur, India</p>
        <h3>Organizing Secretary</h3>
        <p>Vinay Kumar, IIIT Naya Raipur, india</p>
        
        <h3>Publicity Chair</h3>
        <p>Mayukh Sarkar, NIT Jamshedpur, India</p>
        <p>Goutham Alavalapati,  University of Illinois, India</p>
        <p>Debasis Das, IIT Jodhpur, India</p>
        <p>Karan Singh, JNU, India</p>
        <p>Arijit Karati, NSYU, Taiwan</p>
       
       
        <h3>Sponsorship Committee</h3>
        <p>Ruhul Amin, IIIT Naya Raipur, India</p>
        
        <h3>Website Management Committee</h3>
        <p>Abir Bhattacharya, IIIT Naya Raipur, India</p>
        <p>Parvinder Singh, IIIT Naya Raipur, India</p>
        <p>Thakur Mahima Nuruti, IIIT Naya Raipur, India</p>
        <p>Anshumaan Karna, IIIT Naya Raipur, India</p>
        
        <h3>Local Organizing Committee</h3>
        <p>Punya P. Paltani, IIIT Naya Raipur, India</p>
<p>Shrivishal Tripathi, IIIT Naya Raipur, India</p>
<p>Sresha Yadav, IIIT Naya Raipur, India</p>
<p>Manoj Kumar Majumder, IIIT Naya Raipur, india</p>
<p>Maifuz Ali, IIIT Naya Raipur, India</p>
<p>Amit Kumar Agrawal, IIIT Naya Raipur, India</p>
<p>Anurag Singh, IIIT Naya Raipur, India</p>
<p>Ramakrishna Bandi, IIIT Naya Raipur</p>
<p>Vijaya J, IIIT Naya Raipur, India</p>
<p>Lakhindar Murmu, IIIT Naya Raipur, India</p>
<p>Deepika Gupta, IIIT Naya Raipur, India</p>
<p>Avantika Singh, IIIT Naya Raipur, India</p>
<p>Abhishek Sharma, IIIT Naya Raipur, India</p>
<p>Shailesh Khapre, IIIT Naya Raipur, India</p>
<p>Bipin Chandra Mandi, IIIT Naya Raipur, India</p>

        </div><div className='com1'><h3>Technical Program Committee</h3>
        <p>Abhisekh Das, Alia University, India</p>
<p>Alekha Kumar Mishra, NIT Jamshedpur, India</p>
<p>Alavalapati Goutham Reddy, University of Illinois, USA</p>
<p>Alawi A. Al-saggaf, KFUPM, Saudi Arabia</p>
<p>Arijit Karati, National Sun Yat-sen University, Taiwan</p>
<p>Arup Kumar Pal, IIT(ISM) Dhanbad, India</p>
<p>Ashok Kumar Das, IIIT Hayderabad, India</p>
<p>Ashok Kumar Pradhan, SRM-AP, India</p>
<p>Bimal Kumar Meher, Silicon University, India</p>
<p>Cheng-Chi Lee, Fu Jen Catholic University, Taiwan</p>
<p>Chien-Ming Chen, Shandong University of Science and Technology, China</p>
<p>Chun-Ta Li, Fu Jen Catholic University, Taiwan</p>
<p>Debanjan Das, IIT Kharagpur, India</p>
<p>Debasis Giri, MAKAUT, WB, India</p>
<p>Debiao He, Wuhan University, China</p>
<p>Dhreendra Mishra, MANIT Bhopal, India</p>
<p>Fagen Li, University of Electronic Science and Technology of China, China</p>
<p>Francesco Betti Sorbelli, University of Perugia, Italy</p>
<p>Frank Dignum, Umea University, Umea, Sweden</p>
<p>Gopa Bhaumik, NIT Jamshedpur, India</p>
<p>Khan Wahid, University of Saskatchewan, Canada</p>
<p>Kinsuk Giri, NITTTR Kolkata, India</p>
<p>Md Azharuddin, Alia University, India</p>
<p>M. Brindha, NIT Trichy, India</p>
<p>Mohammed H. Alsharif, Sejong University, South Korea</p>
<p>Mohammad Abdussami, SRM University, India</p>
<p>Mohammad Shariq, United Arab Emirates University, UAE</p>
<p>Mohd Shameem, KFUPM, Saudi Arabia</p>
<p>Mou Dasgupta, NIT Raipur, India</p>
<p>Muhammad Naveed Aman, University of Nebraska-Lincoln, USA</p>
<p>Naeem Ahmad, NIT Raipur, India</p>
<p>Neetesh Saxena, Georgia Institute of Technology, Atlanta, USA</p>
<p>Neha Agrawal, IIIT Sri City, India</p>
<p>Nitin Gupta, NIT Hamirpur, India</p>
<p>Odelu Vanga, IIIT Chittoor, India</p>
<p>Ponnuru Raveendra Babu, Virginia Military Institute & Virginia Tech, USA</p>
<p>Preeti Chandrakar, NIT Raipur, India</p>
<p>Prasanto Gope, University of Sheffield, UK</p>
<p>Rifaqat Ali, NIT Hamirpur, India</p>
<p>Rohit Kumar, Shiv Nadar University, India</p>
<p>Ruhul Amin, IIIT Naya Raipur, India</p>
<p>Saiyed Umer, Alia University, India</p>
<p>Sakurai Kouichi, Kyushu University, Fukuoka, Japan</p>
<p>Sanasam Ranbir Singh, IIT Guwahati, India</p>
<p>Sanjeev Kumar Dwivedi, MITS Gwalior, India</p>
<p>Sangram Ray, NIT Sikkim, India</p>
<p>Satyaki Roy, University of Alabama in Huntsville, USA</p>
<p>Sedat Akleylek, Istinye University, İstanbul, Turkey</p>
<p>Shehzad Ashraf Chaudhry, Abu Dhabi University</p>
<p>Shameek Bhattacharjee, Western Michigan University, Kalamazoo, USA</p>
<p>Sherali Zeadally, University of Kentucky, USA</p>
<p>Shyamalendu Kandar, IIEST Shibpur, India</p>
<p>SK Haifzul Islam, IIIT Kalyani, India</p>
<p>Subrata Dutta, NIT Jamshedpur, India</p>
<p>Sukhpal Singh Gill, Queen Mary University of Lond</p>





       
        <h3>Advisory Committee</h3>
<p><a href="http://www.buyya.com/" target="_blank" rel="noopener noreferrer">Rajkumar Buyya</a>, University of Melbourne, Australia</p>
 <p><a href="https://piuri.di.unimi.it/index.php?pageid=home" target="_blank" rel="noopener noreferrer">Vincenzo Puri</a>, University of Milan, Italy</p>       
<p><a href="https://see.knu.ac.kr/mobile/english/content/profile_eng.html?id=174" target="_blank" rel="noopener noreferrer">Youngho Park</a>, Kyungpook National University, Daegu, South Korea.</p>
<p><a href="https://www.theobaidat.com/" target="_blank" rel="noopener noreferrer">Mohammad S. Obaidat</a>, University of Jordan, Amman, Jordan</p>

<p><a href="https://www.iitg.ac.in/sukumar/" target="_blank" rel="noopener noreferrer">Sukumar Nandi</a>, IIT Guwahati, India</p>

<p><a href="https://www.iiitnr.ac.in/content/rajarshi-mahapatra" target="_blank" rel="noopener noreferrer">Rajarshi Mahapatra</a>, IIIT Naya Raipur, India</p>

<p><a href="https://faculty.ksu.edu.sa/en/mkhurram" target="_blank" rel="noopener noreferrer">Muhammad Khurram Khan</a>, King Saud University, Saudi Arabia</p>

<p><a href="https://www.nitjsr.ac.in/people/profile/CA104" target="_blank" rel="noopener noreferrer">D.A. Khan</a>, NIT Jamshedpur, India</p>

<p><a href="https://www.utsa.edu/endowed/profiles/cloud-technology-iii.html" target="_blank" rel="noopener noreferrer">Kim-Kwang Raymond Choo</a>, University of Texas, USA</p>

<p><a href="https://jszy.whu.edu.cn/hedebiao/en/index.htm" target="_blank" rel="noopener noreferrer">Debiao He</a>, Wuhan University, China</p>

<p><a href="https://sites.google.com/view/iitkgpakdas/" target="_blank" rel="noopener noreferrer">Ashok Kumar Das</a>, IIIT Hyderabad, India</p>
<p><a href="https://people.iitism.ac.in/~chiranjeev/" target="_blank" rel="noopener noreferrer">Chiranjeev Kumar</a>, IIT(ISM) Dhanbad, India</p>

<p><a href="https://www.iitbhilai.ac.in/index.php?pid=santosh" target="_blank" rel="noopener noreferrer">Santosh Biswas</a>, IIT Bhilai, India</p>

   

        
        </div>
      </div>
    </div>
  );
};

export default Committee;
