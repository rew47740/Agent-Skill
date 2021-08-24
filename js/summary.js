fetch("json/summary.json")
.then((response) => response.json())
.then(function(data){  
    dataused=data;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    var c5 = 0;
    var c6 = 0;
    var c7 = 0;
    var c8 = 0;
    var c9 = 0;
    var c10 = 0;
    showdata();
    function showdata(){ 
        show1.innerHTML = " ";     
        show2.innerHTML = " ";        
        for (i = 0;i<dataused.length;i++){
            if (dataused[i].MANAGER_FULLNAME=="Phanthira Saengboon"){
                c1 += dataused[i].TOTAL_Revenue_X_U
                n1.innerHTML = "Phanthira Saengboon"+"<br />";
                t1.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show1.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s1.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c1;
            }
            if (dataused[i].MANAGER_FULLNAME=="Rasa Amatawat"){
                c2 += dataused[i].TOTAL_Revenue_X_U
                n2.innerHTML = "Rasa Amatawat"
                t2.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show2.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s2.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c2;
            }
            if (dataused[i].MANAGER_FULLNAME=="Sasithorn Tonthao"){
                c3 += dataused[i].TOTAL_Revenue_X_U
                n3.innerHTML = "Sasithorn Tonthao"
                t3.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show3.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s3.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c3;
            }
            if (dataused[i].MANAGER_FULLNAME=="Sarinda Jiakwattanachayakorn"){
                c4 += dataused[i].TOTAL_Revenue_X_U
                n4.innerHTML = "Sarinda Jiakwattanachayakorn"
                t4.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show4.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s4.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c4;
            }
            if (dataused[i].MANAGER_FULLNAME=="Komsan Madbamrung"){
                c5 += dataused[i].TOTAL_Revenue_X_U
                n5.innerHTML = "Komsan Madbamrung"
                t5.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show5.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s5.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c5;
            }
            if (dataused[i].MANAGER_FULLNAME=="Thitirat Aukkarakosaithanakul"){
                c6 += dataused[i].TOTAL_Revenue_X_U
                n6.innerHTML = "Thitirat Aukkarakosaithanakul"
                t6.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show6.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s6.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c6;
            }
            if (dataused[i].MANAGER_FULLNAME=="Naphat Narukasolkkul"){
                c7 += dataused[i].TOTAL_Revenue_X_U
                n7.innerHTML = "Naphat Narukasolkkul"
                t7.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show7.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s7.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c7;
            }
            if (dataused[i].MANAGER_FULLNAME=="Ekkaphong Panya 2"){
                c8 += dataused[i].TOTAL_Revenue_X_U
                n8.innerHTML = "Ekkaphong Panya 2"
                t8.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show8.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s8.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c8;
            }
            if (dataused[i].MANAGER_FULLNAME=="Ekkaphong Panya"){
                c9 += dataused[i].TOTAL_Revenue_X_U
                n9.innerHTML = "Ekkaphong Panya"
                t9.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show9.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s9.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c9;
            }
            if (dataused[i].MANAGER_FULLNAME=="Linjee Punyayom"){
                c10 += dataused[i].TOTAL_Revenue_X_U
                n10.innerHTML = "Linjee Punyayom"
                t10.innerHTML="<span style ='font-size:25px'>TEAM : </span>"+dataused[i].TEAM;
                show10.innerHTML += '<div class="Column" tabindex="0">'+"<br />"+"<span class = bold>Agent Level : </span>"+dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>Number of people : </span>"+dataused[i].count+"<br />"+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+'</div>'+'</div>';
                s10.innerHTML="<span style ='font-size:25px'>TOTAL Revenue :  </span>"+c10;
            }
    }
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          totop.style.display = "block";
        } else {
          totop.style.display = "none";
        }
          }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    totop.addEventListener('click',topFunction);
    window.onscroll = function() {scrollFunction()};
}
});
