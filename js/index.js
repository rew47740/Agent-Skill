fetch("json/data.json")
.then((response) => response.json())
.then(function(data){  
    var agentlevelcheck=0;
    var managercheck=0;
    var teamcheck=0;
    dataused=data.filter(function(obj) {return obj.TEAM=="Digital"}); 
    showdata();
    function filterAgentlevel (filter){
        agentlevelcheck=1;
        if (managercheck==1){
            dataused = dataused.filter(function(obj) {return obj.P_AGENT_LEVEL==filter});
        }
        if (teamcheck==1){
            dataused = dataused.filter(function(obj) {return obj.P_AGENT_LEVEL==filter});
        }
        else{
            dataused = data.filter(function(obj) {return obj.P_AGENT_LEVEL==filter}); 
        }
    }
    function filterManager (filter){
        managercheck=1;        
        if (agentlevelcheck==1){
            dataused = dataused.filter(function(obj) {return obj.MANAGER_FULLNAME==filter});
        }
        if (teamcheck==1){
            dataused = dataused.filter(function(obj) {return obj.MANAGER_FULLNAME==filter});
        }
        else{
            dataused = data.filter(function(obj) {return obj.MANAGER_FULLNAME==filter}); 
        }
    }
    function filterTeam (filter){
        teamcheck=1;   
        if (agentlevelcheck==1){
            dataused = dataused.filter(function(obj) {return obj.TEAM==filter});
        }
        if (managercheck==1){
            dataused = dataused.filter(function(obj) {return obj.TEAM==filter});
        }
        else{
            dataused = data.filter(function(obj) {return obj.TEAM==filter}); 
        }
    }
    function showdata(){ 
        show.innerHTML = " ";           
        for (i = 0;i<dataused.length;i++){
            if (dataused[i].Status=="active"){
                show.innerHTML += '<div class="permanent" tabindex="0">'+"<span class = agentname>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div class = status>&nbsp</div>'+"<br />"+"<span class = bold>Agent ID : </span>"+dataused[i].Agent_ID+"<br />"+"<span class = bold>Agent Level : </span>"+
                dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>SUP. Fullname : </span>"+dataused[i].SUP_FULLNAME+"<br />"+"<span class = bold>Manager Fullname : </span>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<span class = bold>Team : </span>"+dataused[i].TEAM+"<br />"+"<span class = bold>Status : </span>"+dataused[i].Status+"<br />"+'<div class="RowLv">'+'<div class = Column>'+"<span class = bold>Main Skill</span>"+"<br />"+dataused[i].Main_Skill+'</div>'+'<div class = Column>'+"<span class = bold>2nd Skill</span>"+"<br />"+dataused[i].two_Skill+'</div>'+'<div class = Column>'+"<span class = bold>3rd Skill</span>"+"<br />"+dataused[i].three_Skill+'</div>'+'<div class = Column>'+"<span class = bold>4th Skill</span>"+"<br />"+dataused[i].four_Skill+'</div>'+'</div>'+'<p class="seemore">▾</p>'+'<div class = RowLv>'+'<div class = Column>'+"<span class = bold>5th Skill</span>"+"<br />"+dataused[i].five_Skill+'</div>'+'<div class = Column>'+"<span class = bold>6th Skill</span>"+"<br />"+dataused[i].six_Skill+'</div>'+'<div class = Column>'+"<span class = bold>7th Skill</span>"+"<br />"+dataused[i].seven_Skill+'</div>'+'<div class = Column>'+"<span class = bold>8th Skill</span>"+"<br />"+dataused[i].eight_Skill+'</div>'+'</div>'+'<div class="Row">'+'<div class="Left">'+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+'</div>'+'<div class="Right">'+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+"<br />"+'</div>'+'</div>'+'</div>'; 
            }
            else{
                show.innerHTML += '<div class="permanent" tabindex="0">'+"<span class = agentname>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div style="background: rgb(182, 0, 0);" class = status >&nbsp</div>'+"<br />"+"<span class = bold>Agent ID : </span>"+dataused[i].Agent_ID+"<br />"+"<span class = bold>Agent Level : </span>"+
                dataused[i].P_AGENT_LEVEL+"<br />"+"<span class = bold>SUP. Fullname : </span>"+dataused[i].SUP_FULLNAME+"<br />"+"<span class = bold>Manager Fullname : </span>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<span class = bold>Team : </span>"+dataused[i].TEAM+"<br />"+"<span class = bold>Status : </span>"+dataused[i].Status+"<br />"+'<div class="RowLv">'+'<div class = Column>'+"<span class = bold>Main Skill</span>"+"<br />"+dataused[i].Main_Skill+'</div>'+'<div class = Column>'+"<span class = bold>2nd Skill</span>"+"<br />"+dataused[i].two_Skill+'</div>'+'<div class = Column>'+"<span class = bold>3rd Skill</span>"+"<br />"+dataused[i].three_Skill+'</div>'+'<div class = Column>'+"<span class = bold>4th Skill</span>"+"<br />"+dataused[i].four_Skill+'</div>'+'</div>'+'<p class="seemore">▾</p>'+'<div class = RowLv>'+'<div class = Column>'+"<span class = bold>5th Skill</span>"+"<br />"+dataused[i].five_Skill+'</div>'+'<div class = Column>'+"<span class = bold>6th Skill</span>"+"<br />"+dataused[i].six_Skill+'</div>'+'<div class = Column>'+"<span class = bold>7th Skill</span>"+"<br />"+dataused[i].seven_Skill+'</div>'+'<div class = Column>'+"<span class = bold>8th Skill</span>"+"<br />"+dataused[i].eight_Skill+'</div>'+'</div>'+'<div class="Row">'+'<div class="Left">'+"<span class = bold>SUB XTVS : </span>"+dataused[i].SUB_XTVS+"<br />"+"<span class = bold>SUB XTOL : </span>"+dataused[i].SUB_XTOL+"<br />"+"<span class = bold>SUB XTMH : </span>"+dataused[i].SUB_XTMH+"<br />"+"<span class = bold>SUB UTVS : </span>"+dataused[i].SUB_UTVS+"<br />"+"<span class = bold>SUB UTOL : </span>"+dataused[i].SUB_UTOL+"<br />"+"<span class = bold>SUB UTMH : </span>"+dataused[i].SUB_UTMH+"<br />"+"<span class = bold>TOTAL SUB X : </span>"+dataused[i].TOTAL_SUB_X+"<br />"+"<span class = bold>TOTAL SUB U : </span>"+dataused[i].TOTAL_SUB_U+"<br />"+"<span class = bold>TOTAL SUB X+U : </span>"+dataused[i].TOTAL_SUB_X_U+"<br />"+'</div>'+'<div class="Right">'+"<span class = bold>Revenue XTVS : </span>"+dataused[i].Revenue_XTVS+"<br />"+"<span class = bold>Revenue XTOL : </span>"+dataused[i].Revenue_XTOL+"<br />"+"<span class = bold>Revenue XTMH : </span>"+dataused[i].Revenue_XTMH+"<br />"+"<span class = bold>Revenue UTVS : </span>"+dataused[i].Revenue_UTVS+"<br />"+"<span class = bold>Revenue UTOL : </span>"+dataused[i].Revenue_UTOL+"<br />"+"<span class = bold>Revenue UTMH : </span>"+dataused[i].Revenue_UTMH+"<br />"+"<span class = bold>TOTAL Revenue X : </span>"+dataused[i].TOTAL_Revenue_X+"<br />"+"<span class = bold>TOTAL Revenue U : </span>"+dataused[i].TOTAL_Revenue_U+"<br />"+"<span class = bold>TOTAL Revenue X+U : </span>"+dataused[i].TOTAL_Revenue_X_U+"<br />"+'</div>'+'</div>'+'</div>'; 
            }
        }
    }
    document.getElementById('btncontract').onclick = function(){
        filterAgentlevel('Contract');
        showdata();
    }
    document.getElementById('btnfreelance').onclick = function(){
        filterAgentlevel('Freelance');
        showdata();
    }
    document.getElementById('btnpermanent').onclick = function(){
        filterAgentlevel('Permanent');
        showdata();
    }
    document.getElementById('btnekkaphong').onclick = function(){
        filterManager('Ekkaphong Panya');
        showdata();
    }
    document.getElementById('btnekkaphong2').onclick = function(){
        filterManager('Ekkaphong Panya 2');
        showdata();
    }
    document.getElementById('btnkomsan').onclick = function(){
        filterManager('Komsan Madbamrung');
        showdata();
    }
    document.getElementById('btnnaphat').onclick = function(){
        filterManager('Naphat Narukasolkkul');
        showdata();
    }
    document.getElementById('btnphanthira').onclick = function(){
        filterManager('Phanthira Saengboon');
        showdata();
    }
    document.getElementById('btnrasa').onclick = function(){
        filterManager('Rasa Amatawat');
        showdata();
    }
    document.getElementById('btnsarinda').onclick = function(){
        filterManager('Sarinda Jiakwattanachayakorn');
        showdata();
    }
    document.getElementById('btnsasithorn').onclick = function(){
        filterManager('Sasithorn Tonthao');
        showdata();
    }
    document.getElementById('btnthitirat').onclick = function(){
        filterManager('Thitirat Aukkarakosaithanakul');
        showdata();
    }
    document.getElementById('btndigital').onclick = function(){
        filterTeam('Digital');
        showdata();
    }
    document.getElementById('btnteleinbound').onclick = function(){
        filterTeam('TeleInbound');
        showdata();
    }
    document.getElementById('btnteleoutbound').onclick = function(){
        filterTeam('TeleOutbound');
        showdata();
    }
})
