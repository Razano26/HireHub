import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './../Styles/Calendar.css'
function Calendrier() {
  const highlightedDates = [
    new Date(2023, 7, 15), // Les mois commencent à partir de 0, donc 7 représente août    new Date(2023, 7, 25),
    new Date(2023, 7, 30),
    // ... Ajoutez d'autres dates ici  
  ];
  const depart = [
    new Date(2023, 7, 20), // Les mois commencent à partir de 0, donc 7 représente août    new Date(2023, 7, 25),
    new Date(2023, 7, 22),
    // ... Ajoutez d'autres dates ici  
  ];
  const tileClassName = ({ date }) => {
    if (highlightedDates.some(d => d.toDateString() === date.toDateString())) {
      return 'highlighted-date';
    } 
    if (depart.some(d => d.toDateString() === date.toDateString())) {
      return 'highlighted2';
    } };

  return (
    <div className="Calendrier">
      <Calendar
        tileClassName={tileClassName}
      />
    </div>
  );
}

export default Calendrier;