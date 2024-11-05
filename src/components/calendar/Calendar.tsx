"use client";
import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // interaction 플러그인 추가
import "./Calendar.css";
import Wrapper from "../shared/Wrapper";
import { koreanHolidays } from "@/utils/koreanHolidays";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TPost } from "@/type/post";
import formatDate from "@/utils/formatDate";

type Calendar = {
  id: string;
};
export default function Calendar({ id }: Calendar) {
  const calendarRef = useRef<any>(null);

  const { data: eventData } = useQuery<TPost>({
    queryKey: ["events", id],
    enabled: !!id,
  });
  const formattedDate = eventData?.date
    ? formatDate(eventData.date)
    : new Date().toISOString().split("T")[0];
  console.log("formattedDate", formattedDate);

  useEffect(() => {
    if (formattedDate && calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(formattedDate); // 특정 날짜의 월을 보여줌
    }
  }, [formattedDate]);

  const handleEventDrop = (info: any) => {
    alert(`Event moved to ${info.event.start}`);
  };

  const handleEventClick = (info: any) => {
    let newTitle = prompt("Edit Event Title:", info.event.title);
    if (newTitle) {
      info.event.setProp("title", newTitle);
    }
  };

  // const handleDateSelect = (selectInfo: any) => {
  //   let title = prompt("Enter Event Title");
  //   let calendarApi = selectInfo.view.calendar;
  //   calendarApi.unselect();

  //   if (title) {
  //     setEvents([
  //       ...events,
  //       { title, date: selectInfo.startStr, classNames: ["bright-event"] },
  //     ]);
  //   }
  // };

  // 이벤트 커스텀 렌더링
  function renderEventContent(eventInfo: any) {
    console;
    return (
      <div className="holiday-event">
        <span style={{ color: "#FF0000" }}>{eventInfo.event.title}</span>
      </div>
    );
  }

  const customEvent = eventData
    ? {
        title: eventData.title || "일정",
        start: formatDate(eventData.date),
        classNames: ["custom-event"], // 커스텀 이벤트용 클래스
        display: "block", // 'background' 대신 'block' 사용
      }
    : null;

  return (
    <Wrapper className="w-full max-w-[50%] max-h-[500px]">
      <FullCalendar
        ref={calendarRef}
        initialDate={formattedDate}
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
        events={[...koreanHolidays, ...(customEvent ? [customEvent] : [])]}
        eventContent={renderEventContent}
      />
    </Wrapper>
  );
}
