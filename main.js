let btn = document.getElementById( "btn" );
let inp = document.getElementById( "inp" );
let boxs = document.querySelectorAll( ".box" );
let dataItem = document.querySelectorAll( ".dataTItems" );
let trach = document.querySelector(".trach")
let drag = null;

let random;
window.setInterval(
  function() {
    random = Math.floor( Math.random() * dataItem.length )
  }
,1000)
console.log(random)
btn.onclick = function() {
  if ( inp.value !== "" ) {
    dataItem[ random ].innerHTML += `<p class="item" draggable="true">${ inp.value }</p>`;
    inp.value = ``;
  }
  dragItem();
};
// NOTE: revision 
function dragItem () {
  let items = document.querySelectorAll( ".item" );
  items.forEach( item => {
    item.addEventListener( "dragstart", function() {
      drag = item;
      item.style.opacity = ".5";
    } );
    item.addEventListener( "dragend", function() {
      drag = null;
      item.style.opacity = "1";
    } );
    //nested loop for
    boxs.forEach( box => {
      box.addEventListener( "dragover", function( e ) {
        e.preventDefault();
        this.style.background = "darkslategrey";
        this.style.color = "#fff";
      } );
      box.addEventListener( "dragleave", function() {
        this.style.background = "white";
        this.style.color = "black";
      } );
      box.addEventListener( "drop", function() {
        box.append( drag );
        this.style.background = "white";
        this.style.color = "black";
      } );
    } );

    //! trach box
    trach.addEventListener( "dragover", function( e ) {
      e.preventDefault();
      this.style.background = `red`;
    } );
    trach.addEventListener( "dragleave", function() {
      this.style.background = "white";
      this.style.color = "black";
    } );
    trach.addEventListener( "drop", function() {
      item.remove()
      this.style.background = "white";
      this.style.color = "black";
    } );
  } );
}


