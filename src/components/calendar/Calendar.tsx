"use client";
import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
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

  // useEffect(() => {
  //   if (formattedDate && calendarRef.current) {
  //     const calendarApi = calendarRef.current.getApi();
  //     // 비동기적으로 처리
  //     Promise.resolve().then(() => {
  //       calendarApi.gotoDate(formattedDate);
  //     });
  //   }
  // }, [formattedDate]);
  // 이벤트 커스텀 렌더링
  function renderEventContent(eventInfo: any) {
    return (
      <div className="holiday-event">
        <span style={{ color: "#FF0000" }}>{eventInfo.event.title}</span>
      </div>
    );
  }
  // formattedDate를 위한 커스텀 이벤트 생성
  const customEvent = {
    id: "custom-event", // 고유한 ID 추가
    title: "선택된 날짜",
    start: formattedDate,
    className: "custom-event",
  };
  return (
    <Wrapper className="w-full max-w-[40%] max-h-[500px]">
      <FullCalendar
        ref={calendarRef}
        initialDate={formattedDate}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="ko" // 요일을 한글로 표시
        selectable={true} // 날짜 선택 가능
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
        dayCellContent={(info: any) => {
          // formattedDate를 한국 시간대로 설정
          const eventDate = new Date(`${formattedDate}T00:00:00`);
          const isEventDate =
            info.date.toLocaleDateString("ko-KR") ===
            eventDate.toLocaleDateString("ko-KR");

          if (isEventDate) {
            console.log(
              `Event Date: ${eventDate}, Info Date: ${
                info.date.toISOString().split("T")[0]
              }`
            );
          }
          return (
            <div
              className={`fc-daygrid-day-top ${
                isEventDate ? "event-date" : ""
              }`}
            >
              {info.dayNumberText.replace("일", "")}
            </div>
          );
        }}
        events={[customEvent]}
        eventContent={renderEventContent}
      />
    </Wrapper>
  );
}
