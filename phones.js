function getAllSmartphones() {
    $.ajax({
        // type: get, post, put or delete
        type: "GET",
        // url: link
        url: "http://localhost:8080/smartphones",
        // processing when calling data successfully
        success: function (foreseen) {
            console.log(foreseen);
            // redraw the board
            let content = ""
            for (let i = 0; i < foreseen.length; i++) {
                content += `<tr>
                                <td>${foreseen[i].producer}</td>
                                <td>${foreseen[i].model}</td>
                                <td>${foreseen[i].price}</td>
                                <td><button onclick="deleteById(${foreseen[i].id})">delete</button</td>
                            </tr>`
            }
            document.getElementById('content').innerHTML = content;
        }
    });
    event.preventDefault();
}
getAllSmartphones();

function addNewSmartPhone() {
    let producer = document.getElementById("producer").value;
    let model = document.getElementById("model").value;
    let price = document.getElementById("price").value;
    let newSmartphone = {
        "producer": producer,
        "model": model,
        "price": price
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newSmartphone),
        url: "http://localhost:8080/smartphones/",
        success: function (foreseen) {
            getAllSmartphones();
        }
    });
    event.preventDefault();
}

function deleteById(id) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/smartphones/" + id,
        success: function () {
            getAllSmartphones();
        }
    });
}