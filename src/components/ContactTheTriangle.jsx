const ContactTheTriangle = () => {
    return(
        <div>
            <h2>Contact The Triangle</h2>
            <hr/><br/><br/><br/>

            <form action="/submit" method="post">
                <label htmlFor="name">Full Name:</label><br />
                <input type="text" id="name" name="name" required /><br /><br />
                
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" required /><br /><br />

                <label htmlFor="why">Why are you contacting us?</label><br />
                <input type="why" id="why" name="why" required /><br /><br />
                
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />

                <input type="submit" value="Submit" />
            </form>
            
            <h2>Interested in advertising on <i>The Triangle?</i></h2><br/>
            Please refer to our <a href='https://drive.google.com/file/d/1LetgT7u2iWTw26XNW6Eq4xoYYg4oewhR/view?usp=share_link'>media kit</a>, and contact our business department (see description below) via the form to the left.<br/>
            <h2>Unsure what department to contact?</h2><br/>
            It’s OK! Use the guide below to help you contact the appropriate department.<br/><br/>
            <b>The Editor-in-Chief’s Office:</b> Submit any general questions or concerns if your inquiry cannot be answered by one of the following departments.<br/><br/>
            <b>Business Department:</b> Inquire about advertising possibilities in print or online at The Triangle. You can also view our ad rate cards here.<br/><br/>
            <b>News Department:</b> Submit any news tips, especially about any campus or Philadelphia happenings that may be of interest to Drexel students.<br/><br/>
            <b>Sports Department:</b> Submit any information regarding upcoming sporting events that may be of interest to Drexel students, including those of club and intramural teams.<br/><br/>
            <b>Arts and Entertainment Department:</b> Submit tips of any arts events or releases in the Philadelphia area that may be of interest to Drexel students, as well as any tips on bands, movies, concerts or other events you’d like to see covered in The Triangle.<br/><br/>
            <b>Op-Ed Department:</b> Submit a letter to the editor or a commentary.<br/><br/>
            <b>Photography Department:</b> Submit photographs for publication or to republish any photos featured in The Triangle.<br/><br/>
            <b>Web Production Department:</b> Submit any web or website-related inquiries, such as if the site or its contents contain errors or bugs, or to locate missing web content.<br/><br/>
            <b>Copy Editing Department:</b> Submit any content concerns or to request a correction for accuracy.<br/><br/>
            <b>Staff Manager:</b> Contact Staff Management if you are interested in joining any of these Departments at The Triangle or would like more information about additional Departments including IT, graphic design or production. We welcome interested students to our weekly staff meetings Wednesdays at 6:30 p.m. in Creese Student Center room 050.<br/><br/>
        </div>
    )
}
export default ContactTheTriangle