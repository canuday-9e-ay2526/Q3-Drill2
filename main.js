
function radius() {
    let rad = document.getElementById("rad").value;
    let area= Math.PI*(rad**2);

    document.getElementById("area").value=area.toFixed(2);
    
};

