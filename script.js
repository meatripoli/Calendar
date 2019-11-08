/*
show current day in the title inside container id = "currentDay"\
create the time slots for each hour of the work day (9-5)
color code time blocks based on the current time
    past is gray
    present is blue
    future is purple
set up each block with inline hour display/input/save button
    input will contain what the user is doing during that hour
    save button will save it to local memory


*/
const date = moment().format('dddd, MMMM Do'); 
$("#currentDay").text(date)

const hour =  moment().format('H');
console.log(hour)
///ids hour#, event#, #
coloringRow(hour);
///localStorage.removeItem("localObj")
if(localStorage.getItem("localObj")==null){
    var eventObj={};
    console.log("nothing in local storage")
}
else{
    var eventObj=JSON.parse(localStorage.getItem("localObj"));
    console.log(eventObj);
    var objKeys = Object.keys(eventObj);
    objKeys.forEach(function(key){
        console.log(key);
        console.log(eventObj[key]);
        $("#"+key).val(eventObj[key]);
    })

}

function coloringRow(currentHour){
    $("#row"+currentHour).css("background-color", "lightskyblue");
    $("#event"+currentHour).css("background", "lightskyblue");
    for( var i=parseInt(currentHour)+1; i<=17; i++){
        $("#row"+i).css("background-color", "lightseagreen");
        $("#event"+i).css("background", "lightseagreen");
    }
}

$(document).ready(function() {
    $(".btn").on("click",function(event){
        event.preventDefault();
        var buttonID=this.id;
        console.log(buttonID);
        var newEvent = $("#event"+buttonID).val();

        console.log("Save info please");
        if(newEvent === ""){
            alert("No event provided.");
        }
        else{    
            //take the text in input and save it to local memory
            var localKey="event"+buttonID;
            var localValue=newEvent;
            //key is going to be the inputid and the value is the text
            eventObj[localKey] = localValue;
            localStorage.setItem("localObj", JSON.stringify(eventObj));
        }
        
    });
})