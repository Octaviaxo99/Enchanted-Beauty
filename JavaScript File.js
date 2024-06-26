function showConfirmation() {
   var confirmation = document.getElementById('confirmation');
   var selectedDate = document.getElementById('selectedDate');
   var selectedTime = document.getElementById('selectedTime');
   var selectedService = document.getElementById('selectedService');


   // Update selected date, time, and service
   selectedDate.textContent = "Selected date: " + document.getElementById('date').value;
   selectedTime.textContent = "Selected time: " + document.querySelector('.selectedTime').textContent;
   selectedService.textContent = "Selected service: " + document.getElementById('service').value;


   // Show confirmation box
   confirmation.style.display = 'block';
}


function selectDate(date) {
   // Update hidden input field with selected date
   document.getElementById('date').value = date;
}


function selectTime(time) {
   // Update selected time
   var timeSlots = document.querySelectorAll('.timeSlot');
   for (var i = 0; i < timeSlots.length; i++) {
       timeSlots[i].classList.remove('selectedTime');
   }
   var selectedTimeSlot = document.querySelector('.timeSlot[data-time="' + time + '"]');
   selectedTimeSlot.classList.add('selectedTime');
}


function selectService(service) {
   // Update hidden input field with selected service
   document.getElementById('service').value = service;
}


function toggleCalendar() {
   var calendar = document.getElementById('calendar');
   calendar.style.display = calendar.style.display === 'block' ? 'none' : 'block';
}


function toggleTimeSlots() {
   var timeSlots = document.getElementById('timeSlots');
   timeSlots.style.display = timeSlots.style.display === 'block' ? 'none' : 'block';
}