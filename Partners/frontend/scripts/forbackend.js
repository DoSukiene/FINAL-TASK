$($.getJSON("http://localhost:5000/get-AllPartners",
    function (data) {

        //see Partners information in the console
        console.log(data.response)

        // to do a table out of Partners in html (table in html should be created, tbody id="PartnersTab", 18.08 recording, 2.23):
        //const Partners = data.response.Partners;
        //const PartnersTabElement = $("#PartnersTab");
        //for (let i = 0; i < customerslength; i++) {
            //const Partners = Prtners[i];
        // const row = document.createElement("tr");
        // const name = document.createElement("td");
        // name.innerhTML = Partners.name;
        // row.append(name);
        // const email = document.createElement("td");
        // email.innerhTML = Partners.email;
        // row.append(email);
        // const phone = document.createElement("td");
        // phone.innerhTML = Partners.phone;
        // row.append(phone);
        // const brand = document.createElement("td");
        // brand.innerhTML = Partners.brand;
        // row.append(brand);
        // const wwwsocial = document.createElement("td");
        // wwwsocial.innerhTML = Partners.wwwsocial;
        // row.append(wwwsocial);
        // const message = document.createElement("td");
        // message.innerhTML = Partners.message;
        // row.append(message);
        // PartnersTabElement.append(row);
        //}

    }))