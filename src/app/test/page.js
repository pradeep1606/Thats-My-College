'use client'
import Link from "next/link";
import { useState } from "react";

const Test = () => {
  const coursesData = [
    {
      type: 'Engineering',
      course: ['Diploma', 'B.Tech'],
    },
    {
      type: 'Commerce',
      course: ['B.com', 'M.com'],
    },
    {
      type: 'Management',
      course: ['MBA', 'BBA'],
    },
  ];

  const [selectedType, setSelectedType] = useState("--Type--");

  return (
    <div>
      <p className="text-xl">Select College Type and Course</p>
      <ul>
        {coursesData.map((ctr, index) => (
          <button key={index} onClick={() => setSelectedType(ctr.type)}>
            {ctr.type}
          </button>
        ))}
      </ul>
      <ul>
        {coursesData
          .find((ctr) => ctr.type === selectedType)
          ?.course.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
      </ul>
    </div>
  );
};

export default Test;
