

export  function fetchCostEstimator(patientRequest)  {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patientRequest)
    };
    return  fetch('http://localhost:3000/api/v1/hms/expensepredictor', requestOptions)
        .then(async response => {
        return await response.json();
        })
        .catch((response) => {
            return Promise.reject(response);
          });
}

export  function requestAppointment(patientRequest)  {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json charset=utf-8'
        },
        body: JSON.stringify(patientRequest)
    };
    return  fetch('http://localhost:3000/api/v1/hms/requestappointment', requestOptions)
        .then(async response => {
        return await response.json();
        })
        .catch((response) => {
            return Promise.reject(response);
          });
}