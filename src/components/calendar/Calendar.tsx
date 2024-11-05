"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // interaction 플러그인 추가
import "./Calendar.css";
import Wrapper from "../shared/Wrapper";
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
    <Wrapper className="w-full max-w-[50%] max-h-[500px]">
      <FullCalendar
        //   editable={true} // 드래그 앤 드롭 기능 허용
        //   events={events}
        //   eventDrop={handleEventDrop} // 이벤트 드롭 시 동작
        //   eventClick={handleEventClick} // 이벤트 클릭 시 수정 기능 추가
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="ko" // 요일을 한글로 표시
        selectable={true} // 날짜 선택 가능
        //  select={handleDateSelect} // 날짜 선택 시 동작
        dayCellContent={(info) => {
          // 날짜 문자열에서 '일'을 제거
          return info.dayNumberText.replace("일", "");
        }}
        headerToolbar={{
          // 헤더 툴바 설정
          start: "prev",
          center: "title",
          end: "next",
        }}
        contentHeight="400px"
        titleFormat={{ year: "numeric", month: "2-digit" }} // '2024년 05월'에서 '년'과 '월' 제거
        dayHeaders={true} // 요일 헤더를 표시
        dayHeaderFormat={{ weekday: "short" }} // 요일을 "일", "월" 등으로 축약
        firstDay={0}
        aspectRatio={1.2} // 가로 세로 비율을 조정하여 높이 설정
      />
    </Wrapper>
  );
}
