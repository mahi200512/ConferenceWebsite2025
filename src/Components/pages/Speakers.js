import React from "react";
import "../../App.css"; // Ensure CSS file is correctly linked

const speakers = [
    {
        name: "Aanchal Malhotra",
        organization: "Ripple",
        title: "From Security to Scalability: The Multifaceted Role of Cryptographic Primitives in XRPL R&D",
        abstract: "In this talk, we delve into the critical role of cryptographic primitives in XRPL research and development, exploring how they ensure security and enhance scalability. We will analyze various cryptographic approaches and their impact on building resilient blockchain-based solutions.",
        webpage: "https://www.linkedin.com/in/aanchal-malhotra-91005319/",
        image: process.env.PUBLIC_URL + "/images/AnchalM.png"
    },
    {
        name: "Ahmad-Reza Sadeghi",
        organization: "Technical University of Darmstadt",
        title: "Security Tai Chi: The Art of Building and Attacking Secure Computing Systems",
        abstract: "The ever-increasing complexity of computing systems introduces new vulnerabilities. This session will discuss key security challenges, innovative attack methodologies, and defense mechanisms to build resilient systems in the face of evolving cyber threats.",
        webpage: "https://www.informatik.tu-darmstadt.de/systemsecurity/people_sys/people_details_sys_45184.en.jsp",
        image: process.env.PUBLIC_URL + "/images/AhmadR.png"
    },
    {
        name: "Alessandro Mei",
        organization: "Sapienza University of Rome",
        title: "Scams in the Cryptocurrency Market",
        abstract: "The cryptocurrency market, with minimal regulation, has become a hotspot for financial scams. This talk will examine the different types of scams, their impact on investors, and the strategies needed to enhance security in digital financial markets.",
        webpage: "http://wwwusers.di.uniroma1.it/~mei/",
        image: process.env.PUBLIC_URL + "/images/AlessandroM.png"
    },
    {
        name: "Anoop Singhal",
        organization: "NIST",
        title: "Modeling and Security Analysis of Attacks on Machine Learning Systems",
        abstract: "Machine learning models are susceptible to adversarial attacks. This talk will present a framework for modeling and analyzing attacks on ML systems, with a focus on developing robust security measures to mitigate risks.",
        webpage: "https://www.nist.gov/people/anoop-singhal",
        image: process.env.PUBLIC_URL + "/images/AnoopS.png"
    },
    {
        name: "Atul Prakash",
        organization: "University of Michigan",
        title: "Large Language Models: Are Guarded Models Safe?",
        abstract: "Large language models (LLMs) are aligned to be safe, but are they truly free from biases and vulnerabilities? This session will explore safety mechanisms in LLMs, potential adversarial risks, and ways to enhance model robustness.",
        webpage: "https://web.eecs.umich.edu/~aprakash/",
        image: process.env.PUBLIC_URL + "/images/AtulP.png"
    },
    {
        name: "Kari Kostiainen",
        organization: "ETH Zurich",
        title: "Towards Regulated, Private and Robust Central Bank Digital Currency (CBDC)",
        abstract: "As Central Bank Digital Currencies (CBDCs) gain traction, balancing regulation, privacy, and security becomes critical. This session will discuss innovative cryptographic techniques to ensure CBDC security while maintaining user privacy.",
        webpage: "https://syssec.ethz.ch/people/kkari.html",
        image: process.env.PUBLIC_URL + "/images/KariK.png"
    },
    {
        name: "Pierangela Samarati",
        organization: "University of Milan",
        title: "Data Security and Privacy in Emerging Scenarios",
        abstract: "The rapid advancements in Information and Communication Technologies (ICTs) bring new privacy challenges. This talk will explore modern encryption and anonymization techniques to protect user data in an increasingly connected world.",
        webpage: "https://samarati.di.unimi.it",
        image: process.env.PUBLIC_URL + "/images/PierangelaS.png"
    },
    {
        name: "Vincenzo Piuri",
        organization: "University of Milan",
        title: "Biometrics and AI: Challenges and Opportunities",
        abstract: "Biometric technologies are becoming integral to authentication systems. This session will discuss AI-driven biometric security challenges and the ethical considerations surrounding its deployment.",
        webpage: "https://www.unimi.it/it/ugov/person/vincenzo-piuri",
        image: process.env.PUBLIC_URL + "/images/VincenzoP.png"
    }
];

const Speakers = () => {
    return (
        <div className="speakers-container">
            {/* Heading */}

            <div className="about-banner-section">
        <h1 className="about-banner-title">SPEAKERS</h1>
      </div>
            {/* Table of Speaker Names & Organizations */}
            <table className="speakers-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Organization</th>
                    </tr>
                </thead>
                <tbody>
                    {speakers.map((speaker, index) => (
                        <tr key={index}>
                            <td>{speaker.name}</td>
                            <td>{speaker.organization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Speaker Summaries */}
            <h2 className="section-title">Speaker Summaries</h2>
            {speakers.map((speaker, index) => (
                <div className="speaker-summary" key={index}>
                    <img className="speaker-image" src={speaker.image} alt={speaker.name} />
                    <div className="speaker-details">
                        <h3>{speaker.name}</h3>
                        <h4>{speaker.organization}</h4>
                        <h5><strong>{speaker.title}</strong></h5>
                        <p>{speaker.abstract}</p>
                        <a className="speaker-link" href={speaker.webpage} target="_blank" rel="noopener noreferrer">
                            More Info
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Speakers;
