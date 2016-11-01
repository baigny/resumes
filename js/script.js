/* this jquery part is for hiding and showing Resume builder part*/
//Basic inforamtion
$(document).ready(function(){
   $("#template1hide").hide();
   $("#template2hide").hide();

   });

$(document).ready(function(){

    $("#basic").show(400);
    $("#personal").hide();
    $("#education").hide();
    $("#project").hide();
    $("#employment").hide();
    $("#other").hide();
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});


//Educational Information
//next
$(document).ready(function(){
    $("#educational").click(function(){
    $("#basic").hide();
    
    $("#education").show(400);
    $("#project").hide();
    $("#employment").hide();
    $("#other").hide();
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();


});
});
//previous
$(document).ready(function(){
    $("#prevpersonal").click(function(){
     $("#basic").show(400);
    $("#personal").hide();
    $("#education").hide();
    $("#project").hide();
    $("#employment").hide();
    $("#other").hide();
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});
});


//Project Information
$(document).ready(function(){
    $("#pro").click(function(){
    $("#basic").hide();
    $("#personal").hide();
    $("#education").hide();
    $("#project").show(400);
    $("#employment").hide();
    $("#other").hide();
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});
});
//previous
$(document).ready(function(){
    $("#prevedu").click(function(){
    $("#basic").hide();
    $("#personal").hide();
    $("#education").show(400);
    $("#project").hide();
    $("#employment").hide();
    $("#other").hide();
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});
});

//Employment Details
$(document).ready(function(){
    $("#employ").click(function(){
    $("#basic").hide();
    $("#personal").hide();
    $("#education").hide();
    $("#project").hide();
    $("#employment").show(400);
    $("#other").hide();
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});
});
//previous
$(document).ready(function(){
    $("#prevproject").click(function(){
    $("#basic").hide();
    $("#personal").hide();
    $("#education").hide();
    $("#project").show(350);
    $("#employment").hide();
    $("#other").hide();
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});
});

//other  Details
$(document).ready(function(){
    $("#other_1").click(function(){
    $("#basic").hide();
   
    $("#education").hide();
    $("#project").hide();
    $("#employment").hide();
    $("#other").show(400);
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});
});
$(document).ready(function(){
    $("#prevemploy").click(function(){
    $("#basic").hide();
    $("#personal").hide();
    $("#education").hide();
    $("#project").hide;
    $("#employment").show(350);
    $("#other").hide();
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});
});

//Finish
$(document).ready(function(){
    $("#final").click(function(){
    $("#basic").hide();
    $("#personal").hide();
    $("#education").hide();
    $("#project").hide();
    $("#employment").hide();
    $("#other").hide();
    $("#finish").show(400);
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();

});
});
$(document).ready(function(){
    $("#prevother").click(function(){
    $("#basic").hide();
    $("#personal").hide();
    $("#education").hide();
    $("#project").hide();
    $("#employment").hide();
    $("#other").show(350);
    $("#finish").hide();
    $("#finish1").hide();
    $("#finish2").hide();
    $("#print").hide();
    $("#print1").hide();


});
});




//Validating for Personal Details

$(document).ready(function(){

    $("#educational").click(function(){
    var a= $("#object").val().length;
    var aa= $("#dob").val().length;
    var bb= $("#gender").val().length;
    var cc= $("#father").val().length;
    var dd= $("#language").val().length;
    var c= $("#mobile").val().length;
    var e= $("#website").val().length;
    var b= $("#name").val().length;
    var d= $("#mail").val().length;
    var g= $("#address2").val().length;
         if(((a==0)&&(c==0)&&(e==0)&&(aa==0)&&(bb==0)&&(cc==0)&&(dd==0))){
              alert("Please Enter all the Personal Details to Continue");
              $("#basic").show();
              $("#education").hide();
           }
            else if((a>0)&&(c==0)&&(e==0)&&(aa==0)&&(bb==0)&&(cc==0)&&(dd==0)){
              alert("Please Enter the Phone Number");
               $("#basic").show();
              $("#education").hide();
           }
            else if(((a>0)&&(c>0)&&(e==0)&&(aa==0)&&(bb==0)&&(cc==0)&&(dd==0))){
              alert("Please Enter the Website");
               $("#basic").show();
              $("#education").hide();
           }
            else if(((a>0)&&(c>0)&&(e>0)&&(aa==0)&&(bb==0)&&(dd==0)&&(cc==0))){
              alert("Please Enter the Date of Birth");
               $("#basic").show();
              $("#education").hide();
           }
           else if(((a>0)&&(c>0)&&(e>0)&&(aa>0)&&(cc==0)&&((dd==0))&&(bb==0))){
              alert("Please Enter the Father's Name");
               $("#basic").show();
              $("#education").hide();
           }
           else if(((a>0)&&(c>0)&&(e>0)&&(aa>0)&&(cc>0)&&((dd==0))&&(bb==0))){
              alert("Please Enter Languages Known");
               $("#basic").show();
              $("#education").hide();
           }

          else if(((a>0)&&(c>0)&&(e>0)&&(aa>0)&&(cc>0)&&((dd>0))&&(bb==0))){
              alert("Please Enter the Gender");
               $("#basic").show();
              $("#education").hide();
           }
           else if(((a>0)&&(c>0)&&(e>0)&&(aa>0)&&(cc>0)&&(dd>0)&&(bb>0)&&(b==0) )){
              alert("Please Enter the Full Name");
              $("#basic").show();
              $("#education").hide();
           }
            else if(((a>0)&&(c>0)&&(e>0)&&(aa>0)&&(cc>0)&&(dd>0)&&(bb>0)&&(b>0)&&(d==0) )){
              alert("Please Enter the Email Address");
              $("#basic").show();
              $("#education").hide();
           }
           else if(((a>0)&&(c>0)&&(e>0)&&(aa>0)&&(cc>0)&&(dd>0)&&(bb>0)&&(b>0)&&(d>0)&&(g==0) )){
              alert("Please Enter the City");
              $("#basic").show();
              $("#education").hide();
           }



            else if(((a>0)&&(aa>0)&&(bb>0)&&(cc>0))&&((dd>0))){
              $("#basic").hide();
              $("#education").show();
           }


   });
});



//validating for educational details

$(document).ready(function(){

    $("#pro").click(function(){

    var aaa= $("#ssc").val().length;
    var bbb= $("#school").val().length;
    var ccc= $("#year").val().length;
    var ddd= $("#sscboard").val().length;
    var eee= $("#puc").val().length;
    var fff= $("#college").val().length;
    var ggg= $("#year1").val().length;
    var hhh= $("#pucboard").val().length;
    var iii= $("#degree").val().length;
    var jjj= $("#institution").val().length;
    var kkk= $("#marks").val().length;
    var lll= $("#passing").val().length;
    var mmm=$("#board3").val().length;

        if(((aaa==0)&&(bbb==0)&&(ccc==0))&&((ddd==0)&&(eee==0)&&(fff==0)&&(ggg==0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
          else if(((aaa>0)&&(bbb==0)&&(ccc==0))&&((ddd==0)&&(eee==0)&&(fff==0)&&(ggg==0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
            else if(((aaa>0)&&(bbb>0)&&(ccc==0))&&((ddd==0)&&(eee==0)&&(fff==0)&&(ggg==0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
            else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd==0)&&(eee==0)&&(fff==0)&&(ggg==0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
            else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee==0)&&(fff==0)&&(ggg==0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
            else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff==0)&&(ggg==0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
            else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff>0)&&(ggg==0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
            else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff>0)&&(ggg>0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
            else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff>0)&&(ggg>0)&&(hhh>0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
           else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff>0)&&(ggg>0)&&(hhh>0)&&(iii>0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
           else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff>0)&&(ggg>0)&&(hhh>0)&&(iii>0)&&(jjj>0)&&(kkk==0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
            else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff>0)&&(ggg>0)&&(hhh>0)&&(iii>0)&&(jjj>0)&&(kkk>0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
           else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff>0)&&(ggg>0)&&(hhh>0)&&(iii>0)&&(jjj>0)&&(kkk>0)&&(lll==0)&&(mmm==0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
           else if(((aaa==0)&&(bbb==0)&&(ccc==0))&&((ddd==0)&&(eee==0)&&(fff==0)&&(ggg==0)&&(hhh==0)&&(iii==0)&&(jjj==0)&&(kkk==0)&&(lll==0)&&(mmm>0))){
              alert("Please Enter all the Educational Details to Continue");
              $("#project").hide();
              $("#education").show();
           }
           else if(((aaa>0)&&(bbb>0)&&(ccc>0))&&((ddd>0)&&(eee>0)&&(fff>0)&&(ggg>0)&&(hhh>0)&&(iii>0)&&(jjj>0)&&(kkk>0)&&(lll==0)&&(mmm>0))){
              $("#project").show();
              $("#education").hide();
           }

    });
});


//Validation for Project Details

$(document).ready(function(){

    $("#employ").click(function(){

    var aaaa = $("#title").val().length;
    var bbbb= $("#mentor").val().length;
    var cccc= $("#description").val().length;
    var dddd= $("#features").val().length;
    var eeee= $("#technology").val().length;
    var ffff= $("#status").val().length;


        if(((aaaa==0)&&(bbbb==0)&&(cccc==0))&&((dddd==0)&&(eeee==0)&&(ffff==0))){
              alert("Please Enter all the Project Details to Continue");
              $("#project").show();
              $("#employment").hide();
           }
             else if(((aaaa>0)&&(bbbb==0)&&(cccc==0))&&((dddd==0)&&(eeee==0)&&(ffff==0))){
             alert("Please Enter all the Project Details to Continue");
              $("#project").show();
              $("#employment").hide();
           }
             else if(((aaaa>0)&&(bbbb>0)&&(cccc==0))&&((dddd==0)&&(eeee==0)&&(ffff==0))){
             alert("Please Enter all the Project Details to Continue");
              $("#project").show();
              $("#employment").hide();
           }
             else if(((aaaa>0)&&(bbbb>0)&&(cccc>0))&&((dddd==0)&&(eeee==0)&&(ffff==0))){
             alert("Please Enter all the Project Details to Continue");
              $("#project").show();
              $("#employment").hide();
           }
             else if(((aaaa>0)&&(bbbb>0)&&(cccc>0))&&((dddd==0)&&(eeee==0)&&(ffff==0))){
             alert("Please Enter all the Project Details to Continue");
              $("#project").show();
              $("#employment").hide();
           }
             else if(((aaaa>0)&&(bbbb>0)&&(cccc>0))&&((dddd>0)&&(eeee==0)&&(ffff==0))){
             alert("Please Enter all the Project Details to Continue");
              $("#project").show();
              $("#employment").hide();
           }
            else if(((aaaa>0)&&(bbbb>0)&&(cccc>0))&&((dddd>0)&&(eeee>0)&&(ffff==0))){
             alert("Please Enter all the Project Details to Continue");
              $("#project").show();
              $("#employment").hide();
           }
           else if(((aaaa==0)&&(bbbb==0)&&(cccc==0))&&((dddd==0)&&(eeee==0)&&(ffff>0))){
              alert("Please Enter all the Project Details to Continue");
              $("#project").show();
              $("#employment").hide();
           }
            else if(((aaaa>0)&&(bbbb>0)&&(cccc>0))&&((dddd>0)&&(eeee>0)&&(ffff>0))){
              $("#project").hide();
              $("#employment").show();
           }
    });
});


//Validating for Employment Details

$(document).ready(function(){

    $("#other_1").click(function(){

    var aaaaa = $("#job").val().length;
    var bbbbb= $("#company").val().length;
    var ccccc= $("#start").val().length;
    var ddddd= $("#end").val().length;


        if((aaaaa==0)&&(bbbbb==0)&&(ccccc==0)&&(ddddd==0)){
              alert("Please Enter all the Employment Details to Continue");
              $("#employment").show();
              $("#other").hide();
           }
             else if((aaaaa>0)&&(bbbbb==0)&&(ccccc==0)&&(ddddd==0)){
              alert("Please Enter all the Employment Details to Continue");
              $("#employment").show();
              $("#other").hide();
           }
            else if((aaaaa>0)&&(bbbbb>0)&&(ccccc==0)&&(ddddd==0)){
              alert("Please Enter all the Employment Details to Continue");
              $("#employment").show();
              $("#other").hide();
           }
           else if((aaaaa>0)&&(bbbbb>0)&&(ccccc>0)&&(ddddd==0)){
              alert("Please Enter all the Employment Details to Continue");
              $("#employment").show();
              $("#other").hide();
           }
            else if((aaaaa==0)&&(bbbbb==0)&&(ccccc==0)&&(ddddd>0)){
              alert("Please Enter all the Employment Details to Continue");
              $("#employment").show();
              $("#other").hide();
           }
            else if((aaaaa>0)&&(bbbbb>0)&&(ccccc>0)&&(ddddd>0)){
              $("#employment").hide();
              $("#other").show();
           }



  });
  });

//Validating Other Details
$(document).ready(function(){

    $("#final").click(function(){

    var a6 = $("#interest").val().length;
    var b6= $("#workshop").val().length;
    var c6= $("#technical").val().length;
    var d6= $("#personal").val().length;
    var e6= $("#extra").val().length;
    var f6= $("#hobbies").val().length;

     if((a6==0)&&(b6==0)&&(c6==0)&&(d6==0)&&(e6==0)&&(f6==0)){
              alert("Please Enter all the Other Details to Print your Resume");
              $("#other").show();
              $("#finish").hide();
           }
     else if((a6>0)&&(b6==0)&&(c6==0)&&(d6==0)&&(e6==0)&&(f6==0)){
              alert("Please Enter all the Other Details to Print your Resume");
              $("#other").show();
              $("#finish").hide();
           }
     else if((a6>0)&&(b6>0)&&(c6==0)&&(d6==0)&&(e6==0)&&(f6==0)){
              alert("Please Enter all the Other Details to Print your Resume");
              $("#other").show();
              $("#finish").hide();
           }
    else if((a6>0)&&(b6>0)&&(c6>0)&&(d6==0)&&(e6==0)&&(f6==0)){
              alert("Please Enter all the Other Details to Print your Resume");
              $("#other").show();
              $("#finish").hide();
           }
    else if((a6>0)&&(b6>0)&&(c6>0)&&(d6>0)&&(e6==0)&&(f6==0)){
              alert("Please Enter all the Other Details to Print your Resume");
              $("#other").show();
              $("#finish").hide();
           }
    else if((a6>0)&&(b6>0)&&(c6>0)&&(d6>0)&&(e6>0)&&(f6==0)){
              alert("Please Enter all the Other Details to Print your Resume");
              $("#other").show();
              $("#finish").hide();
           }
    else if((a6==0)&&(b6==0)&&(c6==0)&&(d6==0)&&(e6==0)&&(f6>0)){
              alert("Please Enter all the Other Details to Print your Resume");
              $("#other").show();
              $("#finish").hide();
           }
    else if((a6>0)&&(b6>0)&&(c6>0)&&(d6>0)&&(e6>0)&&(f6>0)){
              alert("Thank Your for Entering Details !!! Now Choose Template and Download Your Resume");
              $("#finish").show();
              $("#other").hide();
           }
  });
  });