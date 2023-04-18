import React from "react";
import { PageHeader } from "./PageHeader";
import { data } from "./mock-data";

export default function SessionsCalendarPage() {
 console.log(data)

  return (
    <>
      <PageHeader caption="Session calendar" description="Overview of sessions" />

      <div className={"px-8"}>
        <>
          <div className={"grid grid-cols-7"}>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
            <div>Sunday</div>
          </div>
          {data.weeks.map((week) => (
            <div className={"grid grid-cols-7"}>
              {week.days.map((day) =>
                day.enabled ? (
                  <div className={"m-1 p-2"}>
                    <div>
                      <div className={"text-right text-xs text-gray-300 pb-1"}>{day.day}</div>

                      {day.cols.map((col) => (
                        <div className={"flex flex-row"}>
                          {col.rows.map((row) => (
                            <div
                              style={{ backgroundColor: row.color }}
                              className={"border flex-grow"}
                              key={row.caption}
                            >
                              {row.caption}
                            </div>
                          ))}
                        </div>
                      ))}

                      <div className={"flex"}>
                        {day.cols.map((col) => (
                          <div className={"px-1 pb-1 flex-col"} key={col.caption}>
                            {col.rows.map((row) => (
                              <div
                                style={{ backgroundColor: row.color }}
                                className={"text-sm"}
                                key={row.caption}
                              >
                                {"time?"}
                              </div>
                            ))}
                          </div>
                        ))}
                        <div className={"px-1 pb-1 flex-col"}>
                          <div style={{ backgroundColor: "white" }} className={"text-sm"}>
                            Someone
                          </div>
                          <div style={{ backgroundColor: "white" }} className={"text-sm"}>
                            Someone
                          </div>
                          <div style={{ backgroundColor: "yellow" }} className={"text-sm"}>
                            Other
                          </div>
                          <div style={{ backgroundColor: "white" }} className={"text-sm"}>
                            Someone
                          </div>
                          <div style={{ backgroundColor: "yellow" }} className={"text-sm"}>
                            Other
                          </div>
                          <div style={{ backgroundColor: "yellow" }} className={"text-sm"}>
                            Other
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={"py-10"} key={day.day} />
                )
              )}
            </div>
          ))}
        </>
      </div>
    </>
  );
}