/* Complaint form design */

.report-container {
    max-width: 650px;
    margin: auto;
    background: white;
    padding: 35px;
    border-radius: 18px;
    box-shadow: 0 10px 35px rgba(0,0,0,0.08);
}

.report-heading {
    text-align: center;
    margin-bottom: 30px;
}

.report-heading h2 {
    font-size: 30px;
    margin: 12px 0;
    color: #102a43;
}

.report-heading p {
    color: #64748b;
}

.tag {
    color: #128477;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
}

#complaintForm {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#complaintForm label {
    font-weight: 600;
    color: #243b53;
    margin-top: 8px;
}

#complaintForm input,
#complaintForm select,
#complaintForm textarea {
    padding: 14px;
    border: 1px solid #d8e2eb;
    border-radius: 8px;
    font-size: 15px;
    width: 100%;
    background: #f8fafc;
}

#complaintForm textarea {
    min-height: 120px;
    resize: vertical;
}

#complaintForm input:focus,
#complaintForm select:focus,
#complaintForm textarea:focus {
    outline: 2px solid #4de0c1;
}

#complaintForm button {
    margin-top: 15px;
    padding: 16px;
    border: none;
    border-radius: 8px;
    background: #176b75;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

#complaintForm button:hover {
    background: #102a43;
}

#result {
    margin-top: 20px;
    color: #176b75;
    font-weight: bold;
    text-align: center;
}