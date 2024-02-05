import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Education from "../../assets/icons/education.png";
import Work from "../../assets/icons/work.png";
import { educationTimelines, workTimelines } from "../../constants/timelines";

interface TimelineProps {}

const Timeline = (props: TimelineProps) => {
    return (
        <div className="pl-3 pr-6">
            <div className="flex h-[100px] items-center justify-center text-4xl text-white">
                Work Experience
            </div>

            <VerticalTimeline>
                {workTimelines.map((timeline) => {
                    return (
                        <VerticalTimelineElement
                            key={timeline.id}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background:
                                    "linear-gradient(to right, #141e30, #243b55)",
                                color: "white",
                                borderRadius: "15px",
                                borderColor: "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "15px solid #233953",
                            }}
                            date={`${timeline.from} - ${timeline.to}`}
                            iconStyle={{
                                background: "#F2EAE6",
                                color: "#000",
                            }}
                            icon={
                                <div className="flex h-full w-full items-center justify-center">
                                    <img
                                        src={Work}
                                        alt={timeline.company}
                                        className="h-[60%] w-[60%] object-contain"
                                    />
                                </div>
                            }
                        >
                            <h3 className="text-[24px] font-bold text-[#EAA79C]">
                                {timeline.position}
                            </h3>
                            <p
                                className="text-secondary text-[16px] font-semibold"
                                style={{ margin: 0 }}
                            >
                                {timeline.company}
                            </p>

                            <ul className="ml-5 mt-5 list-disc space-y-2">
                                {timeline.descriptions.map(
                                    (description, index) => (
                                        <li
                                            key={`timeline-${index}`}
                                            className="pl-1 text-[14px] tracking-wider text-white"
                                        >
                                            {description}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>

            <div className="justify-center items-center mt-[100px] flex h-[100px] text-4xl text-white">
                Education
            </div>
            <VerticalTimeline>
                {educationTimelines.map((timeline) => {
                    return (
                        <VerticalTimelineElement
                            key={timeline.id}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background:
                                    "linear-gradient(to right, #141e30, #243b55)",
                                color: "white",
                                borderRadius: "15px",
                                borderColor: "white",
                            }}
                            contentArrowStyle={{
                                borderRight: "15px solid #233953",
                            }}
                            date={`${timeline.from} - ${timeline.to}`}
                            iconStyle={{
                                background: "#F2EAE6",
                                color: "#fff",
                            }}
                            icon={
                                <div className="flex h-full w-full items-center justify-center">
                                    <img
                                        src={Education}
                                        alt={timeline.school}
                                        className="h-[60%] w-[60%] object-contain"
                                    />
                                </div>
                            }
                        >
                            <h3 className="text-[24px] font-bold text-[#EAA79C]">
                                {timeline.major}
                            </h3>
                            <p
                                className="text-secondary text-[16px] font-semibold"
                                style={{ margin: 0 }}
                            >
                                {timeline.school}
                            </p>

                            <ul className="ml-5 mt-5 list-disc space-y-2">
                                {timeline.descriptions.map(
                                    (description, index) => (
                                        <li
                                            key={`timeline-${index}`}
                                            className="pl-1 text-[14px] tracking-wider text-white"
                                        >
                                            {description}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
