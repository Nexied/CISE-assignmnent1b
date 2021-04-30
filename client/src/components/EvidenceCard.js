import React from 'react'

export const EvidenceCard = ({evidenceData}) => {

    const evidence = evidenceData;
    console.log(evidence.article);

    return (
        <tr>
            <td>{evidence.title}</td>
            <td>{evidence.author}</td>
            <td>{evidence.year}</td>
            <td>{evidence.sePractice}</td>
            <td>{evidence.claim}</td>
            <td>{evidence.claimStrength}</td>
        </tr>
    )
}