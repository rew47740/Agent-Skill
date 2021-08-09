fetch("json/data.json")
.then((response) => response.json())
.then(function(data){
    for (i = 0;i<data.length;i++){
        if(data[i].P_AGENT_LEVEL=='Contract'){
            show.innerHTML += '<div class="contract" tabindex="0">'+"<span style='font-size: 30px;background-color: #eaf1eb;border-radius:50px;padding:15px;box-shadow: -5px -5px 0 #aac5ae;'>"+data[i].SALE_FULLNAME_ENG+"</span>"+"<br />"+"<br />"+data[i].Agent_ID+"<br />"+data[i].PARTNER_TYPE+"<br />"+
            data[i].P_AGENT_LEVEL+"<br />"+data[i].SUP_FULLNAME+"<br />"+data[i].MANAGER_FULLNAME+"<br />"+data[i].TEAM+data[i].Status+'</div>'; 
        }
        else if(data[i].P_AGENT_LEVEL=='Freelance'){
            show.innerHTML += '<div class="freelance" tabindex="0">'+"<span style='font-size: 30px;background-color: #ecdfde;border-radius:50px;padding:15px;box-shadow: -5px -5px 0 #cca3a1;'>"+data[i].SALE_FULLNAME_ENG+"</span>"+"<br />"+"<br />"+data[i].Agent_ID+"<br />"+data[i].PARTNER_TYPE+"<br />"+
            data[i].P_AGENT_LEVEL+"<br />"+data[i].SUP_FULLNAME+"<br />"+data[i].MANAGER_FULLNAME+"<br />"+data[i].TEAM+data[i].Status+'</div>'; 
        }
        else if(data[i].P_AGENT_LEVEL=='Permanent'){
            show.innerHTML += '<div class="permanent" tabindex="0">'+"<span style='font-size: 30px;background-color: #efeffa;border-radius:50px;padding:15px;box-shadow: -5px -5px 0 #a2a4c2;'>"+data[i].SALE_FULLNAME_ENG+"</span>"+"<br />"+"<br />"+data[i].Agent_ID+"<br />"+data[i].PARTNER_TYPE+"<br />"+
            data[i].P_AGENT_LEVEL+"<br />"+data[i].SUP_FULLNAME+"<br />"+data[i].MANAGER_FULLNAME+"<br />"+data[i].TEAM+data[i].Status+'</div>'; 
        }  
        }
})
