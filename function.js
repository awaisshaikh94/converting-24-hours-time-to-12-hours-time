// changing time format from 24 to 12 format
  time_format: any;
  public timeFormat(time){
    let timeSplit: any = time.split(':');
    // timeSplit[0] = parseInt(timeSplit[0]);
    // timeSplit[1] = parseInt(timeSplit[1]);

    if(timeSplit[0] == "13"){ this.time_format = "01" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "14"){ this.time_format = "02" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "15"){ this.time_format = "03" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "16"){ this.time_format = "04" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "17"){ this.time_format = "05" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "18"){ this.time_format = "06" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "19"){ this.time_format = "07" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "20"){ this.time_format = "08" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "21"){ this.time_format = "09" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "22"){ this.time_format = "10" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "23"){ this.time_format = "11" + ':' + timeSplit[1]; }
    else if(timeSplit[0] == "00"){ this.time_format = "12" + ':' + timeSplit[1]; }
    else{
      this.time_format = timeSplit[0] + ':' + timeSplit[1];
    }

    // alert(this.time_format);
    return this.time_format;
  }
