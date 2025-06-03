import { useState } from "react";

const Form=()=>{
    const [businessType, setBusinessType]=useState('');
    const [targetAudience, setTargetAudience]=useState('');
    const [sellingPoint, setSellingPoint]=useState('');
    const[templateSelection, setTemplateSelection]=useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch("http://localhost:5000/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                businessType,
                targetAudience,
                sellingPoint, // fixed
                templateSelection
            }),
            });

            const data = await result.json();
            alert(data.message || "Form submitted successfully!");
        } catch (err) {
            console.error("Submission error:", err);
            alert("Failed to submit form.");
        }
};

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="btype">Business Type: </label>
                    <input 
                        type="text"
                        id="btype"
                        value={businessType}
                        onChange={(e)=>setBusinessType(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="targetaudience">Target Audience: </label>
                    <input 
                        type="text"
                        id="targetaudience"
                        value={targetAudience}
                        onChange={(e)=>setTargetAudience(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="sellingpoints">Key Selling points</label>
                    <textarea id="sellingpoints" rows="4" cols="50" 
                        value={sellingPoint}
                        placeholder="Enter key Selling points"
                        onChange={(e)=>setSellingPoint(e.target.value)}
                    />
                </div>
                <div>
                    <label>Template Selection</label>
                    <select value={templateSelection} onChange={(e)=>setTemplateSelection(e.target.value)}>
                        <option value="">--please select any value--</option>
                        <option >Template 1</option>
                        <option >Template 2</option>
                    </select>
                </div>
                <button type="submit">Sumit</button>
            </form>
            <div>
                <h1>Display Things: </h1>
                <p>Business Type: {businessType}</p>
                <p>Target Audience: {targetAudience}</p>
                <p>Key Selling points: {sellingPoint}</p>
                <p>Template Selection: {templateSelection}</p>
            </div>
        </div>
    )
}
export default Form;