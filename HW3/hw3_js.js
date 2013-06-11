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
						

	//點擊鏈結
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


	//#big_city 陣列
	var big_city=new Array("基隆","台北","新北市","桃園","新竹","苗栗","台中","彰化","雲林","嘉義","台南","高雄","屏東","宜蘭","花蓮","台東","南投");
	//#big_city 對應 #small_city 陣列
	var big_to_smallcity ={"基隆":["七堵"],"台北":["內湖","新店"],"新北市":["淡水","鶯歌","金山","三芝","萬里","雙溪"],"桃園":["大園","中壢","觀音","龍潭","桃園國際機場"],"新竹":["東區"],"苗栗":["三灣"],"台中":["西屯","石岡","清水","新社","大甲"],"彰化":["彰化市","二林","鹿港"],"雲林":["斗南","虎尾"],"嘉義":["布袋"],"台南":["安平","佳里","麻豆","新化","玉井"],"高雄":["左營","岡山","高雄國際機場"],"屏東":["屏東市","東港","枋山"],"宜蘭":["宜蘭市","蘇澳","南澳"],"花蓮":["花蓮市"],"台東":["台東市","關山"],"南投":["南投市"]};
	//dropbox拿取json 陣列
	var city_code={"七堵":2306188,"內湖":2306179,"新店":2306186,"淡水":2306211,"鶯歌":2306214,"金山":2306223,"三芝":2306228,"萬里":2306231,"雙溪":2306251,"大園":2306209,"中壢":2306184,"觀音":2306200,"龍潭":2306202,"桃園國際機場":2306254,"東區":2306185,"三灣":2306229,"西屯":2306181,"石岡":2306207,"清水":2306194,"新社":2306218,"大甲":2306210,"彰化市":2306183,"二林":2306195,"鹿港":2306201,"斗南":2306212,"虎尾":2306250,"布袋":2306206,"安平":2306182,"佳里":2306193,"麻豆":2306203,"新化":2306217,"玉井":2306232,"左營":2306180,"岡山":2306199,"高雄國際機場":2306255,"屏東市":2306189,"東港":2306213,"枋山":2306224,"宜蘭市":2306198,"蘇澳":2306208,"南澳":2306243,"花蓮市":2306187,"台東市":2306190,"關山":2306227,"南投市":2306204};
	
	//big city倒入方法
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
	//small city倒入方法		
		var small_city_in=function(){
					var big_city_ed=$(this).find(":selected").text();
			for(var i in big_to_smallcity['基隆'])
			{			
						$('#small_city').append("<option>"+big_to_smallcity['基隆'][i]+"</option>");
						$("#small_city").trigger("change");
						$(".selectpicker").selectpicker();
						//document.write(big_city[i]);
						
						
			}
		};
		
		
		big_city_in();
		small_city_in();
		
		//選擇big city
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