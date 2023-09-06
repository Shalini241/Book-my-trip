function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phoneNum").value;
    var comment = document.getElementById("comment").value;

    // Regular expression patterns
    var namePattern = /^[A-Z][a-z]+$/;
    var emailPattern = /^[A-Za-z0-9._%+-]+@utdallas\.edu$/;
    var phonePattern = /^\(\d{3}\) \d{3}-\d{4}/;

    // Check first name
    if (!namePattern.test(firstName)) {
      alert("Invalid first name. Please enter only alphabetical characters and enter first letter in Capital");
      return false;
    }

    // Check last name
    if (!namePattern.test(lastName)) {
      alert("Invalid last name. Please enter only alphabetical characters and enter first letter in Capital");
      return false;
    }

    if(firstName === lastName){
        alert("First name and last name can't be same");
      return false;
    }

    // Check email
    if (!emailPattern.test(email)) {
      alert("Invalid email. Please enter a valid UTDallas email address.");
      return false;
    }

    // Check comment
    if (comment.trim().length < 10) {
        alert("Invalid comment. Please enter comment of atleast 10 characters");
        return false;
      }

    // Check phone
    if (!phonePattern.test(phone)) {
        alert("Invalid phone no. Please enter a valid phone number.");
        return false;
      }
    return true;
}

var hotelData = {};
var carData = {};
var flightData = {};

function showHotelForm() {

    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");
    var city = document.getElementById("city").value;

    if(checkinInput.value == "" || city == "" || checkoutInput.value==""){
      alert("Please fill up all the details.");
      return;
    }
    const today = new Date();
    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);

    if (checkinDate < today) {
      alert("Check-in date cannot be in the past.");
      return;
    }

    if (checkinDate > checkoutDate) {
      alert("Check-in date cannot be after check-out date.");
      return;
    }

    hotelData.city  = city;
    hotelData.checkinDate = checkinDate.toDateString();
    hotelData.checkoutDate = checkoutDate.toDateString();

    var hotelSearchInfo = document.getElementById("hotelInfo");
    hotelSearchInfo.style.display = 'none';

        const rows = $("#hotelTable tr:not(:first)");

        // Loop through each row and update the values
        rows.each(function(index) {
            const row = $(this);
            row.find("td:eq(0)").text(city);
            row.find("td:eq(2)").text(hotelData.checkinDate);
            row.find("td:eq(3)").text(hotelData.checkoutDate);
        });
}

function showCarRentalForm() {

  const checkinInput = document.getElementById("checkin");
  const checkoutInput = document.getElementById("checkout");
  var city = document.getElementById("city").value;

  if(checkinInput.value == "" || city == "" || checkoutInput.value==""){
    alert("Please fill up all the details.");
    return;
  }

  const today = new Date();
  const checkinDate = new Date(checkinInput.value);
  const checkoutDate = new Date(checkoutInput.value);

  if (checkinDate < today) {
    alert("Check-in date cannot be in the past.");
    return;
  }

  if (checkinDate > checkoutDate) {
    alert("Check-in date cannot be after check-out date.");
    return;
  }

    carData.city  = city;
    carData.checkinDate = checkinDate.toDateString();
    carData.checkoutDate = checkoutDate.toDateString();

    var carSearchInfo = document.getElementById("carInfo");
    carSearchInfo.style.display = 'none';

    const rows = $("#carTable tr:not(:first)");

        // Loop through each row and update the values
        rows.each(function(index) {
            const row = $(this);
            row.find("td:eq(0)").text(city);
            row.find("td:eq(1)").text(carData.checkinDate);
            row.find("td:eq(2)").text(carData.checkoutDate);
        });
}

function selectHotel(event) {
    event.preventDefault();
    const selectedHotel = document.querySelector('input[name="hotel"]:checked').value;
    hotelData.hotelName = selectedHotel;

    var oldData = JSON.parse(localStorage.getItem('hotelData')) || [];
    oldData.push(hotelData);
    localStorage.setItem("hotelData", JSON.stringify(oldData));


    var success = document.getElementById("hotelConfirmation");
    var hotelNamesOptions = document.getElementById("hotelSearchOptions");
    hotelNamesOptions.style.display = 'none';

    var title = document.getElementById("hotelPageTitle");
    title.style.display='none';
    success.innerHTML = "Hotel has been booked successfully";
}

function selectCar(event) {
  event.preventDefault();
  const selectedCar = document.querySelector('input[name="car"]:checked').value;
  carData.carName = selectedCar;

    var oldData = JSON.parse(localStorage.getItem('carData')) || [];
    oldData.push(carData);
    localStorage.setItem("carData", JSON.stringify(oldData));


    var success = document.getElementById("carConfirmation");
    var carNamesOptions = document.getElementById("carSearchOptions");
    carNamesOptions.style.display = 'none';

    var title = document.getElementById("carPageTitle");
    title.style.display='none';
    success.innerHTML = "Car has been booked successfully";
}

function selectFlight(event) {
  event.preventDefault();
  const selectedFlight = document.querySelector('input[name="flight"]:checked').value;
  flightData.flightName = selectedFlight;

    var oldData = JSON.parse(localStorage.getItem('flightData')) || [];
    oldData.push(flightData);
    localStorage.setItem("flightData", JSON.stringify(oldData));


    var success = document.getElementById("flightConfirmation");

    var title = document.getElementById("flightPageTitle");
    title.style.display='none';
    success.innerHTML = "Flight has been booked successfully";
}

function showPassengerForm() {
  const newPageUrl = "passengerdetails.html"; 
  window.location.href = newPageUrl;
}


    function showQuestion(questionNumber) {
      var prevQuestion = document.getElementById("question" + (questionNumber-1));
      var currentQuestion = document.getElementById("question" + questionNumber);

      if (prevQuestion) {
        prevQuestion.style.display = "none";
      }

      if (currentQuestion) {
        currentQuestion.style.display = "block";
      }
    }

    function nextQuestion(currentQuestion) {
      showQuestion(currentQuestion);
    }

    function showQuestion(questionNumber) {
      var prevQuestion = document.getElementById("question" + (questionNumber-1));
      var currentQuestion = document.getElementById("question" + questionNumber);

      if (prevQuestion) {
        prevQuestion.style.display = "none";
      }

      if (currentQuestion) {
        currentQuestion.style.display = "block";
      }
    }

    function prevQuestion(currentQuestion) {
      showPrevQuestion(currentQuestion);
    }

    function showPrevQuestion(questionNumber) {
      var prevQuestion = document.getElementById("question" + questionNumber);
      var currentQuestion = document.getElementById("question" + (questionNumber+1));

      if (prevQuestion) {
        prevQuestion.style.display = "block";
      }

      if (currentQuestion) {
        currentQuestion.style.display = "none";
      }
    }

    function getSelectedValue() {
      var maxflown = document.getElementsByName("maxflown");
      var maxflownval;

      for (var i = 0; i < maxflown.length; i++) {
        if (maxflown[i].checked) {
          maxflownval = maxflown[i].value;
        }
      }

      var senior = document.getElementsByName("senior");
      var seniorval;

      for (var i = 0; i < senior.length; i++) {
        if (senior[i].checked) {
          seniorval = senior[i].value;
        }
      }

      var disability = document.getElementsByName("disability");
      var disabilityval;

      for (var i = 0; i < disability.length; i++) {
        if (disability[i].checked) {
          disabilityval = disability[i].value;
        }
      }

      return [maxflownval, seniorval, disabilityval];
    }

    function submitForm(min, sec) {
      var selectedValue = getSelectedValue();
      var currentQuestion = document.getElementById("question3");
      currentQuestion.style.display = "none";
      var timeTaken = document.getElementById("timeTaken");
      min = min < 1 ? 0 : min;
      timeTaken.innerHTML = "Thanks for spending "+ parseInt(min) + " minutes and "+sec+" seconds on the questionaaire. Here are the offers."

      var offers = false;
      var list = document.getElementById("offerList");

      if(selectedValue[0] =="yes"){
        offers = true;
        var listItem = document.createElement("li");
        listItem.textContent = "50% discount on next flight, since you are the frequent flyer";
        list.appendChild(listItem);
        list.appendChild(document.createElement("br"));
        list.appendChild(document.createElement("br"));
      }
      if(selectedValue[1] == "yes") {
        offers = true;
        var listItem = document.createElement("li");
        listItem.textContent = "Business class for next flight, since you are a senior";
        list.appendChild(listItem);
        list.appendChild(document.createElement("br"));
        list.appendChild(document.createElement("br"));
      }
      if(selectedValue[2]=="yes"){
        offers = true;
        var listItem = document.createElement("li");
        listItem.textContent = "First class for next flight, since you are a person with disability";
        list.appendChild(listItem);
      }
      if(offers==false){
        var listItem = document.createElement("h3");
        listItem.textContent = "No offers available for you at this time";
        list.appendChild(listItem);
      }
    }

    function showFlightForm(isOneWay) {
      var origin = document.getElementById("origin").value;
      var destination = document.getElementById("destination").value;
      var departure = document.getElementById("departure").value;
      var arrival = document.getElementById("arrival").value;

      const departureDate = new Date(departure);
      const arrivalDate = new Date(arrival);

      if(origin == "" || destination == "" || departure=="" || arrival==""){
        alert("Please fill up all the details.");
        return;
      }

      const today = new Date();
  
      if (departureDate < today) {
        alert("Departure date cannot be in the past.");
        return false;
      }

      if (departureDate > arrivalDate) {
        alert("Departure date cannot be after arrival date.");
        return false;
      }

      flightData.origin = origin;
      flightData.destination = destination;
      flightData.departure = departureDate.toDateString();
      flightData.arrival = arrivalDate.toDateString();

      if(isOneWay){
        flightData.type = 'One Way';
      } else {
        flightData.type = 'Round Trip';
        var departure2 = document.getElementById("departure2").value;
        var arrival2 = document.getElementById("arrival2").value;

        if(departure2==""|| arrival2==""){
          alert("Please fill up all the details.");
          return;
        }

        const departureDate2 = new Date(departure2);
        const arrivalDate2 = new Date(arrival2);
    
        if (departureDate2 < arrivalDate) {
          alert("Departure date for Trip 2 cannot be before the arrival of trip 1");
          return false;
        }

        if (departureDate2 > arrivalDate2) {
          alert("Departure date for Trip 2 cannot be after arrival date for Trip 2.");
          return false;
        }
        flightData.departure2 = departure2;
        flightData.arrival2 = arrival2;
      }

        var flightSearchInfo = document.getElementById("flightForm");
        flightSearchInfo.style.display = 'none';

        return true;
    }

    function showHotelData(){
      var bookingData = localStorage.getItem("hotelData");
      var table = document.getElementById("hotelTable");
      var parsedBookingData = JSON.parse(bookingData);

      if(parsedBookingData == null || parsedBookingData.length == 0){
        return;
      }

      for (var i = 0; i < parsedBookingData.length; i++) {

        var orderId = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;

        var row = document.createElement("tr");
        var col1 = document.createElement("td");
        col1.innerHTML = orderId;
        var col2 = document.createElement("td");
        col2.innerHTML = parsedBookingData[i].hotelName;
        var col3 = document.createElement("td");
        col3.innerHTML = parsedBookingData[i].city;
        var col4 = document.createElement("td");
        col4.innerHTML = parsedBookingData[i].checkinDate;
        var col5 = document.createElement("td");
        col5.innerHTML = parsedBookingData[i].checkoutDate;
        var col6 = document.createElement("td");
        col6.innerHTML = "Confirmed";
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        table.appendChild(row);
      }
    }

    function showCarData(){
      var bookingData = localStorage.getItem("carData");
      var table = document.getElementById("carTable");
      var parsedBookingData = JSON.parse(bookingData);

      if(parsedBookingData == null || parsedBookingData.length == 0){
        return;
      }

      for (var i = 0; i < parsedBookingData.length; i++) {

        var orderId = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;

        var row = document.createElement("tr");
        var col1 = document.createElement("td");
        col1.innerHTML =orderId;
        var col2 = document.createElement("td");
        col2.innerHTML = parsedBookingData[i].carName;
        var col3 = document.createElement("td");
        col3.innerHTML = parsedBookingData[i].city;
        var col4 = document.createElement("td");
        col4.innerHTML = parsedBookingData[i].checkinDate;
        var col5 = document.createElement("td");
        col5.innerHTML = parsedBookingData[i].checkoutDate;
        var col6 = document.createElement("td");
        col6.innerHTML = "Confirmed";
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        table.appendChild(row);

      }
    }

    function showFlightData(){
      var bookingData = localStorage.getItem("flightData");
      var table = document.getElementById("flightTable");
      var parsedBookingData = JSON.parse(bookingData);

      if(parsedBookingData == null || parsedBookingData.length == 0){
        return;
      }

      for (var i = 0; i < parsedBookingData.length; i++) {

        var orderId = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;

        var row = document.createElement("tr");
        var col1 = document.createElement("td");
        col1.innerHTML = orderId;
        var col2 = document.createElement("td");
        col2.innerHTML = parsedBookingData[i].type;
        var col3 = document.createElement("td");
        col3.innerHTML = parsedBookingData[i].flightName;
        var col4 = document.createElement("td");
        col4.innerHTML = parsedBookingData[i].origin;
        var col5 = document.createElement("td");
        col5.innerHTML = parsedBookingData[i].destination;
        var col6 = document.createElement("td");
        col6.innerHTML = parsedBookingData[i].departure;
        var col7 = document.createElement("td");
        col7.innerHTML = parsedBookingData[i].arrival;
        var col8 = document.createElement("td");
        col8.innerHTML = parsedBookingData[i].departure2 == undefined ? "NA" : parsedBookingData[i].departure2;
        var col9 = document.createElement("td");
        col9.innerHTML = parsedBookingData[i].arrival2 == undefined ? "NA" : parsedBookingData[i].arrival2;
        var col10 = document.createElement("td");
        col10.innerHTML = "Confirmed";
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);
        row.appendChild(col7);
        row.appendChild(col8);
        row.appendChild(col9);
        row.appendChild(col10);
        table.appendChild(row);
      }
    }

    function getColorValue() {
      var changedColor = document.getElementById("colorPicker").value;
      localStorage.setItem("bgcolor", changedColor);
      var article = document.getElementsByTagName('article');
      article[0].style.backgroundColor = changedColor;
      
    }

    function changeFontSize() {
      var page = document.getElementById("orderPage");
      var fontSize = document.getElementById("fontSize").value;
      page.style.fontSize = fontSize;
    }
    function savePassengerInfo(){
      const newPageUrl = "flights.html"; 
      window.location.href = newPageUrl;
    }

    function setNavHeight() {
      const nav = document.querySelector("nav");
      const article = document.querySelector("article");

      const articleHeight = article.offsetHeight;

      nav.style.height = articleHeight + "px";
  }

  function showPopup(message, duration) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");

    popupMessage.textContent = message;
    popup.style.display = "block";

    setTimeout(function() {
        popup.style.display = "none";
    }, duration);
}

function displayFlights(flights) {
  
  if (flights != null && flights.length > 0) {
    $.each(flights, function(index, flight) {
      var listItem = "<tr><td>";
      listItem += flight.origin + " to " + flight.destination;
      listItem += " (" + flight.departureDate + " - " + flight.departureTime + ") </td>";
      listItem += "<td>" + flight.price;
      listItem += "</td></tr>";
        
      $("#flightItems tbody").append(listItem);
    });

    $("#flightItems").show();
  } else {
    $("#flightItems").hide();
  }
}

function displayHotels(hotels) {
  
  if (hotels != null && hotels.length > 0) {
    $.each(hotels, function(index, hotel) {
      var listItem = "<tr><td>";
      listItem += hotel.name + " - " + hotel.city;
      listItem += " (" + hotel.checkindate + " - " + hotel.checkoutdate + ") </td>";
      listItem += "<td>" + hotel.price;
      listItem += "</td></tr>";
 
      $("#hotelItems tbody").append(listItem);
    });

    $("#hotelItems").show();
  } else {
    $("#hotelItems").hide();
  }
}

function displayCars(cars) {
  
  if (cars != null && cars.length > 0) {
    $.each(cars, function(index, car) {
      var listItem = "<tr><td>";
      listItem += car.city;
      listItem += " (" + car.checkindate + " - " + car.checkoutdate + ") </td>";
      listItem += "<td>" + car.price;
      listItem += "</td></tr>";
 
      $("#carItems tbody").append(listItem);
    });

    $("#carItems").show();
  } else {
    $("#carItems").hide();
  }
}

function calculateTotalCartValue(){
  var flightItems = JSON.parse(localStorage.getItem("flightItems"))
  var hotelItems = JSON.parse(localStorage.getItem("hotelItems"))
  var carItems = JSON.parse(localStorage.getItem("carItems"))
  var totalVal = 0;

  if (carItems != null && carItems.length > 0) {
    $.each(carItems, function(index, car) {
      totalVal += parseFloat(car.price.substring(1));
    });
  }
  if (hotelItems != null && hotelItems.length > 0) {
    $.each(hotelItems, function(index, hotel) {
      totalVal += parseFloat(hotel.price.substring(1));
    });
  }
  if (flightItems != null && flightItems.length > 0) {
    $.each(flightItems, function(index, flight) {
      totalVal += parseFloat(flight.price.substring(1));
    });
  }

  const totalValElement = document.getElementById("totalCartValue");

  totalValElement.textContent = "Total cart value is: $"+ totalVal;
  
}

function convertToJSON(){
  const json = document.getElementById("convertedJson");
  if(validateForm()){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phoneNum").value;
    var comment = document.getElementById("comment").value;

    var contactDetails = {}
    contactDetails.firstName = firstName;
    contactDetails.lastName = lastName;
    contactDetails.email = email;
    contactDetails.phone = phone;
    contactDetails.comment = comment;

    var convertedJson = JSON.stringify(contactDetails);
    console.log(convertedJson);

    json.textContent = "Contact Details have been converted to JSON";
  } else {
    json.textContent = "Please fill up the valid details";
  }
}