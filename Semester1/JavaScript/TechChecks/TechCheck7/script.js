functions processTax()
{

var salary = document.getElementById('salary').value;
var dependants = document.getElementById('dependants').value;
var federalTax = (salary * 0.25);
var provincialTax = (salary * 0.06);
var taxDeduction = ((salary * 0.02) * dependants);
var takeHome = salary - (federalTax + provincialTax - taxDeduction);

var federal_total= "Your federal tax is: " + federalTax;
var provincial_total = "Your provincial tax is: " + provincialTax;
var deduct_total = "Your dependants tax deduction is: " + taxDeduction;
var target_element = document.getElementById("tax_details");


    table_details += "<tr>";
    table_details += `<td>Your federal tax is: ${federalTax}</td>`;
    table_details += `<td>Your provincial tax is: ${provincialTax}/td>`;
    table_details += `<td>Your dependants tax deduction is: ${taxDeduction}/td>`;
    table_details += `<td>Your total take home pay: ${takeHome}/td>`;

}
document.getElementById('process_tax').addEventListener('click',processTax);
//    target_element.innerHTML = table_details;


