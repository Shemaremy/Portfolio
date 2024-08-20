import React, {useState} from "react";
import './CSS/Part7.css';
import "./CSS/Responsive.css";

function Part7() {

    const [loading, setLoading] = useState(false);

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');



    const handleEmailSend = (e) => {
        e.preventDefault();
        setLoading(true);
        async function loginUser() {
            try {
              const response = await fetch('https://portfolio-form-server.glitch.me/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Name, Email, Message}),
              });
          
              const data = await response.json();
              setLoading(false);
          
              if (response.ok) {
                alert('Email sent successfully');
                console.log('Success:', data);
                window.location.reload();
              } else {
                alert(`Error: ${data.message}`);
                console.error('Login failed:', data.message);
              }
            } catch (error) {
              console.error('Error:', error);
              alert('Error: Something went wrong. Please try again.');
            }
        }
        loginUser();
    };





    return(
        <div className="Part7">
            <div className="Two_Parts7">
                <div className="Upper_part_footer ">
                    <h3 className="Get_in_touch">Get in touch</h3>
                </div>

                <div className="Lower_part_footer ">
                    <div className="Everything">
                        <div className="Left_Section">
                            <div className="left_words">
                                <h1 className="Lets_talk_heading">Let's talk</h1>
                                <p className="Ask_me_anything">Ask me anything or just say hi ...</p>
                            </div>

                            <div className="Tel_container">
                                <p className="p2"><i className="icon2 fa fa-phone" aria-hidden="true"></i> &nbsp; +250 783 674 289</p>
                                <p className="p3"><i className="icon2 fas fa-envelope"></i> &nbsp; remyshema20@gmail.com</p>
                            </div>         
                        </div>
                        <div className="Right_section">                        
                            <form className="myForm" onSubmit={handleEmailSend}>
                                <div className="row">
                                    <div className="Name_Email">
                                        <div className="Name">
                                            <h2 className="form_headers">Name</h2>
                                            <input type="text" className="name" 
                                                name="Name" value={Name} 
                                                onChange={(e) => setName(e.target.value)}
                                                maxLength={20}
                                                placeholder="Your name" required 
                                            />
                                        </div>
                                        <div className="Email">
                                            <h2 className="form_headers">Email</h2>
                                            <input type="email" className="email" 
                                                name="Email" value={Email} 
                                                onChange={(e) => setEmail(e.target.value)}
                                                maxLength={80}
                                                placeholder="Email address" required 
                                            />
                                        </div>
                                    </div>
                                    <div className="Message">
                                        <h2 className="form_headers">Message</h2>
                                        <input className="text_area message" 
                                            type="text" name="Message" 
                                            value={Message} 
                                            onChange={(e) => setMessage(e.target.value)}
                                            maxLength={200}
                                            placeholder="Message" required 
                                        />
                                    </div>
                                    <div className="send_button_container">
                                        <button className="send_button" type='submit'>
                                            {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : <>Send <i className="icon2 fa fa-paper-plane fa-fade" style={{ marginLeft: 12, '--fa-animation-duration': '3s'}}></i></>}
                                        </button>
                                    </div>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part7;