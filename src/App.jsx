import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  //courses_title state
  const [coursesTitle, setCoursesTitle] = useState([])
  //remaining credit hours state
  const [remainCredit, setRemainCredit] = useState(20)
  //course_credit state
  const [courseCredit, setCourseCredit] = useState(0)
  //course_price total state
  const [totalPrice, setTotalPrice] = useState(0)


  



  //event handler for course title
  const coursesTitleHandler = (course) => {
    if (!coursesTitle.includes(course.course_title)) {
      const newCourseCredit = (courseCredit + course.credit)
      //remaining credit conditional
      const newRemainCredit = (remainCredit - course.credit)

      //check course credit
      let newTotal = 0;
      if (newCourseCredit <= 20) {
        setRemainCredit(newRemainCredit);
        setCourseCredit(newCourseCredit)
        const newCoursesTitle = [...coursesTitle, course.course_title]
        setCoursesTitle(newCoursesTitle)
        newTotal = parseFloat(totalPrice) + parseFloat(course.price);
        const newTotalPrice = newTotal.toFixed(2)
        //const parseNewTotal = parseFloat(newTotalPrice)
        // const fix = (newTotalPrice).toFixed(2)
        setTotalPrice(newTotalPrice)
      }
      else {
        //toastify react
        toast("Credit Can't be more than 20 hrs")
        return
      }

    }

  }

  return (
    <section className='container mx-auto'>
      <Header></Header>
      <div className='flex flex-col-reverse px-2 gap-4 md:flex-row lg:flex-row'>
        <Courses  coursesTitleHandler={coursesTitleHandler} courseCredit={courseCredit}></Courses>
        <Cart remainCredit={remainCredit} coursesTitle={coursesTitle} courseCredit={courseCredit} totalPrice={totalPrice}></Cart>
      </div>
      <ToastContainer position="top-center"></ToastContainer>
    </section>
  )
}

export default App
