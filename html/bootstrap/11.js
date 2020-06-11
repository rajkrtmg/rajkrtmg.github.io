function insertCustomerDetails() {
    //recieve values
    //receiveString("date");
    // receiveValues("invoiceNumber");
    // receiveString("customerId");
    //receiveString("customerName");
    //receiveString("customerCompany");
    //receiveString("customerAddress");
    //receiveValues("customerPhone");

    // insert values
    //  valueViewer("dateD", "DATE : ", receiveString("date"), "");
    //localStorage.setItem("dateD", encrypt(receiveString("date")))
    localStorage.setItem("invoiceNumberD", encrypt(String(receiveValues("invoiceNumber"))));

    //valueViewer("invoiceNumberD", "INVOICE# : ", receiveValues("invoiceNumber"), "");

    //valueViewer("customerIdD", "CUSTOMER ID : ", receiveString("customerId"), "");
    localStorage.setItem("customerIdD", encrypt(receiveString("customerId")));
    localStorage.setItem("customerNameD", encrypt(receiveString("customerName")));
    //valueViewer("customerNameD", "NAME : ", receiveString("customerName"), "");
    localStorage.setItem("customerCompanyD", encrypt(receiveString("customerCompany")))
    //valueViewer("customerCompanyD", "COMPANY : ", receiveString("customerCompany"), "");
    localStorage.setItem("customerAddressD", encrypt(receiveString("customerAddress")))
    //valueViewer("customerAddressD", "ADDRESS : ", receiveString("customerAddress"), "");
    localStorage.setItem("customerPhoneD", encrypt(String(receiveValues("customerPhone"))))
    //valueViewer("customerPhoneD", "PHONE : ", receiveValues("customerPhone"), "");
    snackBar(receiveString("customerName") + " is added to the invoice.")
}          