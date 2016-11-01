//Template 1 file
     $("#template1").click(function(){
        
        assignValues();
        $("#nav , #main").hide();
        $("#template1hide").show();
        $("#finish1").show();
        $("#print").show();
    });


     //function testAssign (idVal,objVal){
       // document.getElementById(idVal).innerHTML = objVal;
     //}

     function assignValues()
     {
        
        var temp1Obj = {};   //object to store data from th user

        //Basic Details

        temp1Obj["Objective"] = $('form#register input[name="object"]').val(); //storing data from the user using val
        temp1Obj["Name"] = $('form#register input[name="name"]').val();
        temp1Obj["Email"] = $('form#register input[name="email"]').val();
        temp1Obj["Mobile"] = $('form#register input[name="mobile"]').val();
        temp1Obj["Website"] = $('form#register input[name="website"]').val();
        temp1Obj["Door_No"] = $('form#register input[name="doorno"]').val();
        temp1Obj["City"] = $('form#register input[name="city"]').val();
        temp1Obj["State"] = $('form#register input[name="state"]').val();

        //Personal Details

        temp1Obj["Birth"] = $('form#register input[name="birth"]').val();
        temp1Obj["Father"] = $('form#register input[name="father"]').val();
        temp1Obj["Gender"] = $('form#register input[name="gender"]').val();
        temp1Obj["Language"] = $('form#register input[name="language"]').val();

        //Educational Details

        temp1Obj["SSC"] = $('form#register input[name="ssc"]').val();
        temp1Obj["Institution"] = $('form#register input[name="school"]').val();
        temp1Obj["Duration1"] = $('form#register input[name="years"]').val();
        temp1Obj["Board1"] = $('form#register input[name="board1"]').val();
        temp1Obj["PUC"] = $('form#register input[name="puc"]').val();
        temp1Obj["College"] = $('form#register input[name="college"]').val();
        temp1Obj["Duration2"] = $('form#register input[name="year"]').val();
        temp1Obj["Board2"] = $('form#register input[name="board2"]').val();
        temp1Obj["Degree"] = $('form#register input[name="degree"]').val();
        temp1Obj["Institute"] = $('form#register input[name="college2"]').val();
        temp1Obj["Percentage2"] = $('form#register input[name="marks"]').val();
        temp1Obj["Duration3"] = $('form#register input[name="year1"]').val();
        temp1Obj["Board3"] = $('form#register input[name="board3"]').val();

        //Project Details

        temp1Obj["Title"] = $('form#register input[name="title"]').val();
        temp1Obj["Mentor"] = $('form#register input[name="mentor"]').val();
        temp1Obj["Description"] = $('form#register input[name="description"]').val();
        temp1Obj["Features"] = $('form#register input[name="features"]').val();
        temp1Obj["Technology"] = $('form#register input[name="technology"]').val();
        temp1Obj["Status"] = $('form#register input[name="status"]').val();


        //Employment Details

        temp1Obj["Job"] = $('form#register input[name="job"]').val();
        temp1Obj["Company"] = $('form#register input[name="company"]').val();
        temp1Obj["Start"] = $('form#register input[name="start"]').val();
        temp1Obj["End"] = $('form#register input[name="end"]').val();

        //Other Details

        temp1Obj["Hobbies"] = $('form#register input[name="hobbies"]').val();
        temp1Obj["Activity"] = $('form#register input[name="activities"]').val();
        temp1Obj["Technical"] = $('form#register input[name="technical"]').val();
        temp1Obj["Interest"] = $('form#register input[name="interest"]').val();
        temp1Obj["Personal"] = $('form#register input[name="personal"]').val();
        temp1Obj["Workshop"] = $('form#register input[name="workshop"]').val();


        


        //Data entering in to template 1
             //top section
             //Basic Details

             
            document.getElementById("fullname").innerHTML = temp1Obj.Name;
            document.getElementById("mobilep").innerHTML = temp1Obj.Mobile;
            document.getElementById("email").innerHTML = temp1Obj.Email;

            //objective
            document.getElementById("objective").innerHTML = temp1Obj.Objective;

            //Education

            //Degree
            document.getElementById("degree1").innerHTML = temp1Obj.Degree;
            document.getElementById("college2").innerHTML = temp1Obj.Institute;
            document.getElementById("board3_3").innerHTML = temp1Obj.Board3;
            document.getElementById("year3").innerHTML = temp1Obj.Duration3;
            document.getElementById("percentage3").innerHTML = temp1Obj.Percentage2;

            //12th class
            document.getElementById("college1").innerHTML = temp1Obj.College;
            document.getElementById("board2").innerHTML = temp1Obj.Board2;
            document.getElementById("year2").innerHTML = temp1Obj.Duration2;
            document.getElementById("percentage2").innerHTML = temp1Obj.PUC;

            //10th class
            document.getElementById("school1").innerHTML = temp1Obj.Institution;
            document.getElementById("board1").innerHTML = temp1Obj.Board1;
            document.getElementById("year1").innerHTML = temp1Obj.Duration1;
            document.getElementById("percentage1").innerHTML = temp1Obj.SSC;


            //Employment Details
            document.getElementById("jobtitle").innerHTML = temp1Obj.Job;
            document.getElementById("companyname").innerHTML = temp1Obj.Company;
            document.getElementById("startdate").innerHTML = temp1Obj.Start;
            document.getElementById("enddate").innerHTML = temp1Obj.End;

            //Technical Skills
            document.getElementById("technicalskills").innerHTML = temp1Obj.Technical;

            //Project Details
            document.getElementById("projecttitle").innerHTML = temp1Obj.Title;
            document.getElementById("mentorname").innerHTML = temp1Obj.Mentor;
            document.getElementById("projectdescription").innerHTML = temp1Obj.Description;
            document.getElementById("projectfeatures").innerHTML = temp1Obj.Features;
            document.getElementById("projecttechnology").innerHTML = temp1Obj.Technology;
            document.getElementById("projectstatus").innerHTML = temp1Obj.Status;


            //Work shops attended
            document.getElementById("workshopsattended").innerHTML = temp1Obj.Workshop;

            //Area's of Interest
            document.getElementById("areasofinterest").innerHTML = temp1Obj.Interest;

            //Inter personal skills
            document.getElementById("personalskills").innerHTML = temp1Obj.Personal;

            //Hobbies and Interests
            document.getElementById("hobbiesandinterest").innerHTML = temp1Obj.Hobbies;


            //Extra-curricular Activities
             document.getElementById("extraactivities").innerHTML = temp1Obj.Activity;

            //Personal details
            document.getElementById("dob1").innerHTML = temp1Obj.Birth;
            document.getElementById("fathersname").innerHTML = temp1Obj.Father;
            document.getElementById("languageknown").innerHTML = temp1Obj.Language;
            document.getElementById("gender1").innerHTML = temp1Obj.Gender;
            document.getElementById("door_no").innerHTML = temp1Obj.Door_No;
            document.getElementById("cityname").innerHTML = temp1Obj.City;
            document.getElementById("statename").innerHTML = temp1Obj.State;
            document.getElementById("webaddress").innerHTML = temp1Obj.Website;
     }

//this is for navigatinf to previous page 
$("#finish1").click(function(){
        $("#nav , #main").show();
        $("#template1hide").hide();
        $("#template2hide").hide();
        $("#finish").show();
        $("#finish1").hide();
        $("#print").hide();
        $("#print1").hide();
    });


//to print Resume  
function printResume() {
        alert("If need to print continuos give page options as all , otherwise if some pages give option 1-2");
    alert("Thank You for Choosing Resume Designer !! Have an Awesome Day !! Visit again !!!");
    window.print();
    };
