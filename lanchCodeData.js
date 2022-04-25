// these funtions ans classes will allow the daate on the table to update evey 5 seconds

class InputData{
    constructor(
        time_seconds,
        latitdiude,
        longitude,
        gps_altitude,
        bmp_alititude,
        bmpsensor_pressure,
        bmpsensor_temp,
        digsensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVDC,
        UV,
        accelX,
        accelY,
        accelZ,
        magmeticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,

    ){
        this.time_seconds=time_seconds;
        this.latitdiude=latitdiude;
        this.longitude=longitude;
        this.gps_altitude=gps_altitude;
        this.bmp_alititude=bmp_alititude;
        this.bmpsensor_pressure=bmpsensor_pressure;
        this.bmpsensor_temp=bmpsensor_temp;
        this.digsensor_temp=digsensor_temp;
        this.cssSensor_temp=cssSensor_temp;
        this.cssSensor_eCO2=cssSensor_eCO2;
        this.cssSensor_TVDC=cssSensor_TVDC;
        this.UV=UV;
        this.accelX=accelX;
        this.accelY=accelY;
        this.accelZ=accelZ;
        this.magmeticX=magmeticX;
        this.magneticY=magneticY;
        this.magneticZ=magneticZ;
        this.gyroX=gyroX;
        this.gyroY=gyroY;
        this.gyroZ=gyroZ;
    }

    }
    function getData() {
        var loadData = loadData();
        return loadData;
    }
    function dataRow(legend, value, units) {
        msg = "<td>";
        msg += legend;
        msg += ": </td><td";
        msg += value;
        msg += " " + units;
        msg += ",/td>";

        return msg;
    }
    function updateDisplay(){
        theTime = new Date();
        console .log("The time is:" + theTime.getHours() + ":" +
         (theTime.getMinutes() <10 ? "0" +  theTime.getMinutes() : theTime.getMinutes())
         + ":"+ (theTime.getSeconds()<10 ? "0" + theTime.getSeconds():theTime.getSeconds()) );


         document.getElementById("timeStamp").innerHTML = 
         theTime.getHours() + ":" +
         (theTime.getMinutes() <10 ? "0" + theTime : theTime.getMinutes() 
         + ":"+ (theTime.getSeconds()<10 ? "0" + theTime.getSeconds():theTime.getSeconds()) );

         var timeRead = data[index].time_seconds;

         if (timeRead >=10){

             document.getElementById("data").rows["seconds"].innerHTML=
             dataRow("Time Passed", data[index].time_seconds, "seconds");
             document.getElementById("data").rows["Latitude"].innerHTML=
             dataRow("Latitude", data[index].latitdiude, " ");
             document.getElementById("data").rows["Longitude"].innerHTML=
             dataRow("Longitude", data[index].longitud, " ");
             document.getElementById("data").rows["GpsSensor_alt"].innerHTML=
             dataRow("GpsSensor_alt", data[index].gps_altitude, " ");
             document.getElementById("data").rows["BPMSensor_alt"].innerHTML=
             dataRow("BPMSensor_alt", data[index].bmp_alititude, " ");
             document.getElementById("data").rows["BMPSensor_pres"].innerHTML=
             dataRow("BMPSensor_pres", data[index].bmpsensor_pressure, " ");
             document.getElementById("data").rows["BMPSensor_temp"].innerHTML=
             dataRow("BMPSensor_temp", data[index].bmpsensor_temp, " ");
             document.getElementById("data").rows["digSensor_temp"].innerHTML=
             dataRow("digSensor_temp", data[index].digsensor_temp, " ");
             document.getElementById("data").rows[" CSSSensor_temp"].innerHTML=
             dataRow(" CSSSensor_temp", data[index].cssSensor_temp, " ");
             document.getElementById("data").rows[" CSSSensor_eCO2"].innerHTML=
             dataRow(" CSSSensor_eCO2", data[index].cssSensor_eCO2, " ");
             document.getElementById("data").rows[" CSSSensor_TVOC"].innerHTML=
             dataRow(" CCSSSensor_TVOC", data[index].cssSensor_TVDC, " ");
             document.getElementById("data").rows[" UV"].innerHTML=
             dataRow(" UV", data[index].UV, " ");
             document.getElementById("data").rows[" accelX"].innerHTML=
             dataRow(" accelX", data[index].accelX, " "); 
             document.getElementById("data").rows[" accelY"].innerHTML=
             dataRow(" accelY", data[index].accelY, " "); 
             document.getElementById("data").rows[" accelZ"].innerHTML=
             dataRow(" accelZ", data[index].accelZ, " "); 
             document.getElementById("data").rows[" magneticX"].innerHTML=
             dataRow(" magneticX", data[index].magmeticX, " "); 
             document.getElementById("data").rows[" magneticY"].innerHTML=
             dataRow(" magneticY", data[index].magmeticY, " "); 
             document.getElementById("data").rows[" magmeticZ"].innerHTML=
             dataRow(" magmeticZ", data[index].magmeticZ, " "); 
             document.getElementById("data").rows[" gyrowX"].innerHTML=
             dataRow(" gyrowX", data[index].gyroX, " "); 
             document.getElementById("data").rows[" gyroY"].innerHTML=
             dataRow(" gyroY", data[index].gyroY, " "); 
             document.getElementById("data").rows[" gyroZ"].innerHTML=
             dataRow(" gyroZ", data[index].gyroZ, " "); 
         }

         if (index >= 5000){
             index = 0;
         }else {
             index ++
         }
    }