$( document ).ready(function() {
	 
	 //load
	 $.getJSON(
			  "http://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid= 2306188",{},function(data,status){console.log("data",data);console.log("status",status);var b=data.query.results.channel.item;
			  e=b.title; f=b.pubDate; g=b.lat+","+b.long; h=b.condition.temp+"\u2109"; i=b.condition.text;
			  $('#infor_title p b').text(e);
			  $('#infor_date p b').text(f); 
	          $('#infor_locat p b').text(g); 
              $('#infor_temp p b').text(h); 
			  $('#infor_text p b').text(i);});	 
						

	//�I���쵲
	$("[id^=2306]").each(function () {
								   
						var c=this.id;		   
	$(this).click(function(){
					
		  $.getJSON(
			  "http://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid= "+c,{},function(data,status){console.log("data",data);console.log("status",status);var b=data.query.results.channel.item;
			  e=b.title; f=b.pubDate; g=b.lat+","+b.long; h=b.condition.temp+" \u2109"; i=b.condition.text;
			  $('#infor_title p b').text(e);
			  $('#infor_date p b').text(f); 
	          $('#infor_locat p b').text(g); 
              $('#infor_temp p b').text(h); 
			  $('#infor_text p b').text(i);});	 
						
			});
		});


	//#big_city �}�C
	var big_city=new Array("��","�x�_","�s�_��","���","�s��","�]��","�x��","����","���L","�Ÿq","�x�n","����","�̪F","�y��","�Ὤ","�x�F","�n��");
	//#big_city ���� #small_city �}�C
	var big_to_smallcity ={"��":["�C��"],"�x�_":["����","�s��"],"�s�_��":["�H��","�a�q","���s","�T��","�U��","����"],"���":["�j��","���c","�[��","�s��","����ھ���"],"�s��":["�F��"],"�]��":["�T�W"],"�x��":["���","�۩�","�M��","�s��","�j��"],"����":["���ƥ�","�G�L","����"],"���L":["��n","���"],"�Ÿq":["���U"],"�x�n":["�w��","�Ψ�","�¨�","�s��","�ɤ�"],"����":["����","���s","������ھ���"],"�̪F":["�̪F��","�F��","�D�s"],"�y��":["�y����","Ĭ�D","�n�D"],"�Ὤ":["�Ὤ��"],"�x�F":["�x�F��","���s"],"�n��":["�n�륫"]};
	//dropbox����json �}�C
	var city_code={"�C��":2306188,"����":2306179,"�s��":2306186,"�H��":2306211,"�a�q":2306214,"���s":2306223,"�T��":2306228,"�U��":2306231,"����":2306251,"�j��":2306209,"���c":2306184,"�[��":2306200,"�s��":2306202,"����ھ���":2306254,"�F��":2306185,"�T�W":2306229,"���":2306181,"�۩�":2306207,"�M��":2306194,"�s��":2306218,"�j��":2306210,"���ƥ�":2306183,"�G�L":2306195,"����":2306201,"��n":2306212,"���":2306250,"���U":2306206,"�w��":2306182,"�Ψ�":2306193,"�¨�":2306203,"�s��":2306217,"�ɤ�":2306232,"����":2306180,"���s":2306199,"������ھ���":2306255,"�̪F��":2306189,"�F��":2306213,"�D�s":2306224,"�y����":2306198,"Ĭ�D":2306208,"�n�D":2306243,"�Ὤ��":2306187,"�x�F��":2306190,"���s":2306227,"�n�륫":2306204};
	
	//big city�ˤJ��k
		var big_city_in=function(){	
				   
			for(var i=0;i<big_city.length;i++)
			{			
						$('#big_city').append('<option>'+big_city[i]+'</option>');
						$("#big_city").trigger("change");
						$(".selectpicker").selectpicker();
						//document.write(big_city[i]);
						
			}
			//$('#city_dropbox1').append(a);
			};
	//small city�ˤJ��k		
		var small_city_in=function(){
					var big_city_ed=$(this).find(":selected").text();
			for(var i in big_to_smallcity['��'])
			{			
						$('#small_city').append("<option>"+big_to_smallcity['��'][i]+"</option>");
						$("#small_city").trigger("change");
						$(".selectpicker").selectpicker();
						//document.write(big_city[i]);
						
						
			}
		};
		
		
		big_city_in();
		small_city_in();
		
		//���big city
		$('#big_city').change(function(){
					var big_city_ed=$(this).find(":selected").text();
					$("#small_city").children().remove();
			for(var j in big_to_smallcity[big_city_ed])
			
			{			
						$("#small_city").append("<option>"+big_to_smallcity[big_city_ed][j]+"</option>");
						$("#small_city").trigger("change");
						$(".selectpicker").selectpicker();
						//document.write(big_city[i]);
			}
		});
		
		
	//get json	
		var drop_json=function(){
				    var drop_city_ed=$(this).find(":selected").text();
					//document.write(drop_city_ed);
					var code=city_code[drop_city_ed];
					//document.write(code.parstInt);
		  $(function(){		
		  $.getJSON(
			  "http://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid= "+code,{},function(data,status){console.log("data",data);console.log("status",status);var b=data.query.results.channel.item;
			  e=b.title; f=b.pubDate; g=b.lat+","+b.long; h=b.condition.temp+" \u2109"; i=b.condition.text;
			  $('#infor_title p b').text(e);
			  $('#infor_date p b').text(f); 
	          $('#infor_locat p b').text(g); 
              $('#infor_temp p b').text(h); 
			  $('#infor_text p b').text(i);});	 
						
			});
	
					};
					
		$("#small_city").change(drop_json); 
	
	
});