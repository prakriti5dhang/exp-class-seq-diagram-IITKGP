/*Redeveloped
Lab: Software Engineering
Exp:Modeling UML Class Diagrams and Sequence diagrams
File Name: ex3.js
Author: Prakriti Dhang*/


 
/*********************************************Function for Table 1 ****************************************/

var arrsr3 =[];

function addbtnt31(){
var inpt31=document.getElementById("inp31").value;

if(inpt31 == ""){
  alert("Please specify the object name!");

}

else{

    arrsr3.push(inpt31);
 /******* Creating options in table 2********/
 let newOptionID3a;
 newOptionID3a = 'newOption3a_' + inpt31;
 
let newOption3a = document.createElement('option');
let optionText3a = document.createTextNode(inpt31);
// set option text
newOption3a.appendChild(optionText3a);
// and option value

newOption3a.setAttribute("id", newOptionID3a);
newOption3a.setAttribute('value',inpt31);
let select3a = document.getElementById('selectobjs3'); 
select3a.appendChild(newOption3a);


let newOptionID3b;
 newOptionID3b = 'newOption3b_' + inpt31;
 
let newOption3b = document.createElement('option');
let optionText3b = document.createTextNode(inpt31);
// set option text
newOption3b.appendChild(optionText3b);
// and option value

newOption3b.setAttribute("id", newOptionID3b);
newOption3b.setAttribute('value',inpt31);
let select3b = document.getElementById('selectobjr3'); 
select3b.appendChild(newOption3b);

document.getElementById("inp31").value="";

}


}






 /*************************************Function for Table 2***********************************************/  

 var arrmesg3=[];
 function addbtnt32(){
  
  var selobjs3= document.getElementById("selectobjs3");
  var objsval3 =selobjs3.options[selobjs3.selectedIndex].text;
 
  var selobjmt3= document.getElementById("selectmsgtyp3");
  var mtval3 =selobjmt3.options[selobjmt3.selectedIndex].value;
 
  var inpt32 = document.getElementById("inp32").value;
 
  var selobjr3= document.getElementById("selectobjr3");
  var objrval3 =selobjr3.options[selobjr3.selectedIndex].text;
 
 
  if (objsval3=="Select sender object"){
     alert("Please select a sending object!");
   } 
   else if (objrval3=="Select receiver object"){
     alert("Please select a receiving object!");
   }
   
  
   else if(inpt32 == ""){
     alert("Please type in a message sent from source to target object!");
   }
   
   else if (mtval3 ==0){
     alert("Please select a message type!");
   }
  
 
  
 /* if((mtval == 2) || (mtval == 3)){
     alert("Please select Synchronous message type!");
  }*/
 
   
   else  {
 
     arrmesg3.push(inpt32);
     let newtr =document.createElement("tr");
     let newtdIDs= "objs"+objsval3;
     let newtds= document.createElement("td");
     newtds.setAttribute("id", newtdIDs);
    
     
     let newtdIDmt= "objs"+mtval3;
     let newtdmt= document.createElement("td");
     newtdmt.setAttribute("id", newtdIDmt);
    
     let newtdIDm= "objs"+inpt32;
     let newtdm= document.createElement("td");
     newtdm.setAttribute("id", newtdIDm);
 
     let newtdIDr= "objs"+objrval3;
     let newtdr= document.createElement("td");
     newtdr.setAttribute("id", newtdIDr);
 
 var newIconbtn = document.createElement("btn");
 newIconbtn.setAttribute("type","button");
 newIconbtn.setAttribute("class","btn btn-danger");
 newIconbtn.setAttribute("onclick", "removerow(this)");
 newIconbtn.setAttribute("style","cursor:pointer;");
 
        
 var newIconbtni = document.createElement("i");
 newIconbtni.setAttribute("class", "bi bi-dash-circle");
 newIconbtn.appendChild(newIconbtni);
 
 let newtdbtn= document.createElement("td");
 
 let tdvals=document.createTextNode(objsval3);
 let tdvalmt=document.createTextNode(mtval3);
 let tdvalm=document.createTextNode(inpt32);
 let tdvalr=document.createTextNode(objrval3);
 
 newtds.appendChild(tdvals);
 newtdmt.appendChild(tdvalmt);
 newtdm.appendChild(tdvalm);
 newtdr.appendChild(tdvalr);
 newtdbtn.appendChild(newIconbtn); 
 
 newtr.appendChild(newtds);
 newtr.appendChild(newtdmt);
 newtr.appendChild(newtdm);
 newtr.appendChild(newtdr);
 newtr.appendChild(newtdbtn);
 document.getElementById('tbodyt33').appendChild(newtr);
 
 }
 
 }
   
   
    

/***************************************************  Function for Draw UML **************************************************/
     function drawbtnex3(){
        document.getElementById("dispuml3").style.display="block";

        var namespace = joint.shapes;
      
              var graph = new joint.dia.Graph({}, { cellNamespace: namespace });
      
              paper = new joint.dia.Paper({
                  el: document.getElementById('seq_diag_ex3'),
                  model: graph,
                
                 
                  background: {
                      color: '#ffffff', //'rgba(0, 255, 0, 0.3)'
                  },
                  
                  cellViewNamespace: namespace
              });
      
      
      

             


              var objs1 = new joint.shapes.standard.Rectangle();
        
        objs1.position(14, 20);
        objs1.resize(100, 40);
        objs1.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[0],
                fill: 'black',
                fontSize: 16
            }
        });
        objs1.addTo(graph);

        var objs2 = new joint.shapes.standard.Rectangle();
        
        objs2.position(152, 20);
        objs2.resize(100, 40);
        objs2.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[1],
                fill: 'black',
                fontSize: 16
            }
        });
        objs2.addTo(graph);

        var objs3 = new joint.shapes.standard.Rectangle();
        
        objs3.position(296, 20);
        objs3.resize(100, 40);
        objs3.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[2],
                fill: 'black',
                fontSize: 16
            }
        });
        objs3.addTo(graph);

        var objs4 = new joint.shapes.standard.Rectangle();
        
        objs4.position(432, 20);
        objs4.resize(100, 40);
        objs4.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[3],
                fill: 'black',
                fontSize: 16
            }
        });
        objs4.addTo(graph);


        var objs5 = new joint.shapes.standard.Rectangle();
        
        objs5.position(561, 20);
        objs5.resize(100, 40);
        objs5.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[4],
                fill: 'black',
                fontSize: 16
            }
        });
        objs5.addTo(graph);

        var objs6 = new joint.shapes.standard.Rectangle();
        
        objs6.position(693, 20);
        objs6.resize(100, 40);
        objs6.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[5],
                fill: 'black',
                fontSize: 16
            }
        });
        objs6.addTo(graph);

        

        var objsd1 = new joint.shapes.standard.Rectangle();
        
        objsd1.position(10, 555);
        objsd1.resize(100, 40);
        objsd1.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[0],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd1.addTo(graph);

        
        var objsd2 = new joint.shapes.standard.Rectangle();
        
        objsd2.position(148, 555);
        objsd2.resize(100, 40);
        objsd2.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[1],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd2.addTo(graph);


        var objsd3 = new joint.shapes.standard.Rectangle();
        
        objsd3.position(298, 555);
        objsd3.resize(100, 40);
        objsd3.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[2],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd3.addTo(graph);


        var objsd4 = new joint.shapes.standard.Rectangle();
        
        objsd4.position(437, 555);
        objsd4.resize(100, 40);
        objsd4.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[3],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd4.addTo(graph);


        var objsd5 = new joint.shapes.standard.Rectangle();
        
        objsd5.position(568, 555);
        objsd5.resize(100, 40);
        objsd5.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[4],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd5.addTo(graph);


        var objsd6 = new joint.shapes.standard.Rectangle();
        
        objsd6.position(695, 555);
        objsd6.resize(100, 40);
        objsd6.attr({
            body: {

                fill: '#FFFC8C',
                strokeWidth: 2,
                //stroke:'#B90000'
            },
            label: {
                text: arrsr3[5],
                fill: 'black',
                fontSize: 16
            }
        });
        objsd6.addTo(graph);

        


        joint.shapes.standard.Link.define('examples.CustomLink', {
            attrs: {
                line: {
                    //stroke:'#B90000',
                    strokeDasharray: '4 2',
                    strokeWidth: 2,
                    targetMarker: {
                        'type': 'rect',
                        'stroke': 'none',
                        
                    }
                }
            },
            
          });
  
          var link1 = new joint.shapes.examples.CustomLink();
          
          link1.source(objs1);
          link1.target(objsd1);
         link1.addTo(graph);
  
         var link2 = new joint.shapes.examples.CustomLink();
          
         link2.source(objs2);
         link2.target(objsd2);
        link2.addTo(graph);

        var link3 = new joint.shapes.examples.CustomLink();
          
         link3.source(objs3);
         link3.target(objsd3);
        link3.addTo(graph);

        var link4 = new joint.shapes.examples.CustomLink();
          
         link4.source(objs4);
         link4.target(objsd4);
        link4.addTo(graph);

        var link5 = new joint.shapes.examples.CustomLink();
          
         link5.source(objs5);
         link5.target(objsd5);
        link5.addTo(graph);

        var link6 = new joint.shapes.examples.CustomLink();
          
         link6.source(objs6);
         link6.target(objsd6);
        link6.addTo(graph);


        var linkc1 = new joint.shapes.standard.Link();
        linkc1.source(link1);
        linkc1.target(link2);
         linkc1.attr({
           line: {
          //   strokeWidth: 2,
              //strokeDasharray: '4 2',
              sourceMarker: { 
                 'type': 'path',
                 'd':'M 0 70  L 140 70 L 0 70  ',
                 //'dy': 70
             },
             targetMarker: { 
               
              'type': 'path',
               'stroke-width': 2,
               'fill': 'black',
              // 'd': 'M 0 70 l 165 0 Z',
               'd': 'M 10 -5 0 0 10 5  Z ',
              // 'd':'M 0 0 L 10 5 L 0 10 Z'
               
              // 'd':'M 0 70  L 165 70 L 0 70  ', 
              
               //'dy': -70
           }
           
       }
         });
         linkc1.addTo(graph);


         var linkc35 = new joint.shapes.standard.Link();
         linkc35.source(link3);
         linkc35.target(link5);
          linkc35.attr({
            line: {
           strokeWidth: 2,
               //strokeDasharray: '4 2',
              
              targetMarker: { 
                
               'type': 'path',
                'stroke-width': 2,
                'fill': 'black',
               // 'd': 'M 0 70 l 165 0 Z',
                //'d': 'M 10 -5 0 0 10 5  Z ',
               // 'd':'M 0 0 L 10 5 L 0 10 Z'
                
               // 'd':'M 0 70  L 165 70 L 0 70  ', 
               
                //'dy': -70
            }
            
        }
          });
          linkc35.addTo(graph);


          var linkc53 = new joint.shapes.standard.Link();
         linkc53.source(link5);
         linkc53.target(link3);
          linkc53.attr({
            line: {
           strokeWidth: 2,
            strokeDasharray: '4 2',
              
              targetMarker: { 
                
               'type': 'path',
                'stroke-width': 2,
                'fill': 'black',
               // 'd': 'M 0 70 l 165 0 Z',
                //'d': 'M 10 -5 0 0 10 5  Z ',
               // 'd':'M 0 0 L 10 5 L 0 10 Z'
                
               // 'd':'M 0 70  L 165 70 L 0 70  ', 
               
                
            }
            
        }
          });
          linkc53.addTo(graph);





          var linkc36 = new joint.shapes.standard.Link();
          linkc36.source(link3);
          linkc36.target(link6);
           linkc36.attr({
             line: {
            strokeWidth: 2,
             //strokeDasharray: '4 2',
               
               targetMarker: { 
                 
                'type': 'path',
                 'stroke-width': 2,
                 'fill': 'black',
                // 'd': 'M 0 70 l 165 0 Z',
                 //'d': 'M 10 -5 0 0 10 5  Z ',
                // 'd':'M 0 0 L 10 5 L 0 10 Z'
                 
                // 'd':'M 0 70  L 165 70 L 0 70  ', 
                
                 
             }
             
         }
           });
           linkc36.addTo(graph);





      
      }
      
           
      