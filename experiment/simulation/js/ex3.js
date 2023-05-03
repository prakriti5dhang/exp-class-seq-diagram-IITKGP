/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: ex3.js
Author: */


 
/*********************************************Function for Table 1 ****************************************/








 /*************************************Function for Table 2***********************************************/  


   
   
    

/***************************************************  Function for Draw UML **************************************************/
     function drawbtnex3(){
 

        var namespace = joint.shapes;
      
              var graph = new joint.dia.Graph({}, { cellNamespace: namespace });
      
              paper = new joint.dia.Paper({
                  el: document.getElementById('seq_diag_ex2'),
                  model: graph,
                
                 
                  background: {
                      color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
                  },
                  
                  cellViewNamespace: namespace
              });
      
      
      
      
      }
      
           
      