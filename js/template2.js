
     //Template 2 file
     $("#template2").click(function(){
        assignValues1();
        $("#nav , #main").hide();
        $("#template2hide").show();
        $("#finish2").show();
        $("#print1").show();
    });


     //function testAssign (idVal,objVal){
       // document.getElementById(idVal).innerHTML = objVal;
     //}

     function assignValues1()
     {
       
        var temp2Obj= {};   //object to store data from th user

        //Basic Details

        temp2Obj["Objective1"] = $('form#register input[name="object"]').val(); //storing data from the user using val
        temp2Obj["Name1"] = $('form#register input[name="name"]').val();
        temp2Obj["Email1"] = $('form#register input[name="email"]').val();
        temp2Obj["Mobile1"] = $('form#register input[name="mobile"]').val();
        temp2Obj["Website1"] = $('form#register input[name="website"]').val();
        temp2Obj["Door_No1"] = $('form#register input[name="doorno"]').val();
        temp2Obj["City1"] = $('form#register input[name="city"]').val();
        temp2Obj["State1"] = $('form#register input[name="state"]').val();

        //Personal Details

        temp2Obj["Birth1"] = $('form#register input[name="birth"]').val();
        temp2Obj["Father1"] = $('form#register input[name="father"]').val();
        temp2Obj["Gender1"] = $('form#register input[name="gender"]').val();
        temp2Obj["Language1"] = $('form#register input[name="language"]').val();

        //Educational Details

        temp2Obj["SSC1"] = $('form#register input[name="ssc"]').val();
        temp2Obj["Institution1"] = $('form#register input[name="school"]').val();
        temp2Obj["Duration11"] = $('form#register input[name="years"]').val();
        temp2Obj["Board11"] = $('form#register input[name="board1"]').val();
        temp2Obj["PUC1"] = $('form#register input[name="puc"]').val();
        temp2Obj["College1"] = $('form#register input[name="college"]').val();
        temp2Obj["Duration21"] = $('form#register input[name="year"]').val();
        temp2Obj["Board21"] = $('form#register input[name="board2"]').val();
        temp2Obj["Degree1"] = $('form#register input[name="degree"]').val();
        temp2Obj["Institute1"] = $('form#register input[name="college2"]').val();
        temp2Obj["Percentage21"] = $('form#register input[name="marks"]').val();
        temp2Obj["Duration31"] = $('form#register input[name="year1"]').val();
        temp2Obj["Board31"] = $('form#register input[name="board3"]').val();

        //Project Details

        temp2Obj["Title1"] = $('form#register input[name="title"]').val();
        temp2Obj["Mentor1"] = $('form#register input[name="mentor"]').val();
        temp2Obj["Description1"] = $('form#register input[name="description"]').val();
        temp2Obj["Features1"] = $('form#register input[name="features"]').val();
        temp2Obj["Technology1"] = $('form#register input[name="technology"]').val();
        temp2Obj["Status1"] = $('form#register input[name="status"]').val();


        //Employment Details

        temp2Obj["Job1"] = $('form#register input[name="job"]').val();
        temp2Obj["Company1"] = $('form#register input[name="company"]').val();
        temp2Obj["Start1"] = $('form#register input[name="start"]').val();
        temp2Obj["End1"] = $('form#register input[name="end"]').val();

        //Other Details

        temp2Obj["Hobbies1"] = $('form#register input[name="hobbies"]').val();
        temp2Obj["Activity1"] = $('form#register input[name="activities"]').val();
        temp2Obj["Technical1"] = $('form#register input[name="technical"]').val();
        temp2Obj["Interest1"] = $('form#register input[name="interest"]').val();
        temp2Obj["Personal1"] = $('form#register input[name="personal"]').val();
        temp2Obj["Workshop1"] = $('form#register input[name="workshop"]').val();


        


        //Data entering in to template 2
             //top section
             //Basic Details
           
             
            document.getElementById("fullname1").innerHTML = temp2Obj.Name1;
            document.getElementById("mobile1").innerHTML = temp2Obj.Mobile1;
            document.getElementById("email1").innerHTML = temp2Obj.Email1;

            //objective
            document.getElementById("objective1").innerHTML = temp2Obj.Objective1;

            //Education

            //Degree
            document.getElementById("degree_1").innerHTML = temp2Obj.Degree1;
            document.getElementById("college2_1").innerHTML = temp2Obj.Institute1;
            document.getElementById("board3_1").innerHTML = temp2Obj.Board31;
            document.getElementById("year3_1").innerHTML = temp2Obj.Duration31;
            document.getElementById("percentage3_1").innerHTML = temp2Obj.Percentage21;

            //12th class
            document.getElementById("college_1").innerHTML = temp2Obj.College1;
            document.getElementById("board2_1").innerHTML = temp2Obj.Board21;
            document.getElementById("year2_1").innerHTML = temp2Obj.Duration21;
            document.getElementById("percentage2_1").innerHTML = temp2Obj.PUC1;

            //10th class
            document.getElementById("school_1").innerHTML = temp2Obj.Institution1;
            document.getElementById("board1_1").innerHTML = temp2Obj.Board11;
            document.getElementById("year1_1").innerHTML = temp2Obj.Duration11;
            document.getElementById("percentage1_1").innerHTML = temp2Obj.SSC1;


            //Employment Details
            document.getElementById("jobtitle_1").innerHTML = temp2Obj.Job1
            document.getElementById("companyname_1").innerHTML = temp2Obj.Company1;
            document.getElementById("startdate_1").innerHTML = temp2Obj.Start1;
            document.getElementById("enddate_1").innerHTML = temp2Obj.End1;

            //Technical Skills
            document.getElementById("technicalskills_1").innerHTML = temp2Obj.Technical1;

            //Project Details
            document.getElementById("projecttitle_1").innerHTML = temp2Obj.Title1;
            document.getElementById("mentorname_1").innerHTML = temp2Obj.Mentor1;
            document.getElementById("projectdescription_1").innerHTML = temp2Obj.Description1;
            document.getElementById("projectfeatures_1").innerHTML = temp2Obj.Features1;
            document.getElementById("projecttechnology_1").innerHTML = temp2Obj.Technology1;
            document.getElementById("projectstatus_1").innerHTML = temp2Obj.Status1;


            //Work shops attended
            document.getElementById("workshopsattended_1").innerHTML = temp2Obj.Workshop1;

            //Area's of Interest
            document.getElementById("areasofinterest_1").innerHTML = temp2Obj.Interest1;

            //Inter personal skills
            document.getElementById("personalskills_1").innerHTML = temp2Obj.Personal1;

            //Hobbies and Interests
            document.getElementById("hobbiesandinterest_1").innerHTML = temp2Obj.Hobbies1;


            //Extra-curricular Activities
             document.getElementById("extraactivities_1").innerHTML = temp2Obj.Activity1;

            //Personal details
            document.getElementById("dob_1").innerHTML = temp2Obj.Birth1;
            document.getElementById("fathersname_1").innerHTML = temp2Obj.Father1;
            document.getElementById("languageknown_1").innerHTML = temp2Obj.Language1;
            document.getElementById("gender_1").innerHTML = temp2Obj.Gender1;
            document.getElementById("door_no_1").innerHTML = temp2Obj.Door_No1;
            document.getElementById("cityname_1").innerHTML = temp2Obj.City1;
            document.getElementById("statename_1").innerHTML = temp2Obj.State1;
            document.getElementById("webaddress_1").innerHTML = temp2Obj.Website1;


     }

//this is for navigating to previous page

     $("#finish2").click(function(){
        $("#nav , #main").show();
        $("#template1hide").hide();
        $("#template2hide").hide();
        $("#finish").show();
        $("#finish2").hide();
        $("#print").hide();
        $("#print1").hide();
    });

//to print Resume  
function printResume() {
     alert("If need to print continuos give page options as all , otherwise if some pages give option 1-2");
    alert("Thank You for Choosing Resume Designer !! Have an Awesome Day !! Visit again !!!");
    window.print();
    };

