fetch("json/data.json")
.then((response) => response.json())
.then(function(data){  
    dataused=data;  
    // for (i = 0;i<dataused.length;i++){
    //     if (dataused[i].Status=="active"){
    //         show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 25px;background-color: #efeffa;border-radius:50px;padding:15px;margin-bottom:10px;box-shadow: -5px -5px 0  #a2a4c2;line-height: 2.7;'>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div class = status>&nbsp</div>'+"<br />"+"<b>Agent ID : </b>"+dataused[i].Agent_ID+"<br />"+"<b>Partner Type : </b>"+dataused[i].PARTNER_TYPE+"<br />"+"<b>Agent Level : </b>"+
    //         dataused[i].P_AGENT_LEVEL+"<br />"+"<b>SUP. Fullname : </b>"+dataused[i].SUP_FULLNAME+"<br />"+"<b>Manager Fullname : </b>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<b>Team : </b>"+dataused[i].TEAM+"<br />"+"<b>Status : </b>"+dataused[i].Status+"<br />"+'</div>'; 
    //         show.innerHTML+='<p class="seemore">▼</p>';
    //     }
    //     else{
    //         show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 25px;background-color: #efeffa;border-radius:50px;padding:15px;margin-bottom:10px;box-shadow: -5px -5px 0  #a2a4c2;line-height: 2.7;'>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div style="background: rgb(182, 0, 0);" class = status >&nbsp</div>'+"<br />"+"<b>Agent ID : </b>"+dataused[i].Agent_ID+"<br />"+"<b>Partner Type : </b>"+dataused[i].PARTNER_TYPE+"<br />"+"<b>Agent Level : </b>"+
    //         dataused[i].P_AGENT_LEVEL+"<br />"+"<b>SUP. Fullname : </b>"+dataused[i].SUP_FULLNAME+"<br />"+"<b>Manager Fullname : </b>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<b>Team : </b>"+dataused[i].TEAM+"<br />"+"<b>Status : </b>"+dataused[i].Status+"<br />"+'</div>';     
    //         show.innerHTML+='<p class="seemore">▼</p>';
    //     }
    // }
    document.getElementById('btncontract').onclick = function(){
        filterAgentlevel('Contract');
    }
    document.getElementById('btnfreelance').onclick = function(){
        filterAgentlevel('Freelance');
    }
    document.getElementById('btnpermanent').onclick = function(){
        filterAgentlevel('Permanent');
    }
    document.getElementById('btnekkaphong').onclick = function(){
        filterManager('Ekkaphong Panya');
    }
    document.getElementById('btnekkaphong2').onclick = function(){
        filterManager('Ekkaphong Panya 2');
    }
    document.getElementById('btnkomsan').onclick = function(){
        filterManager('Komsan Madbamrung');
    }
    document.getElementById('btnnaphat').onclick = function(){
        filterManager('Naphat Narukasolkkul');
    }
    document.getElementById('btnphanthira').onclick = function(){
        filterManager('Phanthira Saengboon');
    }
    document.getElementById('btnrasa').onclick = function(){
        filterManager('Rasa Amatawat');
    }
    document.getElementById('btnsarinda').onclick = function(){
        filterManager('Sarinda Jiakwattanachayakorn');
    }
    document.getElementById('btnsasithorn').onclick = function(){
        filterManager('Sasithorn Tonthao');
    }
    document.getElementById('btnthitirat').onclick = function(){
        filterManager('Thitirat Aukkarakosaithanakul');
    }
    document.getElementById('btndigital').onclick = function(){
        filterTeam('Digital');
    }
    document.getElementById('btnteleinbound').onclick = function(){
        filterTeam('TeleInbound');
    }
    document.getElementById('btnteleoutbound').onclick = function(){
        filterTeam('TeleOutbound');
    }


        function filterAgentlevel (level){
            show.innerHTML = " ";
            dataused = data.filter(function(obj) {return obj.P_AGENT_LEVEL==level}); 
            for (i = 0;i<dataused.length;i++){
                if (dataused[i].Status=="active"){
                    show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 25px;background-color: #efeffa;border-radius:50px;padding:15px;margin-bottom:10px;box-shadow: -5px -5px 0  #a2a4c2;line-height: 2.7;'>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div class = status>&nbsp</div>'+"<br />"+"<b>Agent ID : </b>"+dataused[i].Agent_ID+"<br />"+"<b>Partner Type : </b>"+dataused[i].PARTNER_TYPE+"<br />"+"<b>Agent Level : </b>"+
                    dataused[i].P_AGENT_LEVEL+"<br />"+"<b>SUP. Fullname : </b>"+dataused[i].SUP_FULLNAME+"<br />"+"<b>Manager Fullname : </b>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<b>Team : </b>"+dataused[i].TEAM+"<br />"+"<b>Status : </b>"+dataused[i].Status+"<br />"+'</div>'; 
                    show.innerHTML+='<p class="seemore">▼</p>';
                }
                else{
                    show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 25px;background-color: #efeffa;border-radius:50px;padding:15px;margin-bottom:10px;box-shadow: -5px -5px 0  #a2a4c2;line-height: 2.7;'>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div style="background: rgb(182, 0, 0);" class = status >&nbsp</div>'+"<br />"+"<b>Agent ID : </b>"+dataused[i].Agent_ID+"<br />"+"<b>Partner Type : </b>"+dataused[i].PARTNER_TYPE+"<br />"+"<b>Agent Level : </b>"+
                    dataused[i].P_AGENT_LEVEL+"<br />"+"<b>SUP. Fullname : </b>"+dataused[i].SUP_FULLNAME+"<br />"+"<b>Manager Fullname : </b>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<b>Team : </b>"+dataused[i].TEAM+"<br />"+"<b>Status : </b>"+dataused[i].Status+"<br />"+'</div>';     
                    show.innerHTML+='<p class="seemore">▼</p>';
                }
            }
        }
        function filterManager (filter){
            show.innerHTML = " ";
            dataused = data.filter(function(obj) {return obj.MANAGER_FULLNAME==filter}); 
            for (i = 0;i<dataused.length;i++){
                if (dataused[i].Status=="active"){
                    show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 25px;background-color: #efeffa;border-radius:50px;padding:15px;margin-bottom:10px;box-shadow: -5px -5px 0  #a2a4c2;line-height: 2.7;'>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div class = status>&nbsp</div>'+"<br />"+"<b>Agent ID : </b>"+dataused[i].Agent_ID+"<br />"+"<b>Partner Type : </b>"+dataused[i].PARTNER_TYPE+"<br />"+"<b>Agent Level : </b>"+
                    dataused[i].P_AGENT_LEVEL+"<br />"+"<b>SUP. Fullname : </b>"+dataused[i].SUP_FULLNAME+"<br />"+"<b>Manager Fullname : </b>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<b>Team : </b>"+dataused[i].TEAM+"<br />"+"<b>Status : </b>"+dataused[i].Status+"<br />"+'</div>'; 
                    show.innerHTML+='<p class="seemore">▼</p>';
                }
                else{
                    show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 25px;background-color: #efeffa;border-radius:50px;padding:15px;margin-bottom:10px;box-shadow: -5px -5px 0  #a2a4c2;line-height: 2.7;'>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div style="background: rgb(182, 0, 0);" class = status >&nbsp</div>'+"<br />"+"<b>Agent ID : </b>"+dataused[i].Agent_ID+"<br />"+"<b>Partner Type : </b>"+dataused[i].PARTNER_TYPE+"<br />"+"<b>Agent Level : </b>"+
                    dataused[i].P_AGENT_LEVEL+"<br />"+"<b>SUP. Fullname : </b>"+dataused[i].SUP_FULLNAME+"<br />"+"<b>Manager Fullname : </b>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<b>Team : </b>"+dataused[i].TEAM+"<br />"+"<b>Status : </b>"+dataused[i].Status+"<br />"+'</div>';     
                    show.innerHTML+='<p class="seemore">▼</p>';
                }
            }
        }
        function filterTeam (filter){
            show.innerHTML = " ";
            dataused = data.filter(function(obj) {return obj.TEAM==filter}); 
            for (i = 0;i<dataused.length;i++){
                if (dataused[i].Status=="active"){
                    show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 25px;background-color: #efeffa;border-radius:50px;padding:15px;margin-bottom:10px;box-shadow: -5px -5px 0  #a2a4c2;line-height: 2.7;'>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div class = status>&nbsp</div>'+"<br />"+"<b>Agent ID : </b>"+dataused[i].Agent_ID+"<br />"+"<b>Partner Type : </b>"+dataused[i].PARTNER_TYPE+"<br />"+"<b>Agent Level : </b>"+
                    dataused[i].P_AGENT_LEVEL+"<br />"+"<b>SUP. Fullname : </b>"+dataused[i].SUP_FULLNAME+"<br />"+"<b>Manager Fullname : </b>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<b>Team : </b>"+dataused[i].TEAM+"<br />"+"<b>Status : </b>"+dataused[i].Status+"<br />"+'</div>'; 
                    show.innerHTML+='<p class="seemore">▼</p>';
                }
                else{
                    show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 25px;background-color: #efeffa;border-radius:50px;padding:15px;margin-bottom:10px;box-shadow: -5px -5px 0  #a2a4c2;line-height: 2.7;'>"+dataused[i].SALE_FULLNAME_ENG+"</span>"+'<div style="background: rgb(182, 0, 0);" class = status >&nbsp</div>'+"<br />"+"<b>Agent ID : </b>"+dataused[i].Agent_ID+"<br />"+"<b>Partner Type : </b>"+dataused[i].PARTNER_TYPE+"<br />"+"<b>Agent Level : </b>"+
                    dataused[i].P_AGENT_LEVEL+"<br />"+"<b>SUP. Fullname : </b>"+dataused[i].SUP_FULLNAME+"<br />"+"<b>Manager Fullname : </b>"+dataused[i].MANAGER_FULLNAME+"<br />"+"<b>Team : </b>"+dataused[i].TEAM+"<br />"+"<b>Status : </b>"+dataused[i].Status+"<br />"+'</div>';     
                    show.innerHTML+='<p class="seemore">▼</p>';
                }
            }
        }
        
})
