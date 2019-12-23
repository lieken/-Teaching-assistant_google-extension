const onMessage = (message) => {
  switch (message.action) {
    case 'HIDE':
      hide();
      break;
    case 'RESET':
      reset();
      break;
//
    case 'Hide_RoleS':
      Hide_Roles();
      break;
    case 'Reset_RoleS':
      Reset_Roles();
      break;
//
    case 'Hide_Childbt1':
      Hide_Childbt1();
        break;
    case 'Reset_Childbt1':
      Reset_Childbt1();
        break;
//
    case 'Mission':
      Mission();
       break;
    case 'Test':
        Test();
        break;
    case 'Reset_Test':
      Reset_Test();
     break;
//
    default:
      break;
  }
}
        
chrome.runtime.onMessage.addListener(onMessage);

function hide(){
   // document.body.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'none';  
   console.log("Hide")
  $(".blocklyToolboxDiv").css("display","none");  
}

const reset = () => {
 // document.body.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'block';  
  console.log("Reset")
  $(".blocklyToolboxDiv").css("display","block");
};

//隱藏類別
const Hide_Roles = () => {
 // document.body.getElementsByClassName('blocklyTreeRow')[0].style.display = 'none';
 console.log("Hide_Roles")
 $(".blocklyTreeRow").eq( 0 ).css("display","none");
};
const Reset_Roles = () => {
 // document.body.getElementsByClassName('blocklyTreeRow')[0].style.display = 'block';
 console.log("Reset_Roles")
 $(".blocklyTreeRow").eq( 0 ).css("display","block");
};

//隱藏子方塊
const Hide_Childbt1 = () => {
  console.log("Hide_Childbt1")

  //var t = document.body.getElementsByClassName("blocklyWorkspace")[2];
  //console.log(t)

  //blocklyDraggable 會再第一個按鈕案件觸發後形成 
  // t.getElementsByClassName('blocklyDraggable')[0].style.opacity = 0.2;
  // t.getElementsByClassName('blocklyDraggable')[0].style['pointer-events'] ='none';
  //rect矩形為該處發事件 故找尋位址取消
  //t.getElementsByTagName('rect')[0].style.visibility = 'hidden';

  $("g.blocklyDraggable").eq( 0).css("opacity","0.2");
  $("g.blocklyDraggable").eq( 0 ).css("pointer-events","none");
  $("g.blocklyBlockCanvas").eq( 2 ).children().eq(0).css("visibility","hidden");
  var t = $("g.blocklyDraggable");
  console.log(t)

 };
 const Reset_Childbt1 = () => {
  console.log("Reset_Childbt1")
 /* var t = document.body.getElementsByClassName("blocklyWorkspace")[2];
  console.log(t)
  t.getElementsByClassName('blocklyDraggable')[0].style.opacity = 1;
  t.getElementsByClassName('blocklyDraggable')[0].style['pointer-events'] ='auto';
  t.getElementsByTagName('rect')[0].style.visibility = 'visible';*/

  $("g.blocklyDraggable").eq( 0 ).css("opacity","1");
  $("g.blocklyDraggable").eq( 0).css("pointer-events","auto");
  $("g.blocklyBlockCanvas").eq( 2 ).children().eq(0).css("visibility","visible");

 };

 function Mission(){
  console.log("mission")
  $("#Question").remove();

  var target = $("div.right.menu");
  function genQuestionHTML(q){
    var html = `
      <p id="Question"; style="position: fixed; top: 0.5rem; right: 0.5rem; background-color: white; padding: 1rem; border-radius: 1rem">${q}</p>
    `
    return html;
  }

  target.append(genQuestionHTML('Hello Test Question'))

  
  console.log(target)
};


//測試
const Test = () => {
  console.log("Test")
  
  var target = $("div#maineditor");
  function genQuestionHTML(q){
    var html = `
      <div id="Question"; style="position: fixed; z-index:43;width:100%;height:135px;left:633px;top:64px;right:1199px;bottom:199px;background-color: white; padding: 1rem; border-style:dashed;border-color:#FFA600;"><h2>${q}</h2></div>
    `
    return html;
  }

  target.append(genQuestionHTML('Hello Test Question'))

  
  console.log(target)
};


const Reset_Test = () => {
  console.log("Reset_Test")
  $("#Question").remove();

  var target = $("div.right.menu");
  function genQuestionHTML(q){
    var html = `
      <p id="Question"; style="position: fixed; top: 0.5rem; right: 0.5rem; background-color: white; padding: 1rem; border-radius: 1rem">${q}</p>
    `
    return html;
  }

  target.append(genQuestionHTML('Hello Test Question'))

  
  console.log(target)
};