import React from 'react'

export const EvidenceCard = ({evidenceData}) => {

    const evidence = evidenceData;
    console.log(evidence.article);

    return (
        <div className="container-fluid bg-dark text-light border border-dark">
            <h2>{evidence.article}</h2>
            <p>{evidence.author}</p>
            <p>{evidence.title}</p>
        </div>
    )
}
