"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // interaction 플러그인 추가
import "./Calendar.css";
export default function Calendar() {
  const [events, setEvents] = useState([
    { title: "Event 1", date: "2024-10-01", classNames: ["bright-event"] },
    { title: "Event 2", date: "2024-10-07", classNames: ["bright-event"] },
  ]);

  const handleEventDrop = (info: any) => {
    alert(`Event moved to ${info.event.start}`);
  };

  const handleEventClick = (info: any) => {
    let newTitle = prompt("Edit Event Title:", info.event.title);
    if (newTitle) {
      info.event.setProp("title", newTitle);
    }
  };

  const handleDateSelect = (selectInfo: any) => {
    let title = prompt("Enter Event Title");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      setEvents([
        ...events,
        { title, date: selectInfo.startStr, classNames: ["bright-event"] },
      ]);
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]} // interaction 플러그인 추가
      initialView="dayGridMonth"
      editable={true} // 드래그 앤 드롭 기능 허용
      selectable={true} // 날짜 선택 가능
      select={handleDateSelect} // 날짜 선택 시 동작
      events={events}
      eventDrop={handleEventDrop} // 이벤트 드롭 시 동작
      eventClick={handleEventClick} // 이벤트 클릭 시 수정 기능 추가
    />
  );
}
