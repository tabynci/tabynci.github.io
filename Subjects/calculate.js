function submit(){
	var i;
	var numofSubjects;
	var marks=numofSubjects+1;
	var sum=0;
    var avg;
	var grade;
	numofSubjects=parseInt(prompt("how many subjects?"));
		for(i=1;i<=numofSubjects;i++){
			sum=sum+ parseInt(prompt("Enter marks"));

			 }
        avg=sum/numofSubjects;
        if(avg>=90){
			alert("Your grade is : Grade A");
			}
		else if(avg>=80 && avg<90){
			alert("Grade B");
			}
		else if(avg>=60 && avg<80){
			alert("Grade C");
			}
		else if(avg>=40 && avg<60){
			alert("Grade D");
			}
		else if(avg>=30 && avg<40){
			alert("Grade E");
			}
		else{
			alert("Grade F");
			}
		
	
}