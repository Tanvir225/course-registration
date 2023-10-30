import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  //all courses state 
  const [allCourse, setAllCourse] = useState([])
  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setAllCourse(data))
  }, [])
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

  //remove state
  let removeTotalPrice = 0
  const removeHandle = (selectTitle) => {
    //console.log(selectTitle);
    const find = allCourse.find(course => course.course_title === selectTitle)
    //console.log(find);
    const removeTitle = coursesTitle.filter(title => title !== find.course_title)
    setCoursesTitle(removeTitle)
    const removeRemainCredit = (remainCredit + find.credit)
    setRemainCredit(removeRemainCredit)
    const removeCourseCredit = (courseCredit - find.credit)
    setCourseCredit(removeCourseCredit)
    removeTotalPrice = (totalPrice - find.price).toFixed(2)
    setTotalPrice(removeTotalPrice)
  }


  return (
    <section className='container mx-auto'>
      <Header></Header>
      <div className='flex flex-col-reverse px-2 gap-4 md:flex-row lg:flex-row'>
        <Courses coursesTitleHandler={coursesTitleHandler} courseCredit={courseCredit}></Courses>
        <Cart remainCredit={remainCredit} removeHandle={removeHandle} coursesTitle={coursesTitle} courseCredit={courseCredit} totalPrice={totalPrice}></Cart>
      </div>
      <ToastContainer position="top-center"></ToastContainer>
    </section>
  )
}

export default App
