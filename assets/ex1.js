function percentageCalc() {    //percentage calculator
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var z=parseInt(document.getElementById("num3").value);
    var TD=y/x*100;
    var TR=z/x*100;
    document.getElementById("TD").innerHTML="Total Deaths:"+" "+TD.toFixed(2)+"%";
    document.getElementById("TR").innerHTML="Total Recovered:"+" "+TR.toFixed(2)+"%";
}

function globalPercentage() {   //for calculating global cases percentage
    var TCG=2845859;            //total cases globally
    var TDG=197846;             //total death cases globally
    var TRG=811687;             //total recovered cases globally
    var TDP=TDG/TCG*100;
    var TRP=TRG/TCG*100;
    document.getElementById("TDG").innerHTML="Total Deaths:"+" "+TDP.toFixed(2)+"%";
    document.getElementById("TRG").innerHTML="Total Recovered:"+" "+TRP.toFixed(2)+"%";
}

function nepalPercentage() {     //for calculation Nepal cases percentage
    var TCN=49;                  //total cases on Nepal
    var TDN=0;                   //total deaths
    var TRN=12;                  //total recovered
    var TDPN=TDN/TCN*100;
    var TRPN=TRN/TCN*100;
    document.getElementById("TDN").innerHTML="Total Deaths:"+" "+TDPN.toFixed(2)+"%";
    document.getElementById("TRN").innerHTML="Total Recovered:"+" "+TRPN.toFixed(2)+"%";
}