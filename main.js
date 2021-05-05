var container = document.getElementById("container");
var totalBillDiv= document.getElementById("totalBill");
var total_cal= document.getElementById("total_cal");
var reset= document.getElementById("reset");
var totalBill = new Array();

var counter=0;

function appendRow() {
    var txt = document.createElement('div');
    txt.id = "text_fields"
    txt.innerHTML = "<label for=\"name\">Product Name:</label>\n" +
        "        <input name=\"product_name\" id=\"name\" type=\"text\"/>\n" +
        "        <label for=\"quantity\">Quantity</label>\n" +
        "        <input name=\"quantity\" min=\"1\" max=\"100\" id='quantity"+counter+"' type=\"number\"/>\n" +
        "        <label for=\"cost\">Cost</label>\n" +
        "        <input name=\"cost\" id='cost"+counter+"' step=\"any\" min=\"1\" max=\"10000\"/>" +
        "        <label name=\"bill\" id='bill"+counter+"' > </label>" +
        "    </div>";
    container.appendChild(txt);
    total_cal.style.display="inline";
    reset.style.display="inline";
    var x = counter-1;
    counter++;
    if(x>=0)
    {
        var  quantity = document.getElementById("quantity" + x);
        var  cost = document.getElementById("cost"+x);
        var bill =document.getElementById("bill"+x);
        if(quantity!=null && cost!=null)
        {
            billForOneItem(quantity.value,cost.value,bill)
        }
    }
}
function billForOneItem(quantity,cost,bill)
{
   let billForOneItem = (quantity*cost);
   bill.textContent = "bill for this product is :"+billForOneItem;

        // console.log(billForOneItem);
        totalBill.push(billForOneItem);
        // console.log(totalBill);
}
function calculateTotal() {let i;
   let sum=0;
    for (i=0;i<totalBill.length;i++)
    {
            sum += totalBill[i];
    }
    console.log(totalBillDiv.firstElementChild.innerHTML);
    totalBillDiv.firstElementChild.innerHTML= sum.toString();

}
//this will reset the values
function resetVal() {
    var value=0;
    while (totalBill.length > 0) {
        totalBill.pop();
    }
    totalBillDiv.firstElementChild.innerHTML=value.toString() ;
    container.children[0].style.display="none";
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}