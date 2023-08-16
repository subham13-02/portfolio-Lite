import React from "react";

import pic1 from "../images/Galaxy_photo.JPG";

const AboutMe=()=>{
    return(
        <about>
            <h1>About Me</h1>
            <div class="about" id="about">
                <img src={pic1} alt="img"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum laborum doloribus exercitationem pariatur quia laudantium illum ullam officiis sapiente, velit culpa earum cum nisi fugit eius autem facilis ratione delectus numquam deleniti! Aperiam ad reprehenderit rerum iure, tempora cumque officia illum temporibus illo molestias esse iusto sit, pariatur libero.
                </p>
            </div>
                
        </about>
    )
}

export default AboutMe;