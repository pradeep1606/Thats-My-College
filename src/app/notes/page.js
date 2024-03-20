import React from 'react'
import Course_notes from '@/components/Course_notes'
import Subject_notes from '@/components/Subject_notes'
import Allsubject_notes from '@/app/notes/Allsubject_notes'
import Branch_notes from '@/app/notes/Branch_notes'
import Courses from './Courses'
export const metadata = { title: 'Notes' };

const page = () => {
  return (
    <>
      <Courses  />
    </>
  )
}

export default page
