$(document).ready(function(){
    var nodeName;
    $(".dropdown").hover(
        function(event) {
            // The mouse has entered the element, can reference the element via 'this'
            nodeName = this.className;
            $(this).children("a").attr("aria-expanded", true);
            this.className += " open"
        },
        function (event) {
            // The mouse has left the element, can reference the element via 'this'
            this.className = nodeName
            $(this).children("a").attr("aria-expanded", false);
        }
     );
 })