import { useEffect, useState } from "react";

const lessons = [
    {
      id: 1,
      name: 'Html,css'
    },
    {
      id: 2,
      name: 'Javascrip'
    },
    {
      id: 3,
      name: 'Reacjs'
    }
  ]
function Content(){
    const [lessonId, setLessonId] = useState(1)
    useEffect(()=>{
        const handleComment = ({detail}) =>{
         console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`,handleComment)
        return()=>{
            window.removeEventListener(`lesson-${lessonId}`,handleComment)
        }
    },[lessonId])
    return(
        <div>
            <ul>
                {lessons.map(lesson=>(
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId===lesson.id?
                            'red':
                            '#333'

                        }}
                        onClick={()=>setLessonId(lesson.id)}
                    >
                        {lesson.name}

                    </li>
                )
                )}
            </ul>
        </div>
    )
}
export default Content;