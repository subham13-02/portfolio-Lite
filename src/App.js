import React from "react"
import NavBar from "./Component/NavBar"
import AboutMe from "./Component/AboutMe"
import Section from "./Component/Section"

let sectionData = [
    {title:"Skills" , des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum laborum doloribus exercitationem pariatur quia laudantium illum ullam officiis sapiente, velit culpa earum cum nisi fugit eius autem facilis ratione delectus numquam deleniti! Aperiam ad reprehenderit rerum iure, tempora cumque officia illum temporibus illo molestias esse iusto sit"},
    {title:"Education" , des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum laborum doloribus exercitationem pariatur quia laudantium illum ullam officiis sapiente, velit culpa earum  iure, tempora cumque officia illum temporibus illo molestias esse iusto sit"},
    {title:"Experience" , des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum laborum doloribus exercitationem pariatur quia laudantium illum ullam officiis sapiente, velit culpa earum cum nisi fugit eius autem facilis ratione delectus numquam deleniti! Aperiam ad"}
]

const App=()=>{
    return(
        <div>
            <NavBar />
            <AboutMe />{
                sectionData.map((value) => (
                  <Section title={value.title} des={value.des}/>
                ))
            }
        </div>
    )
}
export default App;



//let a="World";
// let pStyle={
//     color:"green"
// }
// const App=()=>{

//     return (
//         <div>
//             <h1> Hello {a}!</h1>
//             <p style={pStyle}>See this my first React Page</p>
            
//         </div>
//         );
// }
